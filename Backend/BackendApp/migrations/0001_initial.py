# Generated by Django 4.2.7 on 2023-11-13 13:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Firstname', models.CharField(max_length=128)),
                ('Lastname', models.CharField(max_length=128)),
                ('EmailId', models.EmailField(max_length=254)),
                ('Username', models.CharField(max_length=128, unique=True)),
            ],
        ),
    ]
