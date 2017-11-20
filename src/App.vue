<template>
  <div id="app">
    <el-container>
      <el-header height="80px">
        <img style="margin-top: 20px;" src="src/assets/log.svg">
      </el-header>
      <el-container class="bodyContent">
        <!-- 菜单 -->
        <el-aside width="200px">

          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            active-text-color="#ffd04b">
            <router-link to="/">
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">仪表盘</span>
              </el-menu-item>
            </router-link>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-mobile-phone"></i>
                <span>主机管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title">服务器</template>
                <router-link to="/Host">
                  <el-menu-item index="2-1">服务器列表</el-menu-item>
                </router-link>

                <router-link to="/Shell">
                  <el-menu-item index="2-2">终端</el-menu-item>
                </router-link>

              </el-menu-item-group>
              <el-menu-item-group title="任务">
                <router-link to="/Process">
                  <el-menu-item index="2-3">任务进程</el-menu-item>
                </router-link>
              </el-menu-item-group>

            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-bell"></i>
                <span>操作管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title">脚本</template>
                <el-menu-item index="3-1">脚本列表</el-menu-item>
                <el-menu-item index="3-2">脚本钩子</el-menu-item>
                <el-menu-item index="3-3">定时任务</el-menu-item>
              </el-menu-item-group>

            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-picture"></i>
                <span>性能分析</span>
              </template>
              <el-menu-item-group>
                <template slot="title">服务器</template>
                <el-menu-item index="4-1">性能监控</el-menu-item>
                <el-menu-item index="4-2">服务器日志</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>账户管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title">角色</template>
                <el-menu-item index="5-1">权限组</el-menu-item>
                <el-menu-item index="5-2">权限人</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">权限</template>
                <el-menu-item index="5-3">ssh认证</el-menu-item>
                <el-menu-item index="5-4">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="6">
              <i class="el-icon-setting"></i>
              <span slot="title">设置</span>
            </el-menu-item>
          </el-menu>

        </el-aside>
        <el-container>
          <el-main>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>

            <div class="page">

              <router-view/>

            </div>

          </el-main>
        </el-container>

      </el-container>

      <el-footer height="40px">
          {{userInfo}}
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
      return {
        userInfo:'admin 登录于 2017-11-20'
      }
  }
}
</script>

<style>
  a {
    text-decoration: none;
  }
  .page{
    margin-top: 20px;
  }
</style>
