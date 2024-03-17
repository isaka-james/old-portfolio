import { Injectable } from '@angular/core';
import { ServiceOffered } from '../interface/service-offered';

@Injectable({
  providedIn: 'root'
})
export class ServiceOfferedService {
  data: any;
  constructor() { }

  getServices(): ServiceOffered{
    this.data = [
      {title:'Web Development',description:'It\'s obvious the web is the dweling place of many, if you want something that will attract the attentions of citizens of the web, be sure to reach me.',more:''},
      {title:'Android Development', description:'Millions of apps are present in the PlayStore, work with me so we can build something that will cut through the fog and get to your customers smoothly.',more:''},
      {title:'Project Management',description:'No amount of coding skills can replace a good project manager, given that time and resources are always a constraint. For a project manager, am your guy.',more:''},
      {title:'Code Tutoring',description:'Online tutorial may suffice but, they are not the best in all cases since most of them lack the personal touch, want a mentor in your coding journey, try me!',more:''},
      {title:'Project Consultancy',description:'Sounds unneccessary, WRONG! Choosing the right tools, team or even a project is critical in managing resources and ensuring profits, luckily I am here for you. ',more:''},
      {title:'APIs',description:'I am API enthuasist, ensuring that perfomance and delivery is scalable and secure',more:''}
    ];

    return this.data;
  }
}
