from django.urls import path, include
from .views import GetUserByUserName,GetUserByEmailId, GetUserByFirstName
from rest_framework.routers import DefaultRouter
from .views import  ResumeViewSet


urlpatterns = [
    path('users/<str:Username>/', GetUserByUserName.as_view()),
    path('users/<str:EmailId>/', GetUserByEmailId.as_view()),
    path('resumes/<str:firstname>/', GetUserByFirstName.as_view())
    # Add other URL patterns as needed
]


router = DefaultRouter()
# router.register(r'experiences', ExperienceViewSet, basename='experience')
router.register(r'resumes', ResumeViewSet, basename='resume')
# router.register(r'skills', SkillViewSet, basename='skill')



urlpatterns += router.urls

