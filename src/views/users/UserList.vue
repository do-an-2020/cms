<template>
  <div>
    <h1>Users</h1>
    <b-card>
      <nav class="navbar navbar-light bg-light justify-content-between">
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <div class="form-inline">
          <button type="button" class="btn btn-primary mr-sm-2" v-b-modal.addUser>Thêm mới</button>
          <button type="button" class="btn btn-primary mr-sm-2">Xuất excel</button>
          <button type="button" class="btn btn-primary">Import Temple</button>
        </div>
      </nav>
      <table class="table table-light table-hover">
        <thead>
          <tr>
            <th v-for="(obj, ind) in config" :key="ind">{{obj.title}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in usersData" :key="index">
            <td v-for="(obj, ind) in config" :key="ind">
              <span v-if="obj.type === 'text'">{{row[obj.key]}}</span>
              <span v-if="obj.type === 'date'">{{new Date(row[obj.key]).toLocaleDateString()}}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <b-pagination align="right" :total-rows="100" :per-page="10"></b-pagination>
    </b-card>
    <AddUser ref="addUser"></AddUser>
    <!-- <notifications group="foo" /> -->
  </div>
</template>

<script>
import AddUser from "./AddUser.vue";
export default {
  data() {
    return {
      usersData: undefined,
      url: "http://localhost:8000/v101/cms/users",
      config: [
        {
          key: "_id",
          title: "Code",
          type: 'text',
        },
        {
          key: "name",
          title: "Name",
          type: 'text',
        },
        {
          key: "email",
          title: "Email",
          type: 'text',
        },
        {
          key: "type",
          title: "Type",
          type: 'text',
        },
        {
          key: "created_at",
          title: "Signup Date",
          type: 'date',
        }
      ]
    };
  },
  mounted() {
    this.$axios.get(`${this.url}`).then(({ data }) => {
      this.usersData = data.data;
    });
  },
  methods: {
    addUser() {
      this.$refs.addUser;
    }
  },
  components: {
    AddUser
  }
};
</script>

<style>
</style>