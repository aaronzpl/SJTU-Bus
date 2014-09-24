window.onload = function () {
    var map = new BMap.Map("container");
    map.centerAndZoom(new BMap.Point(121.443235,31.031303), 17); //将中心位置设置到上海交大
    
    //debug: 鼠标点击取经纬度
    map.addEventListener("click",function(e){
        console.log(e.point.lng + "," + e.point.lat);
    });
    
    var stopList = [
        ['东川路地铁站', 121.426814, 31.023853, 'time'],
        ['菁菁堂', 121.436534, 31.02475, 'time'],
        ['校医院', 121.439911, 31.025764, 'time'],
        ['东上院', 121.445463, 31.028007, 'time'],
        ['东中院', 121.444457, 31.030127, 'time'],
        ['新图书馆', 121.443954, 31.03155, 'time'],
        ['行政B楼', 121.447601, 31.032742, 'time'],
        ['电信学院', 121.448751, 31.03155, 'time'],
        ['凯旋门', 121.452308, 31.029431, 'time'],
        ['机动学院', 121.454608, 31.032633, 'time'],
        ['庙门', 121.453566, 31.035001, 'time'],
        ['船建学院', 121.451589, 31.036842, 'time'],
        ['文选医学楼', 121.448607, 31.037383, 'time'],
        ['学生服务中心', 121.43957,  31.034351, 'time'],
        ['西区学生公寓', 121.435797, 31.033144, 'time'],
        ['第四餐饮大楼', 121.433264, 31.031349, 'time'],
        ['华联生活中心', 121.436839, 31.03087, 'time'],
        ['包玉刚图书馆', 121.437037, 31.028997, 'time'],
        ['材料学院', 121.434486, 31.027922, 'time']
    ];
    var stopTime = {
        '东川路地铁站': {
            direct1: '07:24 07:39 07:54 08:09 <span class="red">17:03 17:28 17:58 18:43 19:28 20:28</span>',
            festival_direct1: '8:24 <span class="red">16:58 17:43 18:28</span>',
            metro_station: true
        },
        '菁菁堂': {
            direct1: '07:30　07:45　08:00　08:15　08:25　08:40　09:00　09:20　09:40 10:00　10:20　10:40　11:00　11:20　11:40　12:00　13:00　13:20 13:40　14:00　14:20　14:40　15:00　15:20　15:40　16:00　16:10 16:30　<span class="blue">16:35　17:00　17:30　18:15　19:00　20:00</span>',
            direct2: '08:30　08:50　09:10　09:30　10:00　10:30　11:00　11:30　12:30 13:30　14:00　14:30　15:00　15:30　16:00　<span class="blue">16:35</span>',
            festival_direct1: '08:30　09:30　10:30　11:30　15:00　<span class="blue">16:30　18:00</span>',
            festival_direct2: '09:00　10:00　11:00　12:00　14:00　16:00　<span class="blue">17:15</span>'
        },
        '校医院': {
            direct1: '',
            direct2: '',
            festival_direct1: '',
            festival_direct2: ''
        },
        '东上院': {
            direct1: '',
            direct2: '',
            festival_direct1: '',
            festival_direct2: ''
        },
        '东中院': {
            direct1: '',
            direct2: '',
            festival_direct1: '',
            festival_direct2: ''
        },
        '新图书馆': {
            direct1: '',
            direct2: '',
            festival_direct1: '',
            festival_direct2: ''
        },
        '行政B楼': {
            direct1: '',
            direct2: '',
            festival_direct1: '',
            festival_direct2: ''
        },
        '电信学院': {
            direct1: '',
            direct2: '',
            festival_direct1: '',
            festival_direct2: ''
        },
        '凯旋门': {
            direct1: '',
            direct2: '',
            festival_direct1: '',
            festival_direct2: ''
        },
        '机动学院': {
            direct1: '',
            direct2: '',
            festival_direct1: '',
            festival_direct2: ''
        },
        '庙门': {
            direct1: '',
            direct2: '',
            festival_direct1: '',
            festival_direct2: ''
        },
        '船建学院': {
            direct1: '',
            direct2: '',
            festival_direct1: '',
            festival_direct2: ''
        },
        '文选医学楼': {
            direct1: '',
            direct2: '',
            festival_direct1: '',
            festival_direct2: ''
        },
        '学生服务中心': {
            direct1: '',
            direct2: '',
            festival_direct1: '',
            festival_direct2: ''
        },
        '西区学生公寓': {
            direct1: '',
            direct2: '',
            festival_direct1: '',
            festival_direct2: ''
        },
        '第四餐饮大楼': {
            direct1: '',
            direct2: '',
            festival_direct1: '',
            festival_direct2: ''
        },
        '华联生活中心': {
            direct1: '',
            direct2: '',
            festival_direct1: '',
            festival_direct2: ''
        },
        '包玉刚图书馆': {
            direct1: '',
            direct2: '',
            festival_direct1: '',
            festival_direct2: ''
        },
        '材料学院': {
            direct1: '',
            direct2: '',
            festival_direct1: '',
            festival_direct2: ''
        }
    };
    var lineList = [
        [121.436534, 31.02475],
        [121.439911, 31.025764],
        [121.445535, 31.027412],
        [121.445301, 31.027984],
        [121.444331, 31.030104],
        [121.443774, 31.031605],
        [121.448373, 31.033121],
        [121.448319, 31.032285],
        [121.448733, 31.03162],
        [121.449308, 31.031001],
        [121.450996, 31.030661],
        [121.451535, 31.029284],
        [121.454302, 31.030135],
        [121.454626, 31.030305],
        [121.455093, 31.030877],
        [121.454913, 31.031759],
        [121.453601, 31.034761],
        [121.452973, 31.035519],
        [121.452218, 31.036308],
        [121.451481, 31.03671],
        [121.449972, 31.037329],
        [121.448553, 31.037252],
        [121.432905, 31.032162],
        [121.43339,  31.031001],
        [121.436372, 31.03196],
        [121.437486, 31.029114],
        [121.434432, 31.028061],
        [121.436354, 31.024859],
        [121.43657,  31.02475],
        [121.437037, 31.024905],
        [121.437504, 31.023729],
        [121.428215, 31.020681],
        [121.426832, 31.023992]
    ];
    for (var i = 0; i < stopList.length; i++) {
        (function (i) {
            var point = new BMap.Point(stopList[i][1], stopList[i][2]);
            var marker = new BMap.Marker(point);
            var label = new BMap.Label(stopList[i][0],{offset:new BMap.Size(20,-10)});
            marker.setLabel(label);
            map.addOverlay(marker);
            var sContent = "<div>"
                + "<h4 class='title'>" + stopList[i][0] + "</h4>"
                + "<p class='attention'>1.蓝色标注班次终点站为东川路地铁站 2.周六日及国定节假日停运</p>"
                + (stopTime[stopList[i][0]].metro_station ? "<p class='attention'>3.红色标注班次终点站［可能］为菁菁堂（根据本站作者的猜测＝。＝）</p>" : '')
                + (stopTime[stopList[i][0]].direct1 ? "<h5 class='direct'>逆时针</h5>"
                + "<p class='timetable'>" + stopTime[stopList[i][0]].direct1 + "</p>" : '')
                + (stopTime[stopList[i][0]].direct2 ? "<h5 class='direct'>顺时针</h5>"
                + "<p class='timetable'>" + stopTime[stopList[i][0]].direct2 + "</p>" : '')
                + (stopTime[stopList[i][0]].festival_direct1 ? "<h5 class='direct'>寒暑假－逆时针</h5>"
                + "<p class='timetable'>" + stopTime[stopList[i][0]].festival_direct1 + "</p>" : '')
                + (stopTime[stopList[i][0]].festival_direct2 ? "<h5 class='direct'>寒暑假－顺时针</h5>"
                + "<p class='timetable'>" + stopTime[stopList[i][0]].festival_direct2 + "</p>" : '')
                + "<p class='footer'>本时刻表的最后更新时间为：2014年9月24日</p>"
                + "</div>";
            var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象 
            marker.addEventListener("click", function(){          
                map.openInfoWindow(infoWindow,point); //开启信息窗口
            });
        })(i);
    }
    //绘制路线
    var pointArr = [];
    for (var i = 0; i < lineList.length; i++) {
        pointArr.push(new BMap.Point(lineList[i][0], lineList[i][1]));
    }
    var polyline = new BMap.Polyline(pointArr, {strokeColor:"blue", strokeWeight:5, strokeOpacity:0.5});
    map.addOverlay(polyline);
};