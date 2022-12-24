import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {
cantidad=0;
tengo='USD';
quiero='EUR';
total=0;
monedas:string[]=['USD','EUR','LIBRA']
convertir(){
  console.log('llamda al metodo')
  switch(this.tengo){
    case 'USD':
       if(this.quiero==='USD'){
           this.total=this.cantidad;
       }
       if(this.quiero==='EUR'){
        this.total=this.cantidad*0.84
       }
       if(this.quiero==='LIBRA'){
        this.total=this.cantidad*0.74
       }
      break;
    case 'EUR':
       if(this.quiero==='USD'){
           this.total=this.cantidad*1.74;
       }
       if(this.quiero==='EUR'){
        this.total=this.cantidad;
       }
       if(this.quiero==='LIBRA'){
        this.total=this.cantidad*0.9
       }
      break;
    case 'LIBRA':
       if(this.quiero==='USD'){
           this.total=this.cantidad*1.33;
       }
       if(this.quiero==='EUR'){
        this.total=this.cantidad*1.11;
       }
       if(this.quiero==='LIBRA'){
        this.total=this.cantidad
       }
      break
  }
}
}
