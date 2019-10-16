from django.shortcuts import render, get_object_or_404, redirect
from manager.models import Street, Dustbin
from django.conf import settings

def get_streets(request):

    streets = Street.streets.all()

    context = {
        'streets': streets,
        'static_url': settings.STATIC_URL,
        'type': 'streets'
    }

    return render(request, 'pages/streets.html', context)


def show_dustbins(request, id):
    street = get_object_or_404(Street, id=id)

    context = {
        'street' : street,
        'static_url': settings.STATIC_URL,
        'type': 'streets'
    }
    return render(request, 'pages/dustbins.html', context)


def change_dustbin_status(request, dustbin_id, status):
    dustbin = get_object_or_404(Dustbin, id=dustbin_id)

    if status == 1:
        dustbin.is_full = True
        dustbin.save()
        return redirect('/single/street/%s'%(dustbin.street.id))
    else:
        dustbin.is_full = False
        dustbin.save()
        return redirect('/single/street/%s'%(dustbin.street.id))


def change_dustbin_payment_status(request, dustbin_id, status):
    dustbin = get_object_or_404(Dustbin, id=dustbin_id)

    if status == 1:
        dustbin.is_paid = True
        dustbin.save()
        return redirect('/billing/dustbins/%s'%(dustbin.street.id))
    else:
        dustbin.is_paid = False
        dustbin.save()
        return redirect('/billing/dustbins/%s'%(dustbin.street.id))


def get_streets_billing(request):

    streets = Street.streets.all()

    context = {
        'streets': streets,
        'static_url': settings.STATIC_URL,
        'type': 'billing'
    }

    return render(request, 'pages/streets.html', context)

def show_dustbins_billing(request, id):
    street = get_object_or_404(Street, id=id)

    context = {
        'street' : street,
        'static_url': settings.STATIC_URL,
        'type': 'billing'
    }
    return render(request, 'pages/dustbins.html', context)


def streets_for_collect(request):

    streets = Street.streets.all()

    context = {
        'streets': streets,
        'static_url': settings.STATIC_URL,
        'type': 'collect'
    }

    return render(request, 'pages/streets.html', context)

def show_dustbins_for_collect(request, id):
    street = get_object_or_404(Street, id=id)

    context = {
        'street' : street,
        'static_url': settings.STATIC_URL,
        'type': 'for_collect'
    }
    return render(request, 'pages/dustbins.html', context)

def change_dustbin_collect_status(request, dustbin_id, status):
    dustbin = get_object_or_404(Dustbin, id=dustbin_id)

    if status == 1:
        dustbin.is_full = True
        dustbin.save()
        return redirect('/dustbins/to/collect/%s'%(dustbin.street.id))
    else:
        dustbin.is_full = False
        dustbin.save()
        return redirect('/dustbins/to/collect/%s'%(dustbin.street.id))