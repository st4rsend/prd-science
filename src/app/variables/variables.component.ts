import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { ScaleType } from '../ngx/common/types/scale-type.enum';
import { Color, colorSets } from '../ngx/utils/color-sets';
import { LegendPosition } from '../ngx/common/types/legend.model';

import Pyramide from '../../assets/pyramide_2019.json';
import Crayons from '../../assets/crayons.json';
import Notes from '../../assets/notation-alphabetique.json';

import * as ss from 'simple-statistics';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.sass']
})
export class VariablesComponent implements OnInit {

	public content = "$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$"

	public A_bars : Array<{name: string, value: number}> = [];
	public A_lines: Array<{name: string, series: Array<{name: string, value: number}>}> = [];
	public B_bars : Array<{name: string, value: number}> = [];
	public B_lines: Array<{name: string, series: Array<{name: string, value: number}>}> = [];
	public C_bars : Array<{name: string, value: number}> = [];
	public C_lines: Array<{name: string, series: Array<{name: string, value: number}>}> = [];
	public D_bars : Array<{name: string, value: number}> = [];
	public D_lines: Array<{name: string, series: Array<{name: string, value: number}>}> = [];

	public femmes : Array<{name: string, value: number}> = [];
	public hommes : Array<{name: string, value: number}> = [];
	public crayons: Array<{name: string, value: number}> = [];
	public notes: Array<{name: string, value: number}> = [];

	public lineChartScheme: Color = {
    name: 'coolthree',
    selectable: true,
    group: ScaleType.Linear,
    //domain: ['#01579b', '#7aa3e5', '#a8385d', '#00bfa5']
    domain: ['#01579b', '#7aa3e5']
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

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit(): void {
		let A: Array<number> = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9 ];
    let B: Array<number> = [4, 4, 4, 4, 4, 6, 6, 6, 6, 6 ];
    let C: Array<number> = [1, 1, 2, 2, 2, 4, 7, 8, 9, 14];
    let D: Array<number> = [0, 0, 1, 1, 6, 8, 8, 8, 9, 9];
		
		[this.A_bars, this.A_lines] = this.buildNgxData(this.autoMap(A));
		[this.B_bars, this.B_lines] = this.buildNgxData(this.autoMap(B));
		[this.C_bars, this.C_lines] = this.buildNgxData(this.autoMap(C));
		[this.D_bars, this.D_lines] = this.buildNgxData(this.autoMap(D));

		let windows = this._document.defaultView;
		//console.log(windows.MathJax);
		//windows.MathJax.startup.output.options.scale=2;
		//console.log("JSON: ", Pyramide);
		for (let row of Pyramide.data) {
			this.hommes.push({name: row[0].toString(), value: -row[1]});
			this.femmes.push({name: row[0].toString(), value: row[2]});
		}
		this.hommes.reverse();
		this.femmes.reverse();
//		console.log("Columns: ", Pyramide.columns);
//		console.log("Length: ", Pyramide.index.length);
//		console.log("H: ", this.hommes);
//		console.log("F: ", this.femmes);
		let map = new Map<string, number>();
		for (let row of Crayons.data) {
			if (map.has(row)) {
				map.set(row, map.get(row)+1);
			}
			else {
				map.set(row, 1);
			}
		}
		let map_sorted = new Map([...map.entries()].sort((a,b) => a[1] - b[1]))
		map_sorted.forEach((value: number, key: string) => {
			this.crayons.push({name: key, value: value});
		});
		map = new Map<string, number>();
		for (let row of Notes.data) {
			if (map.has(row)) {
				map.set(row, map.get(row)+1);
			}
			else {
				map.set(row, 1);
			}
		}
		map_sorted = new Map([...map.entries()].sort());
		map_sorted.forEach((value: number, key: string) => {
			this.notes.push({name: key, value: value});
		});
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

	xAxisTickFormat(value: number): number {
		return -value;
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
