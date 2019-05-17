<template>
    <footer>
      <p>版本所有@2017-2019弘兆软件有限责任公司</p>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3%;
  left: 0;
  background: #79b30c;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1200px;
}
  p{
    margin: 0;
    color: white;
    font-size: 14px;
  }
</style>
