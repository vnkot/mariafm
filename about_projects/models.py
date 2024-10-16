from django.db import models


class AboutProjects(models.Model):
    title = models.CharField(max_length=100, verbose_name='Заголовок')

    class Meta:
        verbose_name = 'Заголовок'
        verbose_name_plural = 'Заголовок'

    def __str__(self):
        return self.title
