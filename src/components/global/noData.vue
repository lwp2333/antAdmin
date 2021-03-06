<template>
  <a-row type="flex" justify="center">
    <a-col :xl="8" :md="12" :xs="24">
      <img :src="nodata" alt="" />
    </a-col>
  </a-row>
</template>

<script>
import nodata from '@/assets/svg/noData.svg'
export default {
  name: 'NoData',
  data() {
    return {
      nodata
    }
  }
}
</script>
<style scoped lang="less">
img {
  width: 100%;
  height: 100%;
}
</style>
<style lang="less">
// scoped 模式下重置不了的样式写在这里面，但记得加个id 包裹
</style>
