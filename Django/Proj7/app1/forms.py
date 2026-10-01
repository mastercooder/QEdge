from django import forms

# Create your forms here

class StudentForms(forms.Form):
    sname = forms.CharField(max_length=20)
    email = forms.EmailField(max_length=30)
    contact = forms.CharField(max_length=10)
    age = forms.IntegerField()
    gender = forms.ChoiceField(
        choices=[
            ('M', 'Male'),
            ('F', 'Female'),
        ]
    )
    