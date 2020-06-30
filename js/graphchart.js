
    window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",  {
    theme:"light2",
    animationEnabled: true,
    title:{
    text: "Spike suggests alarming trends"
    },
    axisY :{
    includeZero: true,
    title: "",
    suffix: ""
    },
    toolTip: {
    shared: "true"
    },
    legend:{
    cursor:"pointer",
    itemclick : toggleDataSeries
    },
    data: [
    {
    
    
    },
    {
    
    
    },
    {
    type: "spline",
    showInLegend: true,
    yValueFormatString: "##.00mn",
    name: "",
    opacity:"0.3",
    dataPoints: [
    { label: "Jan11", y: 5.0 },
    { label: "Jan11", y: 4.31 },
    { label: "Jan11", y: 4. },
    { label: "Jan11", y: 3.95 },
    { label: "Jan11", y: 7.16 },
    { label: "Jan11", y: 4.40 },
    { label: "Jan11", y: 7.20 },
    { label: "Jan11", y: 5.17 },
    { label: "Jan11", y: 5.95 },
    { label: "Jan11", y: 5.09 }
    ]
    },
    {
    type: "spline",
    showInLegend: true,
    yValueFormatString: "##.00mn",
    name: "",
    opacity:"0.3",
    dataPoints: [
    { label: "Jan11", y: 8 },
    { label: "Jan11", y: 8.9 },
    { label: "Jan11", y: 8.6 },
    { label: "Jan11", y: 7.8 },
    { label: "Jan11", y: 8.2 },
    { label: "Jan11", y: 7.4 },
    { label: "Jan11", y: 8.4 },
    { label: "Jan11", y: 5.01 },
    { label: "Jan11", y: 7.2 },
    { label: "Jan11", y: 9.7 }
    ]
    },
    {
    
    
    },
    {
    
    
    }]
    });
    var chart2 = new CanvasJS.Chart("chartContainer2",  {
    theme:"light2",
    animationEnabled: true,
    title:{
    text: "Bayarea homeless people area report"
    },
    
    axisY :{
    includeZero: true,
    title: "",
    suffix: ""
    },
    toolTip: {
    shared: "true"
    },
    legend:{
    cursor:"pointer",
    itemclick : toggleDataSeries
    },
    data: [
    {
    
    
    },
    {
    
    
    },
    {
    type: "spline",
    showInLegend: true,
    yValueFormatString: "##.00mn",
    name: "",
    opacity:"0.3",
   
    },
    {
    type: "spline",
    showInLegend: true,
    yValueFormatString: "##.00mn",
    name: "",
    opacity:"0.3",
    dataPoints: [
    { label: "Jan11", y: 9 },
    { label: "Jan11", y: 8.4 },
    { label: "Jan11", y: 8.2 },
    { label: "Jan11", y: 7.8 },
    { label: "Jan11", y: 7.4 },
    { label: "Jan11", y: 6.2 },
    { label: "Jan11", y: 8.4 },
    { label: "Jan11", y: 6.01 },
    { label: "Jan11", y: 7.4 },
    { label: "Jan11", y: 8.3 }
    ]
    },
    {
    
    
    },
    {
    
    
    }]


    });


   var chart3 = new CanvasJS.Chart("chartContainer3", {

    theme:"light2",
    animationEnabled: true,
    title:{
        text: "Homeless people report",
        
        dockInsidePlotArea: false
    },
    legend: {
        maxWidth: 100
    },
    data: [{
        type: "doughnut",
        showInLegend: false,
        dataPoints: [
            { label: "", y: 53 },
            {  label: "", y: 35 },
            {  label: "Jan11", y: 90 },
      { label: "", y: 43 },
      { label: "Jan11", y: 25 }
        ]
    }]
});


   var chart4 = new CanvasJS.Chart("chartContainer4", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title:{
        text: "Homeless People Report"
    },
    axisY: {
        title: ""
    },
    data: [{        
        type: "column",  
        showInLegend: false, 
        legendMarkerColor: "grey",
        legendText: "",
        dataPoints: [      
            { y: 900878, label: "" },
            { y: 666455,  label: "" },
            { y: 309709,  label: "" },
            { y: 958400,  label: "" },
            { y: 502503,  label: "" },
            { y: 601500, label: "" },
            { y: 97800,  label: "" },
            { y: 90000,  label: "" }
        ]
    }]
});

    var chart5 = new CanvasJS.Chart("chartContainer5",  {
    theme:"light2",
    animationEnabled: true,
    title:{
    text: "Bayarea homeless people area report"
    },
    
    axisY :{
    includeZero: true,
    title: "",
    suffix: ""
    },
    toolTip: {
    shared: "true"
    },
    legend:{
    cursor:"pointer",
    itemclick : toggleDataSeries
    },
    data: [
    {
    
    
    },
    {
    
    
    },
    {
    type: "spline",
    showInLegend: true,
    yValueFormatString: "##.00mn",
    name: "",
    opacity:"0.3",
   
    },
    {
    type: "spline",
    showInLegend: true,
    yValueFormatString: "##.00mn",
    name: "",
    opacity:"0.3",
    dataPoints: [
    { label: "Jan11", y: 9 },
    { label: "Jan11", y: 8.4 },
    { label: "Jan11", y: 8.2 },
    { label: "Jan11", y: 7.8 },
    { label: "Jan11", y: 7.4 },
    { label: "Jan11", y: 6.2 },
    { label: "Jan11", y: 8.4 },
    { label: "Jan11", y: 6.01 },
    { label: "Jan11", y: 7.4 },
    { label: "Jan11", y: 8.3 }
    ]
    },
    {
    
    
    },
    {
    
    
    }]


    });





    chart.render();
    chart2.render();
    chart3.render();
    chart4.render();
    chart5.render();
    function toggleDataSeries(e) {
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
    e.dataSeries.visible = false;
    } else {
    e.dataSeries.visible = true;
    }
    chart.render();
    }
    }
    