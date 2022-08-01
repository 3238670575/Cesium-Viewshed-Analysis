<template>
  <header class="header">
    <!-- logo -->
    <div class="logo">
      <a><img src="./images/logo.png" alt="" /></a>
    </div>
    <div class="contian">
      <div class="side_toggle_button"> 
          <span class="iconfont icon-arrow-double-left icon"></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
.header {
  z-index: 1200; 
  position: relative; 
  display: flex;
}
.logo {
  border-bottom: 1px solid #eee; 
  border-top: 1px solid #eee;
  width: 240px;
  height: 57px;
  display: table;
  text-align: center;
  position: relative;
  z-index: 1300;
}  
.logo a{ 
    display: table-cell; 
    vertical-align: middle;
}
.logo img{ 
    width: 170px; 
    box-sizing: border-box; 
    vertical-align: middle; 
    border: 0;
} 
.contian{  
    border: 1px solid #eee; 
    height: 57px; 
    padding:0 20px;  
    display: table;
}   
.icon{    
  display:table-cell; 
  vertical-align: middle; 
  width: 25px; 
  height: 57px; 
}  
.iconfont{ 
  color: #cfcfcf;
}
</style>