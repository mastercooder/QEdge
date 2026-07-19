from django.shortcuts import render

# Create your views here.

def appPage(request):
    context = {'msg': 'This is App1 Page', 'title': 'App1:Django'}
    return render(request, 'app1/appPage.html', context)