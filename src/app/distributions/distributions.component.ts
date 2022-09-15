import { Component, OnInit } from '@angular/core';
import { ScaleType } from '../ngx/common/types/scale-type.enum';
import { Color, colorSets } from '../ngx/utils/color-sets';
import { LegendPosition } from '../ngx/common/types/legend.model';

import * as ss from 'simple-statistics';

@Component({
  selector: 'app-distributions',
  templateUrl: './distributions.component.html',
  styleUrls: ['./distributions.component.sass']
})
export class DistributionsComponent implements OnInit {

	public A_bars : Array<{name: string, value: number}> = [];
	public A_lines: Array<{name: string, series: Array<{name: string, value: number}>}> = [];
	public B_bars : Array<{name: string, value: number}> = [];
	public B_lines: Array<{name: string, series: Array<{name: string, value: number}>}> = [];
	public C_bars : Array<{name: string, value: number}> = [];
	public C_lines: Array<{name: string, series: Array<{name: string, value: number}>}> = [];
	public D_bars : Array<{name: string, value: number}> = [];
	public D_lines: Array<{name: string, series: Array<{name: string, value: number}>}> = [];

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
	
	public xAxisLabel = 'Classes';
	public yAxisLabel = 'Quantité';

	public gridLines: boolean = false;
	public legendTitle: string = 'Légende';
	public legendPosition = LegendPosition.Right;
	public yLeftAxisScale: any = "";
	public yRightAxisScale: any = "";
	public yLeftTickFormat: any = "";
	public yRightTickFormat: any = "";

	public view: [800,400];

  constructor() { }

  ngOnInit(): void {
		let A: Array<number> = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9 ];
    let B: Array<number> = [4, 4, 4, 4, 4, 6, 6, 6, 6, 6 ];
    let C: Array<number> = [1, 1, 2, 2, 2, 4, 7, 8, 9, 14];
    let D: Array<number> = [0, 0, 1, 1, 6, 8, 8, 8, 9, 9];
		
		[this.A_bars, this.A_lines] = this.buildNgxData(this.autoMap(A));
		[this.B_bars, this.B_lines] = this.buildNgxData(this.autoMap(B));
		[this.C_bars, this.C_lines] = this.buildNgxData(this.autoMap(C));
		[this.D_bars, this.D_lines] = this.buildNgxData(this.autoMap(D));
  }

	private autoMap(ar: Array<number>): Map<string, number> {
		let map: Map<string, number> = new Map<string, number>();
		let index: number = 1;
		for (let val of ar){
			map.set(index.toString(), val)
			index += 1;
		}
		return map;
	}

	private buildNgxData(ar: Map<string, number>) {
		let bars : Array<{name: string, value: number}> = [];
		let lines: Array<{name: string, series: Array<{name: string, value: number}>}> = [];
		let mean: number = ss.mean(Array.from(ar.values()));
		let median: number = ss.median(Array.from(ar.values()));
		let ar_mean: Array<{name: string, value: number}> = [];
		let ar_median: Array<{name: string, value: number}> = [];
		for (let key of ar.keys()) {
			// populate bar
			bars.push({
				name: key,
				value: ar.get(key)
			});
			// populate lines
			ar_mean.push({
				name: key,
				value: mean
			});
			ar_median.push({
				name: key,
				value: median
			});
		};
		lines.push({
			name: "Médiane",
			series: ar_median
		});
		lines.push({
			name: "Moyenne",
			series: ar_mean
		});
		return [bars, lines] as const;
	}

	onSelect(event) {
    console.log(event);
  }
}
