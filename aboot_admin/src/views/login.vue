<!-- 注册页 -->
<template>
  <div class='book-login'>
    <Form :model="loginForm" :rules="ruleValidate" :label-width="100" ref="loginForm">
      <FormItem label="昵称" prop="nickname">
        <Input v-model="loginForm.nickname" placeholder="请输入昵称"></Input>
      </FormItem>

      <FormItem label="密码" prop="password">
        <Input v-model="loginForm.password" type="password" placeholder="请输入密码"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('loginForm')">Submit</Button>
        <Button @click="handleReset('loginForm')" style="margin-left: 8px">Reset</Button>
      </FormItem>
    </Form>

  </div>
</template>

<script>
import { setStore } from "@/utils/storage.js"
export default {
components: {},
props: {},
data() {
    return {
        loginForm:{
            nickname:null,
            password:null,
        },
        ruleValidate:{
            nickname: [
                { required: true, message: '请输入昵称', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' }
            ],
        }

    };
},
computed: {},
watch: {},
methods: {
    handleReset (name) {
        this.$refs[name].resetFields();
    },
    handleSubmit (name) {
        this.$refs[name].validate(async(valid) => {
            if (valid) {
            let {access_token,refresh_token} =   await  this.$q({
              method:'post',
              url:'/cms/user/login',
              data:this.loginForm
            })    
            setStore('access_token','Bearer '+ access_token)
            setStore('refresh_token','Bearer '+ refresh_token)
            this.$router.push({path:'/home'})
            } 
        })
    },
},
created() {

},
}
</script>
<style>
.book-login {
}
</style>