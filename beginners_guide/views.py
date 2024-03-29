from urllib import request
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated, BasePermission
from .serializers import OnboardingSerializer, PublisherOnboardingSerializer
from beginners_guide.models import Onboarding, User
from accounts.permissions import FullDjangoModelPermissions






class OnboardingViewSet(viewsets.ViewSet):
        permission_classes = [AllowAny]
        queryset = Onboarding.objects.all()

        def list(self, request):
                serializer_class = OnboardingSerializer(self.queryset, many=True)
                return Response(serializer_class.data)
        def retrieve(self, request, pk=None):
                onboarding_post = get_object_or_404(self.queryset,pk=pk)
                serializer_class = OnboardingSerializer(onboarding_post)
                return Response(serializer_class.data)

class PublisherBoardViewSet(viewsets.ModelViewSet):
        permission_classes = [FullDjangoModelPermissions]
        queryset = Onboarding.objects.all()
        serializer_class = PublisherOnboardingSerializer



       
        def perform_create(self, serializers):
                serializers.save(author=self.request.user)
        
        

        


