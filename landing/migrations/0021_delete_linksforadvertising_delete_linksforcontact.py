# Generated by Django 5.1.1 on 2024-10-16 16:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0020_delete_people'),
    ]

    operations = [
        migrations.DeleteModel(
            name='LinksForAdvertising',
        ),
        migrations.DeleteModel(
            name='LinksForContact',
        ),
    ]
