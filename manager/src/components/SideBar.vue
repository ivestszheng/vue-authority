<!--
 * @Descripttion: 
 * @Date: 2022-07-11 09:09:09
 * @LastEditTime: 2022-07-11 09:24:03
-->
<template>
   <div class="side-bar">side-bar</div>
</template>

<script>
export default {
   name: 'SideBar',
   data () {
       return {}
   },
  components: {}
}
</script>

<style>
.side-bar {
   position: fixed;
   top: 0;
   left: 0;
   z-index: 1;
   width: 200px;
   height: 100%;
   padding-top: 90px;
   box-sizing: border-box;
   background-color: #ededed;
}
</style>
