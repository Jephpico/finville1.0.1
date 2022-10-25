from rest_framework import serializers
from beginners_guide.models import Onboarding

class OnboardingSerializer(serializers.ModelSerializer):
    class Meta:
            model = Onboarding
            fields = ('id', 'title', 'slug', 'body','thumbnail', 'image1','image2', 'image3','image4','image5' )

class PublisherOnboardingSerializer(serializers.ModelSerializer):
    user_last_name = serializers.CharField(source="author.last_name", read_only=True)
    user_first_name = serializers.CharField(source="author.first_name", read_only=True)
    class Meta:
            model = Onboarding
            fields = ('id','title', 'slug', 'body' ,'thumbnail', 'image1','image2', 'image3','image4','image5', 'user_last_name','user_first_name', 'created_date')
        