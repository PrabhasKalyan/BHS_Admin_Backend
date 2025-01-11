from datetime import date, timedelta
from django.db import models
from django.contrib.auth.models import AbstractUser,User
from phonenumber_field.modelfields import PhoneNumberField
import uuid

class Admin(User):#change to abstract user
    phonenumber = models.CharField(max_length=20,default="")
    address = models.CharField(max_length=1024,blank=True)
    dob = models.DateField(null=True, blank=True)
    approved  = models.BooleanField(default=False)    
    def __str__(self):
        return self.username

