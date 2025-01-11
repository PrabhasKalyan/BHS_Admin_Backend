from urllib import response
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import *
from rest_framework import status
from django.contrib.auth import login,logout
from django.contrib.auth import authenticate
from .models import *



@api_view(['POST'])
def signup(request):
    if request.method == "POST":
        serializer =  AdminSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Admin created successfully!'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login_view(request):
    if request.method == "POST":
        email = request.data.get("email")
        password = request.data.get("password")
        
        user = authenticate(request, username=email, password=password)
        
        if user is not None:
            login(request, user)
            return Response({"message": "Login successful"})
        else:
            return Response({"message": "Invalid credentials"}, status=400)



