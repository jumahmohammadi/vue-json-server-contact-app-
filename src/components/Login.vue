<template>
	<div class="sign-in-form">
		<div class="sign-in-header">
			<img src="../assets/logo.jpg"  class="logo"/>
			<h1>Login</h1>
		</div>
		<div class="login">
			<input type="email" name="email" placeholder="Enter your Email" v-model="email">
			<input type="password" name="password" placeholder="Enter Password" v-model="password">
			<button @click="login" type="button">Login</button>
			<p>
				<router-link to="/sign-up" :disabled="isDisabled">Sign Up</router-link>
			</p>
		</div>
	</div>
</template>
<script type="text/javascript">
import axios from 'axios'

export default {
	name: "Login",
	data(){
		return {
			email:'',
			password:'',
			isDisabled:false
		}
	},
	
	methods:{
		async login(){
			let result=await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
			this.isDisabled=true; 
			if(result.status==200 && result.data.length>0)   {
				localStorage.setItem("user-info",JSON.stringify(result.data[0]))
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
.login input{
	width :300px; 
	height : 40px; 
	padding-left:20px; 
	display:block; 
	margin-bottom:20px; 
	margin-left:auto ; 
	margin-right:auto ; 
	border:1px solid skyblue; 
}
.login button {
	width:320px; 
	height :40px; 
	border:1px solid skyblue;
	background-color:skyblue; 
	color:#fff; 
	cursor :pointer; 
}
</style>