<template>
  <div id="app">
    <MHeader />
    <SideBar />
    <PageBoard />
  </div>
</template>
<script>
import MHeader from '@/components/Header'
import SideBar from '@/components/SideBar'
import PageBoard from '@/components/PageBoard'

import {getUserRouters} from '@/services'

export default {
  components: {
    MHeader,
    SideBar,
    PageBoard
  },
  async mounted(){
    const data = await getUserRouters(2)
    console.log(data);
  }
}
</script>
<style>
#app {
  height: 100%;
}
</style>
