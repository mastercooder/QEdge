from django import forms
from app1.models import Course

# Create your forms here

class CourseForm(forms.ModelForm):
    class Meta:
        model = Course
        fields = '__all__'
    