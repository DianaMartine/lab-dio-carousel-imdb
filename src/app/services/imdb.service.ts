import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImdbFilmModel } from './imdb-film.model';

@Injectable({
  providedIn: 'root',
})
export class ImdbService {
  private apiKey: string = 'k_o37guv05';
  baseUrl: string = 'http://localhost:3000/items';
  baseUrlPoster: string = `https://imdb-api.com/en/API/Posters/${this.apiKey}/`;

  constructor(private httpClient: HttpClient) {}

  getData(): Observable<ImdbFilmModel[]> {
    return this.httpClient.get<ImdbFilmModel[]>(this.baseUrl);
  }

  getPosters(id: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrlPoster + id);
  }

  putPosters(id: string, body: any) {
    return this.httpClient
      .put(`${this.baseUrl}/${id}`, body)
      .subscribe((data) => {
        return data;
      });
  }
}
