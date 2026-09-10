from django.contrib import admin
from app1.models import Course, Student
from app1.models import IDCard

# Register your models here.

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
    
@admin.register(IDCard)
class IDCardAdmin(admin.ModelAdmin):
    list_display = [
        'student',
        'cardNum',
        'issue_date'
    ]