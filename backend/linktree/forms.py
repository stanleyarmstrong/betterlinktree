from django import forms

class UserInfo(forms.Form):
    username = forms.CharField(max_length = 15, label = 'Username: ')
    profile_pic = forms.ImageField(required = False, label = 'Profile Picture: ')
    color1 = forms.CharField(max_length = 6, label = 'Gradient Color 1:')
    color2 = forms.CharField(max_length = 6, label = 'Gradient Color 2:')

class LinkInfo(forms.Form):
    title = forms.CharField(max_length = 50, label = 'Title: ')
    link = forms.URLField()
    