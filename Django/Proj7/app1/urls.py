from django.urls import path
from app1 import views

# Create you app1 requrest here

app_name = 'app1'

urlpatterns = [
    path('', views.app, name='app1page'),
    path('newStudent', views.newStudent, name='newstudent')
]
