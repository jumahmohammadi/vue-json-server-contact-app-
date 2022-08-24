<template>
  <div class="sign-up-form">
        <div class="sign-up-header">
          <img src="../assets/logo.jpg"  class="logo"/>
         <h1>SingUp</h1>
      </div>
      <div class="register">
         <input type="text" name="name" placeholder="Enter your Name" v-model="name">
         <input type="email" name="email" placeholder="Enter your Email" v-model="email">
         <input type="password" name="password" placeholder="Enter Password" v-model="password">
         <button @click="signUp" type="button" :disabled="isDisabled">Sign Up</button>
         <p>
           <router-link to="/login">Login</router-link>
         </p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignUp',
  data(){
    return {
      name:'',
      email:'',
      password:'',
      isDisabled:false,
    }
  },

  methods:{
    async signUp(){
        let result=await axios.post("http://localhost:3000/users",{
          name:this.name,
          email:this.email,
          password:this.password
        });
        this.isDisabled=true;
        if(result.status==201)   {
          localStorage.setItem("user-info",JSON.stringify(result.data))
          this.$router.push({name:'Home'})
        }
     }
  },

  mounted(){
    let user=localStorage.getItem("user-info");
    if(user){
      this.$router.push({name:'Home'});
    }
  }
  
}
</script>

<style scoped>
  .logo{
    width:140px;
  }
  .register input{
    width :300px; 
    height : 40px; 
    padding-left:20px; 
    display:block; 
    margin-bottom:20px; 
    margin-left:auto ; 
    margin-right:auto ; 
    border:1px solid skyblue; 
  }
  .register button {
    width:320px; 
    height :40px; 
    border:1px solid skyblue;
    background-color:skyblue; 
    color:#fff; 
    cursor :pointer; 
  }
</style>
