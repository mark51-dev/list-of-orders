import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import { environment } from '../../../../environments/environment.prod';
import {Post} from '../interfaces/post';
import {map} from 'rxjs/operators';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.frbUrl}posts.json`).pipe(
      map((postItem) => {
        return Object.keys(postItem).map((post) => {
          return {
            ...postItem[post],
            id: post
          };
        });
      })
    );
  }
  createPost(data: Post) {
    return this.http.post(`${environment.frbUrl}posts.json`, data);
  }
}
