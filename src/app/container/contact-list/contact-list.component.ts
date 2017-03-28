import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tp-contact-list',
  templateUrl: './contact-list-component.html',
  styleUrls: ['./contact-list-component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class ContactListComponent {
  message: String = 'Xin chao, ContactListComponent!';
  printable = false;
  tabIndex: Number = 1;
  contacts = [
    {
      id: 1,
      name: 'Phuc Hau',
      job: 'Web Development',
      avatar: {
        url: 'http://i.imacdn.com/ta/2016/06/29/6ceeb8a40d6a5fa0_f12def48691bdc71_13964614671819208143215.jpg'
      }
    },
    {
      id: 2,
      name: 'Thanh Ngoc',
      job: 'Math',
      avatar: {
        url: 'http://i.imacdn.com/ta/2016/04/hataraku-maou-sama-lucifer-purple-45cm-cosplay-wig-free-shipping-anime-party-halloween-wig-14617783277877.jpg'
      }
    },
    {
      id: 3,
      name: 'Duy Dam',
      job: 'Win Dao',
      avatar: {
        url: 'http://media.tintuc.vn/uploads/medias/2015/11/20/550x500/10350603-1445472259037675-6809445228466426396-n-bb-baaadaa0IC.jpg'
      }
    },
  ];

  colorH3: String = 'red';

  changeTab(tabIndex) {
    this.tabIndex = tabIndex;
  }

}
