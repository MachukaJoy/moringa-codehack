from django.contrib import admin
from .models import *

# Register your models here.
class AnswerInline(admin.TabularInline):
    model = Answer

class QuestionAdmin(admin.ModelAdmin):
    inlines = [AnswerInline]

admin.site.register(Question, QuestionAdmin)

admin.site.register(Answer)
admin.site.register(Assessment)
admin.site.register(Grade)
admin.site.register(Feedback)

