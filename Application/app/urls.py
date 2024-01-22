from django.urls import path,include
from app import views
urlpatterns = [
    path('',views.home,name='home'),
    path('employees',views.empDetails,name='EmployeesDetails'),
    path('employeesform',views.empDetailsForms,name='EmployeesDetails'),
]
