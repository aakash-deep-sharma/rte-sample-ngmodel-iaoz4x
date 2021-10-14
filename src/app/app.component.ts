import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { RichTextEditorComponent, ToolbarService } from '@syncfusion/ej2-ng-richtexteditor';
import { LinkService, ImageService, MarkdownEditorService, HtmlEditorService} from '@syncfusion/ej2-ng-richtexteditor';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  public _clientViewText;
   public tools: object = {
					items: ['Bold', 'Italic', 'Underline', '|',
							'Undo', 'Redo', '|',
							'FontColor', 'BackgroundColor', '|']
				};

}

