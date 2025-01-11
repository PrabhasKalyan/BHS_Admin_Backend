from rest_framework import serializers
from .models import *


class InvestorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investor
        fields = (
            "username",
            "first_name",
            "email",
            "password",
            "phonenumber",
            "address",
            "dob",
            "approved"
        )
        extra_kwargs = {
            "password": {"write_only": True}
        }

    

    def create(self, validated_data):

        email = validated_data.get("email")

        investor = Investor.objects.create(
            username=email,
            email=validated_data["email"],
            first_name=validated_data["first_name"],
            phonenumber=validated_data["phonenumber"],
            address=validated_data["address"],
            dob=validated_data["dob"]
        )
        password=validated_data["password"]
        investor.set_password(password)
        investor.save()
        return investor
    

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investor
        fields = ("email","password")

class InvestmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investment
        fields = "__all__"

class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trips
        fields = "__all__"

class AssetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assets
        fields = "__all__"

class InvestorInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestorInfo
        fields = "__all__"

class TradeLicenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = TradeLicense
        field = "__all__"

class SigningAuthoritiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SigningAuthorities
        field = "__all__"

class ContactdetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contactdetails
        fields = '__all__'

class GroupcompaniesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Groupcompanies
        fields = '__all__'

class BankDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankDetails
        fields = '__all__'

class PowerofAttorneySerializer(serializers.ModelSerializer):
    class Meta:
        model = PowerofAttorney
        fields = '__all__'

