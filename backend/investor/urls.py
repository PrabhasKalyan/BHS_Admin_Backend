from django.urls import path,include
from investor import views

urlpatterns=[
    path("signup/",views.signup,name="signup"),
    # path("login/",views.login_view,name="login"),
    # path("logout/",views.logout_view,name="logout"),
    path("investments/",views.investments,name="investments"),
    path("investment/",views.investment,name="investment"),
    path("only_assets/",views.only_assets,name="only_assets"),
    path("assets/<str:asset_id>/",views.assets,name="assets"),
    path("asset/",views.asset,name="asset"),
    path('dashboard/',views.dashboard,name="dashboard"),
    path('investors/',views.investors,name="investor"),
    path("trip/",views.trip,name="trip"),
    path("get_trip/<str:id>/",views.get_trip),
    path('get_investment/<str:id>/',views.get_investment,name="get_investment"),
    path("approve_investor/",views.approve_investor,name="approve_investor")
]


