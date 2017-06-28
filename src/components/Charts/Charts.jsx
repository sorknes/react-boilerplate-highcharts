/*  ------------------------------------------------
./src/components/charts/Charts.jsx
---------------------------------------------------- */


import React, {Component} from 'react';

// components
import Chart from './Chart/Chart';

const zaxisBarData = [
  'Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'
];

const seriesOne = [
  {
    name: 'Jane',
    data: [1, 10, 4, 5]
  }, {
    name: 'John',
    data: [5, 7, 3, 9]
  }
];

const seriesTwo = [
  {
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: 'Microsoft Internet Explorer',
      y: 56.33
    }, {
      name: 'Chrome',
      y: 24.03,
      sliced: true,
      selected: true
    }, {
      name: 'Firefox',
      y: 10.38
    }, {
      name: 'Safari',
      y: 4.77
    }, {
      name: 'Opera',
      y: 0.91
    }, {
      name: 'Proprietary or Undetectable',
      y: 0.2
    }]
  }
];

const seriesThree = [
  {
    name: 'Things',
    colorByPoint: true,
    data: [{
      name: 'Animals',
      y: 5,
      drilldown: 'animals'
    }, {
      name: 'Fruits',
      y: 2,
      drilldown: 'fruits'
    }, {
      name: 'Cars',
      y: 4,
      drilldown: 'cars'
    }]
  }
];

const drilldownOne = [
  {
    type: 'areaspline',
    name: 'Animals',
    id: 'animals',
    data: [
        ['Cats', 4],
        ['Dogs', 2],
        ['Cows', 1],
        ['Sheep', 2],
        ['Pigs', 1]
    ]
  }, {
    type: 'areaspline',
    name: 'Fruits',
    id: 'fruits',
    data: [
        ['Apples', 4],
        ['Oranges', 2]
    ]
  }, {
    type: 'areaspline',
    name: 'Cars',
    id: 'cars',
    data: [
        ['Toyota', 4],
        ['Opel', 2],
        ['Volkswagen', 2]
    ]
  }
];

class Charts extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <div className="container container--charts">
          <Chart
            title="Fruit Consumption"
            subtitle="Bar chart"
            chart="bar"
            zaxis={zaxisBarData}
            yaxis="Fruit eaten"
            series={seriesOne} />

          <Chart
            title="Browser stats"
            subtitle="Pie chart"
            chart="pie"
            series={seriesTwo} />
        </div>

        <div className="container">
          <Chart
            title="Drill down"
            subtitle="Bar chart"
            chart="bar"
            series={seriesThree}
            drilldown={drilldownOne} />
        </div>
      </div>
    )
  }
};

export default Charts;
