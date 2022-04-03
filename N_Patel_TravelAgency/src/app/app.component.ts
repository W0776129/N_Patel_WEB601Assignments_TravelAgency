import { Component } from '@angular/core';
import { Tour } from './helper-files/tour-interface';
import { MatDialog } from '@angular/material/dialog';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //This parameter used for updatepage funcion
 
  constructor( public dialog: MatDialog){
  
  }
 
  openDialog(){
    this.dialog.open(ModifyContentComponentComponent);
  }

  
}
