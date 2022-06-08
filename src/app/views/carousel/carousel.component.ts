import { Component, Input, OnInit } from '@angular/core';
import { ImdbService } from 'src/app/services/imdb.service';
import { CarrouselAnimation, fadeIn, fadeOut } from './carousel.animations';
import { trigger, transition, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition('void => fade', [
        useAnimation(fadeIn, { params: { time: '1s' } }),
      ]),
      transition('fade => void', [
        useAnimation(fadeOut, { params: { time: '1s' } }),
      ]),
    ]),
  ],
})
export class CarouselComponent implements OnInit {
  @Input() animationType = CarrouselAnimation.Fade;
  public movies: any = [];
  currentMovie = 0;

  constructor(private imdbService: ImdbService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.imdbService.getData().subscribe((data) => {
      data.forEach((item) => {
        this.movies.push(item);

        while (this.movies.length > 10) {
          this.movies.pop();
        }
        return;
      });

      /* this.movies.forEach((movie: any) => {
        this.imdbService.getPosters(movie.id).subscribe((data) => {
          movie.image = data.posters[0].link;
          this.imdbService.putPosters(movie.id, movie);
          return;
        });
      }); */
    });
  }

  onPreviousClick() {
    const previous = this.currentMovie - 1;
    this.currentMovie = previous < 0 ? this.movies.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentMovie + 1;
    this.currentMovie = next === this.movies.length ? 0 : next;
  }
}
