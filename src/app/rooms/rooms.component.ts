import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  SkipSelf
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  hotelName = 'hilton hill';
  noOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  title = 'Room List';
  selectedRoom!: RoomList;
  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  // roomService = new RoomsService();

  constructor(@SkipSelf() private roomsService:RoomsService) {}
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }
  ngDoCheck(): void {
    console.log('On changes is called');
  }
  ngOnInit(): void {
    this.roomList=this.roomsService.getRooms();
  }
  ngAfterViewInit(): void {
    // console.log(this.headerComponent);
    this.headerComponent.title = 'Rooms View';
    this.headerChildrenComponent.last.title = 'Last Title';
  }
  ngAfterViewChecked(): void {}

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 104,
      roomType: 'Private Suite',
      amenities: 'Air conditioner,Free Wifi,Tv,BathRoom,Kitchen',
      price: 15000,
      photos:
        'https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
