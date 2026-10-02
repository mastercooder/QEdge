from django.shortcuts import render
from app1.forms import StudentForms, CourseForms

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
            print(form.cleaned_data)
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
            print(form.cleaned_data)
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