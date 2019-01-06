import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  // public options = {};

  constructor() { }

  ngOnInit() {
    // var elems = document.querySelectorAll('select');
    // var instances = M.FormSelect.init(elems, this.options);
  }

}
