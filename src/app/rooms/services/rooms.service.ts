import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';
@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumber: 101,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner,Free Wifi,Tv,BathRoom,Kitchen',
      price: 500,
      photos:
        'https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
    },
    {
      roomNumber: 102,
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner,Free Wifi,Tv,BathRoom,Kitchen',
      price: 1000,
      photos:
        'https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
    },
    {
      roomNumber: 103,
      roomType: 'Private Suite',
      amenities: 'Air conditioner,Free Wifi,Tv,BathRoom,Kitchen',
      price: 15000,
      photos:
        'https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=958&q=80',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
    },
  ];
  constructor() {
    console.log('Room service initialized');
  }
  getRooms() {
    return this.roomList;
  }
}
