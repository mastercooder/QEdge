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
    
    
class student3(models.Model):
    sid = models.BigAutoField(primary_key=True)
    firstName = models.CharField(max_length=15)
    lastName = models.CharField(max_length=15)
    email = models.EmailField(max_length=35)
    phoneNumber = models.CharField(max_length=10)
    dob = models.DateField()
    loginTime = models.TimeField()
    signUpAt = models.DateTimeField(auto_now_add=True)
    modifiedAt = models.DateTimeField(auto_now=True)
    studentStatus = models.BooleanField(default=True)
    projectURL = models.URLField(max_length=200)
    aboutMe = models.TextField(max_length=500)
    
    def __str__(self):
        return self.firstName + " " + self.lastName 