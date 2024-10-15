from django.db import models
from django.utils.html import format_html
from webpfield.fields import WebPField

class Seo(models.Model):
    ogType = models.CharField(max_length=30, verbose_name='og:type')
    ogTitle = models.CharField(max_length=70, verbose_name='og:title')
    ogUrl = models.URLField(verbose_name='og:url')
    ogImage = WebPField(verbose_name='og:image')
    ogDescription = models.TextField(max_length=100, verbose_name='og:description')

    class Meta:
        verbose_name = 'Общие настройки: SEO'
        verbose_name_plural = 'Общие настройки: SEO'

    def __str__(self):
        return 'Общие настройки: SEO'


class OrderAdvertising(models.Model):
    caption = models.CharField(max_length=30, verbose_name='Текст ссылки')
    url = models.CharField(verbose_name='URL-ссылки')

    class Meta:
        verbose_name = 'Общие настройки: кнопка заказа рекламы'
        verbose_name_plural = 'Общие настройки: кнопка заказа рекламы'

    def __str__(self):
        return 'Общие настройки: кнопка заказа рекламы'


class NavLink(models.Model):
    caption = models.CharField(max_length=30, verbose_name='Текст ссылки')
    url = models.CharField(verbose_name='URL-ссылки')
    order = models.PositiveIntegerField(default=0, verbose_name='Порядковый номер отображения')

    class Meta:
        verbose_name = 'Секция "Шапка сайта": ссылка навигации'
        verbose_name_plural = 'Секция "Шапка сайта": ссылки навигации'
        ordering = ['order']

    def __str__(self):
        return self.caption

class ContactRadio(models.Model):
    whatsappUrl = models.URLField(verbose_name='Ссылка на whatsapp аккаунт/бот')
    telegramUrl = models.URLField(verbose_name='Ссылка на telegram аккаунт/бот')
    displayedPhoneNumber = models.CharField(max_length=20, verbose_name='Отображаемый номер телефона')
    phoneNumber = models.CharField(max_length=11, verbose_name='Номер телефона')
    radioSrc = models.URLField(verbose_name='Ссылка на источник радио')

    class Meta:
        verbose_name = 'Секция "Контакты и радио"'
        verbose_name_plural = 'Секция "Контакты и радио"'

    def __str__(self):
        return 'Секция "Контакты и радио"'

class Project(models.Model):
    title = models.CharField(max_length=30, verbose_name='Заголовок')
    description = models.TextField(max_length=300, verbose_name='Описание')
    coverMobile = WebPField(verbose_name='Обложка для мобильный устройств')
    coverDesktop = WebPField(verbose_name='Обложка для компьютерных устройств')
    order = models.PositiveIntegerField(default=0, verbose_name='Порядковый номер отображения')

    class Meta:
        verbose_name = 'Общие настройки: проект'
        verbose_name_plural = 'Общие настройки: проекты'
        ordering = ['order']

    def formatted_description(self):
        return format_html(self.description.replace('\n', '<br>'))

    def __str__(self):
        return self.title

class People(models.Model):
    fullname = models.CharField(max_length=30, verbose_name='Полное имя')
    description = models.TextField(max_length=300, verbose_name='Описание')
    avatar = WebPField(verbose_name='Аватарка')
    order = models.PositiveIntegerField(default=0, verbose_name='Порядковый номер отображения')

    class Meta:
        verbose_name = 'Секция "Команда": член команды'
        verbose_name_plural = 'Секция "Команда": члены команды'
        ordering = ['order']

    def formatted_description(self):
        return format_html(self.description.replace('\n', '<br>'))

    def __str__(self):
        return self.fullname


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
