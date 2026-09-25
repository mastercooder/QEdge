from django.db import models

# Create your models here.

# IntegerField, CharField, EmailField, DateField, DateTimeField, AutoField
# Foreignkey, OneToOneField, ManyToManyField


# Many to Many Relationship
# ========================================
class Course1(models.Model):
    crName = models.CharField(max_length=20)
    
    def __str__(self):
        return self.crName
    
class Student1(models.Model):
    sname = models.CharField(max_length=25)
    courses = models.ManyToManyField(Course1)
    
    def __str__(self):
        return self.sname
    
    
# Composite Primary Key |------| this is avalable in 5.2 version only not in 5.0 and 5.1
# ========================================

class AllStudent(models.Model):
    branch_id = models.CharField(max_length=3)
    student_id = models.CharField(max_length=4)
    sname = models.CharField(max_length=10)
    
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                field = ['branch_id', 'student_id'],
                name = "branch_student_cpk"
            )
        ]
    
    def __str__(self):
        return self.sname
    
    

# --------------------------- Student2 ----------------------------------

class student2(models.Model):
    sid = models.IntegerField()
    sname = models.CharField(max_length=20)
    email = models.EmailField(max_length=35)
    contact = models.CharField(max_length=10)
    create_at = models.DateTimeField()
    joined_at = models.DateField()
    course = models.CharField(max_length=20)

    def __str__(self):
        return self.sname


# --------------------------- Student3 ----------------------------------

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


# --------------------------- Course ----------------------------------

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
    cardNum = models.CharField(max_length=10, unique=True)
    issue_Date = models.DateField()
    
    def __str__(self):
        return self.cardNum