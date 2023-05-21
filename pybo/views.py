from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
#from main.forms import UserForm
import calendar
import json
from .models import Month, Day, Question
from datetime import date,timedelta

from django.http import JsonResponse




def main(request):
    year = request.GET.get('year',2023) # 해당 년 정보
    month = request.GET.get('month',5) # 해당 월 정보
    diary_list = Question.objects.order_by('-write_date')
    
    datasets = Question.objects.order_by('-write_date')
    row_data = {}

    start_date = date(year, month, 1)  # 2022년 5월 1일
    if(month != 12):
        end_date = date(year, month+1, 1) - timedelta(days=1)
    else:
        end_date = date(year+1, 1, 1) - timedelta(days=1)
        
    diary_list = Question.objects.filter(write_date__range=(start_date, end_date)).values()
    datasets = Question.objects.values()

    addcontext = {}
    if diary_list:
        for diary in diary_list:
            day = diary['write_date'].day
            addcontext[day] = diary
            addcontext[day]['write_date'] = addcontext[day]['write_date'].isoformat()
            
    if datasets:
        for diary in datasets:
            newday = str(diary['write_date'].year) + str(diary['write_date'].month) + str(diary['write_date'].day)
            row_data[newday] = diary
            row_data[newday]['write_date'] = row_data[newday]['write_date'].isoformat()
            
    numbers = list(i for i in range(1,32))
            
    context = {'diary_list': diary_list, 'daily_write': addcontext, 'row_data': row_data}
    
    return render(request, 'pybo/diary_main.html', context)

