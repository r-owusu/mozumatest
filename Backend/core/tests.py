from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import Room, Booking, CustomUser
from rest_framework.test import APIClient
from django.urls import reverse
from datetime import date

class RoomModelTest(TestCase):
    def test_room_str(self):
        room = Room.objects.create(name="Deluxe", description="Nice room", price_per_night=100.00, max_guests=2)
        self.assertEqual(str(room), "Deluxe")

class BookingModelTest(TestCase):
    def setUp(self):
        self.room = Room.objects.create(name="Suite", description="Spacious", price_per_night=200.00, max_guests=4)

    def test_booking_str(self):
        booking = Booking.objects.create(
            room=self.room,
            guest_name="Revic Osei-Owusu",
            email="revic@gmail.com",
            phone_number="1234567890",
            room_number="101",
            check_in=date(2025, 8, 20),
            check_out=date(2025, 8, 22)
        )
        self.assertEqual(str(booking), "Revic Osei-Owusu - 101")

    def test_unique_together(self):
        Booking.objects.create(
            room=self.room,
            guest_name="Saviour Aryeevor",
            email="komlasaviour@gmail.com",
            phone_number="0505692760",
            room_number="102",
            check_in=date(2025, 8, 20),
            check_out=date(2025, 8, 22)
        )
        with self.assertRaises(Exception):
            Booking.objects.create(
                room=self.room,
               guest_name="Saviour Aryeevor",
            email="komlasaviour@gmail.com",
            phone_number="0505692760",
            room_number="102",
            check_in=date(2025, 8, 20),
            check_out=date(2025, 8, 22)
            )

class CustomUserModelTest(TestCase):
    def test_custom_user_str(self):
        user = get_user_model().objects.create(username="testuser")
        self.assertEqual(str(user), "testuser")

class RoomAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()
        Room.objects.create(name="Deluxe", description="Nice room", price_per_night=100.00, max_guests=2, available=True)
        Room.objects.create(name="Suite", description="Spacious", price_per_night=200.00, max_guests=4, available=False)

    def test_list_available_rooms(self):
        url = reverse('api-rooms')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['name'], "Deluxe")

class BookingAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = get_user_model().objects.create_user(username="user1", password="pass1234")
        self.client.force_authenticate(user=self.user)
        self.room = Room.objects.create(name="Deluxe", description="Nice room", price_per_night=100.00, max_guests=2, available=True)

    def test_create_booking(self):
        url = reverse('api-bookings')
        data = {
            "room": self.room.id,
            "guest_name": "Revic Osei-Owusu",
            "email": "jrevic@gmail.com",
            "phone_number": "1234567890",
            "room_number": "101",
            "check_in": "2025-08-20",
            "check_out": "2025-08-22"
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.data["guest_name"], "Revic Osei-Owusu")
