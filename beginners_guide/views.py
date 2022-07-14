from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from .serializers import OnboardingSerializer, PublisherOnboardingSerializer
from beginners_guide.models import Onboarding

class OnboardingViewSet(viewsets.ViewSet):
        queryset = Onboarding.objects.all()

        def list(self, request):
                serializer_class = OnboardingSerializer(self.queryset, many=True)
                return Response(serializer_class.data)

class PublisherBoardViewSet(viewsets.ModelViewSet):
        permission_classes = [IsAdminUser]
        queryset = Onboarding.objects.all()
        serializer_class = PublisherOnboardingSerializer
        


