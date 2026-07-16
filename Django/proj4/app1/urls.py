from django.urls import path
from app1 import views

# Create App1 requrest here

app_name = 'app1'

urlpatterns = [
    path('', views.app1Page, name='app1')
]
