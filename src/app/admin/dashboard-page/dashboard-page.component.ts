import { Component, OnInit } from '@angular/core';
import {PostsService} from '../shared/services/posts.service';
import {Post} from '../shared/interfaces/post';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  postsList: Post[];
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe((posts) => {
      this.postsList = posts || [];
      console.log(posts);
    });
  }


}
