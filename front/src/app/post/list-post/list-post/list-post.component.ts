import { Component, OnInit } from '@angular/core';
import { ManegPostService } from '../../maneg-post.service';
import { Post } from '../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  constructor(
    private postService: ManegPostService,
    private router:Router
  ) { }

  posts

  ngOnInit() {
    this.listOfAllPost()
  }

  listOfAllPost() {
    this.postService.getPost().subscribe(
      (data) => {
        if (data.code == 200) {
          this.posts = data.data;
        }
      }
    ), (error) => {
      console.log("error is", error);
    }
  }
  editData(id: string) {
    this.router.navigate([`new-post/${id}`]);
    // console.log(id)
  }
  deleteData(id: string) {
    this.postService.deletePost(id).subscribe(data =>{
      console.log(data)
      this.listOfAllPost();
    })
  }



}
