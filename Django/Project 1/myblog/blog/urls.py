from django.urls import path
from . import views

# Create requrest here from blog application

app_name = 'blog'

urlpatterns = [
    path("", views.blogpage, name='blogpage')
]
