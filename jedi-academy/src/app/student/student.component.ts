import { Component, OnInit, Input } from '@angular/core';
import { Student } from './student.model'

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.styl']
})
export class StudentComponent implements OnInit {

  @Input() student: Student

  constructor() { }

  clicked(e, name, description) {
    console.log(e, name, description.value);
  }

  ngOnInit() {
  }

}
