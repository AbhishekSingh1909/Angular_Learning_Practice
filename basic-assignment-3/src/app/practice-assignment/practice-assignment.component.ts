import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-assignment',
  templateUrl: './practice-assignment.component.html',
  styleUrls: ['./practice-assignment.component.css']
})
export class PracticeAssignmentComponent {
  showContent = false;
  log : any [] = [];
  onToggleDetails()
  {
    this.showContent =!this.showContent;
    this.log.push(new Date());
  }

}
