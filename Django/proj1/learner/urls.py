from django.urls import path
from learner.views import learner, learnerIdPage


urlpatterns = [
    path('', learner),           #https://127.0.0.1:8000/learner/
    path('<int:lid>', learnerIdPage),    #https://127.0.0.1:8000/learner/1
]
