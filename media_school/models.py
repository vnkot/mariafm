from django.db import models
from webpfield.fields import WebPField


class MediaSchool(models.Model):
    title = models.CharField(max_length=100, verbose_name='Заголовок')
    description = models.TextField(max_length=500, verbose_name='Описание')

    coverDesktop = WebPField(verbose_name='Изображение')

    buttonLink = models.URLField(verbose_name='Ссылка для кнопки')
    buttonCaption = models.CharField(max_length=20, verbose_name='Надпись в кнопке')

    def description_as_list(self):
        return self.description.split('\n')

    class Meta:
        verbose_name = 'Контент'
        verbose_name_plural = 'Контент'

    def __str__(self):
        return 'Контент'
