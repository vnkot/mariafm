from django.contrib import admin

from landing.models import Project, People, Seo

admin.site.register(Seo)
admin.site.register(People)
admin.site.register(Project)
