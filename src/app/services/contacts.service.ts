import { Injectable } from '@angular/core';
import { Contacts } from '../interface/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getContacts(): Contacts{
    return {
      'instagram': '',
      'github': 'https://github.com/isaka-james',
      'twitter': 'https://twitter.com/reprogamaco',
      'linkedin': 'https://www.linkedin.com/in/isaka-james-0297a8247/',
      'youtube': '',
      'email': 'mr.isakajames@gmail.com',
      'phone1': '',
      'phone2': '',
    }
  }
}
