from django.shortcuts import render

from landing.models import Project, People, Seo, ContactRadio


def index(request):
    seo = Seo.objects.first()
    peoples = People.objects.all()
    projects = Project.objects.all()
    contactRadio = ContactRadio.objects.first()

    return render(
        request,
        'landing/index.html',
        {
            'seo': seo,
            'peoples': peoples,
            'projects': projects,
            'contactRadio': contactRadio,
        }
    )
