from django import forms
from app1.models import Course
# Create your forms here

class CourseForms(forms.ModelForm):
    class Meta:
        model = Course
        fields = '__all__'         # To display all the fields
       # Display selected Fields   # fields = ['course_name', 'dur']
        labels = {
            'course_name': "Course",
            'dur': 'Duration',
            'fee': 'Fees '
        }
        

class StudentForms(forms.Form):
    sname = forms.CharField(max_length=20, label="Student Name")
    email = forms.EmailField(max_length=30, label="Student Email")
    contact = forms.CharField(max_length=10, label="Personal Email")
    age = forms.IntegerField(label="Age")
    
    join_date = forms.DateField(
        widget=forms.DateInput(attrs={'type': 'date'}),
        label="Join Date"
    )
    
    gender = forms.ChoiceField(
        choices=[
            ('M', 'Male'),
            ('F', 'Female'),
        ]
    )
    