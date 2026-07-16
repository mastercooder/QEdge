from django.urls import path
from app2 import views

# Create App2 requrest here

app_name = 'app2'

urlpatterns = [
    path('', views.app2Page, name='app2')
]
