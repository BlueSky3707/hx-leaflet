import MapInt from "../maps/MapInt";
import L from "leaflet";
import HeatmapOverlay from "../../../node_modules/heatmap.js/plugins/leaflet-heatmap";
export default class LayerUtils {
  static attrib: string = "&copy xx";
  static addTileLayer = (url: string, index: number): L.TileLayer => {
    let basemap = L.tileLayer(url + "/tile/{z}/{y}/{x}", {
      tileSize: 256,
      attribution: LayerUtils.attrib,
    });
    if (MapInt.pGroupLayers.hasLayer(basemap)) {
      basemap.remove();
    }
    MapInt.pGroupLayers.addLayer(basemap).setZIndex(index);
    return basemap;
  };
  static addHeatMap = () => {
    var heatmap_cfg = {
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
    console.log(HeatmapOverlay);
    let heatmap_layer = new HeatmapOverlay(heatmap_cfg);
    MapInt.getInstance().addLayer(heatmap_layer);
    let data = LayerUtils.createData(10000, 0.05);
    heatmap_layer.setData(data);
  };
  static createData = (gross, radius) => {
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
}
