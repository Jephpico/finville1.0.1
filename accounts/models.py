""" from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.forms import BooleanField
# Create your models here.


class Publisher(AbstractBaseUser):
    email = models.EmailField(_('email address'), unique=True)
    username = models.CharField(max_length=15, unique=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    account_creation_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.username



class ProductUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    user_name = models.CharField(max_length=15, unique=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    is_staff = models>BooleanField(default=False)
    is_active = models>BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS: 
    
    def __str__(self):
        return self.username


 """