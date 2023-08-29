import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/elewa-website-footer/elewa-website-footer.component';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';

@NgModule({
  imports: [CommonModule, ButtonsModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class AppFooterModule {}
