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


class Seo(models.Model):
    ogType = models.CharField(max_length=30, verbose_name='og:type')
    ogTitle = models.CharField(max_length=70, verbose_name='og:title')
    ogUrl = models.URLField(verbose_name='og:url')
    ogImage = models.ImageField(verbose_name='og:image')
    ogDescription = models.TextField(max_length=100, verbose_name='og:description')

    class Meta:
        verbose_name = 'SEO'
        verbose_name_plural = 'SEO'

    def __str__(self):
        return 'SEO'


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


class NavLink(models.Model):
    caption = models.CharField(max_length=30, verbose_name='Текст ссылки')
    url = models.CharField(verbose_name='URL-ссылки')

    class Meta:
        verbose_name = 'Ссылка навигации'
        verbose_name_plural = 'Ссылки навигации'

    def __str__(self):
        return self.caption


class LinksForAdvertising(models.Model):
    caption = models.CharField(max_length=40, verbose_name='Название ссылки')
    value = models.CharField(verbose_name='Текст ссылки')
    url = models.CharField(verbose_name='URL-ссылки')

    class Meta:
        verbose_name = 'Ссылка для рекламы'
        verbose_name_plural = 'Ссылки для рекламы'

    def __str__(self):
        return self.caption


class LinksForContact(models.Model):
    caption = models.CharField(max_length=40, verbose_name='Название ссылки')
    value = models.CharField(verbose_name='Текст ссылки')
    url = models.CharField(verbose_name='URL-ссылки')

    class Meta:
        verbose_name = 'Ссылка для контактов'
        verbose_name_plural = 'Ссылки для контактов'

    def __str__(self):
        return self.caption
