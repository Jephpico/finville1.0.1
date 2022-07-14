from posixpath import basename
from .views import OnboardingViewSet,  PublisherBoardViewSet
from rest_framework import routers



router = routers.DefaultRouter()
router.register(r'onboarding', OnboardingViewSet, basename='onboarding')
router.register(r'publisher_board', PublisherBoardViewSet, basename = 'publisher_dashboard')  

urlpatterns = router.urls
