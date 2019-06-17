<!-- 注册页 -->
<template>
  <div class='book-register'>
    <Form :model="registerForm" :rules="ruleValidate" :label-width="100" ref="registerForm">
      <FormItem label="昵称" prop="nickname">
        <Input v-model="registerForm.nickname" placeholder="请输入昵称"></Input>
      </FormItem>

      <FormItem label="密码" prop="password">
        <Input v-model="registerForm.password" type="password" placeholder="请输入密码"></Input>
      </FormItem>

      <FormItem label="验证密码" prop="confirm_password">
        <Input v-model="registerForm.confirm_password" type="password" placeholder="请再次输入密码"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('registerForm')">Submit</Button>
        <Button @click="handleReset('registerForm')" style="margin-left: 8px">Reset</Button>
      </FormItem>
    </Form>

  </div>
</template>

<script>

export default {
components: {},
props: {},
data() {
    const validatePass = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Please enter your password'));
        } else {
            if (this.registerForm.confirm_password !== '') {
                // 对第二个密码框单独验证
                this.$refs.registerForm.validateField('confirm_password');
            }
            callback();
        }
    };
    const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Please enter your password again'));
        } else if (value !== this.registerForm.password) {
            callback(new Error('The two input passwords do not match!'));
        } else {
            callback();
        }
    };
    return {
        registerForm:{
            nickname:null,
            password:null,
            confirm_password:null,
        },
        ruleValidate:{
            nickname: [
                { required: true, message: '请输入昵称', trigger: 'blur' }
            ],
            password: [
                { validator: validatePass, trigger: 'blur' }
            ],
            confirm_password: [
                { validator: validatePassCheck, trigger: 'blur' }
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
                await  this.post2json('/cms/user/register')    
                
            } 
        })
    },
},
created() {

},
}
</script>
<style>
.book-register {
}
</style>