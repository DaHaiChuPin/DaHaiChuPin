option = {
    title : {
        text: '石家庄空气中各物质含量',
        subtext: '2018年'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['PM10','PM2.5']
    },
    toolbox: {
        show : true,
        feature : {
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'PM10',
            type:'bar',
            data:[171,148,164,143,124,99,78,66,75],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
        },
        {
            name:'PM2.5',
            type:'bar',
            data:[111,96,102,62,52,44,46,37,37]
            ,
        }
    ]
};
