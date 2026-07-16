from django.shortcuts import render

# Create your views here.

def app2Page(requrest):
    context = {'msg': 'This is App2 Main Page', 'title': 'App2 Page'}
    return render(requrest, 'appPage.html', context)
