from django.contrib import admin

from footer.models import LinksForContact, LinksForAdvertising, FooterCaption, Footer

admin.site.register(Footer)
admin.site.register(FooterCaption)
admin.site.register(LinksForContact)
admin.site.register(LinksForAdvertising)
