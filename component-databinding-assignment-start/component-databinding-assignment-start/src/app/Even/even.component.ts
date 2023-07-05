import { style } from '@angular/animations';
import {Component , Input} from '@angular/core'
@Component({
    selector :'app-even',
    templateUrl : './even.component.html',
    styles : ['.even {color : green;}']
})
export class EvenComponent{
    @Input() number : number;
}