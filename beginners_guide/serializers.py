from rest_framework import serializers
from beginners_guide.models import Onboarding

class OnboardingSerializer(serializers.ModelSerializer):
        class Meta:
            model = Onboarding
            fields = ['title', 'slug', 'body', 'thumbnail']