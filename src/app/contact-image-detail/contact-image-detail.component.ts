import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tp-contact-image-detail',
  templateUrl: './contact-image-detail.component.html',
  styleUrls: ['./contact-image-detail.component.css']
})
export class ContactImageDetailComponent implements OnInit {
  avatar: string;
  constructor() { }

  ngOnInit() {
    this.avatar = 'http://media.tintuc.vn/uploads/medias/2015/11/20/550x500/10350603-1445472259037675-6809445228466426396-n-bb-baaadaa0IC.jpg';
  }

}
