
'''from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models
from django.utils.translation import gettext_lazy as _




class ProductUserManager(BaseUserManager):
    def create_user(self, email, user_name, password, **otherfields):
        if not email:
            raise ValueError(_('kindly enter a valid email address'))
        email = self.normalize_email(email)
        email = email.lower()
        user = self.model(
            email=email,
            user_name=user_name,
            **otherfields,
        )
        user.set_password(password)
        user.save()
        return  user

    def create_superuser(self, email, user_name, password, **otherfields):
        otherfields.setdefault('is_staff', True)
        otherfields.setdefault('is_superuser', True)
        otherfields.setdefault('is_active', True)

        if otherfields.get('is_staff') is not True:
            raise ValueError('user must be assigned staff tag')
        if otherfields.get('is_superuser') is not True:
            raise ValueError('user must be assigned superuser tag')
        return self.create_user(email, user_name, password, **otherfields)


    def create_publisher(self, email, user_name,first_name, last_name, password=None, **otherfields):
        otherfields.setdefault('is_publisher', True)

        
        if otherfields.get('is_staff') is not True:
            raise ValueError('user must be assigned staff tag')
        if otherfields.get('is_publisher') is not True:
            raise ValueError('user must be assigned publisher tag')

        return self.create_user(self, email, user_name, first_name, last_name, password)



class ProductUser(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    user_name = models.CharField(max_length=20, unique=True)
    start_date = models.DateTimeField(auto_now_add=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_publisher = models.BooleanField(default=False)
    
    objects = ProductUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS= ['user_name']


    def __str__(self):
        return self.user_name

        '''
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class ProductUserManager(BaseUserManager):
    def create_user(self, email, last_name, first_name, password=None):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        email = email.lower()

        user = self.model(
            email=email,
            last_name = last_name,
            first_name = first_name

        )
        user.set_password(password)
        user.save()

        return user

    def create_publisher(self, email, first_name,last_name, password=None):
        user = self.create_user(email,first_name=first_name, last_name=last_name, password=password)

        user.is_publisher = True
        user.is_active= True
        user.save()

        return user

    def create_superuser(self, email, password=None):
        user = self.create_user(email, password)

        user.is_superuser = True
        user.is_staff = True

        user.save()

        return user



class ProductUser(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True)
    start_date = models.DateTimeField(auto_now_add=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_publisher = models.BooleanField(default=False)
    
    objects = ProductUserManager()

    USERNAME_FIELD = 'email'
    #REQUIRED_FIELDS= ['email']


    def __str__(self):
        return self.email
