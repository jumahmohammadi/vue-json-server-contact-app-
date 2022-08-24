<template>
	<Header />
	<h1>New Contact</h1>
	<form class="add_res">
		<input type="text" name="name" placeholder="Enter Full Name" v-model="contact.name">
		<input type="text" name="phone" placeholder="Enter Phone" v-model="contact.phone">
		<input type="text" name="email" placeholder="Enter Email Address" v-model="contact.email">
		<button type="button" @click="addContact" :disabled="isDisabled">Add new Contact</button>
	</form>
</template>

<script type="text/javascript">
import Header from './Header.vue'
import axios from 'axios'
export default {
	name:"Add",
	data(){
		return{
			contact:{
				name:'',
				phone:'',
				email:'',
			},
			isDisabled:false
		}
	},
	methods:{
		async addContact(){
			if(this.contact.name==""){
				return alert("please enter name")
			}
			this.isDisabled=true;
			let result=await axios.post("http://localhost:3000/contacts",this.contact)
			if(result.status==201){
				this.$router.push({name:'Home'})
			}
			
		}
	},
	components:{
		Header
	},

}
</script>
<style>
.add_res input{
	width :300px; 
	height : 40px; 
	padding-left:20px; 
	display:block; 
	margin-bottom:20px; 
	margin-left:auto ; 
	margin-right:auto ; 
	border:1px solid skyblue; 
}
.add_res button {
	width:320px; 
	height :40px; 
	border:1px solid skyblue;
	background-color:skyblue; 
	color:#fff; 
	cursor :pointer; 
}
</style>
