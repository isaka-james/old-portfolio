import { Component, OnInit } from '@angular/core';
import { WorksService } from '../services/works.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent implements OnInit{
  work:any;
  categories:any;
  constructor(private works: WorksService){}

ngOnInit(): void {
  this.work = this.works.getWorks();
  this.categories = this.works.getCategory();
}

}
