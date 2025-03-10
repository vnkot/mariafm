# Generated by Django 5.1.1 on 2024-10-20 12:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crew', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Crew',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Заголовок')),
            ],
            options={
                'verbose_name': 'Контент',
                'verbose_name_plural': 'Контент',
            },
        ),
        migrations.AddField(
            model_name='people',
            name='crew',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='members', to='crew.crew', verbose_name='Контент'),
        ),
    ]
