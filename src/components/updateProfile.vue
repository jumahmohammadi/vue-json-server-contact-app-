<template>
	<Header />
	<h1>Update Profile</h1>
	<form class="add_res">
		<input type="text" name="name" placeholder="Enter your name" v-model="user.name">
		<input type="email" name="email" placeholder="Enter your email" v-model="user.email">
		<input type="password" name="password" placeholder="Enter your password" v-model="user.password">
		<button type="button" @click="updateUser" :disabled="isDisabled">Update Profile</button>
	</form>
</template>

<script type="text/javascript">
import Header from './Header.vue'
import axios from 'axios'
export default {
	name:"updateProfile",
	components:{
		Header
	},
	data(){
		return{
			user:{
				name:'',
				email:'',
				passsword:'',
			},
			isDisabled:false
		}
	},

	methods:{
		async updateUser(){
			let result=await axios.put("http://localhost:3000/users/"+this.$route.params.id,this.user)
			// console.log("status:" +result.status)
			this.isDisabled=true;
			if(result.status==200){
				localStorage.setItem("user-info",JSON.stringify(this.user))
				this.$router.push({name:'Home'})
			}
			
		}
	},

	async mounted(){
        let result = await axios.get("http://localhost:3000/users/"+this.$route.params.id)
        this.user=result.data 

	}
}
</script>
