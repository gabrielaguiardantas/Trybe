# menu/urls.py
from django.urls import path
from menu.views import delete_recipe, recipe_details, recipes_list


urlpatterns = [
    path("recipe/<int:id>/delete", delete_recipe, name="delete_recipe"),
    path("recipe/<int:id>", recipe_details, name="recipe-details"),
    path("", recipes_list, name="recipes-list"),
]
