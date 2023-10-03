const LoadChart = (data) => {
    const CHART_ID = 'sales-chart';
    const chartEl = document.getElementById('sales-chart');
    if (chartEl) {
        // Use themes
        am4core.useTheme(am4themes_animated);

        // Create chart instance
        const chart = am4core.create(CHART_ID, am4charts.XYChart);

        // Create axes
        const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

        dateAxis.dataFields.category = 'date';
        dateAxis.dateFormat = 'MMM'

        valueAxis.dataFields.valueY = 'value';
        valueAxis.title.text = 'Dollars';

        const salesSeries = chart.series.push(new am4charts.LineSeries());
        salesSeries.dataFields.dateX = 'date';
        salesSeries.dataFields.valueY = 'value';
        salesSeries.bullets.push(new am4charts.CircleBullet());
        salesSeries.stroke = am4core.color('rgb(0,255,0)');

        const returnsSeries = chart.series.push(new am4charts.LineSeries());
        returnsSeries.dataFields.dateX = 'date';
        returnsSeries.dataFields.valueY = 'value';
        returnsSeries.bullets.push(new am4charts.CircleBullet());
        returnsSeries.stroke = am4core.color('rgb(255,0,0)');

        salesSeries.data = [
            { "date": new Date(2023, 0), "value": 100437.86 },
            { "date": new Date(2023, 1), "value": 79748.35  },
            { "date": new Date(2023, 2), "value": 53572.82  },
            { "date": new Date(2023, 3), "value": 124151.86 },
            { "date": new Date(2023, 4), "value": 88331.49  },
            { "date": new Date(2023, 5), "value": 41229.01  },
            { "date": new Date(2023, 6), "value": 160718.47 },
            { "date": new Date(2023, 7), "value": 101659.51 },
            { "date": new Date(2023, 8), "value": 76012.6   },
            { "date": new Date(2023, 9), "value": 125947.08 },
            { "date": new Date(2023, 10), "value": 79005.82  },
            { "date": new Date(2023, 11), "value": 83975.85  }
        ];
        returnsSeries.data = [
            { "date": new Date(2023, 0), "value": 13555.52  },
            { "date": new Date(2023, 1), "value": 11155.71  },
            { "date": new Date(2023, 2), "value": 7155.64   },
            { "date": new Date(2023, 3), "value": 16567.72  },
            { "date": new Date(2023, 4), "value": 12548.59  },
            { "date": new Date(2023, 5), "value": 5412.63   },
            { "date": new Date(2023, 6), "value": 21466.94  },
            { "date": new Date(2023, 7), "value": 14021.42  },
            { "date": new Date(2023, 8), "value": 10059.6   },
            { "date": new Date(2023, 9), "value": 17156.16  },
            { "date": new Date(2023, 10), "value": 10765.65  },
            { "date": new Date(2023, 11), "value": 11317.5   }
        ];
    }
}