# from django.shortcuts import render
from rest_framework import viewsets, generics
from .serializer import UserSerializer, ResumeSerializer
from .models import Users, Resume


class UsersView(generics.ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = Users.objects.all()


class GetUserByUserName(generics.RetrieveAPIView):
    queryset = Users.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'Username'


class GetUserByEmailId(generics.RetrieveAPIView):
    queryset = Users.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'EmailId'
# Create your views here.

class ResumeViewSet(viewsets.ModelViewSet):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer

class GetUserByFirstName(generics.RetrieveAPIView):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer
    lookup_field = 'firstname'