/*  ------------------------------------------------
./src/components/charts/piechart/Chart.jsx
---------------------------------------------------- */


import React, {Component} from 'react';
import Highcharts from 'highcharts';

// components
import Highmaps from 'highcharts/highmaps';

// modules
import Drilldown from 'highcharts/modules/drilldown.src';
import Exporting from 'highcharts/modules/exporting.src';

// call import
Drilldown(Highcharts);
Exporting(Highcharts);

class Chart extends Component {
  // when the DOM is ready, create the chart.
  componentDidMount() {
    // extend Highcharts with modules
    if (this.props.modules) {
      this.props.modules.forEach(function (module) {
        module(Highcharts);

        // components
        module(Highmaps);
      });
    };

    // console.log('Export: ' + Exporting);

    // set container which the chart should render to.
    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.refs.container,
      {
        plotOptions: {
          areaspline: {
            fillOpacity: 0.5
          }
        },
        lang: {
          drillUpText: 'Tilbake til "{series.name}"'
        },
        exporting: {
          filename: 'Navn diagram' + ' - ' + this.props.title
        },
        colors: ['#f6c034', '#7e9b40', '#db8100', '#809ba0', '#117eb4', '#79006c', '#574319'],
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: this.props.chart,
          style: {
            fontFamily: 'Open Sans, sans-serif'
          }
        },
        title: {
          text: this.props.title
        },
        subtitle: {
          text: this.props.subtitle,
          style: {
            color: '#333'
          }
        },
        tooltip: {
          padding: 20,
          borderColor: 'black',
          borderRadius: 0,
          borderWidth: 1,
          backgroundColor: 'black',
          shadow: false,
          pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: {point.y}%',
          style: {
            color: 'white'
          }
        },
        xAxis: {
          categories: this.props.zaxis,
          title: {
            text: null
          },
          lineColor: '#333',
          lineWidth: 0.5,
          tickLength: 0
        },
        yAxis: {
          title: {
            text: this.props.yaxis
          },
          gridLineDashStyle: 'dot',
          gridLineColor: '#a5aaad',
          lineColor: '#333',
          lineWidth: 0.5,
          tickLength: 0
        },
        series: this.props.series,
        drilldown: {
          series: this.props.drilldown,
          drillUpButton: {
            position: {
              x: 8,
              y: -64
            },
            theme: {
              style: {
                color: '#ac442c'
              },
              fill: 'white',
              'stroke-width': '2',
              stroke: '#ac442c',
              r: 0,
              states: {
                hover: {
                  fill: '#f5f3ed',
                  stroke: '#7b3120'
                }
              }
            }
          },
        },
        credits: {
          enabled: false
        }
      }
    );
  }

  // destroy chart before unmount.
  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return (
      <div className="container--charts__charts">
        <div className="content">
          {/* <h2>{this.props.title}</h2> */}
          <div ref="container" />
        </div>
      </div>
    )
  }
}

export default Chart;
