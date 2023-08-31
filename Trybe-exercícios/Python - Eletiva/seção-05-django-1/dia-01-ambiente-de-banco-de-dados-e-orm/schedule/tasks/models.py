from django.db import models


class Task(models.Model):
    class Priority(models.IntegerChoices):
        BAIXA = 0
        MEDIA = 1
        ALTA = 2

    title: models.CharField(max_length=200)
    description: models.TextField()
    due_date: models.DateTimeField()
    completed: models.BooleanField(default=False)
    priority: models.IntegerField(default=0, choices=Priority.choices)
    created_at: models.DateTimeField(auto_now_add=True)
