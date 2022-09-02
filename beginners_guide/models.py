from urllib import request
from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model
User = get_user_model()
# Create your models here.
class Onboarding(models.Model):
        title = models.CharField(max_length=100)
        slug = models.SlugField(max_length=200)
        body = models.TextField()
        thumbnail = models.ImageField(null=True, blank=True)
        image1 = models.ImageField(null=True, blank=True)
        image2 = models.ImageField(null=True, blank=True)
        image3 = models.ImageField(null=True, blank=True)
        image4 = models.ImageField(null=True, blank=True)
        image5 = models.ImageField(null=True, blank=True)
        date = models.DateTimeField(auto_now_add=True)
        author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='onboarding')

        def __str__(self) -> str:
                return self.title
    
   