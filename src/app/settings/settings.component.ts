import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'settings',
    templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $('ul.tabs').tabs();
  }
}
