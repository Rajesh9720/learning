import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {UsersService} from '../apis.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit {
  comments$: Observable<any[]> | null = null;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.comments$ = this.usersService.getComments();
  }
}

