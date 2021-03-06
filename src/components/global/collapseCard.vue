<template>
  <div class="collapseCard">
    <div class="title" @click="handleCollapse">
      <slot name="title"> {{ title }}</slot>
      <a-icon v-if="collapse" type="up" style=" cursor: pointer;" />
      <a-icon v-else type="down" style=" cursor: pointer;" />
    </div>
    <div class="content" :style="collapse ? 'max-height: 9999px' : ''">
      <slot name="content"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollapseCard',
  props: {
    title: {
      type: String
    }
  },
  data: function() {
    return {
      collapse: false
    }
  },
  created: function() {},
  mounted: function() {},
  methods: {
    handleCollapse: function() {
      this.collapse = !this.collapse
    }
  }
}
</script>

<style scoped lang="less">
.collapseCard {
  width: 100%;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  padding: 8px;
  .title {
    font-size: 16px;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content {
    max-height: 0;
    font-size: 16px;
    overflow: hidden;
    transition: max-height 0.5s;
  }
}
</style>
