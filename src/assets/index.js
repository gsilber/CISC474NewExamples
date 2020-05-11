function tooltipHtml(n, d){ /* function to create html content string in tooltip div. */
    return "<h4>"+n+"</h4><table>"+
        "<tr><td>Date </td><td>"+(d.date)+"</td></tr>"+
        "<tr><td>Confirmed </td><td>"+(d.confirmed)+"</td></tr>"+
        "<tr><td>Deaths</td><td>"+(d.deaths)+"</td></tr>"+
        "</table>";
}

//console.log("Test: " + state_data.Alabama[state_data.Alabama.length - 1].deaths);

var state_ID = [state_data.Hawaii, state_data.Alaska, state_data.Florida,  state_data["South Carolina"],   state_data.Georgia, 
state_data.Alabama, state_data["North Carolina"], state_data.Tennessee,  state_data["Rhode Island"], 
state_data.Connecticut,  state_data.Massachusetts,  state_data.Maine,  state_data["New Hampshire"], state_data.Vermont,
state_data["New York"],  state_data["New Jersey"],  state_data.Pennsylvania,  state_data.Delaware,
state_data.Maryland, state_data["West Virginia"], state_data.Kentucky, state_data.Ohio, state_data.Michigan,
state_data.Wyoming, state_data.Montana, state_data.Idaho, state_data.Washington, 0, state_data.Texas, 
state_data.California, state_data.Arizona, state_data.Nevada, state_data.Utah, state_data.Colorado,
state_data["New Mexico"], state_data.Oregon, state_data["North Dakota"], state_data["South Dakota"], state_data.Nebraska,
state_data.Iowa, state_data.Mississippi, state_data.Indiana, state_data.Illinois, state_data.Minnesota, 
state_data.Wisconsin, state_data.Missouri, state_data.Arkansas, state_data.Oklahoma, state_data.Kansas,
state_data.Louisiana, state_data.Virginia]

var max_confirmed = 0;

var sampleData ={}; /* Sample random data. */  
let states = ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
"WI", "MO", "AR", "OK", "KS", "LS", "VA"];
    
    states.forEach(function(d, i){
        var low=Math.round(100*Math.random()),
            mid=Math.round(100*Math.random()),
            high=Math.round(100*Math.random());
            console.log(state_ID[i]);
            //Array.isArray(state_ID[i])
            if(Array.isArray(state_ID[i]))
            {
              sampleData[d]={ date: state_ID[i][state_ID[i].length-1].date,
              deaths: state_ID[i][state_ID[i].length-1].deaths,
              confirmed: state_ID[i][state_ID[i].length-1].confirmed }; 

              if(state_ID[i][state_ID[i].length-1].confirmed > max_confirmed)
              {
                max_confirmed = state_ID[i][state_ID[i].length-1].confirmed;
              }
        }
        else
        {
            sampleData[d]={
            date: 0,
            deaths:0,
            confirmed: 0 }; 
        }
    });

    // Set the color for each state
    states.forEach(function(d, i){
      if(Array.isArray(state_ID[i])){
            sampleData[d]={ 
                date: sampleData[d].date, deaths: sampleData[d].deaths, confirmed: sampleData[d].confirmed,
                color:d3.interpolate("#ffffcc", "#800026")( state_ID[i][state_ID[i].length-1].confirmed/ max_confirmed / 10 )};
        } 
    });

/* draw states on id #statesvg */  
uStates.draw("#statesvg", sampleData, tooltipHtml);

d3.select(self.frameElement).style("height", "600px");