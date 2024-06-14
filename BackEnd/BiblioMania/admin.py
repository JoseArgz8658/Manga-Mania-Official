from django.contrib import admin
from .models import Manga, Resena, EstadoMangaUsuario

# Register your models here.
@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)
  
@admin.register(Manga)
class MangaAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'publication_date', 'status')
    list_filter = ('status', 'author')
    search_fields = ('title', 'author')

@admin.register(Resena)
class ResenaAdmin(admin.ModelAdmin):
    list_display = ('manga', 'user', 'rating', 'review_date')
    list_filter = ('rating', 'review_date')
    search_fields = ('user', 'manga__title')

@admin.register(EstadoMangaUsuario)
class EstadoMangaUsuarioAdmin(admin.ModelAdmin):
    list_display = ('user', 'manga', 'estado')
    list_filter = ('estado', 'user')
    search_fields = ('user', 'manga__title')