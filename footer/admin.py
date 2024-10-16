from django.contrib import admin

from footer.models import LinksForContact, LinksForAdvertising, FooterCaption

admin.site.register(FooterCaption)
admin.site.register(LinksForContact)
admin.site.register(LinksForAdvertising)
