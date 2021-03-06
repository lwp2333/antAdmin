<template>
  <div class="messageTag">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MessageTag',
  data: function() {
    return {}
  },
  created: function() {},
  mounted: function() {},
  methods: {}
}
</script>

<style scoped lang="less">
.messageTag {
  position: relative;
  border-radius: 5px;
  width: 200px;
  height: 50px;
  background-color: #f90;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  &::after {
    position: absolute;
    left: 100%;
    top: 50%;
    margin-top: -5px;
    border: 5px solid transparent;
    border-left-color: #f90;
    content: '';
  }
}
</style>
