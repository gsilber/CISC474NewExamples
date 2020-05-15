import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { ProjectsService } from 'src/app/services/projects.service';
import { max } from 'rxjs/operators';


@Component({
  selector: 'app-stateGraph',
  templateUrl: './stateGraph.component.html',
  styleUrls: ['./stateGraph.component.scss']
})
export class StateGraphComponent implements OnInit {
	stateData: any;
	constructor(private projSvc:ProjectsService) { 
	  projSvc.getProjects().subscribe(result=>{
		this.stateData=result;
		var stateName = "Hawaii"; // set this stateName when using component
		this.createGraph(stateName);
	  })
	}

	createGraph(stateName){

		
		// Set state IDs
		var state_ID = this.stateData[stateName];

		console.log(state_ID);

		// Calculate number of dates collected for state
		var max_children = state_ID.length;

		// Create a list of all the dates that are collected
		var listOfDates = [];
		for(var i = 0; i < max_children; i++){
			listOfDates.push(state_ID[i].date);
		}

		// Create an array that matches listOfDates in size and fill with total confirmed 
		var ConfirmedEachDay = []

		// Initalize confirmed deaths to 0
		for(var i = 0; i < listOfDates.length; i++){
			ConfirmedEachDay.push(0);
		}

		// Set confirmed each day
		for(var k = 0; k < state_ID.length; k++){
			ConfirmedEachDay[ConfirmedEachDay.length-1 - k] += +state_ID[state_ID.length - 1 - k].confirmed;
		}

		// Set X and Y coordinates (X: Number of days, Y: Total Confirmed)
		let dataPoints = [];
		for ( var dateNumber = 0; dateNumber < listOfDates.length; dateNumber++ ) {	
			dataPoints.push({x: new Date(listOfDates[dateNumber] + " 00:00:00"), y: ConfirmedEachDay[dateNumber-1]});
		}

		// Create the graph
		let chart = new CanvasJS.Chart("chartContainer", {
			zoomEnabled: true,
			animationEnabled: true,
			exportEnabled: true,
			title: {
				text: "Confirmed Cases Over Time",
				fontFamily: "Times"
			},
			subtitles:[
				{
					text: stateName,
					fontFamily: "Times",
					fontSize: 24
				}
			],
			axisX:{
				labelFontFamily: "Times"
			},
			axisY:{
				labelFontFamily: "Times"
			},
			data: [
			{
				type: "line",                
				dataPoints: dataPoints
			}]
		});
			
		// Render the graph
		chart.render();
	}
	ngOnInit() {

    }
}
