class Comment(models.Model):
    cmnt_id = models.PositiveIntegerField(unique=True,editable=False)
    content = models.TextField()


    def save(self,*args,**kwargs):
        if not self.cmnt_id:
            id = Comment.objects.aggregate(models.Max('cmnt_id'))['cmnt_id_max']
            self.cmnt_id = id + 1 if id else 1001
        super(Comment,self).save(*args,**kwargs)

    def __str__(self):
        return f"Comment Id {self.cmnt_id}"