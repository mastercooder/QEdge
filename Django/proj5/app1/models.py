from django.db import models

# Create your models here.

class student(models.Model):
    sid = models.IntegerField()
    sname = models.CharField(max_length=20)
    email = models.EmailField(max_length=35)
    course = models.CharField(max_length=20)
    
    def __str__(self):
        return self.sname
    

class student2(models.Model):
    sid = models.IntegerField()
    sname = models.CharField(max_length=20)
    email = models.EmailField(max_length=35)
    contact = models.IntegerField(max_length=10)
    create_at = models.DateTimeField()
    joined_at = models.DateField()
    course = models.CharField(max_length=20)
    
    def __str__(self):
        return self.sname