from django.db import models
from django.contrib.auth.models import User


class Question(models.Model):
    # 제목, 작성자, 내용, 카테고리, 첨부파일, 날짜
    title = models.CharField(max_length=200)
    author = models.ForeignKey(User, on_delete=models.CASCADE, default="user")
    #author = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    content = models.TextField()
    catego = models.CharField(max_length=50, default="diary")
    addFile = models.FileField(upload_to='uploads/', null=True, blank=True)
    write_date = models.DateTimeField()

    def __str__(self):
        return self.subject