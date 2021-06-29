import { AfterViewInit, Component ,ViewEncapsulation} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-trackz',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './trackz.component.html',
  styleUrls: ['./trackz.component.css']
})
export class TrackzComponent {
 loading = false;
 constructor(){
  this.loading= true;
  const settings = {
  	"async": true,
  	"crossDomain": true,
  	"url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=India",
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-key": "@11f0f6d3dcmsh78e8fa0554cb5@4fp1e75acjsncfdc2c7810dc@",
  		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
  	}
  };
  $.ajax(settings).done((response) => {
     this.loading= false;
     let i=0;
    $.each(response.data.covid19Stats,(key,value)=>{
      $('#recordz').append(`
      <tr>
      <td id="no">${i++}</td>
      <td id="p">${value.province}</td>
      <td id="d">${value.deaths}</td>
      <td id="c">${value.confirmed}</td>
      <td id="r">${value.recovered}</td>
      </tr>`);
    });
  });
 }
}
