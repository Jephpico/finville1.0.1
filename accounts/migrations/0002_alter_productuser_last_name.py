# Generated by Django 4.0.6 on 2022-08-11 14:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productuser',
            name='last_name',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
