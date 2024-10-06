from django.db import models
from django.utils.html import format_html


class Project(models.Model):
    title = models.CharField(max_length=30, verbose_name='Заголовок')
    description = models.TextField(max_length=300, verbose_name='Описание')
    coverMobile = models.ImageField(verbose_name='Обложка для мобильный устройств')
    coverDesktop = models.ImageField(verbose_name='Обложка для компьютерных устройств')
    order = models.PositiveIntegerField(default=0, verbose_name='Порядковый номер отображения')

    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'
        ordering = ['order']

    def formatted_description(self):
        return format_html(self.description.replace('\n', '<br>'))

    def __str__(self):
        return self.title


class People(models.Model):
    fullname = models.CharField(max_length=30, verbose_name='Полное имя')
    description = models.TextField(max_length=300, verbose_name='Описание')
    avatar = models.ImageField(verbose_name='Аватарка')
    order = models.PositiveIntegerField(default=0, verbose_name='Порядковый номер отображения')

    class Meta:
        verbose_name = 'Член команды'
        verbose_name_plural = 'Члены команды'
        ordering = ['order']

    def formatted_description(self):
        return format_html(self.description.replace('\n', '<br>'))

    def __str__(self):
        return self.fullname