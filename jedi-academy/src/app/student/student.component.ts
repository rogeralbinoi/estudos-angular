import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.styl']
})
export class StudentComponent implements OnInit {
  @Input() name = ''
  @Input() isJedi = false

  constructor() { }

  ngOnInit() {
  }

}
