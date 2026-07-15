from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    context = {'msg': 'Index Page'}
    return render(request, "index.html",context)

def course(request):
    return render(request, "index.html", {'msg': 'Course Page'})

def student(request):
    return render(request, "index.html", {'msg': 'Student Page'})

def trainer(request):
    return render(request, "index.html", {'msg': 'Trainer Page'})

def courseAdmin(request):
    context = {'msg': "Admin Control Center", 'name': 'Tejesh Patel'}
    return render(request, 'courseAdmin.html', context)

def courseCategory(request):
    context = {'msg': "List of Courses", 'courses': ['python', 'java', 'react', 'django']}
    return render(request, 'courseCategory.html', context)