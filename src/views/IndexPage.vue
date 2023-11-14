<template>
    <div>
        <table border="1">
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Password</th>
            </tr>
            <tr v-for="users in users">
                <td>{{ users.firstname }}</td>
                <td>{{ users.lastname }}</td>
                <td>{{ users.email }}</td>
                <td>{{ users.password }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
            users:[],
        }
    },
    created(){
        this.getUsers();
    },
    methods:{
        async getUsers(){
            try {
                const user = await axios.get('getData');
                this.users = user.data;
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>