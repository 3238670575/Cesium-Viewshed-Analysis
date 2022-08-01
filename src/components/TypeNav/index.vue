<template>
  <!-- <div class="type-nav"> -->
  <div class="sidebar">
    <ul class="sidebar-ul">
      <li class="sidebar-link">
        <router-link to="/home">
          <a class="sidebar-active">
            <i class="iconfont icon-layers sidebar-link-icon"></i>
            首页
          </a>
        </router-link>
      </li>
      <li class="sidebar-link">
        <router-link to="/viewshed">
          <a class="sidebar-active">
            <i class="iconfont icon-browse sidebar-link-icon"></i>
            视域分析
          </a>
        </router-link>
      </li>
    </ul>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "TypeNav",
  data() {
    return {
      keyword: "",
    };
  },
  //自定义方法，路由跳转事件，导航栏显示事件
  methods: {
    // goviewshed(){
    //   let location ={
    //     name:"viewshed",
    //     params:{keyword: this.keyword || undefined}
    //   };
    //   location.query = this.$route.query;
    //   this.$router.push(location)
    // }
  },
};
</script>

<style>
.sidebar {
  width: 240px;
}
.sidebar-ul {
  width: 240px;
  display: flex;
  flex-direction: column;
}
.sidebar-link {
  height: 120px;
  line-height: 120px;
  border-bottom: 1px solid #eee;
  text-align: center;
}
.sidebar-link:hover {
  background-color: aliceblue;
}
.sidebar-active {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 20px;
  color: #cfcfcf;
}
</style>