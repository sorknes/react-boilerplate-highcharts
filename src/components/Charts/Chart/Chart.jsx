/*  ------------------------------------------------
./src/components/charts/piechart/Chart.jsx
---------------------------------------------------- */


import React, {Component} from 'react';
import Highcharts from 'highcharts';

// highcharts components
import Highmaps from 'highcharts/highmaps';

// highcharts modules
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
          line: {
            animation: false,
            states: {
              hover: {
                lineWidth: 5
              }
            }
          },
          areaspline: {
            fillOpacity: 0.5
          }
        },
        lang: {
          drillUpText: '← Tilbake til "{series.name}"'
        },
        exporting: {
          filename: 'Navn diagram' + ' - ' + this.props.title,
          buttons: {
            contextButton: {
              text: 'Lagre som bilde',
              symbol: null,
              x: 0,
              y: 20,
              verticalAlign: 'bottom',
              onclick: function () {
                this.exportChart();
              }
            }
          }
        },
        colors: ['#f6c034', '#db8100', '#7e9b40', '#809ba0', '#117eb4', '#79006c', '#574319'],
        chart: {
          height: 'auto',
          marginRight: 50,
          marginLeft: 50,
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
          opposite: this.props.xOpposite,
          categories: this.props.xAxis,
          title: {
            text: null
          },
          // plotBands: [{
          //   color: 'orange', // Color value
          //   from: 1, // Start of the plot band
          //   to: 2 // End of the plot band
          // }],
          // plotLines: [{
          //   color: 'red', // Color value
          //   dashStyle: 'longdashdot', // Style of the plot line. Default to solid
          //   value: 3, // Value of where the line will appear
          //   width: 2 // Width of the line    
          // }],
          gridLineWidth: this.props.xLineWidth,
          gridLineDashStyle: this.props.xLineDashStyle,
          gridLineColor: '#a5aaad',
          lineWidth: 0,
        },
        yAxis: {
          title: {
            text: this.props.yAxis
          },
          gridLineWidth: 1,
          gridLineDashStyle: this.props.yLineDashStyle,
          gridLineColor: '#a5aaad',
          lineColor: '#a5aaad',
          lineWidth: 1,
        },
        series: this.props.series,
        drilldown: {
          series: this.props.drilldown,
          drillUpButton: {
            position: {
              x: 37,
              y: -80
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
      <div ref="container" />
    )
  }
}

export default Chart;
