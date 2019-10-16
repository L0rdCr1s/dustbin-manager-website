from django.contrib import admin
from manager.models import *

@admin.register(Street)
class StreetAdmin(admin.ModelAdmin):
    list_display = ('name', )

@admin.register(Dustbin)
class DustbinAdmin(admin.ModelAdmin):
    list_display = ('street', 'number', 'is_full', 'is_paid')

