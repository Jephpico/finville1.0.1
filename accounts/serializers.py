import email
from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from django.contrib.auth import get_user_model
User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'email', 'is_publisher', )


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'first_name',
            'last_name',
        ]



class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField(min_length=2)

    class Meta:
        fields = ['email']















""" from dataclasses import fields
from rest_framework import serializers
from accounts.models import ProductUser

class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductUser
        fields = ('email','user_name','password',)
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
            password = validated_data.pop('password', None)
            instance = self.Meta.model(**validated_data)
            if password is not None:
                instance.set_password(password)
            instance.save()
            return instance

        # def update(self, instance, validated_data):
        #     for attr, value in validated_data.items():
        #         if attr == 'password':
        #             instance.set_password(value)
        #         else:
        #             setattr(instance, attr, value)
        #     instance.save()
        #     return instance """