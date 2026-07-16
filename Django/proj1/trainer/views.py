from django.shortcuts import render

# Create your views here.

def trainer(request):
    context = {'msg': 'This is the Trainer Main Page'}
    return render(request, 'trainer/trainer.html', context)

def trainerIdPage(request,lid):
    trainerData = {101: 'Vankat', 102: 'Kiran', 103: 'Tejesh'}
    context = {'msg': 'This it Trainer Information Page', 'trainerName': trainerData[lid]}
    return render(request, 'trainer/trainerPage.html', context)