<template>
  <div class="siderContent ">
    <div class="logo">
      <hover-rotate>
        <a-avatar :size="64" shape="circle" style="backgroundColor:#87d068">logo</a-avatar>
      </hover-rotate>
      Nice Admin
    </div>
    <a-menu
      :selectedKeys="menuSelectedKeys"
      :openKeys="menuOpenKeys"
      theme="light"
      mode="inline"
      :default-selected-keys="[]"
      @select="select"
      @openChange="openChange"
      class="globalScrollbar-Y"
    >
      <template v-for="item in menuList">
        <a-menu-item v-if="!item.children" :key="item.key">
          <a-icon :type="item.icon" />
          <!-- <span>{{ item.title }}</span> -->
          <a-badge :dot="!item.show">
            {{ item.title }}
          </a-badge>
        </a-menu-item>
        <sub-menu v-else :key="item.key" :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import subMenu from './subMenu'
import { mapGetters } from 'vuex'
import HoverRotate from '../components/global/hoverRotate.vue'
export default {
  name: 'SiderContent',
  components: {
    subMenu,
    HoverRotate
  },
  computed: {
    ...mapGetters(['menuList', 'menuOpenKeys', 'menuSelectedKeys'])
  },
  methods: {
    select: function({ item, key, selectedKeys }) {
      this.$store.commit('menuInfo/SET_selectedKeys', selectedKeys)
    },
    openChange: function(keys) {
      this.$store.commit('menuInfo/SET_openKeys', keys)
    }
  }
}
</script>

<style scoped lang="less">
.siderContent {
  height: 100vh;
  padding: 24px 0px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 18px;
  }
}
.ant-menu-inline {
  border: none;
}
</style>
