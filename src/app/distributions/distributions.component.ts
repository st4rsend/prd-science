import { Component, OnInit } from '@angular/core';
import { ScaleType } from '../ngx/common/types/scale-type.enum';
import { Color, colorSets } from '../ngx/utils/color-sets';

@Component({
  selector: 'app-distributions',
  templateUrl: './distributions.component.html',
  styleUrls: ['./distributions.component.sass']
})
export class DistributionsComponent implements OnInit {

	public ngxCount = [
  {
    "name": "Germany",
    "value": 40632,
    "extra": {
      "code": "de"
    }
  },
  {
    "name": "United States",
    "value": 50000,
    "extra": {
      "code": "us"
    }
  },
  {
    "name": "France",
    "value": 36745,
    "extra": {
      "code": "fr"
    }
  },
  {
    "name": "United Kingdom",
    "value": 36240,
    "extra": {
      "code": "uk"
    }
  },
  {
    "name": "Spain",
    "value": 33000,
    "extra": {
      "code": "es"
    }
  },
  {
    "name": "Italy",
    "value": 35800,
    "extra": {
      "code": "it"
    }
  }
];

public bar = [
  {
    "name": "USA",
    "value": 50000
  },
  {
    "name": "United Kingdom",
    "value": 30000
  },
  {
    "name": "France",
    "value": 10000
  },
  {
    "name": "Japan",
    "value": 0
  },
  {
    "name": "China",
    "value": 500
  }
]

public lines = [
  {
    "name": "Tablets",
    "series": [
      {
        "name": "USA",
        "value": 50
      },
      {
        "value": 80,
        "name": "United Kingdom"
      },
      {
        "value": 85,
        "name": "France"
      },
      {
        "value": 90,
        "name": "Japan"
      },
      {
        "value": 100,
        "name": "China"
      }
    ]
  },
  {
    "name": "Cell Phones",
    "series": [
      {
        "value": 10,
        "name": "USA"
      },
      {
        "value": 20,
        "name": "United Kingdom"
      },
      {
        "value": 30,
        "name": "France"
      },
      {
        "value": 40,
        "name": "Japan"
      },
      {
        "value": 10,
        "name": "China"
      }
    ]
  },
  {
    "name": "Computers",
    "series": [
      {
        "value": 2,
        "name": "USA"
      },
      {
        "value": 4,
        "name": "United Kingdom"
      },
      {
        "value": 20,
        "name": "France"
      },
      {
        "value": 30,
        "name": "Japan"
      },
      {
        "value": 35,
        "name": "China"
      }
    ]
  }
]

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


	public legendTitle: string = 'default title';

  constructor() { }

  ngOnInit(): void {
  }

}
