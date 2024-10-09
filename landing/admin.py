from django.contrib import admin

from landing.models import Project, People, Seo, ContactRadio, NavLink

admin.site.register(Seo)
admin.site.register(ContactRadio)

admin.site.register(People)
admin.site.register(Project)
admin.site.register(NavLink)
