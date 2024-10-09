from django.contrib import admin

from landing.models import Project, People, Seo, ContactRadio

admin.site.register(Seo)
admin.site.register(People)
admin.site.register(Project)
admin.site.register(ContactRadio)
