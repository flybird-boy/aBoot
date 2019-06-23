<template>
  <div class="home">
    <div class="user-info">
      <Form :model="userInfo" :label-width="80">
        <FormItem label="用户名">
          <Input v-model="userInfo.nickname"></Input>
        </FormItem>
        <FormItem label="图像">
          <Upload action="//jsonplaceholder.typicode.com/posts/">
            <img :src="userInfo.avatar" alt="" class="user-img">
          </Upload>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Button from 'iview';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return{
      userInfo:{}
    }
  },
  methods:{
    async getUserInfo(){
      let res = await  this.$q({
        url:'/cms/user/auths'
      })
      this.userInfo = res;
      console.log(res);
      
    }
  },
  created(){
    this.getUserInfo()
  }
}
</script>
<style lang="less">
.home {
  .user-info {
    width: 800px;
    margin: 0 auto;
  }
  .user-img {
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #f5f5f5;
  }
}
</style>

