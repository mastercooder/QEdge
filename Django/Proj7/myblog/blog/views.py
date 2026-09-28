from django.shortcuts import render
from pathlib import Path

# Create your views here.

def blogpage(request):
    
    file_path = Path("static/txt/test.txt")
    
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    return render(request, "blog/blog.html", {
        'title': 'Blog',
        'heading': 'My Blog',
        'msg': content
    })