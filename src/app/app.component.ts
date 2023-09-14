import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { LocalStorageToken } from './localstorage.token';

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

  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(LocalStorageToken) private localStorage: Storage
  ) {}
  ngOnInit(): void {
    this.loggerService?.Log('AppComponent.ngOnInit()');
    this.name.nativeElement.innertext = 'Hilton Hotel';
    this.localStorage.setItem('name', 'hilton Hotel');
  }
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  // }
}
