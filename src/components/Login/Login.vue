<template>
  <div class="pageContent">
    <!--<Form ref="formInline" :model="userInfo" :rules="ruleInfo">
      <div>
        <Poptip trigger="hover" title="提示标题" content="提示内容">
          <Form-item prop="userName">
            <Input type="text" v-model="userInfo.userName" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </Form-item>
        </Poptip>
      </div>
      <Poptip trigger="hover" title="提示标题" content="提示内容">
        <Form-item prop="psw">
          <Input type="password" v-model="userInfo.psw" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </Form-item>
      </Poptip>
      <Poptip trigger="hover" title="提示标题" content="提示内容">
        <Form-item>
          <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </Form-item>
      </Poptip>
    </Form>-->
    <Poptip class="inputDiv" trigger="hover" title="提示标题">
      <Input @on-enter="submitFun()" type="text" size="large" v-model="userInfo.userName" placeholder="Who are you?">
      <Icon type="ios-person-outline" slot="prepend"></Icon>
      <Button slot="append" icon="close" @click="userInfo.userName='';"></Button>
      </Input>
      <div slot="content">
        输入名字首字母，看我认识你不啊！<br/>
        <span style="color:orangered;">不要忘记回车哦</span>
      </div>
    </Poptip>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        userInfo: {
          userName: '',
          psw: ''
        },
        infoObj: {
          wyp: 'honey a',
          lfy: '飞跃，近来可好！',
          zn: '张宁，郑州见嘞！',
          zr: '张瑞，说好的漂流呢？',
          zpk: '鸟神，小lu怡情，大lu伤身！'
        }
//        ,
//        ruleInfo: {
//          userName: [
//            {required: true, message: '请填写用户名', trigger: 'blur'}
//          ],
//          psw: [
//            {required: true, message: '请填写密码', trigger: 'blur'},
//            {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
//          ]
//        }
      }
    },
    methods: {
//      handleSubmit (name) {
//        this.$refs[name].validate((valid) => {
//          if (valid) {
//            this.$Message.success('提交成功!')
//          } else {
//            this.$Message.error('表单验证失败!')
//          }
//        })
//      },
      submitFun () {
        let userName = this.userInfo.userName.trim();
        if (userName in this.infoObj) {
          let info = this.infoObj[userName]
          this.$Notice.success({
            title: (userName === 'wyp') ? '我的爱人' : '我的朋友',
            desc: info,
            top: 100,
            duration: 10
          })
          setTimeout(() => {
            this.$router.push('/Home')
          }, 3000)
        } else {
          this.$Notice.error({
            title: 'notice',
            desc: '来串门的吧！',
            top: 100,
            duration: 5
          })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pageContent {
    background: rgb(28, 36, 56);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .inputDiv {
    height: 50px;
    line-height: 50px;
  }

</style>
