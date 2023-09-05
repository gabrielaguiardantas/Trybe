from django.shortcuts import get_object_or_404, redirect, render
from menu.models import Recipe


def recipes_list(request):
    context = {"recipes": Recipe.objects.all()}
    return render(request, "recipes_list.html", context)


def recipe_details(request, id):
    context = {"recipe": get_object_or_404(Recipe, id=id)}
    return render(request, "recipe_details.html", context)


def delete_recipe(request, id):
    recipe = get_object_or_404(Recipe, id=id)
    recipe.delete()
    return redirect("recipes-list")
