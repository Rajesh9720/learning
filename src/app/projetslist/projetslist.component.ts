import { Component, OnInit } from '@angular/core';
import { UsersService } from '../apis.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projetslist',
  templateUrl: './projetslist.component.html',
  styleUrls: ['./projetslist.component.css'],
})
export class ProjetslistComponent implements OnInit {
  projectlistdata$: Observable<any[]> | null = null;
  projectname: string = 'Rajesh Kumar';
  selectedUser: any | null = null;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.projectlistdata$ = this.usersService.getproject();
    this.projectlistdata$.subscribe(
      (data) => {
        console.log('Project data:', data); // Optional: Log the fetched data
      },
      (error) => {
        console.error('Error fetching projects:', error); // Optional: Handle errors
      }
    );
  }

  showUserDetails(user: any) {
    console.log('Clicked user:', user);
    this.selectedUser = user;
  }
}
