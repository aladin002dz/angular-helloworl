import { Component } from '@angular/core';

 @Component({
    selector: 'courses',
    template: `
      {{title}}
      <ul>
        <li *ngFor="let course of courses">
        {{course}}
        </li>
      </ul>
    `
 })

 export class CoursesComponent {
     title = 'List of courses';
     courses = ['course1', 'course2', 'course3'];
 }
