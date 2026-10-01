from django.shortcuts import render
from app1.forms import StudentForms

# Create your views here.

def app(request):
    context = {
        'title': 'app',
        'heading': 'App',
        'msg': 'App Page'
    }
    return render(request, 'app1/app.html', context)


def newStudent(request):
    form = StudentForms()
    context = {
        'title': 'student',
        'heading': 'Create Student Here',
        'form': form,
    }
    return render(request, 'app1/student.html', context)