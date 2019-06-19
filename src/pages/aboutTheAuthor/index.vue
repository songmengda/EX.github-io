<template>
  <div class="my-info">
    <div class="menu">
      <nav class="introduce-box">
        <div class="introduce-via">
          <img src="../../assets/common/img/touxiang.jpeg" class alt>
        </div>
        <div class="introduce">
          <p class="nikename">昵称:前端劝退专家</p>
          <p class="introduce-time">入坑时间:1+年</p>
        </div>
      </nav>
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

  created () {

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
      overflow: hidden;
      .introduce-via {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        overflow: hidden;
        margin: 20px auto 0;
      }
      .introduce {
        color: #fff;
        font-size: 12px;
        padding-left: 100px;
        margin: 10px;
        font-weight: bolder;
      }
    }
  }
}
</style>
