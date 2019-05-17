<template >
    <div class="easyui-layout" style="width: 100%">
      <div data-options="region:'north'" style="background:#79b30c;height: 70px"></div>
      <div data-options="region:'west',title:'功能菜单',iconCls:'icon-left01'" style="width:300px;padding:10px;background: #eeeeee;">
        <ul class="easyui-tree"></ul>
      </div>
      <div data-options="region:'center'" style="padding:5px;background:#eee;"></div>




      <div data-options="region:'south'" style="background:#79b30c;height: 30px" class="footer">
        <p>版本所有@2017-2019弘兆软件技术有限责任公司</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
.easyui-layout{
  width: 100%;
  height: 100%;
}
.footer{
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer p{
  color: white;
  font-size: 12px;
  padding: 0;
  margin: 0;
}
</style>
