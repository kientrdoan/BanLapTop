from django.shortcuts import render

# Create your views here.
def get_index(request):
    return render(request, 'index.html')

def get_cart(request):
    return render(request, 'cart.html')

def get_product(request):
    return render(request, 'product.html')

def get_order(request):
    return render(request, 'order.html')

def get_order_detail(request):
    return render(request, 'orderdetail.html')