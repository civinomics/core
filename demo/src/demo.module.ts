import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';

const NgResizableModule = require('../../lib/core.module').CoreModule;

@NgModule({
  imports: [NgResizableModule, BrowserModule],
  declarations: [DemoComponent],
  bootstrap: [DemoComponent]
})
export class DemoModule {}

