import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

  @Input() title: any;
  @ViewChild('trailer') trailer !: ElementRef<HTMLVideoElement>;

  constructor() {
    this.title = '';
  }

  ngOnInit(): void {}

  playVideo() {
    this.trailer.nativeElement.play();
    console.log('Play');

  }
  stopVideo() {
    this.trailer.nativeElement.currentTime = 0;
    this.trailer.nativeElement.pause();
  }
}
