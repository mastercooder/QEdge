from django import forms

# Create your application form here

class StudentFrom(forms.Form):
    name = forms.CharField(max_length=25)