import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
userName : string = '';
isUserExit : boolean = false;

public onUserChange(event : Event) 
{
  debugger;
  this.userName = (<HTMLInputElement>event.target).value;
  if (this.userName == '' || this.userName == null || this.userName == undefined )
 {
   this.isUserExit = false;
 } 
 else { this.isUserExit = true; }
  
}

public onUserExit() 
{
  debugger;
this.userName = '';
this.isUserExit = false;
}
}
