import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})

export class AppComponent {
  title = 'realtime';
  standalone: boolean= true 

  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;


  openAll(){
    this.standalone=true;
  }

  closeAll(){
    this.standalone=false;
  }
}
