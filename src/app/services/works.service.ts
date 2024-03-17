import { Injectable } from '@angular/core';
import { Works } from '../interface/works';
import { WorkCategories } from '../interface/work-categories';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  data: any;
  constructor() { }

  getWorks(): Works{
    this.data =  [
          {link:'http://ardenthope.vercel.app/',photo:'./assets/img/work/ardent-hope.png',title:'Ardenthope Official Website',description:'The official website of Ardenthope charity website',type:'web'},
          {link:'https://github.com/isaka-james/secondlifemarketplace',photo:'./assets/img/work/second-hand.png',title:'Second Hand e-commerce Website',description:'The e-commerce website for buying and selling used products/items for lower price',type:'web'},
          {link:'https://lyrichubtz.000webhostapp.com/',photo:'./assets/img/work/lyric-hub.png',title:'LyricHub Music & Lyrics Website',description:'A website for downloading,streaming,lyrics. Admins and moderators are present on the system',type:'web'},
          {link:'https://udomsr2.000webhostapp.com/',photo:'./assets/img/work/sr2-clone.png',title:'The University of Dodoma Student Management System Clone',description:'Upon arrival at The University of Dodoma, I was astonished by their system then guess what? I made the clone!',type:'web'},
          {link:'https://yusuph-event-planners.vercel.app/',photo:'./assets/img/work/yusuph-events.png',title:'Yusuph Events Planners Website',description:'The website for the Event Planning and Catering',type:'web'},
          {link:'https://translator-angular.vercel.app/',photo:'./assets/img/work/translate.png',title:'The translate Website',description:'The backend made by Flask and frontend by Angular, All by me haha',type:'web'},
          {link:'https://github.com/isaka-james/cafeterion-customers-app',photo:'./assets/img/work/cafeterion.jpeg',title:'Cafeterion Customers App',description:'The delivering android application made in Kotlin, users order from this App',type:'android'},
          {link:'https://github.com/isaka-james/cafe-owner-android-application',photo:'./assets/img/work/owner.jpeg',title:'Cafeterion Owner App',description:'The delivering android application made in Kotlin, owners now see the deliveries on this app and manage the orders',type:'android'},
          {link:'https://udom-ratiba-api.vercel.app/',photo:'./assets/img/work/udom-api.png',title:'The UDOM Ratiba API',description:'The API that scrap the timetable from The University of Dodoma and return the well rendered json',type:'api'},
          {link:'https://github.com/isaka-james/master-php-framework',photo:'./assets/img/work/framework.png',title:'The master-php Framework',description:'The Framework I made from PHP, perfect for small projects',type:'web'},
          {link:'https://github.com/isaka-james/svg-go',photo:'./assets/img/work/go.svg',title:'The GO Flex Generator',description:'The SVG generator for REAMDEs in github',type:'pro'},
          {link:'https://github.com/isaka-james/linux-android-studio',photo:'./assets/img/work/linux-studio.png',title:'Linux android studio',description:'Install Android Studio in Linux enviroments with one command! and also it adds ENV variables automatically',type:'pro'},
          {link:'https://isaka-james.github.io/test-your-typing-speed/',photo:'./assets/img/work/typing-speed.png',title:'Typing Speed Website',description:'Inspired by 10 fast fingers, The site measure your typing statistics',type:'web'},
          {link:'https://isaka-james.github.io/calculator/calculator.html',photo:'./assets/img/work/calculator.png',title:'Calculator Website',description:'Modern Calculator in a browser',type:'web'},
          {link:'https://github.com/isaka-james/reload',photo:'./assets/img/work/reload.png',title:'Reload Tool',description:'The tool reload the any project, you can customize with your custom commands, Only for Linux users!',type:'pro'},
          {link:'https://team-management-system.vercel.app/',photo:'./assets/img/work/tms.png',title:'Team Management System',description:'Distribute your members in the team randomly with this web app, so no favours!',type:'web'},
          {link:'https://transalateapi.vercel.app/',photo:'./assets/img/work/translate-api.png',title:'The Translate API',description:'Translate your app or website using this API, scalable to 5 most used languages!',type:'api'},
          {link:'https://github.com/isaka-james/gin',photo:'./assets/img/work/gin.png',title:'gin Booster',description:'The booster for Rust (gin) framework for Linux users',type:'pro'},
          {link:'https://github.com/isaka-james/Cafeterion-Remake',photo:'./assets/img/work/cafe-remake.png',title:'cafe',description:'I remake the cafeterion project application that I made in Kotlin with Flutter!',type:'android'},
          {link:'https://github.com/isaka-james/DOWNLOAD-NECTA-CSEE-RESULTS-2019-2022',photo:'./assets/img/work/necta-download.png',title:'Download Necta Results',description:'Download the necta results to your device using this tool!',type:'pro'},
          {link:'https://github.com/isaka-james/NECTA-TOOL',photo:'./assets/img/work/necta-tool.png',title:'NECTA-TOOL',description:'View the necta results like a pro on the command line!',type:'pro'},

      ];
    return this.data;
  }

  getCategory(): WorkCategories{
    this.data = [
      {sign:'web',full:'Web Apps'},
      {sign:'pro',full:'Professional Tools'},
      {sign:'android',full:'Android Application'},
      {sign:'api',full:'Application Programming Interface'}
    ];

    return this.data;
  }
}
