from django.urls import path,include
from admin_portal import views


urlpatterns = [
    path('admin_signup/',views.signup,name="signup"),
    path('login/',views.login,name="login")
]