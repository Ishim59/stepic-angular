import {Component, OnInit} from '@angular/core';
import {Post} from "../service/postsService/post.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-items-page',
  standalone: true,
  imports: [],
  templateUrl: './items-page.component.html',
  styleUrl: './items-page.component.scss'
})
export class ItemsPageComponent implements OnInit{
  posts: Post[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.posts = data['postsData'] || [];
    });
  }
}
