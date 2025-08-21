

from django.urls import path
from .views import RoomListAPIView, BookingCreateView, UserRegisterView, CreatePaymentIntentView

urlpatterns = [
    path('rooms/', RoomListAPIView.as_view(), name='api-rooms'),
    path('bookings/', BookingCreateView.as_view(), name='api-bookings'),
    path('register/', UserRegisterView.as_view(), name='api-register'),  # New registration endpoint
    path('create-payment-intent/', CreatePaymentIntentView.as_view(), name='api-create-payment-intent'),
]
