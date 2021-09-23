import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  title!: string;
  body!: string;

  constructor(private postService: PostService) {

   }

  ngOnInit(): void {

  }

  addPost(){
    return this.postService.addPost(this.title, this.body).subscribe();
  }
}
