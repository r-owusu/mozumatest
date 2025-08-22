import stripe
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import generics, permissions
from .models import Room, Booking, CustomUser
from .serializers import (
    RoomSerializer,
    BookingSerializer,
    UserRegisterSerializer,
    CustomUserSerializer
)

# --------------------------
# Stripe Payment Intent API
# --------------------------
class CreatePaymentIntentView(APIView):
    permission_classes = [AllowAny]  # Change to IsAuthenticated if login is required

    def post(self, request):
        stripe.api_key = settings.STRIPE_SECRET_KEY
        amount = int(float(request.data.get("amount", "0")) * 100)  # Convert dollars to cents

        try:
            intent = stripe.PaymentIntent.create(
                amount=amount,
                currency="usd",
                metadata={"integration_check": "accept_a_payment"},
            )
            return Response({"clientSecret": intent["client_secret"]})
        except Exception as e:
            return Response({"error": str(e)}, status=400)

# --------------------------
# Rooms API
# --------------------------
class RoomListAPIView(generics.ListAPIView):
    queryset = Room.objects.filter(available=True)
    serializer_class = RoomSerializer

# --------------------------
# Booking API
# --------------------------
class BookingCreateView(generics.CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_context(self):
        return {'request': self.request}

# --------------------------
# User API (Admin Only)
# --------------------------
class UserListCreateAPIView(generics.ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [permissions.IsAdminUser]

# --------------------------
# User Registration API
# --------------------------
class UserRegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserRegisterSerializer
    permission_classes = [permissions.AllowAny]
