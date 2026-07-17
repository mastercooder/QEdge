from django.shortcuts import render

# Create your views here.

def app1Page(request):
    context = {'msg': 'This is App1 Main Page', 'title': 'App1 Page', 'appname': 'app1'}
    return render(request, 'appPage.html', context)

def student(request):
    students = ['ravi', 'ramu', 'hari', 'giri', 'gopi', 'koti']
    # studentsid =  
    context = {'students': enumerate(students, 1001)}
    return render(request, 'app1/students.html',context)