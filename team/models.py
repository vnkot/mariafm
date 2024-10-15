from django.db import models
from django.utils.html import format_html
from webpfield.fields import WebPField


class People(models.Model):
    fullname = models.CharField(max_length=30, verbose_name='Полное имя')
    description = models.TextField(max_length=300, verbose_name='Описание')
    avatar = WebPField(verbose_name='Аватарка')
    order = models.PositiveIntegerField(default=0, verbose_name='Порядковый номер отображения')

    class Meta:
        verbose_name = 'Член команды'
        verbose_name_plural = 'Члены команды'
        ordering = ['order']

    def formatted_description(self):
        return format_html(self.description.replace('\n', '<br>'))

    def __str__(self):
        return self.fullname
