<template>
  <div class="heartShape"></div>
</template>

<script>
export default {
  name: 'HeartShape',
  data: function() {
    return {}
  },
  created: function() {},
  mounted: function() {},
  methods: {}
}
</script>

<style scoped lang="less">
.heartShape {
  width: 100px;
  height: 100px;
  margin-top: 48px;
  position: relative;
  background-image: linear-gradient(to bottom, #09f, #f66);
  box-shadow: 0 0 20px rgba(#000, 0.8);
  transform: rotate(45deg);
  &::before,
  &::after {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 100%;
    width: 100%;
    height: 100%;
    content: '';
  }
  &::before {
    background-image: linear-gradient(to bottom, #09f, #f66);
    transform: translateX(-50%);
  }
  &::after {
    background-image: linear-gradient(to bottom, #3c9, #09f 50%, transparent 50%, transparent);
    transform: translateY(-50%);
  }
}
</style>
