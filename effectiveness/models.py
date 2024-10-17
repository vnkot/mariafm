from django.db import models
from webpfield.fields import WebPField

class Effectiveness(models.Model):
    title = models.CharField(max_length=100, verbose_name='Заголовок')
    signature = models.CharField(max_length=20, verbose_name='Подпись')

    coverDesktop = WebPField(verbose_name='Изображение')

    buttonLink = models.URLField(verbose_name='Ссылка для кнопки')
    buttonCaption = models.CharField(max_length=100, default='', verbose_name='Надпись в кнопке для компьютерной версии')
    buttonCaptionMobile = models.CharField(max_length=100, default='', verbose_name='Надпись в кнопке для мобильной версии')

    class Meta:
        verbose_name = 'Контент'
        verbose_name_plural = 'Контент'

    def __str__(self):
        return 'Контент'


class EfficiencyBenefit(models.Model):
    effectiveness = models.ForeignKey(Effectiveness, related_name='benefits', on_delete=models.CASCADE, verbose_name='Контент')

    content = models.CharField(max_length=50, verbose_name='Надпись')
    order = models.PositiveIntegerField(default=0, verbose_name='Порядковый номер отображения')

    class Meta:
        verbose_name = 'Бейдж с выгодой'
        verbose_name_plural = 'Бейджы с выгодой'
        ordering = ['order']

    def __str__(self):
        return self.content