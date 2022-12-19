import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nab-bar.component.html',
    styleUrls: ['./nab-bar.component.css']
})

export class NavBarComponent implements OnInit{

    @Output() menuToggle: EventEmitter<boolean> = new EventEmitter();
    @Input() opened: boolean;

    constructor() {
        this.opened = false;
    }

    ngOnInit(): void {}

    toggle():void {
        this.opened = !this.opened;
        this.menuToggle.emit(this.opened);
    }
}