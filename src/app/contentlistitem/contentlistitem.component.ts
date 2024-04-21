import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {Student} from "../student";
import {CommonModule} from "@angular/common";
import {StyleContentDirective} from "../Directive/style-content.directive";


@Component({
  selector: 'app-contentlistitem',
  standalone: true,
  imports: [
    NgClass, CommonModule, StyleContentDirective
  ],
  templateUrl: './contentlistitem.component.html',
  styleUrl: './contentlistitem.component.css'
})
export class ContentlistitemComponent {
  @Input() contentItem?: Student;
}
