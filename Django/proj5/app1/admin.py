from django.contrib import admin
from app1.models import student 
from app1.models import student2

# Register your models here.

# admin.site.register(student)

@admin.register(student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ['id', 'sid', 'sname', 'email', 'course']
    
@admin.register(student2)
class StudentAdmin(admin.ModelAdmin):
    list_display = ['id', 'sid', 'sname', 'email', 'contact', 'create_at', 'joined_at', 'course']