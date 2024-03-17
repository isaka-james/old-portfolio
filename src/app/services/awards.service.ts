import { Injectable } from '@angular/core';
import { Awards } from '../interface/awards';

@Injectable({
  providedIn: 'root'
})
export class AwardsService {
  data: any;

  constructor() { }

  getAwards(): Awards{
    this.data = [
          
            {'photo':'./assets/img/awards/cisco-cyber.png','title':'CISCO - Cyber Security Certificate','description':'The cyber security coarse I took years back in cisco','date':' March 27, 2023'},
            {'photo':'./assets/img/awards/Isack_Python.jpg','title':'ProgrammingHub - Python Certificate','description':'I knew Python since 2017 but later on I decided to give myself a challenge to get the certificate','date':' 2020'},
            {'photo':'./assets/img/awards/java.png','title':'ProgrammingHub - Java Certificate','description':'Got another one here, Java Certificate.','date':'Dec 21,2020'},
            {'photo':'./assets/img/awards/cpp.png','title':'ProgrammingHub - C++ Certificate','description':'I got the another certificate from ProgrammingHub, Cograts me!.','date':'April 7,2021'},

    ];

    return this.data;

  }
}
