from django.urls import path
from app1 import views

# Create requrest here for App1 Application

app_name = 'app1'

urlpatterns = [
    path('', views.appPage, name='apppage')
]
