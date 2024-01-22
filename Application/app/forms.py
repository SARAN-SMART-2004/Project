from django import forms
class EmployeeForms(forms.Form):
    empName=forms.CharField(max_length=10)
    empNo=forms.IntegerField()
    empSalary=forms.IntegerField()
    empAddress=forms.CharField(max_length=15)