import imp
from rest_framework.permissions import DjangoModelPermissions
from django.core.exceptions import PermissionDenied

class FullDjangoModelPermissions(DjangoModelPermissions):
    perms_map = {
        'GET': ['%(beginners_guide)s.view_%(Onboarding)s'],
        'OPTIONS': ['%(beginners_guide)s.view_%(Onboarding)s'],
        'HEAD': ['%(beginners_guide)s.view_%(Onboarding)s'],
        'POST': ['%(beginners_guide)s.add_%(Onboarding)s'],
        'PUT': ['%(beginners_guide)s.change_%(Onboarding)s'],
        'PATCH': ['%(beginners_guide)s.change_%(Onboarding)s'],
        'DELETE': ['%(beginners_guide)s.delete_%(Onboarding)s'],
    }
    def has_permission(self, request, view):

            if request.user.is_publisher:
                return True
            else:
                raise PermissionDenied
       
     
