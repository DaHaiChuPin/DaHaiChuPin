option = {
    title : {
        text: '河北省各城市PM10浓度',
        subtext: '2018'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['PM10浓度']
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
            data : ['邯郸','石家庄','邢台','保定','唐山','沧州','衡水','廊坊','秦皇岛','承德','张家口',]
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'PM10浓度',
            type:'bar',
            data:[1081, 1068, 1080, 921, 899, 850, 830,800, 662, 659, 607],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
        },
    ]
};
