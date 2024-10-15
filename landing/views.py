from django.shortcuts import render

from general.models import Seo
from header.models import ContactRadio, NavLink, OrderAdvertising
from landing.models import People, LinksForAdvertising, LinksForContact
from projects.models import Project


def index(request):
    seo = Seo.objects.first()
    order_advertising = OrderAdvertising.objects.first()

    nav_links = NavLink.objects.all()
    contact_radio = ContactRadio.objects.first()
    projects = Project.objects.all()

    peoples = People.objects.all()
    links_for_contact = LinksForContact.objects.all()
    links_for_advertising = LinksForAdvertising.objects.all()

    return render(
        request,
        'landing/index.html',
        {
            'seo': seo,
            'peoples': peoples,
            'projects': projects,
            'navLinks': nav_links,
            'contactRadio': contact_radio,
            'linksForContact': links_for_contact,
            'linksForAdvertising': links_for_advertising,
            'orderAdvertising': order_advertising
        }
    )
