# Generated by Django 4.0.4 on 2022-06-19 17:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='child',
            options={'ordering': ['parent', 'childname'], 'verbose_name': 'Дитина', 'verbose_name_plural': 'Діти'},
        ),
        migrations.AlterModelOptions(
            name='results_of_test',
            options={'ordering': ['child', 'datetime'], 'verbose_name': 'Результат тестування', 'verbose_name_plural': 'Результати тестувань'},
        ),
    ]
