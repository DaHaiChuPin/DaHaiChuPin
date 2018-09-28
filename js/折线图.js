option = {
    title : {
        text: '2018年河北省各城市空气质量',
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['pm2.5']
    },
    toolbox: {
        show : true,
        feature : {
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['张家口','承德','秦皇岛','廊坊','唐山','沧州','保定','衡水','石家庄','邯郸','石家庄']
        }
    ],
    yAxis : [
        {
            type : 'value',
        }
    ],
    series : [
        {
            name:'PM2.5',
            type:'line',
            data:[33, 42, 48, 58, 70, 83, 87,96,99,106,112],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
                ]
            }

