import { Component, OnInit } from '@angular/core';
import { ScaleType } from '../ngx/common/types/scale-type.enum';
import { Color, colorSets } from '../ngx/utils/color-sets';
import { LegendPosition } from '../ngx/common/types/legend.model';
import { single, lines } from './data';

@Component({
  selector: 'app-distributions',
  templateUrl: './distributions.component.html',
  styleUrls: ['./distributions.component.sass']
})
export class DistributionsComponent implements OnInit {


	//public bars = single;
	public bars : Array<{}> = [];
	public lines = lines;

	public lineChartScheme: Color = {
    name: 'coolthree',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#01579b', '#7aa3e5', '#a8385d', '#00bfa5']
  };

	public comboBarScheme: Color = {
    name: 'singleLightBlue',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#01579b']
  };

  public showRightYAxisLabel: boolean = true;
  public yAxisLabelRight: string = 'Utilization';
	
	public xAxisLabel = 'Country';
	public yAxisLabel = 'GDP Per Capita';


	public legendTitle: string = 'default title';
	public legendPosition = LegendPosition.Below;

	public view: [800,400];

  constructor() { }

  ngOnInit(): void {
		for (let i = 1; i<6; i++) {
			let tmp = {
				name: i.toString(),
				value: i
			};
			this.bars.push(tmp);
		};
		console.log(this.bars);
  }

	onSelect(event) {
    console.log(event);
  }


}
