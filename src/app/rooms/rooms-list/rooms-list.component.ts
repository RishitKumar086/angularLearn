import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { RoomList } from '../rooms';
@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';
  @Output() roomSelected = new EventEmitter<RoomList>();
  constructor() {}
  ngOnInit(): void {}
  selectRoom(room: RoomList) {
    this.roomSelected.emit(room);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  ngOnDestroy(): void {
    console.log('on destroy is called');
  }
}
