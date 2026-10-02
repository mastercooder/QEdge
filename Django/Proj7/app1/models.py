from django.db import models

# Create your models here.

class Course(models.Model):
    course_name = models.CharField(max_length=20)
    dur = models.IntegerField()
    fee = models.IntegerField()
    
    def __str__(self):
        return self.course_name

class Student(models.Model):
    sname = models.CharField(max_length=20)
    email = models.EmailField(max_length=30)
    contact = models.CharField(max_length=10)
    age = models.IntegerField()
    join_date = models.DateField()
    gender = models.CharField(max_length=1)
    
    def __str__(self):
        return self.email