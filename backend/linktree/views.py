from django.shortcuts import render
from .models import User, Link
from rest_framework import viewsets
from .serializers import UserSerializer, LinkSerializer

class UserViews(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

class LinkViews(viewsets.ModelViewSet):
    serializer_class = LinkSerializer
    queryset = Link.objects.all()
