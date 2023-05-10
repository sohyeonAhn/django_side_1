from django.db import models

class Question(models.Model):
    # 제목, 작성자, 내용, 카테고리, 첨부파일, 날짜
    title = models.CharField()
    author = models.CharField()
    content = models.TextField()
    category = models.CharField()
    addFile = models.FileField()
    write_date = models.DateTimeField()

'''
class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    content = models.TextField()
    create_date = models.DateTimeField()

    def __str__(self):
        return self.subject
'''