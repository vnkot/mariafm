from django.db import models
from django.utils.html import format_html


class Footer(models.Model):
    terms = models.FileField(upload_to='files/', blank=True, null=True, verbose_name='Условия пользовательского соглашения')
    personal_data = models.FileField(upload_to='files/', blank=True, null=True, verbose_name='Согласие на обработку персональных данных')

    class Meta:
        verbose_name = 'Контент'
        verbose_name_plural = 'Контент'

    def __str__(self):
        return 'Контент'

class LinksForAdvertising(models.Model):
    caption = models.CharField(max_length=40, verbose_name='Название ссылки')
    value = models.CharField(verbose_name='Текст ссылки')
    url = models.CharField(verbose_name='URL-ссылки')
    order = models.PositiveIntegerField(default=0, verbose_name='Порядковый номер отображения')

    class Meta:
        verbose_name = 'Ссылка для рекламы'
        verbose_name_plural = 'Ссылки для рекламы'
        ordering = ['order']

    def __str__(self):
        return self.caption


class LinksForContact(models.Model):
    caption = models.CharField(max_length=40, verbose_name='Название ссылки')
    value = models.CharField(verbose_name='Текст ссылки')
    url = models.CharField(verbose_name='URL-ссылки')
    order = models.PositiveIntegerField(default=0, verbose_name='Порядковый номер отображения')

    class Meta:
        verbose_name = 'Ссылка для контактов'
        verbose_name_plural = 'Ссылка для контактов'
        ordering = ['order']

    def __str__(self):
        return self.caption


class FooterCaption(models.Model):
    caption = models.TextField(max_length=250, verbose_name='Подпись')

    class Meta:
        verbose_name = 'Подпись'
        verbose_name_plural = 'Подпись'

    def formatted_caption(self):
        return format_html(self.caption.replace('\n', '<br>'))

    def __str__(self):
        return 'Подпись'
