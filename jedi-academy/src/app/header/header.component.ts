import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jad-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  @Input() title = ''

  constructor() { }

  ngOnInit() {
  }

}
