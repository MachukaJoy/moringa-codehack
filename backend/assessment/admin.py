from django.contrib import admin
from .models import *

# Register your models here.
class AnswerInline(admin.TabularInline):
    model = MCAnswer

class QuestionAdmin(admin.ModelAdmin):
    inlines = [AnswerInline]

admin.site.register(MCQuestion, QuestionAdmin)
admin.site.register(MCAnswer)

class KataTestInline(admin.TabularInline):
    model = KataTest

class KataQuestionAdmin(admin.ModelAdmin):
    inlines = [KataTestInline]

admin.site.register(KataQuestion)
admin.site.register(KataTest)

admin.site.register(SQuestion)

admin.site.register(Assessment)
admin.site.register(Grade)
admin.site.register(Feedback)

