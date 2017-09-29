import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { HtmlEditorComponent } from './html-editor/html-editor';

@NgModule({
	declarations: [HtmlEditorComponent],
	imports: [
    CKEditorModule, FormsModule
  ],
	exports: [HtmlEditorComponent]
})
export class ComponentsModule {}
