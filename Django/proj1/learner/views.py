from django.shortcuts import render

# Create your views here.

def learner(request):
    context = {'msg': 'This is learner Main Page'}
    return render(request, 'learner/learner.html', context)

def learnerIdPage(request, lid):
    learnerData = {1: 'Ravi', 2:'Hari', 3:'Giri'}
    context = {'msg': 'This is learner Information Page', 'learnerName': learnerData[lid]}
    return render(request, 'learner/learnerPage.html', context)