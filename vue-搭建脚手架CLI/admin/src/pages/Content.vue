<template>
<section>
  <div class="left">
    <div class="title">功能菜单<a href="javascript:;"></a></div>
    <ul>
      <li v-for="itme in terr">
        <div><span>{{itme.title}}</span></div>
        <ul v-if="itme.chindren">
          <li v-for="itme2 in itme.chindren"><div><span>{{itme2.title}},{{itme2.title1}}</span></div></li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="right"></div>
</section>
</template>

<script>
  var data = [
    {

    }
  ]
    export default {
      data(){
        return {
          terr:[
            {
              title:'权限管理',
              chindren:[{
                title: '用户管理',
                title1: '人员管理',
                title: '部门管理',
                title: '角色管理'
              }]
            },
            {
              title:'权限管理',
              chindren:[{
                title: '用户管理',
                title: '人员管理',
                title: '部门管理',
                title: '角色管理'
              }]
            },
            {
              title:'权限管理',
              chindren:[{
                title: '用户管理',
                title: '人员管理',
                title: '部门管理',
                title: '角色管理'
              }]
            },
            {
              title:'权限管理',
              chindren:[{
                title: '用户管理',
                title: '人员管理',
                title: '部门管理',
                title: '角色管理'
              }]
            },
            {
              title:'权限管理',
              chindren:[{
                title: '用户管理',
                title: '人员管理',
                title: '部门管理',
                title: '角色管理'
              }]
            },
          ],
        }
      },
        name: "Content"
    }
</script>

<style scoped>
  section{
    position: absolute;
    top: 9%;
    width: 100%;
    min-width: 1200px;
    height: 88%;
    background-color: #e6eef8;
  }
  .left{
    float: left;
    width: 15.8%;
    height: 100%;
    background: white;
    /*border-right: 5px solid #dddddd;*/
    box-sizing: border-box;
  }
  .right{
    float: right;
    height: 100%;
    width: 83.9%;
    background: white;
  }
  .title{
    /*background-color: #e8e8e8;*/
    border: 1px solid #dddddd;
    text-indent: 30px;
    padding: 8px 0;
    color: #0e2d5f;
    font-weight: 600;
    font-size: 12px;
    background: url("../assets/img/ledt01.png")no-repeat 5px center #e8e8e8;
    position: relative;
  }
  .title a{
    position: absolute;
    width: 16px;
    height: 16px;
    right: 10px;
    background: url("../assets/img/layout_arrows.png")no-repeat 0 0;
  }
</style>
