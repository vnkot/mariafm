from django.db import models
from webpfield.fields import WebPField


class Radio(models.Model):
    title = models.CharField(max_length=100, verbose_name='Заголовок')
    description = models.TextField(max_length=500, verbose_name='Описание')

    cover_desktop = WebPField(verbose_name='Изображение')

    class Meta:
        verbose_name = 'Контент'
        verbose_name_plural = 'Контент'

    def __str__(self):
        return 'Контент'


class RadioBadge(models.Model):
    title = models.CharField(max_length=20, verbose_name='Заголовок')
    caption = models.CharField(max_length=40, verbose_name='Подпись')
    order = models.PositiveIntegerField(default=0, verbose_name='Порядковый номер отображения')

    radio = models.ForeignKey(Radio, related_name='badges', on_delete=models.CASCADE, verbose_name='Контент')

    class Meta:
        verbose_name = 'Бейдж'
        verbose_name_plural = 'Бейджы'
        ordering = ['order']

    def __str__(self):
        return self.title


class RadioPlaque(models.Model):
    text = models.CharField(max_length=60, verbose_name='Текст')
    order = models.PositiveIntegerField(default=0, verbose_name='Порядковый номер отображения')

    radio = models.ForeignKey(Radio, related_name='plaques', on_delete=models.CASCADE, verbose_name='Контент')

    class Meta:
        verbose_name = 'Плашка'
        verbose_name_plural = 'Плашки'
        ordering = ['order']

    def __str__(self):
        return self.text
