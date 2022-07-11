<!--
 * @Descripttion: 
 * @Date: 2022-07-11 09:09:19
 * @LastEditTime: 2022-07-11 09:27:24
-->
<template>
   <div class="page-board">
      page-board
      <router-view />
   </div>
</template>

<script>
export default {
   name: 'PageBoard',
   data () {
       return {}
   },
  components: {}
}
</script>

<style>
.page-board{
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   padding: 90px 30px 30px 230px;
}
</style>
