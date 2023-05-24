import markdown
from django import template
from django.utils.safestring import mark_safe

register = template.Library()


@register.filter
def sub(value, arg):
    return value - arg

@register.filter
def mark(value):
    extentions = ["nl2br", "fenced_code"]
    return mark_safe(markdown.markdown(value, extensions=extentions))

@register.filter
def dict_lookup(dictionary, key):
    return dictionary.get(key) 

@register.filter
def diary_title(dictionary, key):
    values = dictionary.get(key)
    title = values["title"]
    return title

@register.filter
def get_date(dictionary):
    year = dictionary[1][1]['date'].year
    month = dictionary[1][1]['date'].month
    values = str(year)+"년 "+str(month)+"월"
    return values

@register.filter
def get_date_str(dictionary):
    year = dictionary[1][1]['date'].year
    month = dictionary[1][1]['date'].month
    values = str(year) + str(month)
    return values

@register.filter
def diary_day(strings):
    strings = strings[:-2]
    return int(strings)