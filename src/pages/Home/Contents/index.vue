<template>
  <div class="content-main">
    <div id="cesium-container"></div>
  </div>
</template>

<script>
export default {
  name: "contents",
  data() {
    return {
      viewer: null,
    };
  },
  //钩子函数
  mounted() {
    this.show();
  },
  //自定义方法
  methods: {
    show() {
      Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYTVhNjE0YS02YWVhLTQxNTAtYWI5NS1jYzUwMzliNmRjYjciLCJpZCI6OTc4NDgsImlhdCI6MTY1NTM4NDM0OH0.aT_4OCAgJ95R0l6Tg--u4jo9Ky6TlFa40p-8OxzYy2M";
      this.viewer = new Cesium.Viewer("cesium-container", {
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
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.content-main {
  width: 100%;
  height: 100%;  
  border: 1px solid #eee;
  overflow: hidden;  
} 

</style>