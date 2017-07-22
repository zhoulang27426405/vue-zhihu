<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  color: #555;
  font-size: 15px;
  line-height: 1.7;
  font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',Arial,sans-serif;
  background: #fff;
}
a {
  text-decoration: none;
  color: #259;
}
a:link {
  -webkit-tap-highlight-color: rgba(225,225,225,.5);
}
h2, input, button {
  margin: 0;
  padding: 0;
}
</style>
