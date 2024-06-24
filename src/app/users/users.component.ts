import { Component, OnInit } from '@angular/core';
import {UsersService} from '../apis.service'
import { Observable } from 'rxjs';
import { PaginatePipe, PaginationControlsDirective } from 'ngx-pagination';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit {
  movies$: Observable<any[]> | null = null; // Assuming movies is an array
  
  error: string | null = null;

  // Pagination properties
  currentPage = 1;
  itemsPerPage = 20; 
  searchText = '';
  filteredMovies: any[] = [];
  allMovies: any[] = [];

  constructor(private movieService: UsersService) { }

  ngOnInit(): void {
    this.movies$ = this.movieService.getMovies();

    this.movies$.subscribe(
      movies => {
        this.allMovies = movies.map(movie => ({
          title: movie.movie,          
          url: movie.imdb_url,
          rating: movie.rating
        }));
        this.filteredMovies = [...this.allMovies]; // Initialize filtered movies
      },
      error => {
        this.error = 'Error fetching movies.';
        console.error(error);
      }
    );
  }

  searchMovies(): void {
    const searchTextLower = this.searchText.toLowerCase().trim();

    if (searchTextLower.length === 0) {
      this.filteredMovies = [...this.allMovies];
    } else {
      this.filteredMovies = this.allMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchTextLower)
      );
    }
  }
}
