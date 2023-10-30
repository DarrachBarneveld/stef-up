from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import UserSerializer

# Create your views here.

class HomeView(APIView):
    
    def get(self, request):
        items = [{"id": 1, "name": "Item 1"}, {"id": 2, "name": "Item 2"}]
        return Response(items)


class FetchUser(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        user = request.user
        seralizer = UserSerializer(user, many=False)
        return Response(seralizer.data)

