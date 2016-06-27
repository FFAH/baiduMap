/**
 * Created by 13945 on 2016/6/27.
 */
window.onload=function(){
    var map = new BMap.Map("baiduMap");
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,16);
    map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用

    var maker = new BMap.Marker(point);
    map.addOverlay(maker);
    map.setDefaultCursor('pointer');
    map.addEventListener("click",function(e) {
        map.removeOverlay(maker);
        console.log("aaaa");
        maker = new BMap.Marker(e.point);
        map.addOverlay(maker);
    });

   $("#showMap").on("click",function(){
       $("#baiduMap").toggle();
   });


    $("#inputSite").blur(function(){
        myCity.get(myFun( $("#inputSite").val()));
    });
    //重新定位地理位置
    function myFun(result){
        var cityName = result;
        map.setCenter(cityName);
    }
    var myCity = new BMap.LocalCity();
   // myCity.get(myFun("安徽省，宣城市，宣州区"));

}