from django.urls import path
from rest_framework_simplejwt.views import TokenVerifyView,TokenObtainPairView,TokenRefreshView
from .views import UserSignUpView ,PublisherSignUpView, BlacklistTokenView


urlpatterns =[
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('user/signup/', UserSignUpView.as_view(), name = 'signup_view'),
    path('publisher/signup/', PublisherSignUpView.as_view(), name = 'signup_view'),
    path('logout/token/blacklist/', BlacklistTokenView.as_view(), name='token_blacklist')
    ]