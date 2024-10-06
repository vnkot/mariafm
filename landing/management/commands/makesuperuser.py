from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand
from decouple import config

User = get_user_model()

class Command(BaseCommand):
    help = 'Создание суперпользователя по данным из .env'

    def handle(self, *args, **kwargs):
        username = config('SUPERUSER_USERNAME')
        email = config('SUPERUSER_EMAIL')
        password = config('SUPERUSER_PASSWORD')

        if User.objects.filter(username=username).exists():
            self.stdout.write(self.style.WARNING(f'Суперпользователь {username} уже создан'))
        else:
            User.objects.create_superuser(username=username, email=email, password=password)
            self.stdout.write(self.style.SUCCESS(f'Суперпользователь {username} создан'))