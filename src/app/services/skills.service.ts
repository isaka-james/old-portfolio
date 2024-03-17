import { Injectable } from '@angular/core';
import { LanguageInfo } from '../interface/language-info';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  data: any;

  constructor() { }

  getSkills(): LanguageInfo {
    this.data = [
              [
                {'language':'C++','percent':90},
                {'language':'C++','percent':75},
                {'language':'Python','percent':88},
                {'language':'Rust','percent':67},
                {'language':'Go','percent':70},
                {'language':'Dart','percent':79},
                {'language':'Java','percent':87},
                {'language':'Kotlin','percent':84},
                {'language':'Dart','percent':85},
                {'language':'TypeScript','percent':85},
                {'language':'Bash','percent':99},
                {'language':'SVG','percent':97},
                {'language':'JavaScript','percent':94},
                {'language':'PHP','percent':98},
                {'language':'HTML + CSS','percent':99}
              ],
              [
                {'language':'Laravel','percent':89},
                {'language':'Angular','percent':86},
                {'language':'React','percent':65},
                {'language':'Flutter','percent':80},
                {'language':'Wordpress','percent':94},
                {'language':'Actix','percent':61},
                {'language':'Gin','percent':65},
                {'language':'Jakarta-EE','percent':90},
                {'language':'Flask','percent':89},
                {'language':'Git','percent':79},
                {'language':'Open-CV','percent':82},
                {'language':'pico-CTF','percent':85},
                {'language':'Linux','percent':94},
              ]

    ];
            
    // skills[0] => normal
    // skills[1] => extra


    return this.data;

    
  }

}
