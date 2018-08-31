<template>
  <div class="container">
    <div class="columns">
      <div class="box  column is-half is-offset-one-quarter setBox">
        <span> Sign In </span>
        <hr>
        <b-field>
          <b-input placeholder="username" icon-pack="fas" icon="user" v-model="user.username" v-validate="'required|min:1'">
          </b-input>

        </b-field>
        <p class="is-danger">{{errors.first('name')}}</p>
        <b-field>
          <b-input placeholder="password" type="password" icon-pack="fas" icon="lock" v-model="user.password">
          </b-input>
        </b-field>
        <button class="button is-success is-outlined" @click="PostLogin">Sign In</button>
      </div>
    </div>
  </div>
</template>

<script>  
  export default {
    data() {
      return {
        user: {
          username: '',
          password: ''
        }

      }
    },
    methods: {
      async PostLogin() {
        try {

          // const { data } = await axios.post('http://localhost:5000/api/v1/login', this.user)
          // if (data.status === 200) {
          //   window.sessionStorage.setItem('currlogin', this.user.username)
          //   this.$router.push('/Home')

          // }

        } catch (error) {
          console.log(error.message)
        }
      },
      chkusername() {
        if (this.user.username === '') return `is-danger `
      }

    }

  }
</script>

<style>
  .setBox {
    position: relative;
    margin: 10% 8%;
  }
</style>