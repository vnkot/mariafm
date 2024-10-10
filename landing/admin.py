from django.contrib import admin

from landing.models import Project, People, Seo, ContactRadio, NavLink, LinksForAdvertising, LinksForContact, \
    OrderAdvertising

admin.site.register(Seo)
admin.site.register(OrderAdvertising)

admin.site.register(NavLink)
admin.site.register(ContactRadio)
admin.site.register(Project)

admin.site.register(People)
admin.site.register(LinksForContact)
admin.site.register(LinksForAdvertising)
