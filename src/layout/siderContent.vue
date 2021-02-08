<template>
  <div class="siderContent globalScrollbar">
    <div class="logo">
      <a-avatar :size="36" shape="square" style="backgroundColor:#87d068">logo</a-avatar>
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
    >
      <template v-for="item in menuList">
        <a-menu-item v-if="!item.children" :key="item.key">
          <a-icon :type="item.icon" />
          <span>{{ item.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.key" :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import subMenu from './subMenu'
import { mapGetters } from 'vuex'
export default {
  name: 'SiderContent',
  components: {
    subMenu
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
  max-height: 100vh;
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
</style>
