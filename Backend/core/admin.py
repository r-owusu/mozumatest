from django.contrib import admin

# Register your models here.
from .models import Booking
from .models import Room


admin.site.register(Room)
admin.site.register(Booking)


