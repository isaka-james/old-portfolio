import { Injectable } from '@angular/core';
import { EducationBackground } from '../interface/education-background';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  data: any;

  constructor() { }

  getEducation(): EducationBackground{
    this.data = [
                  [
                    {'year':'2022 - Present','position':'Cyber Security Enroll','place':'Security descpline starts..'},
                    {'year':'2020','position':'PCM ( Physics, Chemistry, Mathematics ) Student','place':'Iwalanje High School','description':'I took PCM combination , A place with coldness I remember haha!'},

                  ],
                  [
                    {'year':'2017 - Present','position':'Full Stack Web & App Developer','place':'Tanzania','description':'Empowering the startups companies by developing reliable software with low budget, I clearly love to work with startups..'},
                  ]
    ];
    return this.data;

  }


}
