/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { NgModule } from '@angular/core';

import { NbFullWidthFileUploadComponent } from './full-width-file-upload.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgdThemeModule } from '../../../../../docs/app/@theme/theme.module';
import { NbProgressBarModule } from '../progress-bar/progress-bar.module';
import { NbButtonModule } from '../button/button.module';
import { NbDropAreaComponent } from './drop-area.component';
import { NbFileListItemComponent } from './file-list-item.component';
import { NbFileUploadService } from './service/file-upload.service';
import { NbBaseFileUploadComponent } from './base-file-upload.component';
import { NbCompactFileUploadComponent } from './compact-file-upload.component';
import { NbFileItemComponent } from './file-item.component';


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgdThemeModule, NbProgressBarModule, NbButtonModule],
  exports: [
    NbFullWidthFileUploadComponent,
    NbCompactFileUploadComponent,
    NbDropAreaComponent,
    NbFileListItemComponent,
    NbFileItemComponent,
    NbBaseFileUploadComponent,
  ],
  declarations: [
    NbFullWidthFileUploadComponent,
    NbCompactFileUploadComponent,
    NbDropAreaComponent,
    NbFileListItemComponent,
    NbFileItemComponent,
    NbBaseFileUploadComponent,
  ],
  providers: [NbFileUploadService],
})
export class NbFileUploadModule {
}
