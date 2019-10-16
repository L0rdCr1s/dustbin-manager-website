from django.db import models

class Street(models.Model):

    name = models.CharField(max_length=255)

    streets = models.Manager()

    def __str__(self):
        return self.name 

class Dustbin(models.Model):

    street = models.ForeignKey(Street, related_name="my_dustbins", on_delete=models.CASCADE)
    number = models.CharField(max_length=10)
    is_full = models.BooleanField(default=False)
    is_paid = models.BooleanField(default=False)

    dustbins = models.Manager()

    def __str__(self):
        return self.number
    
    def get_street(self):
        return self.street.name