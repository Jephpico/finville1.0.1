from django.urls import path
from rest_framework_simplejwt.views import TokenVerifyView,TokenObtainPairView,TokenRefreshView
from .views import SignUpView


urlpatterns =[
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('signup/', SignUpView.as_view(), name = 'signup_view'),
    ]