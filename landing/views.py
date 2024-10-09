from django.shortcuts import render

from landing.models import Project, People, Seo, ContactRadio, NavLink


def index(request):
    seo = Seo.objects.first()
    contact_radio = ContactRadio.objects.first()

    peoples = People.objects.all()
    projects = Project.objects.all()
    nav_links = NavLink.objects.all()

    return render(
        request,
        'landing/index.html',
        {
            'seo': seo,
            'peoples': peoples,
            'projects': projects,
            'contactRadio': contact_radio,
            'navLinks': nav_links,
        }
    )
