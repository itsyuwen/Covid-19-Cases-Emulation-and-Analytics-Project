<template>
  <el-aside :width="$store.state.isCollapse ? '200px' : '64px'">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      :collapse="!$store.state.isCollapse"
      :collapse-transition="false">
      <h3 v-show="$store.state.isCollapse">DSCI551-Group</h3>
      <h3 v-show="!$store.state.isCollapse">551</h3>
      <el-menu-item
        :index="item.path"
        v-for="item in noChildren()"
        :key="item.path"
        @click="clickMenu(item)">
        <component class="icons" :is="item.icon"></component>
        <span>{{ item.label }}</span>
      </el-menu-item>
      <el-sub-menu
        :index="item.label"
        v-for="item in hasChildren()"
        :key="item.path">
        <template #title>
          <component class="icons" :is="item.icon"></component>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="subItem.path"
            v-for="(subItem, subIndex) in item.children"
            :key="subIndex"
            @click="clickMenu(subItem)">
            <component class="icons" :is="subItem.icon"></component>
            <span>{{ subItem.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const list = [
      {
        path: "/EDFS",
        name: "EDFS",
        label: "EDFS",
        icon: "location",
        children: [
          {
            path: "/FireBase",
            name: "FireBase",
            label: "FireBase",
            icon: "setting",
            url: "EDFS/FireBase",
          },
          {
            path: "/MongoDB",
            name: "MongoDB",
            label: "MongoDB",
            icon: "setting",
            url: "EDFS/MongoDB",
          },
          {
            path: "/MySQL",
            name: "MySQL",
            label: "MySQL",
            icon: "setting",
            url: "EDFS/MySQL",
          },
        ],
      },
      {
        path: "/FireBaseAnalyze",
        name: "FireBaseAnalyze",
        label: "FireBase Analyze",
        icon: "location",
        children: [
          {
            path: "/FireBaseAnalyze1",
            name: "FireBaseAnalyze1",
            label: "FireBase Analyze1",
            icon: "setting",
            url: "analyze/Analyze1",
          },
          {
            path: "/FireBaseAnalyze2",
            name: "FireBaseAnalyze2",
            label: "FireBase Analyze2",
            icon: "setting",
            url: "analyze/Analyze2",
          },
          {
            path: "/FireBaseAnalyze3",
            name: "FireBaseAnalyze3",
            label: "FireBase Analyze3",
            icon: "setting",
            url: "analyze/Analyze3",
          },
        ],
      },
      {
        path: "/mysqlAnalyze",
        name: "MySQL Analyze",
        label: "MySQL Analyze",
        icon: "location",
        children: [
          {
            path: "/mysqlAnalyze1",
            name: "MySQLAnalyze1",
            label: "mysql Analyze1",
            icon: "setting",
            url: "mysqlAnalyze/Analyze1",
          },
          {
            path: "/mysqlAnalyze2",
            name: "MySQLAnalyze2",
            label: "mysql Analyze2",
            icon: "setting",
            url: "mysqlAnalyze/Analyze2",
          },
          {
            path: "/mysqlAnalyze3",
            name: "MySQLAnalyze3",
            label: "mysql Analyze3",
            icon: "setting",
            url: "mysqlAnalyze/Analyze3",
          },
        ],
      },
      {
        path: "/mongodbAnalyze",
        name: "mongodb Analyze",
        label: "mongodb Analyze",
        icon: "location",
        children: [
          {
            path: "/mongodbAnalyze1",
            name: "mongodbAnalyze1",
            label: "mongodb Analyze1",
            icon: "setting",
            url: "mongodbAnalyze/Analyze1",
          },
          {
            path: "/mongodbAnalyze2",
            name: "mongodbAnalyze2",
            label: "mongodb Analyze2",
            icon: "setting",
            url: "mongodbAnalyze/Analyze2",
          },
          {
            path: "/mongodbAnalyze3",
            name: "mongodbAnalyze3",
            label: "mongodb Analyze3",
            icon: "setting",
            url: "mongodbAnalyze/Analyze3",
          },
        ],
      },
      {
        path: "/FireSearch",
        name: "FireBase Search",
        label: "FireBase Search",
        icon: "location",
        children: [
          {
            path: "/Search1",
            name: "Search1",
            label: "Search1",
            icon: "setting",
            url: "search/Search1",
          },
          {
            path: "/Search2",
            name: "Search2",
            label: "Search2",
            icon: "setting",
            url: "search/Search2",
          },
        ],
      },
      {
        path: "/mysqlSearch",
        name: "MySQL Search",
        label: "MySQL Search",
        icon: "location",
        children: [
          {
            path: "/mysqlSearch1",
            name: "MySQLSearch1",
            label: "MySQLSearch1",
            icon: "setting",
            url: "mysqlSearch/Search1",
          },
          {
            path: "/mysqlSearch2",
            name: "MySQLSearch2",
            label: "MySQLSearch2",
            icon: "setting",
            url: "mysqlSearch/Search2",
          },
        ],
      },
      {
        path: "/mongodbSearch",
        name: "mongodb Search",
        label: "mongodb Search",
        icon: "location",
        children: [
          {
            path: "/mongodbSearch1",
            name: "mongodbSearch1",
            label: "mongodbSearch1",
            icon: "setting",
            url: "mysqlSearch/Search1",
          },
          {
            path: "/mongodbSearch2",
            name: "mongodbSearch2",
            label: "mongodbSearch2",
            icon: "setting",
            url: "mongodbSearch/Search2",
          },
        ],
      },

      {
        path: "/Data",
        label: "Data Explore",
        name: "Data",
        icon: "location",
        children: [
          {
            path: "/FileBrowser",
            name: "FileBrowser",
            label: "FileBrowser",
            icon: "setting",
            url: "data/FileBrowser",
          },
          // {   path : "/Analyze",
          //     name: "Analyze",
          //     label: "Analyze",
          //     icon: "setting",
          //     url:"data/Analyze"
          // }
        ],
      },
    ];
    const router = useRouter();
    const noChildren = () => {
      return list.filter((item) => !item.children);
    };

    const hasChildren = () => {
      return list.filter((item) => item.children);
    };

    // const list = store.state.menu;
    const clickMenu = (item) => {
      router.push({
        name: item.name,
      });
      // vuex 来管理
      store.commit("selectMenu", item);
    };
    return {
      noChildren,
      hasChildren,
      clickMenu,
    };
  },
};
</script>

<style lang="less" scoped>
.icons {
  width: 18px;
  height: 18px;
}
.el-menu {
  border-right: none;
  h3 {
    line-height: 48px;
    color: #fff;
    text-align: center;
  }
}
</style>
