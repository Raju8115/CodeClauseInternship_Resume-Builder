from rest_framework import serializers
from .models import Users, Resume

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'


# class ExperienceSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Experience
#         fields = '__all__'

# class SkillSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Skill
#         fields = '__all__'

class ResumeSerializer(serializers.ModelSerializer):
    # experiences = ExperienceSerializer(many=True, read_only=True)
    
    class Meta:
        model = Resume
        fields = '__all__'