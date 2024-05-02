import { Component, Input, signal } from '@angular/core';
import { DtoBanderas } from 'models/DTO/DtoBanderas';

@Component({
  selector: 'app-banderas-list',
  templateUrl: './banderas-list.component.html',
  styleUrl: './banderas-list.component.css'
})
export class BanderasListComponent {

  @Input() banderas: DtoBanderas[] | undefined ;


  modalState = signal(false);
  paisSelected : DtoBanderas | undefined;

  changeStateModalState() {

    if(this.modalState() == false) {
      this.modalState.update(() => true);
      console.log(this.modalState(), "Modal state")
    }else{
      this.modalState.update(() => false);
      console.log(this.modalState(), "Modal state")
    }

  }
  openModal(number: number) {
    console.log("Open modal")
    if(this.banderas == null) return 
    let bandera =  this.banderas[number] 
    this.paisSelected = bandera
    this.changeStateModalState()
    
    }


}
