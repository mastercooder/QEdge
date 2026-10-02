from django.contrib import admin
from app1.models import Course, Student

# Register your models here.

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'course_name',
        'dur',
        'fee'
    ]
    
@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'sname',
        'email',
        'contact',
        'age',
        'join_date',
        'gender'
    ]