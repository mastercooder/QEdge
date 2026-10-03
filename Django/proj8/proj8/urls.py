from django.contrib import admin
from django.urls import path, include
from proj8 import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='home'),
    path('app1/', include('app1.urls', namespace='app1'))
]
