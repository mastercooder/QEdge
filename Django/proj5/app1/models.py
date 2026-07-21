from django.db import models

# Create your models here.

class student(models.Model):
    def __init__(self):
        sid = models.IntegerField()
        sname = models.CharField(max_length=20)
        email = models.EmailField(max_length=35)
        course = models.CharField(max_length=20)