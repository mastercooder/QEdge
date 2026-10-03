from django.shortcuts import render

def index(request):
    context = {
        'title': 'index',
        'heading': 'Index Page',
        'msg': 'This is a Index Page'
    }
    return render(request, 'index.html', context)
