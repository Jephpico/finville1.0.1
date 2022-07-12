from .views import OnboardingViewSet
from rest_framework import routers



router = routers.DefaultRouter()
router.register(r'onboarding', viewset = OnboardingViewSet, basename='onboarding')

urlpatterns = router.urls
