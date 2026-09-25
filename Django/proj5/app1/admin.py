from django.contrib import admin
from app1.models import Student 
from app1.models import student2
from app1.models import student3
from app1.models import Course
from app1.models import IDCard
from app1.models import Course1, Student1
from app1.models import AllStudent
 
# Register your models here.

# admin.site.register(student)

# @admin.register(student)
# class StudentAdmin(admin.ModelAdmin):
#     list_display = ['id', 'sid', 'sname', 'email', 'course']
    
@admin.register(student2)
class Student2Admin(admin.ModelAdmin):
    list_display = [
        'id',
        'sid',
        'sname',
        'email',
        'contact',
        'create_at',
        'joined_at',
        'course'
    ]


@admin.register(student3)
class Student3Admin(admin.ModelAdmin):
    list_display = [
        'sid',
        'firstName',
        'lastName',
        'email',
        'phoneNumber',
        'dob',
        'loginTime',
        'signUpAt',
        'modifiedAt',
        'studentStatus',
        'projectURL',
        'aboutMe'
    ]


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'cname',
        'crCat',
        'dur',
        'fee'
    ]


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'sid',
        'sname',
        'contact',
        'DOJ',
        'email',
        'aboutMe',
        'fee' 
    ]
    
@admin.register(IDCard)
class IDCardAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'student',
        'cardNum',
        'issue_Date',
    ]
    
    

# Many to Many Relationship
# ========================================
@admin.register(Course1)
class Course1Admin(admin.ModelAdmin):
    list_display = [
        'id',
        'crName'
    ]
    
@admin.register(Student1)
class Student1Admin(admin.ModelAdmin):
    list_display = [
        'id',
        'sname', 
    ]
    
# Composite Primary Key
# ========================================
@admin.register(AllStudent)
class AllStudentAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'branch_id',
        'student_id',
        'sname',
    ]