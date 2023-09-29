const LoadChart = (data) => {
    const CHART_ID = 'sales-chart';
    const chartEl = document.getElementById('sales-chart');
    if (chartEl) {
        const chart = am4core.create(CHART_ID, am4charts.XYChart);
        const xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        const yAxis = chart.yAxes.push(new am4charts.ValueAxis());

        xAxis.dataFields.category = 'category';

        const series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = 'amount';
        series.dataFields.categoryX = 'category';
        series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";

        series.columns.template.adapter.add("fill", (fill, target) => {
            if (target.dataItem.index == 0) {
                return 'blue';
            }
            return 'red';
        });

        chart.data = data;
    }
}