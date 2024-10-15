from django.db import models


class ContactRadio(models.Model):
    whatsappUrl = models.URLField(verbose_name='Ссылка на whatsapp аккаунт/бот')
    telegramUrl = models.URLField(verbose_name='Ссылка на telegram аккаунт/бот')
    displayedPhoneNumber = models.CharField(max_length=20, verbose_name='Отображаемый номер телефона')
    phoneNumber = models.CharField(max_length=11, verbose_name='Номер телефона')
    radioSrc = models.URLField(verbose_name='Ссылка на источник радио')

    class Meta:
        verbose_name = 'Контакты и радио'
        verbose_name_plural = 'Контакты и радио'

    def __str__(self):
        return 'Контакты и радио'


class NavLink(models.Model):
    caption = models.CharField(max_length=30, verbose_name='Текст ссылки')
    url = models.CharField(verbose_name='URL-ссылки')
    order = models.PositiveIntegerField(default=0, verbose_name='Порядковый номер отображения')

    class Meta:
        verbose_name = 'Ссылка навигации'
        verbose_name_plural = 'Ссылки навигации'
        ordering = ['order']

    def __str__(self):
        return self.caption


class OrderAdvertising(models.Model):
    caption = models.CharField(max_length=30, verbose_name='Текст ссылки')
    url = models.CharField(verbose_name='URL-ссылки')

    class Meta:
        verbose_name = 'Кнопка заказа рекламы'
        verbose_name_plural = 'Кнопка заказа рекламы'

    def __str__(self):
        return 'Кнопка заказа рекламы'