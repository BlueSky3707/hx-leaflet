export const serverip = "http://10.61.5.41:6080/";
const serverConfig = {
  mapExtent: {
    xmin: 104.207,
    ymin: 31.54,
    xmax: 112.5,
    ymax: 39.8,
  },
  dtVector: `http://10.61.3.142:6080/arcgis/rest/services/TDTSxBaseMap_XX/MapServer`,
  dtVectorL: `http://10.61.3.142:6080/arcgis/rest/services/TDTSxBaseMap_LB/MapServer`,
  imgVector:
    "http://10.61.3.142:6080/arcgis/rest/services/TDTSxImgMap/MapServer",
  imgVectorL:
    "http://10.61.3.142:6080/arcgis/rest/services/TDTSxImgLabel/MapServer",
  sxxzqu: `${serverip}arcgis/rest/services/环保厅/hbt_DSMjh/MapServer/0`,
  sxqxd:
    "http://10.61.3.113:6080/arcgis/rest/services/Weatherpt_hbt/MapServer/0/",
  cszxd: "http://10.61.5.41:6080/arcgis/rest/services/hkwater2/MapServer/11",
};
export default serverConfig;
