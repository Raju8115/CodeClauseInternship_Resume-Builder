# Generated by Django 4.2.7 on 2023-11-18 03:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BackendApp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('jobRole', models.CharField(blank=True, max_length=255)),
                ('companyName', models.CharField(blank=True, max_length=255)),
                ('startDate', models.DateField(blank=True, null=True)),
                ('endDate', models.DateField(blank=True, null=True)),
                ('summary', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Resume',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=255)),
                ('lastname', models.CharField(max_length=255)),
                ('job_title', models.CharField(blank=True, max_length=255)),
                ('phone_no', models.CharField(max_length=20)),
                ('email_address', models.EmailField(max_length=254)),
                ('address', models.TextField()),
                ('city', models.CharField(max_length=255)),
                ('postcode', models.CharField(max_length=20)),
                ('state_name', models.CharField(max_length=255)),
                ('country_name', models.CharField(max_length=255)),
                ('experience_summary', models.TextField(blank=True)),
                ('qualification_name', models.CharField(blank=True, max_length=255)),
                ('university_name', models.CharField(blank=True, max_length=255)),
                ('joined_date', models.IntegerField(blank=True, null=True)),
                ('completed_date', models.IntegerField(blank=True, null=True)),
                ('experiences', models.ManyToManyField(blank=True, to='BackendApp.experience')),
            ],
        ),
    ]
