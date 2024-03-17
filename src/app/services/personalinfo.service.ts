import { Injectable } from '@angular/core';
import { PersonalInfo } from '../interface/personal-info';
@Injectable({
  providedIn: 'root'
})
export class PersonalinfoService {

  constructor() { }

  // Don't forget the observable
  getInfo(): PersonalInfo{
    return {
      'name':'Isaka James',
      'who': 'Software Engineer',
      'photo': '/assets/img/me.jpg',
      'description': 'Powering startups companies in Tanzania through low budget with high quality softwares.',
      'from': 'Mbeya, Tanzania',
      'live': 'Dodoma, Tanzania',
      'born': 2002,
      'gender': 'Male',
      'phone': '+255 673 182 989',
      'slogan': 'Powering startups companies in Tanzania through low budget with high quality softwares.'
    };
  }
}
