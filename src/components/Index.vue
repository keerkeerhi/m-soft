<template>
  <div class="hello">
    <Menu mode="horizontal" :theme="'dark'" active-name="1">
      <Menu-item name="1">
        <Icon type="ios-paper"></Icon>
        内容管理
    </Menu-item>
      <Menu-item name="2">
        <Icon type="ios-people"></Icon>
        用户管理
    </Menu-item>
      <Submenu name="3">
        <template slot="title">
          <Icon type="stats-bars"></Icon>
          统计分析
      </template>
        <Menu-group title="使用">
          <Menu-item name="3-1">新增和启动</Menu-item>
          <Menu-item name="3-2">活跃分析</Menu-item>
          <Menu-item name="3-3">时段分析</Menu-item>
        </Menu-group>
        <Menu-group title="留存">
          <Menu-item name="3-4">用户留存</Menu-item>
          <Menu-item name="3-5">流失用户</Menu-item>
        </Menu-group>
      </Submenu>
      <Menu-item name="4">
        <Icon type="settings"></Icon>
        综合设置
    </Menu-item>
    </Menu>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
