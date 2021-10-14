import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ToolbarService,
  LinkService,
  ImageService,
  HtmlEditorService,
  RichTextEditorComponent,
  TableService,
  PasteCleanupService,
} from '@syncfusion/ej2-angular-richtexteditor';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [
    ToolbarService,
    LinkService,
    ImageService,
    TableService,
    HtmlEditorService,
    PasteCleanupService,
  ],
})
export class AppComponent {
  rteForm: FormGroup;
  public tools: object = {
    type: 'MultiRow',
    items: [
      'Bold',
      'Italic',
      'Underline',
      'StrikeThrough',
      'FontName',
      'FontSize',
      'FontColor',
      'BackgroundColor',
      'LowerCase',
      'UpperCase',
      '|',
      'Formats',
      'Alignments',
      'OrderedList',
      'UnorderedList',
      'Outdent',
      'Indent',
      '|',
      'CreateLink',
      'Image',
      '|',
      'ClearFormat',
      'Print',
      'SourceCode',
      'FullScreen',
      '|',
      'Undo',
      'Redo',
      '|',
      'CreateTable',
    ],
  };

  public pasteCleanupSettings: object = {
    prompt: true,
    plainText: false,
    keepFormat: false,
    deniedTags: ['a'],
    deniedAttrs: ['class', 'title', 'id'],
    allowedStyleProps: ['color', 'margin', 'font-size'],
  };

  @ViewChild('fromRTE')
  private rteEle: RichTextEditorComponent;

  constructor() {
    // <--- inject FormBuilder
  }

  ngOnInit(): void {
    this.rteForm = new FormGroup({
      name: new FormControl(null, Validators.required),
    });
  }

  rteCreated(): void {
    this.rteEle.element.focus();
  }

  onSubmit(): void {
    console.log(this.rteForm.value);
  }
}
