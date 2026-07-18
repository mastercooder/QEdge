from django.shortcuts import render

# Create your views here.

def appPage(request):
    return render(request, 'app1/appPage.html')