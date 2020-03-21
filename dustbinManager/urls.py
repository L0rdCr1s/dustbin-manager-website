from django.contrib import admin
from django.urls import path
from manager import views

urlpatterns = [
    path('', views.get_streets, name="get_streets"),
    path('single/street/<int:id>', views.show_dustbins, name="show_dustbins"),
    path('change/dustbin/status/<int:dustbin_id>/<int:status>', views.change_dustbin_status, name='change_status'),
    path('change/dustbin/collection/status/<int:dustbin_id>/<int:status>', views.change_dustbin_collect_status, name='change_collect_status'),
    path('change/dustbin/payment/<int:dustbin_id>/<int:status>', views.change_dustbin_payment_status, name='change_payment_status'),
    path('billing', views.get_streets_billing, name="billing"),
    path('ready/for/collect', views.streets_for_collect, name="collect"),
    path('dustbins/to/collect/<int:id>', views.show_dustbins_for_collect, name="dustbin_collect"),
    path('billing/dustbins/<int:id>', views.show_dustbins_billing, name="billing_dustbins"),
    path('admin/', admin.site.urls),
]
