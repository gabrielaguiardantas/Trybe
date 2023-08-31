from django.contrib import admin
from tasks.models import Task

admin.site.site_header = "Trybe Tasks"
admin.site.register(Task)
