<template>
	<Header />
	<div class="restaurants">
		<table border="1">
			<tr>
				<th>No.</th>
				<th>Name.</th>
				<th>Phone.</th>
				<th>Email</th>
				<th>action</th>
			</tr>
			<tr v-for="con in contacts" :key="con.id">
				<td>{{ con.id }}</td>
				<td>{{ con.name }}</td>
				<td>{{ con.phone }}</td>
				<td>{{ con.email }}</td>
				<td>
					<router-link :to="'/update/'+con.id">Update</router-link> &nbsp;
					<button @click="deleteContact(con.id)" type="button">Delete</button>
				</td>
			</tr>
		</table>
	</div>
</template>

<script type="text/javascript">
import Header from './Header.vue'
import axios from 'axios'

export default {
	name:"Home",
	data(){
		return {
			contacts:[]
		}
	},
	components:{
		Header
	},
	methods:{
		async deleteContact(id){
			var conf=confirm("Are you sure")
			if(!conf){
				return false;
			}
			let result=await axios.delete("http://localhost:3000/contacts/"+id);
			if(result.status==200){
				this.loadData();
			} 
		},
		async loadData(){
			let result=await axios.get('http://localhost:3000/contacts')
			this.contacts=result.data
		}
	},
	mounted(){
		this.loadData()
	}
	
}
</script>
<style>
table,td{
	border-collapse:collapse
}
table{
	width:100%;
}
td, th{
	height:40px;
}
.restaurants{
	width:800px;
	margin:auto; 
}
</style>