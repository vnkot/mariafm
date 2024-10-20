from django.contrib import admin

from radio.models import Radio, RadioPlaque, RadioBadge

admin.site.register(Radio)
admin.site.register(RadioBadge)
admin.site.register(RadioPlaque)
