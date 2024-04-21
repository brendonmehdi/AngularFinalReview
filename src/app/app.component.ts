import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import {Student} from "./student";

import {ContentListComponent} from "./contentlist/contentlist.component";
import{ContentlistitemComponent} from "./contentlistitem/contentlistitem.component";
import {StudentserviceService} from "./studentservice.service";

// import { Assignment2 } from './app.assignment2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContentListComponent, ContentlistitemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Ali-Mehdi-MyFirstAngularApplication';

  singleContentItem: Student | undefined;

  constructor(private movieService: StudentserviceService) {} // Inject MovieService

  ngOnInit(): void {
    this.movieService.getContentById(1).subscribe(data => {
      this.singleContentItem = data;
    });
  }

  // items = [
  //   new Assignment2(true, "Hello"),
  //   new Assignment2(true),
  //   new Assignment2(undefined, "Hello")
  //   ]
}


