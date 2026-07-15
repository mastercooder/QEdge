from django.shortcuts import render

# Create your views here.

def learner(request):
    context = {'msg': 'This is learner Main Page'}
    return render(request, 'learner/learner.html', context)

def learnerIdPage(request):
    context = {'msg': 'This is learner Information Page'}
    return render(request, 'learner/learnerPage.html', context)