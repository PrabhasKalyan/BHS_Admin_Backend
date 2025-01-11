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
        serializer =  InvestorSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Investor created successfully!'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def investors(request):
    investors = Investor.objects.all()
    investor_data = InvestorSerializer(investors,many=True)
    return Response(investor_data.data)

@api_view(['POST','GET'])
def investments(request):
    investor = request.user
    investments = Investment.objects.get(investor_name = investor)
    investments_serializer = InvestmentSerializer(investments,many=True)
    return Response(investments_serializer.data)
    

@api_view(['POST','GET'])
def investment(request):
    if request.method == "POST":
        data = request.data.copy()
        investor = Investor.objects.get(first_name = data["investor_name"])
        data["investor_name"] = investor.id
        investment_serializer = InvestmentSerializer(data=data)
        if investment_serializer.is_valid():
                investment_serializer.save()
                return Response(investment_serializer.data)
        return Response(investment_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == "GET":
        investments = Investment.objects.all()
        investment_serializer = InvestmentSerializer(investments,many=True)
        return Response(investment_serializer.data)
    return Response("Bad Request")


@api_view(['POSt','GET','PUT'])
def get_investment(request,id):
    if request.method == "GET":
        investment = Investment.objects.get(investment_id = id)
        investment_serializer = InvestmentSerializer(investment)
        return Response(investment_serializer.data)

    if request.method == "PUT":
        investment = Investment.objects.get(investment_id = id)
        investment_serializer = InvestmentSerializer(investment,data=request.data)
        if investment_serializer.is_valid():
            investment_serializer.save()
            return Response(investment_serializer.data)
        
    return Response("Bad Request")

    


@api_view(['POST','GET','PUT','DELETE'])
def assets(request,asset_id):
    if request.method == "GET":
        asset = Assets.objects.get(asset_id = asset_id)
        asset_serializer = AssetSerializer(asset)
        return Response(asset_serializer.data)
    if request.method == "PUT":
        data = request.data
        asset = Assets.objects.get(asset_id = asset_id)
        asset_serializer = AssetSerializer(asset,data=data)
        if asset_serializer.is_valid():
            asset_serializer.save()
            return Response({"message": "Asset created successfully","asset": asset_serializer.data},status=status.HTTP_201_CREATED)
        return Response(asset_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == "DELETE":
            asset = Assets.objects.get(asset_id = asset_id)
            asset.delete()
            return Response("Asset Deleted")


@api_view(['POST','GET'])
def only_assets(request):
    assets = Assets.objects.all()
    assets = AssetSerializer(assets,many = True)
    return Response(assets.data)    


@api_view(['POST','GET'])
def asset(request):
    if request.method == "POST":
        data = request.data.copy()
        investment = Investment.objects.get(investment_id=data["investment_asset"])
        data["investment_asset"]=investment.id
        asset_serializer = AssetSerializer(data=data)
        if asset_serializer.is_valid():
            asset_serializer.save()
            return Response({"message": "Asset created successfully","asset": asset_serializer.data},status=status.HTTP_201_CREATED)
        else:
            return Response(asset_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == "GET":
        assets = Assets.objects.all()
        serialized_assets = AssetSerializer(assets, many=True).data

        # Fetching related investment and investor details
        investments = [
            InvestmentSerializer(Investment.objects.get(id=asset["investment_asset"])).data
            for asset in serialized_assets
        ]

        investors = [
            InvestorSerializer(Investor.objects.get(id=investment["investor_name"])).data
            for investment in investments
        ]

        return Response({
            "assets": serialized_assets,
            "investments": investments,
            "investors": investors
        })


@api_view(['POST','GET','PUT'])
def get_trip(request,id):
    if request.method == "GET":
        trip = Trips.objects.get(trip_no = id)
        trip = TripSerializer(trip)
        return Response(trip.data)
    if request.method == "PUT":
        trip = Trips.objects.get(trip_no = id)
        trip_serializer = TripSerializer(trip,data=request.data)
        if trip_serializer.is_valid():
            trip_serializer.save()
            return Response("Trip Saved")
        return Response(trip_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == "DELETE":
        trip = Trips.objects.get(trip_no = id)
        trip.delete()
        return Response("Trip deleted")

    return Response("Bad Request")



@api_view(['POST','GET'])
def trip(request):
    if request.method == "POST":
        data = request.data.copy()
        asset = Assets.objects.get(numberPlate =data["asset"])
        data["asset"]=asset.asset_id
        trip = TripSerializer(data=data)
        if trip.is_valid():
            trip.save()
            return Response(trip.data)
        return Response(trip.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == "GET":
        trips = Trips.objects.all()
        trips_serialized = TripSerializer(trips, many=True)
        
        assets = Assets.objects.all()
        assets_serialized = AssetSerializer(assets, many=True)
        
        response_data = []
        for trip in trips_serialized.data:
            asset_number_plate = next(
                (asset["numberPlate"] for asset in assets_serialized.data ), 
                None
            )
            trip["asset"] = asset_number_plate
            response_data.append(trip)
        
        return Response(response_data)

    return Response("Bad Request")



@api_view(['POST','GET'])
def dashboard(request):
    investor = request.user
    investments = Investment.objects.get(investor_name = investor)
    trips = Trips.objects.get(investor_name_trip=investor)
    assets = Assets.objects.get(investor_asset=investor)
    amount = 0
    investments = 0
    no_assets=0
    no_trips=0
    for investment in investments:
        amount += investment.amount
        investments+=1

    for trip in trips:
        no_trips+=1

    for assets in assets:
        no_assets+=1

    trips_serializer = TripSerializer(trips,many=True)


    upper_data={
        "amount":amount,
        "invetsments":investments,
        "no_assets":no_assets,
        "no_trips":no_trips,
        "trips":trips_serializer.data
    }
    return Response(upper_data)
    
    

@api_view(["POST","GET"])
def approve_investor(request):

    if request.method == "POST":
        data = request.data
        id = data["userid"]
        investor = Investor.objects.get(id = id)
    
    # Extract data for each model
    investor_info_data = request.data.get("investor_info")
    trade_license_data = request.data.get("trade_license")
    signing_authorities_data = request.data.get("signing_authorities")
    contact_details_data = request.data.get("contact_details")
    group_companies_data = request.data.get("group_companies")
    bank_details_data = request.data.get("bank_details")
    power_of_attorney_data = request.data.get("power_of_attorney")

    # Initialize serializers
    investor_serializer = InvestorInfoSerializer(data=investor_info_data)
    trade_license_serializer = TradeLicenseSerializer(data=trade_license_data)
    signing_authorities_serializer = SigningAuthoritiesSerializer(data=signing_authorities_data)
    contact_details_serializer = ContactdetailsSerializer(data=contact_details_data)
    group_companies_serializer = GroupcompaniesSerializer(data=group_companies_data)
    bank_details_serializer = BankDetailsSerializer(data=bank_details_data)
    power_of_attorney_serializer = PowerofAttorneySerializer(data=power_of_attorney_data)

    # Validate and save each serializer
    serializers = {
        "investor_info": investor_serializer,
        "trade_license": trade_license_serializer,
        "signing_authorities": signing_authorities_serializer,
        "contact_details": contact_details_serializer,
        "group_companies": group_companies_serializer,
        "bank_details": bank_details_serializer,
        "power_of_attorney": power_of_attorney_serializer,
    }

    errors = {}
    for key, serializer in serializers.items():
        if serializer.is_valid():
            serializer.save(investor = investor)
        else:
            errors[key] = serializer.errors

    if errors:
        return Response({"errors": errors}, status=status.HTTP_400_BAD_REQUEST)

    return Response({"message": "All data saved successfully"}, status=status.HTTP_201_CREATED)




