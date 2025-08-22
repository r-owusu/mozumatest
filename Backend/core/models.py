from django.contrib.auth.models import AbstractUser
from django.db import models, transaction
from django.core.exceptions import ValidationError
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

class Room(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price_per_night = models.DecimalField(max_digits=7, decimal_places=2)
    max_guests = models.IntegerField()
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Booking(models.Model):
    user = models.ForeignKey(
        'CustomUser',
        on_delete=models.CASCADE,
        related_name='bookings',
        null=True,
        blank=True
    )
    room = models.ForeignKey('Room', on_delete=models.CASCADE, related_name='bookings')
    guest_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    room_number = models.CharField(max_length=10)
    check_in = models.DateField()
    check_out = models.DateField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.guest_name} - {self.room_number}"

    class Meta:
        # keep original unique_together if you still want exact-match uniqueness:
        unique_together = ('room', 'check_in', 'check_out')

    def clean(self):
        # basic logical validation
        if self.check_in >= self.check_out:
            raise ValidationError({"check_out": "check_out must be after check_in"})

        # overlapping booking detection:
        overlapping = Booking.objects.filter(room=self.room).exclude(pk=self.pk).filter(
            check_in__lt=self.check_out,
            check_out__gt=self.check_in
        )
        if overlapping.exists():
            raise ValidationError("The room is already booked for the selected dates.")

    def save(self, *args, **kwargs):
        # run model validation before saving (this will raise ValidationError on admin/save)
        self.full_clean()
        # Use an atomic transaction so checks + writes are safe
        with transaction.atomic():
            super().save(*args, **kwargs)
            # mark room unavailable once a booking exists (change behaviour if you prefer time-based availability)
            # If you want "available" to mean "has no future bookings", you need a more advanced logic.
            self.room.available = False
            self.room.save(update_fields=['available'])


@receiver(post_delete, sender=Booking)
def handle_booking_deleted(sender, instance, **kwargs):
    """
    When a booking is deleted, mark the room available only if no other bookings exist for it.
    This avoids making a room available if other bookings still exist.
    """
    room = instance.room
    if not Booking.objects.filter(room=room).exists():
        Room.objects.filter(pk=room.pk).update(available=True)


class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True, null=True)

    def __str__(self):
        return self.username
