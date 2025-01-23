import { ResolveFn } from '@angular/router';
import {Post} from "../service/postsService/post.interface";
import {inject} from "@angular/core";
import {Observable} from "rxjs";
import {PostsService} from "../service/postsService/post.service";

export const itemsResolver: ResolveFn<Observable<Post[]>> = () => {
  const postService = inject(PostsService);
  return postService.getPosts();
};
