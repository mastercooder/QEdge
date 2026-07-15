from django.contrib import admin
from django.urls import path
from django.shortcuts import render
from learner.views import learner
from learner.views import learnerIdPage
from trainer.views import trainer


def index(request):
    context = {'msg': 'Home Page...'}
    return render(request, 'index.html', context)

urlpatterns = [
    path('admin/', admin.site.urls),    #https://127.0.0.1:8000/admin/
    path("", index),                    #https://127.0.0.1:8000/
    path('learner', learner),           #https://127.0.0.1:8000/learner
    path('learner/1', learnerIdPage),   #https://127.0.0.1:8000/learnerPage
    path('trainer', trainer)            #https://127.0.0.1:8000/trainer
]
