from django.urls import path
from . import views

urlpatterns  = [
    path('', views.get_index),
    path('cart', views.get_cart),
    path('product', views.get_product),
    path('order', views.get_order),
    path('orderdetail', views.get_order_detail)
]