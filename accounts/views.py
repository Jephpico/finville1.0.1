from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers import SignUpSerializer


# Create your views here.

User = get_user_model()

class SignUpView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try: 
            signup_seriailizer = SignUpSerializer(data=request.data)
            
            if signup_seriailizer.is_valid():
                    newuser = signup_seriailizer.save()
                    if newuser:
                        return Response( status=status.HTTP_201_CREATED)

            return Response(signup_seriailizer.errors, status = status.HTTP_400_BAD_REQUEST)
                    


        except:
               return Response('error processing signup credentials', status=status.HTTP_400_BAD_REQUEST)