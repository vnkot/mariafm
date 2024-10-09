from django.shortcuts import render

from landing.models import Project, People, Seo


def index(request):
    seo = Seo.objects.first()
    peoples = People.objects.all()
    projects = Project.objects.all()

    return render(
        request,
        'landing/index.html',
        {
            'projects': projects,
            'peoples': peoples,
            'seo': seo
        }
    )
