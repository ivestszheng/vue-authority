<!--
 * @Descripttion: 
 * @Date: 2022-07-11 13:01:11
 * @LastEditTime: 2022-07-11 13:24:26
-->
<template>
  <div>
    <ul v-if="item.children && item.children.length > 0">
      <li>
        <router-link :to="item.link || item.path">{{ item.title }}</router-link>
        <template v-for="(c, i) of item.children">
          <MenuItem :key="i" :item="c" />
        </template>
      </li>
    </ul>
    <ul v-else>
      <router-link :to="item.link || item.path">{{ item.title }}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
}
</script>

<style>
</style>
