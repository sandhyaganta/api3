
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})

  export class ViewDataComponent implements OnInit {
    apiData: any;

    constructor(private apiService: ApiService){}
  
    ngOnInit() {
      this.apiService.getData().subscribe((res: any) => {
        this.apiData = res.data
        console.log(this.apiData);
      });
    }

}
