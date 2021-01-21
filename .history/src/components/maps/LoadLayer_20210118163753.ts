import MapInt from "../maps/MapInt";
import * as esri from "esri-leaflet";
import HeatmapOverlay from "../../../node_modules/heatmap.js/plugins/leaflet-heatmap";
import mapConfig from "../../components/maps/mapConfig";
import L from "leaflet";

export default class LoadLayer {
  //加载arcgis要素图层
  public loadPointLayer = (): any => {
    let picy = require("../../assets/良.png");
    let pFlayer = esri.featureLayer({
      url: mapConfig.sxqxd,
      pointToLayer: function(geojson, latlng) {
        return L.marker(latlng, {
          icon: L.icon({
            iconUrl: picy,
            iconSize: [20, 20],
          }),
        });
      },
    });
    MapInt.setLayerInfo("sxqxid", pFlayer);
    MapInt.getInstance().addLayer(pFlayer);
    return pFlayer;
  };
  //设置热力图配置
  public setHeatConfig = (): any => {
    return {
      radius: "radius", //设置每一个热力点的半径
      maxOpacity: 0.5, //设置最大的不透明度
      minOpacity: 0.3, //设置最小的不透明度
      scaleRadius: true, //设置热力点是否平滑过渡
      blur: 0.95, //系数越高，渐变越平滑，默认是0.85,
      //滤镜系数将应用于所有热点数据。
      useLocalExtrema: true, //使用局部极值
      latField: "lat", //纬度
      lngField: "lng", //经度
      valueField: "value", //热力点的值
      gradient: {
        "0.99": "rgba(255,0,0,1)",
        "0.9": "rgba(255,255,0,1)",
        "0.8": "rgba(0,255,0,1)",
        "0.5": "rgba(0,255,255,1)",
        "0": "rgba(0,0,255,1)",
      },
    };
  };
  public createData = (gross, radius) => {
    let max = 0; //单点最大值
    let points: any[] = []; //点集合
    for (; gross > 0; gross--) {
      var val = Math.floor(Math.random() * 100);
      max = Math.max(max, val);
      let point: any = {
        lat: Math.random() * 2.5 + 34, //经度
        lng: Math.random() * 2.5 + 108, //纬度
        count: val, //数据量大小
        radius: radius,
      };
      points.push(point);
    }
    return { max: max, data: points };
  };
  //加载热力图
  public addHeatMapLayer = () => {
    let heatmap_layer = new HeatmapOverlay(this.setHeatConfig());
    MapInt.setLayerInfo("rltid", heatmap_layer);
    MapInt.getInstance().addLayer(heatmap_layer);
    let data = this.createData(10000, 0.05);
    heatmap_layer.setData(data);
    return heatmap_layer;
  };
  //加载统计图
  public staticLayer = () => {
    let pFeatureLayer = esri
      .featureLayer({
        url: mapConfig.cszxd,
        pointToLayer: function(geojson, latlng) {
          return L.marker(latlng, {
            icon: L.divIcon({
              html: "sdasa",
              className: "myLable",
            }),
          });
        },
      })
      .addTo(MapInt.getInstance());
  };
}
