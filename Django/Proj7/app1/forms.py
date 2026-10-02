from django import forms
from app1.models import Course
# Create your forms here

class CourseForms(forms.ModelForm):
    class Meta:
        model = Course
        fields = ['course_name', 'dur']

        # To display all the fields
        # fields = '__all__'
        

class StudentForms(forms.Form):
    sname = forms.CharField(max_length=20)
    email = forms.EmailField(max_length=30)
    contact = forms.CharField(max_length=10)
    age = forms.IntegerField()
    join_date = forms.DateField()
    create_at = forms.DateTimeField()
    gender = forms.ChoiceField(
        choices=[
            ('M', 'Male'),
            ('F', 'Female'),
        ]
    )
    