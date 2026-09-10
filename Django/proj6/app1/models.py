from django.db import models

# Create your models here.

class Course(models.Model):

    coursesList = [
        ("python", "Python"),
        ("java", "Java"),
        ("react", "React"),
        ("js", "JavaScripts"),
        ("aws", "AWS"),
        ("gcp", "GCP"),
    ]

    categoryList = [
        ("coding", "Coding"),
        ("cloud", "Cloud"),
    ]

    cname = models.CharField(max_length=50,choices=coursesList,verbose_name='Course', unique=True)
    crCat = models.CharField(max_length=15,choices=categoryList, verbose_name="Category")
    dur = models.IntegerField(help_text="Duration Should be in Months", verbose_name='Duration')
    fee = models.IntegerField()

    def __str__(self):
        return self.cname


# --------------------------- Student ----------------------------------

class Student(models.Model):
    sid = models.IntegerField()
    sname = models.CharField(max_length=30)
    email = models.EmailField(max_length=40)
    contact = models.CharField(max_length=10)
    DOJ = models.DateField()
    aboutMe = models.TextField(max_length=500)
    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE # one-many relationship
    )
    fee = models.DecimalField(max_digits=7, decimal_places=2)

    def __str__(self):
        return self.sname
    
    

class IDCard(models.Model):
    student = models.OneToOneField(Student, on_delete=models.CASCADE)
    cardNum = models.CharField(max_length=5, unique=True)
    issue_date = models.DateField()
    
    def __str__(self):
        return self.cardNum