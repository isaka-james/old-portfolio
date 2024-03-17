import { Component, OnInit } from '@angular/core';
import { AwardsService } from '../services/awards.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.css'
})
export class AwardsComponent implements OnInit{

  awards: any;

  constructor(private award: AwardsService){}

  ngOnInit(): void {
    this.awards = this.award.getAwards();
  }



}
