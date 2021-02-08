const state = {
  // 菜单列表
  menuList: [
    {
      key: '1',
      title: '工作台',
      icon: 'appstore'
    },
    {
      key: '2',
      title: '表单',
      icon: 'form',
      children: [
        {
          key: '2.1',
          title: '基础表单',
          icon: 'form'
        },
        {
          key: '2.2',
          title: '步骤表单',
          icon: 'form'
        },
        {
          key: '2.3',
          title: '行内表单',
          icon: 'form'
        }
      ]
    },
    {
      key: '3',
      title: '表格',
      icon: 'table',
      children: [
        {
          key: '3.1',
          title: '基础表格',
          icon: 'table'
        },
        {
          key: '3.2',
          title: '高级表格',
          icon: 'table'
        }
      ]
    },
    {
      key: '4',
      title: '系统配置',
      icon: 'setting',
      children: [
        {
          key: '4.1',
          title: '角色配置',
          icon: 'setting'
        },
        {
          key: '4.2',
          title: '权限配置',
          icon: 'setting'
        },
        {
          key: '4.3',
          title: '菜单配置',
          icon: 'setting'
        }
      ]
    },
    {
      key: '5',
      title: '多层菜单',
      icon: 'align-right',
      children: [
        {
          key: '5.1',
          title: '菜单 1-1',
          icon: 'align-right',
          children: [
            {
              key: '5.1.1',
              title: '菜单 1-1-1',
              icon: 'align-right',
              children: [{ key: '5.1.1.1', title: '菜单 1-1-1-1', icon: 'align-right' }]
            }
          ]
        }
      ]
    }
  ],
  // 当前展开菜单项目
  menuOpenKeys: [],
  // 当前选中菜单
  menuSelectedKeys: []
}
const mutations = {
  SET_menuList(state, val) {
    state.menuList = val
  },
  SET_openKeys(state, val) {
    state.menuOpenKeys = val
  },
  SET_selectedKeys(state, val) {
    state.menuSelectedKeys = val
  }
}
const actions = {
  generateMenu({ state, commit }, authMenu) {
    commit('SET_menuList', authMenu)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
