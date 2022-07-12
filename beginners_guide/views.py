from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework import response
from .serializers import OnboardingSerializer
from beginners_guide.models import Onboarding

class OnboardingViewSet(viewsets.ModelViewSet):
        queryset = Onboarding.objects.all()
        serializer_class = OnboardingSerializer
