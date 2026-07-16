from django.urls import path
from trainer.views import trainer, trainerIdPage


urlpatterns = [
    path('', trainer),                     #https://127.0.0.1:8000/trainer/
    path('tid/<int:lid>', trainerIdPage)   #https://127.0.0.1:8000/trainer/tid/101
]
