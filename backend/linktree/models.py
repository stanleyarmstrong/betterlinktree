from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length = 15, primary_key = True)
    profile_pic = models.ImageField(blank = True)
    color1 = models.CharField(max_length = 6)
    color2 = models.CharField(max_length = 6)

class Link(models.Model):
    username = models.ForeignKey(User, on_delete = models.CASCADE)
    title = models.CharField(max_length = 15)
    link = models.URLField()
    