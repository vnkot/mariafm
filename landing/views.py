from django.shortcuts import render

from footer.models import LinksForContact, LinksForAdvertising, FooterCaption
from general.models import Seo
from header.models import ContactRadio, NavLink, OrderAdvertising
from projects.models import Project
from team.models import People


def index(request):
    seo = Seo.objects.first()
    order_advertising = OrderAdvertising.objects.first()

    nav_links = NavLink.objects.all()
    contact_radio = ContactRadio.objects.first()
    projects = Project.objects.all()

    peoples = People.objects.all()

    footer_caption = FooterCaption.objects.first()
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
            'footerCaption': footer_caption,
            'linksForContact': links_for_contact,
            'linksForAdvertising': links_for_advertising,
            'orderAdvertising': order_advertising
        }
    )
