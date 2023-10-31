from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from .serializers import UserSerializer, UserSerializerWithToken

# Create your views here.

class HomeView(APIView):
    
    def get(self, request):
        items = [{"id": 1, "name": "Item 1"}, {"id": 2, "name": "Item 2"}]
        return Response(items)


class RegisterUser(APIView):    
    def post(self, request):
        data = request.data
        print(data)
        user = User.objects.create(username=data['username'], password=make_password(data['password']))
        seralizer = UserSerializerWithToken(user, many=False)
        return Response(seralizer.data)


class FetchUser(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        seralizer = UserSerializer(user, many=False)
        return Response(seralizer.data)

