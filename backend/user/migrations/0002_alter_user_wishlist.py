# Generated by Django 5.0.3 on 2024-08-07 12:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='wishlist',
            field=models.JSONField(blank=True, null=True),
        ),
    ]