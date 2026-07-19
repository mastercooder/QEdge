from django.urls import path
from app1 import views

# Create requrest here for App2 Application

app_name = 'app2'

urlpatterns = [
    path('', views.appPage, name='app2')
]
