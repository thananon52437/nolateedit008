# Generated by Django 5.0 on 2024-02-29 19:01

import room_booking.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('room_booking', '0004_paymentslip_booking_reference_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paymentslip',
            name='guest_name',
            field=models.CharField(default=room_booking.models.get_default_username, max_length=255),
        ),
    ]
