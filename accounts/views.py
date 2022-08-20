'''from django.contrib.auth import get_user_model
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
               return Response('error processing signup credentials', status=status.HTTP_400_BAD_REQUEST)'''



from django.contrib.auth import get_user_model
User = get_user_model()
from .serializers import UserSerializer, ProfileSerializer
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken



class UserSignUpView(APIView):
    permission_classes =[AllowAny]

    def post(self, request):
        try:
            data = request.data

            email = data['email']
            email = email.lower()
            last_name = data['last_name']
            first_name = data['first_name']
            password = data['password']
            re_password = data['re_password']

            if password == re_password:
                if len(password) >= 8:
                    if not User.objects.filter(email=email).exists():
                            User.objects.create_user(email=email, last_name=last_name, first_name=first_name, password=password)

                            return Response(
                                {'success': 'User created successfully'},
                                status=status.HTTP_201_CREATED
                            )
                    else:
                        return Response(
                            {'error': 'User with this email already exists'},
                            status=status.HTTP_403_FORBIDDEN                        )
                else:
                    return Response(
                        {'error': 'Password must be at least 8 characters in length'},
                        status=status.HTTP_403_FORBIDDEN
                    )
            else:
                return Response(
                    {'error': 'Passwords do not match'},
                    status=status.HTTP_400_BAD_REQUEST
                )
        except:
            return Response(
                {'error': 'Something went wrong when registering an account'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
   
            )

class PublisherSignUpView(APIView):
    permission_classes =[AllowAny]

    def post(self, request):
        try:
            data = request.data

            email = data['email']
            email = email.lower()
            last_name = data['last_name']
            first_name = data['first_name']
            password = data['password']
            re_password = data['re_password']

            if password == re_password:
                if len(password) >= 8:
                    if not User.objects.filter(email=email).exists():
                            User.objects.create_publisher(email=email,last_name=last_name, first_name=first_name, password=password)

                            return Response(
                                {'success': 'Publisher account created successfully'},
                                status=status.HTTP_201_CREATED
                            )

                    else:
                        return Response(
                            {'error': 'User with this email already exists'},
                            status=status.HTTP_403_FORBIDDEN                        )
                else:
                    return Response(
                        {'error': 'Password must be at least 8 characters in length'},
                        status=status.HTTP_403_FORBIDDEN
                    )
            else:
                return Response(
                    {'error': 'Passwords do not match'},
                    status=status.HTTP_400_BAD_REQUEST
                )
        except:
            return Response(
                {'error': 'Something went wrong when registering an account'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
   
            )



                           





class ProfileView(generics.RetrieveAPIView):
    serializer_class = ProfileSerializer

    def get_object(self):
        return self.request.user
# class RetrieveUserView(APIView):
#     def get(self, request, format=None):
#         try:
#             user = request.user
#             user = UserSerializer(user)

#             return Response(
#                 {'user': user.data},
#                 status=status.HTTP_200_OK
#             )
#         except:
#             return Response(
#                 {'error': 'Something went wrong when retrieving user details'},
#                 status=status.HTTP_500_INTERNAL_SERVER_ERROR
#             )




class BlacklistTokenView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        try:
            refresh_token = request.data['refresh_token']
            refresh_token = RefreshToken(refresh_token)
            refresh_token.blacklist()

        except:
                return Response(status=status.HTTP_406_NOT_ACCEPTABLE)