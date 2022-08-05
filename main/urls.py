from django.urls import path
from . import views
from main.views import *


urlpatterns = [
    path('', index, name='main'),
    path('osob_navch_proc/', osob_navch_proc, name='osob_navch_proc'),
    path('osnas/', osnas, name='osnas'),
    path('osnas/<str:color>/', osnas2, name='osnas2'),
    path('vipuskniki/', vipuskniki, name='vipuskniki'),
    path('traditions/', traditions, name='traditions'),
    path('organization/', organization, name='organization'),
    path('osob_priyomu/', osob_priyomu, name='osob_priyomu'),
    path('test/', test, name='test'),
    path('user/', user, name='user'),
    path('user/<int:user_id>', user_childs, name='user_childs'),
    path('user/<int:user_id>/<int:child_id>', user_child_results, name='user_child_results'),
]


