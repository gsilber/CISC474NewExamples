import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  stateData: any;
  constructor(private projSvc:ProjectsService) { 
    projSvc.getProjects().subscribe(result=>{
      this.stateData=result;
      console.log(this.stateData);
    })
  }

  ngOnInit(): void {
  }

}
