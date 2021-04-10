import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
name:string="Sandhya's Application";
cost:number=1000;
today=new Date();
s:number=20;
image:any[]=[];

  constructor( private img:ImageService) { }

  ngOnInit(): void {
    this.img.getImageData().subscribe((result)=>{
      this.image=result['data'];
  })
  }

}
