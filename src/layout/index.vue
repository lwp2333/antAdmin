<template>
  <a-layout :style="layoutStyle">
    <a-layout-sider
      v-show="!breakPointValue"
      v-model="collapsed"
      :style="siderStyle"
      :width="240"
      :trigger="null"
      breakpoint="lg"
      @breakpoint="breakpoint"
    >
      <siderContent />
    </a-layout-sider>
    <a-drawer :visible="drawerSider" :closable="false" :width="240" placement="left" :bodyStyle="draerBodyStyle" @close="onClose">
      <siderContent />
    </a-drawer>
    <a-layout :style="layoutStyle">
      <a-layout-header :style="headerStyle">
        <div class="headerBox">
          <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="handleCollapsed" />
          <div class="right">
            <a-avatar :size="36" :src="avatar" />
            <a-dropdown>
              <a class="ant-dropdown-link" @click="e => e.preventDefault()"> <a-icon type="more"/></a>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a href="javascript:;">个人中心</a>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item>
                  <a href="javascript:;">退出登录</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
        </div>
      </a-layout-header>
      <a-layout-content :style="contentStyle">
        <router-view />
      </a-layout-content>
      <a-layout-footer :style="footerStyle">
        nice-admin
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import avatar from '@/assets/svg/avatar.svg'
import siderContent from './siderContent'
export default {
  name: 'LayoutMain',
  components: {
    siderContent
  },
  data: function() {
    return {
      avatar,
      layoutStyle: {
        height: '100vh',
        backgroundColor: '#fafdff'
      },
      siderStyle: {
        height: '100vh',
        backgroundColor: '#fff'
      },
      headerStyle: {
        height: '48px',
        lineHeight: '48px',
        background: '#fff',
        padding: '0px 18px'
      },
      contentStyle: {
        padding: '18px 24px'
      },
      footerStyle: {
        textAlign: 'center',
        padding: '4px 0px'
      },
      draerBodyStyle: {
        padding: '0px'
      },
      collapsed: false,
      breakPointValue: false,
      drawerSider: false
    }
  },
  methods: {
    breakpoint: function(value) {
      this.breakPointValue = value
      // 是否触发断点 初始决定是否启用
      this.drawerSider = value
    },
    handleCollapsed: function() {
      this.collapsed = !this.collapsed
      if (this.breakPointValue) {
        this.drawerSider = true
      }
    },
    onClose() {
      this.drawerSider = false
    }
  }
}
</script>

<style lang="less" scoped>
.siderBox {
  height: 100%;
  padding: 24px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.headerBox {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.trigger {
  font-size: 16px;
  cursor: pointer;
}
</style>
