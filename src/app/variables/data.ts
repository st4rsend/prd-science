// example at https://github.com/swimlane/ngx-charts/blob/master/src/app/data.ts
import {
  SingleSeries,
  MultiSeries,
  BubbleChartMultiSeries,
  BoxChartMultiSeries,
  Series,
  TreeMapData
} from '../ngx/models/chart-data.model';

export const single: SingleSeries = [
  {
    name: 'Germany',
    value: 40632,
  },
  {
    name: 'United States',
    value: 50000,
  },
  {
    name: 'France',
    value: 36745,
  },
  {
    name: 'United Kingdom',
    value: 36240,
  },
  {
    name: 'Spain',
    value: 33000,
  },
	/*
  {
    name: 'Italy',
    value: 35800,
  }
	*/
];

export const lines = [
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
];

