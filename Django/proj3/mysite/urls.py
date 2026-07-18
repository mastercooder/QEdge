from django.contrib import admin
from django.urls import path, include
from django.shortcuts import render

def index(request):
    context = {'msg': 'Main Page', 'title': 'Index:Django'}
    return render(request, 'index.html', context)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('app1/', include('app1.urls', namespace='app1')),
    path('app2/', include('app2.urls', namespace='app2'))
]
