from django.contrib import admin

from .models import *

admin.site.register([
    Customer,
    Order,
    OrderItem,
    Category,
    Product,
    Establishment,
])

