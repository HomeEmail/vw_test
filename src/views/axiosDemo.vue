<template>
  <div>
    <button @click="doAxios">发送请求</button>
  </div>
</template>

<script>

export default {
  name: 'axiosDemo',
  data() {
    return {};
  },
  methods: {
    doAxios() {
      this.$axios.post('/auth/status').then((res) => {
        console.info('请求结果', res);
      }, (error) => {
        console.info('请求失败', error);
      });
    },
  },
};
</script>
