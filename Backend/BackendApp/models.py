from django.db import models

# Create your models here.

class Users(models.Model):
    Firstname = models.CharField(max_length=128)
    Lastname = models.CharField(max_length=128)
    EmailId = models.EmailField(max_length=254)
    Username = models.CharField(max_length=128, unique=True) 


    def __str__(self):
        return self.Username

# class Experience(models.Model):
    # jobRole = models.CharField(max_length=255, blank=True)
    # companyName = models.CharField(max_length=255, blank=True)
    # startDate = models.DateField(blank=True, null=True)
    # endDate = models.DateField(blank=True, null=True)
    # summary = models.TextField(blank=True)

    # def __str__(self):
    #     return f"{self.jobRole} at {self.companyName}"

class Resume(models.Model):
    firstname = models.CharField(max_length=255,blank=True)
    lastname = models.CharField(max_length=255,blank=True)
    job_title = models.CharField(max_length=255, blank=True)
    phone_no = models.CharField(max_length=20,blank=True)
    email_address = models.EmailField(blank=True)
    address = models.TextField(blank=True)
    city = models.CharField(max_length=255,blank=True)
    postcode = models.CharField(max_length=20,blank=True)
    state_name = models.CharField(max_length=255,blank=True)
    country_name = models.CharField(max_length=255,blank=True)
    experience_summary = models.TextField(blank=True)
    qualification_name = models.CharField(max_length=255, blank=True)
    university_name = models.CharField(max_length=255, blank=True)
    joined_date = models.IntegerField(blank=True, null=True)
    completed_date = models.IntegerField(blank=True, null=True)
   # jobRole = models.CharField(max_length=255, blank=True)
    #companyName = models.CharField(max_length=255, blank=True)
   # startDate = models.DateField(blank=True, null=True)
   # endDate = models.DateField(blank=True, null=True)
   # summary = models.TextField(blank=True)
   # name = models.CharField(max_length=255, blank=True)

    # experiences = models.ManyToManyField(Experience, blank=True)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"

# class Skill(models.Model):
#     # name = models.CharField(max_length=255)

#     def __str__(self):
#         return self.name