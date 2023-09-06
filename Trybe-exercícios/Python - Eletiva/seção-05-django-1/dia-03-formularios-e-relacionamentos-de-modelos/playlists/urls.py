# playlists/urls.py

from django.urls import path
from playlists.views import index, music, singer


urlpatterns = [
    path("musics/", music, name="musics-page"),
    path("singers/", singer, name="singers-page"),
    path("", index, name="home-page"),
]
