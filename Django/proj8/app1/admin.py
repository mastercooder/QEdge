from django.contrib import admin
from app1.models import Course

# Register your models here.

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'cname',
        'dur',
        'fee'
    ]
    labels = {
        'id': 'Course ID',
        'cname': 'Course Name',
        'dur': 'Course Duration',
        'fee': 'Course Fees',
    }