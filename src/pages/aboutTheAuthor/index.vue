<template>
  <div class="my-info">
    <div class="menu">
      <nav class="introduce-box"></nav>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },

  data () {
    return {
    }
  },

  mounted () {
  },
  computed: {

  },

  methods: {
  }

}

</script>
<style lang="less"  rel="stylesheet/less" scope type="text/less">
.my-info {
  width: 300px;
  background: #000;
  height: 100vh;
  .menu {
    .introduce-box {
      width: 100%;
      height: 225px;
      background: url('../../assets/common/img/me_top_bg.gif') no-repeat;
      background-size: 100%;
    }
  }
}
</style>