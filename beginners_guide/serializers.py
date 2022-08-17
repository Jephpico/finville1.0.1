from rest_framework import serializers
from beginners_guide.models import Onboarding

class OnboardingSerializer(serializers.ModelSerializer):
    class Meta:
            model = Onboarding
            fields = ('title', 'slug', 'body' )

class PublisherOnboardingSerializer(serializers.ModelSerializer):
    user_last_name = serializers.CharField(source="author.last_name", read_only=True)
    user_first_name = serializers.CharField(source="author.first_name", read_only=True)
    class Meta:
            model = Onboarding
            fields = ('title', 'slug', 'body' , 'user_last_name','user_first_name')
            