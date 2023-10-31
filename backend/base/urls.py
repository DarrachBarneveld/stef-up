"Urls"

from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView
from . import views


urlpatterns = [
    path('login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register', views.RegisterUser.as_view(), name='register'),
    path('user', views.FetchUser.as_view(), name='user'),
    path('', views.HomeView.as_view(), name='home')
]
