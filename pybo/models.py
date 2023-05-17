"""Model class to define the database table for entries"""

from django.db import models
from django.utils import timezone

class Entry(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    date_created = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title

    class Meta:
        """define plural for the class"""
        verbose_name_plural = "Pybo"