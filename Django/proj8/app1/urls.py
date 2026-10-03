from django.urls import path
from app1 import views

app_name = 'app1'

urlpatterns = [
    path('', views.app1Page, name='app1page'),
    path('newcourse', views.newCourse, name='newcourse'),
    path('allcourse', views.allCourse, name='allcourse')
]
