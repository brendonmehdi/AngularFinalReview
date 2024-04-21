import {Component, OnInit} from '@angular/core';
import {contents} from "../data/mock-content";
import {ContentlistitemComponent} from "../contentlistitem/contentlistitem.component";
import {Student} from "../student";
import {StudentserviceService} from "../studentservice.service";
import {CommonModule} from "@angular/common";
import{FilterIContentPipe} from "../pipe/filter-icontent.pipe";

@Component({
  selector: 'app-contentlist',
  standalone: true,
  imports: [ContentlistitemComponent,CommonModule, FilterIContentPipe],
  templateUrl: './contentlist.component.html',
  styleUrl: './contentlist.component.css'
})
export class ContentListComponent implements OnInit {
  contents: Student[] = []; // Array of content items

  constructor(private movieService: StudentserviceService) { } // Injects the movie service

  ngOnInit(): void {
    this.movieService.fetchData().subscribe(data => { // Subscribes to the fetchData method
      this.contents = data; // Assigns the data to the contents array
    });


  }
}
