from django.shortcuts import render

def index(request):
    context = {'title': 'index', 'heading': 'Index', 'msg': 'Index Page'}
    return render(request, 'index.html', context)