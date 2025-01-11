from datetime import date, timedelta
from django.db import models
from django.contrib.auth.models import AbstractUser,User
from phonenumber_field.modelfields import PhoneNumberField
import uuid

class Investor(User):
    phonenumber = models.CharField(max_length=20,default="")
    userType = models.CharField(max_length=20,default="")
    address = models.CharField(max_length=1024,blank=True)
    dob = models.DateField(null=True, blank=True)
    approved  = models.BooleanField(default=False)    
    def __str__(self):
        return self.username


from django.db import models
from datetime import date, timedelta


class Investment(models.Model):
    investment_id = models.UUIDField(default=uuid.uuid4, unique=True)
    investor_name = models.ForeignKey(Investor,on_delete=models.CASCADE)
    amount = models.PositiveIntegerField()
    roi = models.PositiveIntegerField()
    deposit_date = models.DateField(auto_now_add=True)
    maturity_date = models.DateField(auto_now_add=True)
    contract = models.FileField(upload_to='pdfs/',null=True,blank=True)
    def __str__(self):
        return f"Investment {self.investment_id} by {self.investor_name} - Amount: {self.amount}, Maturity Date: {self.maturity_date}"


class Assets(models.Model):
    asset_id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True)
    numberPlate = models.CharField(max_length=20,default="")
    investment_asset = models.ForeignKey(Investment,on_delete=models.CASCADE)
    type = models.CharField(max_length=256)
    brand = models.CharField(max_length=256)
    asset_model = models.CharField(max_length=256)
    wialon = models.CharField(max_length=100,default="")
    def __str__(self):
        return f"Asset of {self.investment_asset.investment_id} - {self.type} {self.brand} {self.asset_model}"
    


class Trips(models.Model):
    asset = models.ForeignKey(Assets,on_delete=models.CASCADE,blank=True,null=True)
    trip_no = models.AutoField(primary_key=True)
    to_location = models.CharField(max_length=100)
    from_location = models.CharField(max_length=100)
    start_date = models.DateField(default=date.today)  
    def default_end_date():
        return date.today() + timedelta(days=365)
    end_date = models.DateField(default=default_end_date)
    def __str__(self):
        return f"Trip No: {self.trip_no} - {self.from_location} to {self.to_location}"



class InvestorInfo(models.Model):
    investor = models.ForeignKey(Investor,on_delete=models.CASCADE)
    type=models.CharField(max_length=200)
    investorinfo_id = models.CharField(max_length=50)
    name= models.CharField(max_length=100)
    email=models.EmailField()
    phone=models.CharField(max_length=20)
    agreed_roi=models.CharField(max_length=10)
    initial_investment = models.CharField(max_length=200)
    def __str__(self):
        return self.investor.first_name

class TradeLicense(models.Model):
    investor = models.ForeignKey(Investor,on_delete=models.CASCADE)
    number = models.CharField(max_length=200)
    issue_date = models.DateField()
    expiry_date = models.DateField()
    place_establishment = models.CharField(max_length=200)
    soft_copy = models.FileField()
    def __str__(self):
        return self.investor.first_name

class SigningAuthorities(models.Model):
    signers = models.JSONField(default=list)
    def __str__(self):
        return self.investor.first_name
    
class Contactdetails(models.Model):
    poc = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=200)
    po_box = models.CharField(max_length=20)
    def __str__(self):
        return self.investor.first_name
    

class Groupcompanies(models.Model):
    companies = models.JSONField(default=list)
    def __str__(self):
        return self.investor.first_name
    

class BankDetails(models.Model):
    bank_name = models.CharField(max_length=200)
    account_name = models.CharField(max_length=200)
    iban = models.CharField(max_length=200)
    swift_code = models.CharField(max_length=200)
    def __str__(self):
        return self.investor.first_name


class PowerofAttorney(models.Model):
    binary = models.BooleanField(default=False)
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone_number = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    po_box = models.CharField(max_length=200)
    soft_copy = models.FileField()
    def __str__(self):
        return self.investor.first_name


