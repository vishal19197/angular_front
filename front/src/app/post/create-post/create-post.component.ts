import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ManegPostService } from '../maneg-post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../list-post/post.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  myform: FormGroup
  postId: string = '';
  isEdit: boolean = false;
  constructor(
    private route: Router,
    private fb: FormBuilder,
    private postService: ManegPostService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
    this.router.paramMap.subscribe(data => {
      this.postId = data.get('id') || '';
    })
    if (this.postId !== '') {
      this.isEdit = true;
      this.getDataById();
    }
  }

  initForm() {
    this.myform = this.fb.group({
      title: [],
      comment: []
    })
  }

  submitData() {
    if (this.myform.valid) {
      let postData = this.myform.value;
      this.postService.savePost(postData).subscribe(data => {
        console.log(data);
        this.route.navigate(['/']);
        this.myform.reset();
      })
    }
  }
  getDataById() {
    this.postService.getOnePost(this.postId).subscribe((data: Post) => {
      console.log(data);
      this.myform.patchValue(data.data);
    })
  }
  upadteData() {
    this.postService.updatePost(this.postId, this.myform.value).subscribe(data => {
      this.myform.reset()
      this.route.navigate(['/']);
    })
  }

}
