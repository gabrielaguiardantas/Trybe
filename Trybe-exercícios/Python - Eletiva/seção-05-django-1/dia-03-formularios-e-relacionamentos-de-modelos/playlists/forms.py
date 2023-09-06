# playlists/forms.py
from datetime import datetime
from django import forms
from playlists.models import Music, Singer
from playlists.validators import validate_music_length, validate_name


class CreateMusicForm(forms.Form):
    name = forms.CharField(
        max_length=50,
        validators=[validate_name],
        label="Nome da música",
        strip=True,
    )
    recorded_at = forms.DateField(
        label="Data de gravação",
        initial=datetime.today().date,
        widget=forms.DateInput(attrs={"type": "date"}),
    )
    length_in_seconds = forms.IntegerField(
        validators=[validate_music_length],
        label="Duração em segundos",
        min_value=1,
        max_value=3600,
    )


class CreatePlaylistForm(forms.Form):
    name = forms.CharField(max_length=50)
    is_active = forms.BooleanField()


# exercício 1
class CreateSingerForm(forms.Form):
    name = forms.CharField(max_length=50, validators=[validate_name])


class CreateMusicModelForm(forms.ModelForm):
    class Meta:
        model = Music
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["name"].label = "Nome da música"
        self.fields["recorded_at"].label = "Data de gravação"
        self.fields["recorded_at"].widget = forms.DateInput(
            attrs={"type": "date"}
        )
        self.fields["recorded_at"].initial = datetime.today().date
        self.fields["length_in_seconds"].label = "Duração em segundos"
        # self.fields["length_in_seconds"].min_value = 1 não funciona
        # self.fields["length_in_seconds"].max_value = 3600 não funciona
        self.fields["singer"].label = "Artista"
        self.fields["singer"].widget = forms.Select(
            choices=[
                (singer.id, singer.name)
                for singer in Singer.objects.filter(name__contains="a")
            ]
        )
