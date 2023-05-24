from django.urls import path

from . import views

app_name ='pybo'

urlpatterns = [
    path('', views.main),
    path('', views.main, name='main'),
    path('diary/', views.main),
    
    path('diary/create/',
         views.diary_create, name='diary_create'),
    path('diary/detail/<str:dates>/',
         views.diary_detail, name='diary_detail'),

]
