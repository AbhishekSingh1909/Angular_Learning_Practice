import {Component, Input} from '@angular/core'
@Component({
    selector : 'app-odd',
    templateUrl : './odd.component.html',
    styles : ['span { color : "red"}']
})

export class OddComponent
{
    @Input() number : number;
}