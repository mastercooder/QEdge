from django.shortcuts import render

# Create your views here.

def app2Page(request):
    context = {'msg': 'This is App2 Main Page', 'title': 'App2 Page', 'appname': 'app2'}
    return render(request, 'appPage.html', context)

def trainer(request):
    trainers = ['Satya', 'Teja', 'Kalyan', 'Raju', 'Laxmi', 'Victor']
    context = {'trainers': trainers}
    return render(request, 'app2/trainers.html', context)
