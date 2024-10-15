from django.contrib import admin

from landing.models import LinksForAdvertising, LinksForContact

admin.site.register(LinksForContact)
admin.site.register(LinksForAdvertising)
