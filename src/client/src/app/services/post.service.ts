import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts$: Observable<Post[]> = new Observable(observer => {
    observer.next([])
  })

  constructor(private api: ApiService) { }

  getPosts(){
    this.posts$ = this.api.get<Post[]>('posts');
  }

  addPost(title:string, body:string){
    const post = new Post();
    post.title =title;
    post.body = body;

    return this.api.post<Post[], Post>('create-post', post)
  }
}
