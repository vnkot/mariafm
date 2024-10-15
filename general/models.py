from django.db import models
from webpfield.fields import WebPField


class Seo(models.Model):
    ogType = models.CharField(max_length=30, verbose_name='og:type')
    ogTitle = models.CharField(max_length=70, verbose_name='og:title')
    ogUrl = models.URLField(verbose_name='og:url')
    ogImage = WebPField(verbose_name='og:image')
    ogDescription = models.TextField(max_length=100, verbose_name='og:description')

    class Meta:
        verbose_name = 'SEO'
        verbose_name_plural = 'SEO'

    def __str__(self):
        return 'SEO'
