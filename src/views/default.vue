<template>
  <div>
    <h1>{{lighting}}</h1>
    <div class="demo"></div>
  </div>
</template>

<script>
export default {
  name: 'default',
  data() {
    return {
      lighting: '123',
    };
  },
};
</script>
<style lang="less" scoped>
.demo{
  width: 100px;
  height: 300px;
  background-color: red;
}
</style>
