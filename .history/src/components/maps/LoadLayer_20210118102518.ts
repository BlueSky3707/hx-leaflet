import MapInt from "../maps/MapInt";
import * as esri from "esri-leaflet";

export default class LoadLayer {
  public loadPointLayer = (): any => {
    let pFlayer = esri.featureLayer({
      url:
        "http://10.61.3.113:6080/arcgis/rest/services/Weatherpt_hbt/MapServer/0/",
    });
    MapInt.getInstance().addLayer(pFlayer);
  };
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
  public createData = () => {};
  public addHeatMapLayer = () => {};
}
