from posixpath import basename
from .views import OnboardingViewSet,  PublisherBoardViewSet
from rest_framework import routers


router = routers.DefaultRouter()
''' Onboarding endpoint
http://127.0.0.1:8000/api/beginners-guide/onboarding/ '''

router.register(r'onboarding', OnboardingViewSet, basename='onboarding')
router.register(r'publisher_board', PublisherBoardViewSet, basename = 'publisher_dashboard')  

urlpatterns = router.urls
