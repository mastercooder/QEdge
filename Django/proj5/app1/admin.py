from django.contrib import admin
from app1.models import Student 
from app1.models import student2
from app1.models import student3
from app1.models import Course
 
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
        'sid',
        'sname',
        'contact',
        'DOJ',
        'email',
        'aboutMe',
        'fee'
    ]