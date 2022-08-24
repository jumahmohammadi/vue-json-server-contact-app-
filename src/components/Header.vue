<template>
	<div>
		<div class="nav">
			<router-link to="/">Home</router-link>
			<router-link to="/add">Add Contact</router-link>
			<a @click="editProfile" href="#">Edit Profile</a>
			<a @click="logout" href="#">Logout</a>
		</div>
		<h1>Welcome {{ name }} </h1>
	</div>
</template>
<script type="text/javascript">
export default {
	name: "Header",
	data(){
		return {
			name:'',
			user_id:0
		}
	},

	methods:{
		logout(){
			localStorage.clear();
			this.$router.push("login")
		},
		editProfile(){
			let user=localStorage.getItem("user-info");
			this.user_id=JSON.parse(user).id;
			this.$router.push({path:`/update-profile/${this.user_id}`});
		}
	},
	mounted(){
		let user=localStorage.getItem("user-info");
		
		
		if(!user){
			this.$router.push({name:'SignUp'});
		}else{
			this.name=JSON.parse(user).name;
		}
	}
}
</script>


<style>
.nav{
	background-color:#333; 
	overflow : hidden; 
}
.nav a{
	float:left; 
	color:#fff; 
	text-align:center;
	padding:14px 16px; 
	margin-right:5px; 
	text-decoration:none;
	font-size:17px
}
nav a:hover{
	background-color:#ddd ;
	color:#fff;
}
</style>