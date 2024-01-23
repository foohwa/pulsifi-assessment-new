import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DogModel} from "../interfaces/dog.model";

@Injectable()
export class DogService {
  private _httpClient = inject(HttpClient);

  public getAllDogBreeds(): Observable<DogModel> {
    return this._httpClient.get<DogModel>("https://dog.ceo/api/breeds/list/all")
  }
}
