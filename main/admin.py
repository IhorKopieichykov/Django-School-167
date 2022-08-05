from django.contrib import admin
from .models import Results_of_test, Child


class ChildAdmin(admin.ModelAdmin):
    list_display = ('id', 'childname', 'age', 'date_of_birth', 'parent')
    list_display_links = ('id', 'childname')
    search_fields = ('childname', 'parent')
    list_filter = ('age', 'date_of_birth', 'parent')


class Results_of_testAdmin(admin.ModelAdmin):
    list_display = ('id', 'datetime', 'child', 'get_age', 'right_answers', 'wrong_answers',  'success')
    search_fields = ('child', 'datetime')
    list_filter = ('datetime', 'child', 'success')


admin.site.register(Child, ChildAdmin)
admin.site.register(Results_of_test, Results_of_testAdmin)
