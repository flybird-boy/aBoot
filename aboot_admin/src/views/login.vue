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
                await  this.post2json('/cms/user/login',this.loginForm)    
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