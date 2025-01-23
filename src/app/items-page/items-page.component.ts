import {Component, OnInit} from '@angular/core';
import {PostsService} from "../service/postsService/post.service";
import {Post} from "../service/postsService/post.interface";

@Component({
  selector: 'app-items-page',
  standalone: true,
  imports: [],
  templateUrl: './items-page.component.html',
  styleUrl: './items-page.component.scss'
})
export class ItemsPageComponent implements OnInit{
  posts: Post[] = [];
  isLoading: boolean = true;
  error: string = '';

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Произошла ошибка при загрузке данных';
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}
