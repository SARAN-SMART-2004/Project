from django.shortcuts import render
from app.models import Employee
from . import forms

# Create your views here.
def home(request):
    return render(request,'index.html')
def empDetails(request):
    emp_data=Employee.objects.all()
    emp_dict={'emp_list':emp_data}
    return render(request,'emp.html',context=emp_dict)
def empDetailsForms(request):
    form=forms.EmployeeForms()
    empInfo={'form':form}
    #cookies code start
    return render(request,'forms.html',context=empInfo)
def cookiesCount(request):
    count=request.session.get('count',0)
    totalcount=int(count)+1
    request.session['count']=totalcount
    return render(request,'cookies.html',{'count':totalcount})
    
