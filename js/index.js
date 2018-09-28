/*
~function () {
    var myChart = echarts.init(AAA);
    var option = {
        ...
    };
    myChart.setOption(option);
}();
*/

~function () {
    var myChart = echarts.init(ET1);
    var option = {
        title: {
            text: '河北省各城市空气质量排名',
            subtext: '2018'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['综合指数']
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']},
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: ['张家口', '承德', '秦皇岛', '廊坊', '衡水', '沧州', '保定', '邯郸', '唐山', '邢台', '石家庄']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '综合指数',
                type: 'bar',
                data: [4.45, 5.07, 5.73, 6.06, 6.27, 6.75, 7.25, 7.7, 7.71, 8.14, 8.17],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
            },
        ]
    };
    myChart.setOption(option);
}();


~function () {
    var myChart = echarts.init(ET2);
    var option = {
        title: {
            text: '空气质量中各污染物质含量',
            subtext: '石家庄2018年',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['PM2.5', 'PM10', 'SO2', 'CO', 'NO2']
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']},
            }
        },
        restore: {show: true},
        saveAsImage: {show: true},
        calculable: true,
        series: [
            {
                name: '空气质量中各污染物质含量',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 587, name: 'PM2.5'},
                    {value: 1068, name: 'PM10'},
                    {value: 204, name: 'SO2'},
                    {value: 10.014, name: 'CO'},
                    {value: 377, name: 'NO2'}
                ]
            }
        ]
    };
    myChart.setOption(option);
}();


~function () {
    var myChart = echarts.init(ET3);
    var option = {
        title: {
            text: '河北省各城市综合指数同比改善幅度',
            subtext: '2018'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['综合指数同比改善增幅']
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']},
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['保定', '廊坊', '石家庄', '秦皇岛', '唐山', '邯郸', '衡水', '沧州', '邢台', '张家口', '承德',]
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °%'
                }
            }
        ],
        series: [
            {
                name: '综合指数同比改善幅度',
                type: 'line',
                data: [34.9, 32.7, 26.9, 24.6, 24.5, 16.3, 16.3, 13.6, 12.8, 7.2, 6.5],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
            },
        ]
    };
    myChart.setOption(option);
}();


~function () {
    var myChart = echarts.init(ET4);
    var option = {
        title: {
            text: '河北省各城市PM10浓度',
            subtext: '2018'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['PM10浓度']
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']},
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: ['邯郸', '石家庄', '邢台', '保定', '唐山', '沧州', '衡水', '廊坊', '秦皇岛', '承德', '张家口',]
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'PM10浓度',
                type: 'bar',
                data: [1081, 1068, 1080, 921, 899, 850, 830, 800, 662, 659, 607],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
            },
        ]
    };

    myChart.setOption(option);
}();


~function () {
    var myChart = echarts.init(ET5);
    var option = {
        title: {
            text: '石家庄空气中各物质含量',
            subtext: '2018年'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['PM10', 'PM2.5']
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {show: true, type: ['line', 'bar']},
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'PM10',
                type: 'bar',
                data: [171, 148, 164, 143, 124, 99, 78, 66, 75],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
            },
            {
                name: 'PM2.5',
                type: 'bar',
                data: [111, 96, 102, 62, 52, 44, 46, 37, 37]
                ,
            }
        ]
    };

    myChart.setOption(option);
}();




