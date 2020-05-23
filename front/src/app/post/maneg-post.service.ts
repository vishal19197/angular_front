import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Post } from './list-post/post.model'
@Injectable({
  providedIn: 'root'
})
export class ManegPostService {

  api = environment.apiurl

  constructor(private http : HttpClient) { }

  getPost() {
    return this.http.get<Post>(`${this.api}api/get-post`);
  }
  savePost(newPost){
    return this.http.post(`${this.api}api/save-post`,newPost);
  }
  getOnePost(PostId:string){
    return this.http.get(`${this.api}api/get-one?id=${PostId}`);
  }
  updatePost(id:string,postData){
    return this.http.put(`${this.api}api/update-one?id=${id}`,postData);
  }
  deletePost(id:string){
    return this.http.delete(`${this.api}api/delete?id=${id}`);
  }
}
