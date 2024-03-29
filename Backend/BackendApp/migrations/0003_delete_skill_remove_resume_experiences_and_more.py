# Generated by Django 4.2.7 on 2023-11-18 05:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BackendApp', '0002_experience_skill_resume'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Skill',
        ),
        migrations.RemoveField(
            model_name='resume',
            name='experiences',
        ),
        migrations.AddField(
            model_name='resume',
            name='companyName',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='resume',
            name='endDate',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='resume',
            name='jobRole',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='resume',
            name='name',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='resume',
            name='startDate',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='resume',
            name='summary',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='resume',
            name='address',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='resume',
            name='city',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='resume',
            name='country_name',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='resume',
            name='email_address',
            field=models.EmailField(blank=True, max_length=254),
        ),
        migrations.AlterField(
            model_name='resume',
            name='firstname',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='resume',
            name='lastname',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='resume',
            name='phone_no',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AlterField(
            model_name='resume',
            name='postcode',
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AlterField(
            model_name='resume',
            name='state_name',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.DeleteModel(
            name='Experience',
        ),
    ]
