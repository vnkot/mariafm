from django.contrib import admin

from landing.models import People, ContactRadio, NavLink, LinksForAdvertising, LinksForContact, \
    OrderAdvertising

admin.site.register(OrderAdvertising)

admin.site.register(NavLink)
admin.site.register(ContactRadio)

admin.site.register(People)
admin.site.register(LinksForContact)
admin.site.register(LinksForAdvertising)
