from django.contrib.auth.models import User
from django.db import models


class Child(models.Model):
    parent = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Батько")
    childname = models.CharField(verbose_name="Ім'я дитини", max_length=30)
    age = models.IntegerField(verbose_name="Вік дитини", null=True)
    date_of_birth = models.DateField(verbose_name="Дата народження", null=True)

    def __str__(self):
        return self.childname

    class Meta:
        verbose_name = 'Дитина'
        verbose_name_plural = 'Діти'
        unique_together = ('childname', 'parent')
        ordering = ['parent', 'childname']


class Results_of_test(models.Model):
    child = models.ForeignKey(Child, on_delete=models.CASCADE, verbose_name="Ім'я дитини")
    right_answers = models.IntegerField(verbose_name="Кількість правильних відповідей")
    wrong_answers = models.IntegerField(verbose_name="Кількість неправильних відповідей")
    success = models.BooleanField(verbose_name="Тестування успішне")
    datetime = models.DateTimeField(verbose_name="Дата тестування", auto_now_add=True)

    def __str__(self):
        return f"{self.child.childname} - {str(self.datetime.strftime('%d.%m.%Y, %H:%M'))}"

    def get_age(self):
        age = self.child.age
        return age

    class Meta:
        verbose_name = 'Результат тестування'
        verbose_name_plural = 'Результати тестувань'
        ordering = ['-datetime']