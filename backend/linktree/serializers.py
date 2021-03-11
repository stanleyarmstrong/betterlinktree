from rest_framework import serializers
from .models import User, Link

class UserSerializer(serializers.ModelSerializer):
    links = serializers.StringRelatedField(many = True)
    class Meta:
        model  = User
        fields = ('username', 'profile_pic', 'color1', 'color2', 'links')

class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Link
        fields = ('username', 'title', 'url') 