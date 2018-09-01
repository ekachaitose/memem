<template>
  <div class="container">
    <div class="columns">
      <div class="box  column is-half is-offset-one-quarter setBox">
        <span> Sign In </span>
        <hr>
        <b-field  
          :type="csstype('username')"  
          :message="cssmessage('username')"  
           >
          <b-input 
            placeholder="username" 
            icon-pack="fas" 
            icon="user" 
            v-model="user.username" 
            name="username"
            v-validate="'required|min:1'"
         >
          </b-input>

        </b-field>
        <!-- <p class="label  is-danger">{{errors.first('username')}}</p> -->
        <b-field 
          :type="csstype('password')"
          :message="cssmessage('password')  "   >
          <b-input 
            placeholder="password" 
            type="password" 
            icon-pack="fas" 
            icon="lock" 
            name="password"
            v-model="user.password"
            v-validate="'required|min:1'"
            >
          </b-input>
        </b-field>
        <button class="button is-success is-outlined" @click="PostLogin">Sign In</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
        const { data } = await axios.post(
          'http://localhost:5000/api/v1/login',
          this.user
        )
        if (data.status === 200) {
          localStorage.setItem('currentUser', this.user.username)
          this.$router.push('/Home')
        }
      } catch (error) {
        console.log(error.message)
      }
    },
    csstype(field) {
      return `b-input ${this.errors.has(field) ? 'is-danger ' : ''}`
    },
    cssmessage(field) {
      return ` ${this.errors.has(field) ? `This ${field} is required !! ` : ''}`
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