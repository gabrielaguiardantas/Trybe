# playlists/views.py

from django.shortcuts import redirect, render
from playlists.forms import (
    # CreateMusicForm,
    CreateMusicModelForm,
    CreateSingerForm,
)
from playlists.models import Music, Singer


def index(request):
    context = {"musics": Music.objects.all(), "singers": Singer.objects.all()}
    return render(request, "home.html", context)


def music(request):
    print(request.POST)
    print(request.body)
    print(request.method)

    # form = CreateMusicForm()
    form = CreateMusicModelForm()
    if request.method == "POST":
        # form = CreateMusicForm(request.POST)
        form = CreateMusicModelForm(request.POST)

        if form.is_valid():
            Music.objects.create(**form.cleaned_data)
            return redirect("home-page")

    context = {"form": form}
    return render(request, "music.html", context)


def singer(request):
    print(request.POST)
    print(request.body)
    print(request.method)

    form = CreateSingerForm()

    if request.method == "POST":
        form = CreateSingerForm(request.POST)

        if form.is_valid():
            Singer.objects.create(**form.cleaned_data)
            return redirect("home-page")

    context = {"form": form}
    return render(request, "singer.html", context)
