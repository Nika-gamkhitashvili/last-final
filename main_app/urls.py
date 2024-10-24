from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('register/', views.register, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('categories/', views.categories, name='categories'),
    path('bag/', views.bag, name='bag'),
    path('history/', views.history, name='history'),
]
