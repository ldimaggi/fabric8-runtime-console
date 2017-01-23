import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import { TruncateCharactersPipe } from './truncate-characters.pipe';
import { TruncateWordsPipe } from './truncate-words.pipe';
import { LoadingComponent } from './loading/loading.component';
import {EntriesPipe} from './entries.pipe';
import {ResourceHeaderComponent} from "../kubernetes/components/resource-header/resource.header";
import {DropdownModule} from "ngx-dropdown";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DropdownModule,
  ],
  declarations: [
    EntriesPipe,
    TruncateCharactersPipe,
    TruncateWordsPipe,
    LoadingComponent,
    ResourceHeaderComponent,
  ],
  exports: [
    EntriesPipe,
    TruncateCharactersPipe,
    TruncateWordsPipe,
    LoadingComponent,
    ResourceHeaderComponent,
  ],
})
export class IPaaSCommonModule { }