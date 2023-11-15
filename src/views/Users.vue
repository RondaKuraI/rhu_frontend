<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h4>
          User
          <RouterLink to="/users/create" class="btn btn-primary float-end">Add User</RouterLink>
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="users.length > 0">
            <tr v-for="users in users">
              <td>{{ users.id }}</td>
              <td>{{ users.firstname }}</td>
              <td>{{ users.lastname }}</td>
              <td>{{ users.email }}</td>
              <td>{{ users.password }}</td>
              <td>{{ users.created_at }}</td>
              <td>
                <RouterLink to="/" class="btn btn-success">Edit</RouterLink>
                <button type="button" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="7">Loading...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default{
  name: 'users',
  data(){
    return{
      users: []
    }
  },
  mounted(){

    this.getUsers();
    //console.log('i am here')

  },
  methods: {
    async getUsers(){
            try {
                const user = await axios.get('getData');
                this.users = user.data;
            } catch (error) {
                console.log(error);
            }
        }
  },
}
</script>
