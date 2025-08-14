from django.contrib.auth.models import AbstractUser 
from django.db import models
from django.contrib.auth import get_user_model


# Create your models here.
class Room(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()  
    price_per_night = models.DecimalField(max_digits=7, decimal_places=2)
    max_guests = models.IntegerField()
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Booking(models.Model):

    user = models.ForeignKey('CustomUser', on_delete=models.CASCADE, related_name='bookings', null=True, blank=True)
    room = models.ForeignKey('Room', on_delete=models.CASCADE, related_name='bookings')
    guest_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=10)
    room_number = models.CharField(max_length=10)
    check_in = models.DateField()
    check_out = models.DateField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.guest_name} - {self.room_number}"

    class Meta:
        unique_together = ('room', 'check_in', 'check_out')


class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True, null=True)

    def __str__(self):
        return self.username

