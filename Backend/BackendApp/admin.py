from django.contrib import admin
from .models import Users, Resume


class UserAdmin(admin.ModelAdmin):
    list_display = ("Firstname", "Lastname", "EmailId", "Username")

admin.site.register(Users, UserAdmin) 
 
# Register your models here.

class ResumeAdmin(admin.ModelAdmin):
    # list_display = ['jobRole', 'companyName', 'startDate', 'endDate', 'summary']
    # search_fields = ['jobRole', 'companyName']
    # Add more customization as needed

# class ResumeAdmin(admin.ModelAdmin):
    list_display = ['firstname', 'lastname', 'job_title', 'phone_no', 'email_address']
    search_fields = ['firstname', 'lastname', 'email_address']
    # filter_horizontal = ['experiences']  # If using a ManyToMany field
    # Add more customization as needed

# class SkillAdmin(admin.ModelAdmin):
    # list_display = ['name']
    # search_fields = ['name']
    # Add more customization as needed

# Register the models with the custom admin classes
# admin.site.register(Experience, ExperienceAdmin)
admin.site.register(Resume, ResumeAdmin)
# admin.site.register(Skill, SkillAdmin)