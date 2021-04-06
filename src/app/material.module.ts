import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@NgModule({
   imports:[
      CommonModule
   ],
   exports: [
      MatToolbarModule,
      MatButtonModule,
      MatCardModule
   ]
})
export class MaterialModule { }
