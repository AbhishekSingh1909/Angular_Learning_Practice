import { Component,
  EventEmitter,
Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  count :number = 0;
  nIntervId;
@Output('getNumber') getNumber = new EventEmitter<number>();

  onStartClick()
  {
    
      this.nIntervId = setInterval(()=>{this.getNumber.emit(this.count+1); this.count++;}, 1000);
    
  }
  onStopClick(){
    clearInterval(this.nIntervId);
    this.count =0;
    this.nIntervId =null;
  }
}
