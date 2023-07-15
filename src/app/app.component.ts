import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  //  template:`<h1>Hello</h1>
  //  <p>angular</p>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';
  @ViewChild('name', { static: true }) name!: ElementRef;
  ngOnInit(): void {
    this.name.nativeElement.innertext = 'Hilton Hotel';
  }
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  // ngOnInit(): void {
  // }
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  // }
}
