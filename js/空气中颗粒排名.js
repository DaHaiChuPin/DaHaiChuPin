option = {
    title : {
        text: '空气质量中各污染物质含量',
        subtext: '石家庄2018年',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['PM2.5','PM10','SO2','CO','NO2']
    },
    toolbox: {
        show : true,
        feature : {
            magicType : {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'空气质量中各污染物质含量',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:587, name:'PM2.5'},
                {value:1068, name:'PM10'},
                {value:204, name:'SO2'},
                {value:10.014, name:'CO'},
                {value:377, name:'NO2'}
            ]
        }
    ]
};
