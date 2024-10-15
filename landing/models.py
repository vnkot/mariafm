from django.db import models


class LinksForAdvertising(models.Model):
    caption = models.CharField(max_length=40, verbose_name='Название ссылки')
    value = models.CharField(verbose_name='Текст ссылки')
    url = models.CharField(verbose_name='URL-ссылки')

    class Meta:
        verbose_name = 'Секция "Подвал сайта": ссылка для рекламы'
        verbose_name_plural = 'Секция "Подвал сайта": ссылки для рекламы'

    def __str__(self):
        return self.caption


class LinksForContact(models.Model):
    caption = models.CharField(max_length=40, verbose_name='Название ссылки')
    value = models.CharField(verbose_name='Текст ссылки')
    url = models.CharField(verbose_name='URL-ссылки')

    class Meta:
        verbose_name = 'Секция "Подвал сайта": ссылка для контактов'
        verbose_name_plural = 'Секция "Подвал сайта": ссылка для контактов'

    def __str__(self):
        return self.caption
