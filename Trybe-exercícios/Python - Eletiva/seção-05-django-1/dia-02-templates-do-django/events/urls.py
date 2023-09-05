# events/urls.py
from django.urls import path
from events.views import about, event_details, index


urlpatterns = [
    # path("/rota-comentada", função-que-será-executada,
    # name="nome-que-identifica-a-rota")
    path("", index, name="home-page"),
    path("about/", about, name="about-page"),
    path("events/<int:event_id>", event_details, name="details-page"),
]
