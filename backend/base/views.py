from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.

class HomeView(APIView):

    
    def get(self, request):
        items = [{"id": 1, "name": "Item 1"}, {"id": 2, "name": "Item 2"}]
        return Response(items)