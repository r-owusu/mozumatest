

from django.urls import path
from .views import RoomListAPIView, BookingCreateView, UserRegisterView

urlpatterns = [
    path('api/rooms/', RoomListAPIView.as_view(), name='api-rooms'),
    path('api/bookings/', BookingCreateView.as_view(), name='api-bookings'),
    path('api/register/', UserRegisterView.as_view(), name='api-register'),  # New registration endpoint
]
