<template> 
<div class="big"> 
    <TypeNav></TypeNav> 
    <Contents></Contents>
</div>
</template>

<script> 
//引入组件  
import  Contents from '../Home/Contents'
export default { 
    name :'', 
    components:{ 
        Contents,
    },
}
</script>

<style> 
.big{ 
    display: flex;
}
</style>