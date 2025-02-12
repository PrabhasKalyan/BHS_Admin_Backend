# Generated by Django 5.1.4 on 2025-01-06 12:58

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('investor', '0014_rename_user_type_investor_usertype'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='assets',
            name='investor_asset',
        ),
        migrations.AddField(
            model_name='assets',
            name='numberPlate',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='assets',
            name='wialon',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='assets',
            name='asset_id',
            field=models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='investment',
            name='maturity_date',
            field=models.DateField(auto_now_add=True),
        ),
    ]
