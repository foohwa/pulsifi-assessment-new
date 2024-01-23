import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {DogService} from "./listing-table/data-access/services/dog.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers: [DogService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'pulsifi-assessment-new';
  private _dogService: DogService = inject(DogService);

  ngOnInit() {
    this._dogService.getAllDogBreeds().subscribe(res => console.log(res))
  }
}
