from django.shortcuts import render

from landing.models import Project, People


def index(request):
    peoples = People.objects.all()
    projects = Project.objects.all()

    return render(request, 'landing/index.html', {'projects': projects, 'peoples': peoples})
