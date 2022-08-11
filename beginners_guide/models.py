from django.db import models
from django.conf import settings
# Create your models here.
class Onboarding(models.Model):
        title = models.CharField(max_length=100)
        slug = models.SlugField(max_length=200)
        body = models.TextField()
        #thumbnail = models.ImageField()
        date = models.DateTimeField(auto_now_add=True)
        #arthor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='onboarding')
    
   