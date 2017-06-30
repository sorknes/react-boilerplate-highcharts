/*  ------------------------------------------------
./src/components/charts/Charts.jsx
---------------------------------------------------- */


import React, {Component} from 'react';

// components
import Chart from './Chart/Chart';

// react-widgets
import 'react-widgets/lib/scss/react-widgets.scss';
import DropdownList from 'react-widgets/lib/DropdownList';

const colors = [
  'orange', 'red', 'blue', 'purple', 'long color description'
];

const xaxisOne = [
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
    opposite: true,
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
    inverted: true,
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
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <div className="container container--charts">
          <div className="container--charts__chart">
            <div className="chart-content">
              <Chart
                title="Fruit Consumption"
                subtitle="Bar chart"
                chart="line"
                xAxis={xaxisOne}
                yAxis="Fruit eaten"
                yLineDashStyle="dash"
                series={seriesOne} />
            </div>
          </div>

          <div className="container--charts__chart">
            <div className="chart-content">
              <Chart
                title="Browser stats"
                subtitle="Pie chart"
                chart="pie"
                series={seriesTwo} />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="container--charts__chart">
            <div className="chart-content">
              <div className="chart-content__tools">
                <small>Velg visning:</small>

                <DropdownList
                  defaultValue={ 'orange' }
                  data={colors} />
              </div>

              <Chart
                title="Drill down"
                subtitle="Bar chart"
                chart="column"
                xOpposite="true"
                xLineWidth="1"
                xLineDashStyle="solid"
                yLineDashStyle="solid"
                series={seriesThree}
                drilldown={drilldownOne} />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Charts;
