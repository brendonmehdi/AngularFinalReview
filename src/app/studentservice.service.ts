import { Injectable } from '@angular/core';
import {Student} from "./student";
import {Observable, of} from "rxjs";
import {contents} from "./data/mock-content";


@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  private contents: Student[] = contents;

  constructor() { }
  // gets all the movies / contents
  fetchData(): Observable<Student[]> {
    return of(this.contents);
  }
  getContentById(id: number): Observable<Student | undefined> { // gets a single movie / content by id
    const item = this.contents.find(content => content.id === id);
    return of(item);
  }

  add(content: Student): Observable<Student[]> { // adds a new movie / content
    this.contents.push(content);
    return of(this.contents);
  }

  update(updatedContent: Student): Observable<Student[]> { // updates a movie / content
    const index = this.contents.findIndex(content => content.id === updatedContent.id);
    if (index !== -1) {
      this.contents[index] = updatedContent;
    }
    return of(this.contents);
  }
  removeContent(id: number): Observable<Student | undefined> { // removes a movie / content by id
    const index = this.contents.findIndex(content => content.id === id);
    if (index !== -1) {
      const removedItem = this.contents.splice(index, 1)[0];
      return of(removedItem);
    }
    return of(undefined);
  }
}

