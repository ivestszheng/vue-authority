<!--
 * @Descripttion: 
 * @Date: 2022-07-11 09:09:09
 * @LastEditTime: 2022-07-11 13:05:35
-->
<template>
  <div class="side-bar">
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
    </ul>
    <template v-for="(item, index) of $store.state.userRouters">
      <MenuItem :key="index" :item="item" />
    </template>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  name: 'SideBar',
  components: {
    MenuItem
  }
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
