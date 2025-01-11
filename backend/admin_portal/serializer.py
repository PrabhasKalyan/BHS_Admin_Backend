from rest_framework import serializers
from .models import *


class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = (
            "username",
            "first_name",
            "email",
            "password",
            "phonenumber",
            "address",
        )
        extra_kwargs = {
            "password": {"write_only": True}
        }

    def create(self, validated_data):
        admin = Admin.objects.create(
            username=validated_data['email'],
            first_name=validated_data['first_name'],
            email=validated_data["email"],
            phonenumber=validated_data["phonenumber"],
            # address=validated_data["address"],
            # dob=validated_data["dob"]
        )
        password=validated_data["password"]
        admin.set_password(password)
        admin.save()
        return admin
    

