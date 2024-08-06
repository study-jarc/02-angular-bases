import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    public heroNames: string[] = ['iroman', 'Spiderman', 'Hulk', 'Thor', 'Captain America'];

    public deletedHero?: string;

    removeLastHero():void {
       this.deletedHero = this.heroNames.pop();
    }
}
