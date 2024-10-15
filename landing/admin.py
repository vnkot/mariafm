from django.contrib import admin

from landing.models import People, LinksForAdvertising, LinksForContact

admin.site.register(People)
admin.site.register(LinksForContact)
admin.site.register(LinksForAdvertising)
