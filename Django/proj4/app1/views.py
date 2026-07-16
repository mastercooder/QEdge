from django.shortcuts import render

# Create your views here.

def app1Page(requrest):
    context = {'msg': 'This is App1 Main Page', 'title': 'App1 Page'}
    return render(requrest, 'appPage.html', context)
