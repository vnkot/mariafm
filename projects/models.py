from django.db import models
from django.utils.html import format_html
from webpfield.fields import WebPField


class Project(models.Model):
    title = models.CharField(max_length=30, verbose_name='Заголовок')
    description = models.TextField(max_length=300, verbose_name='Описание')
    coverMobile = WebPField(verbose_name='Обложка для мобильный устройств')
    coverDesktop = WebPField(verbose_name='Обложка для компьютерных устройств')
    order = models.PositiveIntegerField(default=0, verbose_name='Порядковый номер отображения')

    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'
        ordering = ['order']

    def formatted_description(self):
        return format_html(self.description.replace('\n', '<br>'))

    def __str__(self):
        return self.title
