<template>
  <div class="outer-box">
    <TypeNav></TypeNav>
    <div class="viewershed">
      <div id="viewer-container"></div>
      <div id="btn">
        <el-button @click="addViewField">添加可视域</el-button>
        <el-button @click="clearAllViewField">删除可视域</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "viewshed",
  data() {
    return {
      viewer: null,
      arrViewField: [],
      viewModel: {
        verticalAngle: 90,
        horizontalAngle: 120,
        distance: 10,
      },
    };
  },
  //钩子函数
  mounted() {
    this.show();
  },
  methods: {
    //初始化
    show() {
      Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYTVhNjE0YS02YWVhLTQxNTAtYWI5NS1jYzUwMzliNmRjYjciLCJpZCI6OTc4NDgsImlhdCI6MTY1NTM4NDM0OH0.aT_4OCAgJ95R0l6Tg--u4jo9Ky6TlFa40p-8OxzYy2M";
      this.viewer = new Cesium.Viewer("viewer-container", {
        infoBox: false,
        shouldAnimate: true,
        vrButton: true,
        geocoder: false,
        homeButton: false,
        sceneModePicker: false,
        baseLayerPicker: true,
        navigationHelpButton: false,
        animation: false,
        timeline: false,
        fullscreenButton: false,
      });
      // 加载倾斜摄影 大雁塔
      let tilesets = this.viewer.scene.primitives.add(
        new Cesium.Cesium3DTileset({
          url: "http://earthsdk.com/v/last/Apps/assets/dayanta/tileset.json",
        })
      );
      this.viewer.flyTo(tilesets);
    },
    //添加可视域
    addViewField() {
      let e = new Cesium.ViewShed3D(this.viewer, {
        horizontalAngle: Number(this.viewModel.horizontalAngle),
        verticalAngle: Number(this.viewModel.verticalAngle),
        distance: Number(this.viewModel.distance),
        calback: function () {
          this.viewModel.distance = e.distance;
        },
      });
      this.arrViewField.push(e);
    },
    //删除可视域
    clearAllViewField() {
      for (let e = 0, i = this.arrViewField.length; e < i; e++) {
        this.arrViewField[e].destroy();
      }
      this.arrViewField = [];
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.outer-box{ 
  display: flex;
} 
.viewershed{ 
  width: 100%;
  height: 100%;  
  border: 1px solid #eee;
  overflow: hidden;  
}
#btn {
  position: absolute;
  display: flex; 
  top: 60px;
  left: 250px;
}
</style>