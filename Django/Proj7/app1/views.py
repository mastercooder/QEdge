from django.shortcuts import render, redirect, get_object_or_404
from app1.forms import StudentForms, CourseForms
from app1.models import Student, Course as AllCourses

# Create your views here.

def app(request):
    context = {
        'title': 'app',
        'heading': 'App',
        'msg': 'App Page'
    }
    return render(request, 'app1/app.html', context)

# -------------------Main Data Logic-------------------
def newStudent(request):
    if request.method == 'POST':
        form = StudentForms(request.POST)
        if form.is_valid():
            sname = form.cleaned_data['sname']              # 1st Way (can give error)     
            email = form.cleaned_data.get('email')          # 2nd Way (generally don't give error)
            contact = form.cleaned_data.get('contact')
            age = form.cleaned_data.get('age')
            jdate = form.cleaned_data.get('join_date')
            gender = form.cleaned_data.get('gender')
            Student.objects.create(
                sname = sname,
                email = email,
                contact = contact,
                age = age,
                join_date = jdate,
                gender = gender
            )
            
            form = StudentForms()
        else:
            print("DATA IS INVALID!")
    else:
        form = StudentForms()
        
    context = {
        'title': 'student',
        'heading': 'Create Student Here',
        'form': form,
    }
    return render(request, 'app1/student.html', context)



def newCourse(request):
    if request.method == 'POST':
        form = CourseForms(request.POST)
        if form.is_valid():
            cr = form.save(commit=False)                    # Storing Form data into database
            cr.course_name = cr.course_name.upper()
            cr.save()
            form = CourseForms()
        else:
            print("Data Error")
    else:
        form = CourseForms()
    
    context = {
        'title': 'course',
        'heading': 'Create New Course',
        'form': form
    }
    return render(request, 'app1/course.html', context)



def allCourses(request):
    courses = AllCourses.objects.all()

    context = {
        'title': 'allcourses',
        'heading': 'All Courses',
        'courses': courses
    }

    return render(request, 'app1/allCourse.html', context)



def update_course(request, id):
    cr = get_object_or_404(AllCourses, id=id)             # new style
    # cr = AllCourses.objects.get(id=id)                  # old style
    if request.method == 'POST':
        form = CourseForms(request.POST, instance=cr)
        if form.is_valid():
            form.save()
            return redirect('app1:allcourses')
    else:
        form = CourseForms(instance=cr)
    context = {
        'title': 'updating...',
        'heading': 'Updating Course Data',
        'form': form
    }
    return render(request, 'app1/course.html', context)



def delete_course(request, id):
    cr = get_object_or_404(AllCourses, id=id)
    if request.method == 'POST':
        cr.delete()
        return redirect('app1:allcourses')