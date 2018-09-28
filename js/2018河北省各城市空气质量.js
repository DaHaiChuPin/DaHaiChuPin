option = {
    title : {
        text: '河北省各城市空气质量排名',
        subtext: '2018'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['综合指数']
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
            data : ['张家口','承德','秦皇岛','廊坊','衡水','沧州','保定','邯郸','唐山','邢台','石家庄']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'综合指数',
            type:'bar',
            data:[4.45, 5.07, 5.73,6.06, 6.27, 6.75, 7.25, 7.7,7.71, 8.14,8.17],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
        },
    ]
};
