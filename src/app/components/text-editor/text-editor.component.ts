import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  public paragrapheText: string;

  constructor() { }

  ngOnInit() {
    this.paragrapheText = 'Texto teste';
  }

}
