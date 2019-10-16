# Generated by Django 2.2.3 on 2019-07-09 05:47

from django.db import migrations, models
import django.db.models.deletion
import django.db.models.manager


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Street',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
            ],
            managers=[
                ('streets', django.db.models.manager.Manager()),
            ],
        ),
        migrations.CreateModel(
            name='Dustbin',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.CharField(max_length=10)),
                ('is_full', models.BooleanField(default=False)),
                ('is_paid', models.BooleanField(default=False)),
                ('street', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='my_dustbins', to='manager.Street')),
            ],
            managers=[
                ('dustbins', django.db.models.manager.Manager()),
            ],
        ),
    ]