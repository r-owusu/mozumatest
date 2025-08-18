
from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Room, Booking, CustomUser
from .serializers import RoomSerializer, BookingSerializer, UserRegisterSerializer

# --------------------------
# API view for Rooms
# --------------------------
class RoomListAPIView(generics.ListAPIView):
    queryset = Room.objects.filter(available=True)
    serializer_class = RoomSerializer


# --------------------------
# API view for Booking
# --------------------------
class BookingCreateView(generics.CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [permissions.IsAuthenticated]  # Only logged-in users can book

    def get_serializer_context(self):
        return {'request': self.request}  # Pass request to serializer (to capture user)


# --------------------------
# API view for User Registration
# --------------------------
class UserRegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = [permissions.AllowAny]  # Anyone can register
