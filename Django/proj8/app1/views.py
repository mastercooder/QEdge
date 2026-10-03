from django.shortcuts import render
from app1.models import Course
from app1.forms import CourseForm

# Create your views here.

def app1Page(request):
    context = {
        'title': 'app1',
        'heading': 'App 1',
        'msg': 'This is app1 Page',
    }
    return render(request, 'app1/app1.html', context)

def newCourse(request):
    if request.method == 'POST':
        form = CourseForm(request.POST)
        if form.is_valid():
            cr = form.save(commit=False)
            cr.cname = cr.cname.upper()
            cr.save()
            form = CourseForm()
        else:
            print("Data Error")
    else:
        form = CourseForm()
    context = {
        'title': 'newCourse',
        'heading': 'Add New Course',
        'msg': 'Form',
        'form': form
    }
    return render(request, 'app1/course.html', context)

def allCourse(request):
    form = CourseForm()
    context = {
        'title': 'allcourse',
        'heading': 'Avalable Courses',
        'msg': 'Form',
        'form': form     
        
    }
    return render(request, 'app1/allCourse.html', context)
