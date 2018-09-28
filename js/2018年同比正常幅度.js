option = {
    title : {
        text: '河北省各城市综合指数同比改善幅度',
        subtext: '2018'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['综合指数同比改善增幅']
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
            boundaryGap : false,
            data : ['保定','廊坊','石家庄','秦皇岛','唐山','邯郸','衡水','沧州','邢台','张家口','承德',]
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} °%'
            }
        }
    ],
    series : [
        {
            name:'综合指数同比改善幅度',
            type:'line',
            data:[34.9, 32.7,26.9,24.6,24.5, 16.3, 16.3, 13.6,12.8,7.2,6.5],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
        },
    ]
};
