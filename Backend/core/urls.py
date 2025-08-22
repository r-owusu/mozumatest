from django.urls import path
from .views import (
    RoomListAPIView,
    BookingCreateView,
    UserRegisterView,
    CreatePaymentIntentView,
    UserListCreateAPIView  # Added this import
)

urlpatterns = [
    path('rooms/', RoomListAPIView.as_view(), name='api-rooms'),
    path('bookings/', BookingCreateView.as_view(), name='api-bookings'),
    path('register/', UserRegisterView.as_view(), name='api-register'),
    path('create-payment-intent/', CreatePaymentIntentView.as_view(), name='api-create-payment-intent'),
    path('users/', UserListCreateAPIView.as_view(), name='user-list-create'),
]
