<template>
	<Header />
	<h1>Update Contact</h1>
	<form class="add_res">
		<input type="text" name="name" placeholder="Enter Full Name" v-model="contact.name">
		<input type="text" name="phone" placeholder="Enter  Phone" v-model="contact.phone">
		<input type="text" name="email" placeholder="Enter Email Address" v-model="contact.email">
		<button type="button" @click="updateContact" :disabled="isDisabled">Update Contact</button>
	</form>
</template>

<script type="text/javascript">
import Header from './Header.vue'
import axios from 'axios'
export default {
	name:"Update",
	components:{
		Header
	},
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
		async updateContact(){
			let result=await axios.put("http://localhost:3000/contacts/"+this.$route.params.id,this.contact)
			// console.log("status:" +result.status)
			this.isDisabled=true;
			if(result.status==200){
				this.$router.push({name:'Home'})
			}
			
		}
	},

	async mounted(){
        let result = await axios.get("http://localhost:3000/contacts/"+this.$route.params.id)
        this.contact=result.data 

	}
}
</script>
