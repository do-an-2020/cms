<template>
  <b-modal id="addUser" hide-footer title="Create User">
    <ValidationObserver ref="observer" v-slot="{ passes }">
      <b-form @submit.prevent="passes(onSubmit)" @reset="resetForm">
        <ValidationProvider rules="required|email" name="Email" v-slot="{ valid, errors }">
          <b-form-group
            label="Email address:"
            label-for="exampleInput1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              type="email"
              v-model="email"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Enter email"
            ></b-form-input>
            <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider
          rules="required"
          name="Password"
          vid="password"
          v-slot="{ valid, errors }"
        >
          <b-form-group
            label="Password:"
            description="We'll never share your password with anyone else."
          >
            <b-form-input
              type="password"
              v-model="password"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Enter password"
            ></b-form-input>
            <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider
          rules="required|confirmed:password"
          name="Password confirmation"
          v-slot="{ valid, errors }"
        >
          <b-form-group label="Confirm Password:" label-for="exampleInput1">
            <b-form-input
              type="password"
              v-model="confirmation"
              :state="errors[0] ? false : (valid ? true : null)"
              placeholder="Confirm Password"
            ></b-form-input>
            <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <ValidationProvider name="Subject" rules="required" v-slot="{ valid, errors }">
          <b-form-group id="exampleInputGroup3" label="Type:" label-for="exampleInput3">
            <b-form-select
              id="exampleInput3"
              :state="errors[0] ? false : (valid ? true : null)"
              v-model="type"
            >
              <option value>None</option>
              <option value="admin">Admin</option>
              <option value="supplier">Supplier</option>
              <option value="customer">Customer</option>
            </b-form-select>
            <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>

        <!-- <ValidationProvider name="Drink" rules="required|length:2" v-slot="{ valid, errors }">
          <b-form-group id="exampleGroup4">
            <b-form-checkbox-group
              :state="errors[0] ? false : (valid ? true : null)"
              v-model="choices"
              id="exampleChecks"
            >
              <b-form-checkbox value="Coffee">Coffe</b-form-checkbox>
              <b-form-checkbox value="Tea">Tea</b-form-checkbox>
              <b-form-checkbox value="Soda">Soda</b-form-checkbox>
            </b-form-checkbox-group>
            <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
          </b-form-group>
        </ValidationProvider>-->
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </ValidationObserver>
  </b-modal>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "BootstrapForm",
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    email: "",
    password: "",
    confirmation: "",
    name: "",
    type: "",
    choices: []
  }),
  methods: {
    onSubmit() {
      this.$axios.post("http://localhost:8000/v101/cms/users/add-new", {
        email: this.email,
        password: this.password,
        name: this.name,
        type: this.type
      });
      this.$bvModal.hide("addUser");
      // return this.$notify({
      //   group: "foo",
      //   title: "Chúc mừng",
      //   text: "Bạn đã thêm mới thành công"
      // });
      // setTimeout(() => {
      //   this.$bvModal.hide("addUser");
      // }, 1000);
    },
    resetForm() {
      this.email = "";
      this.password = "";
      this.confirmation = "";
      this.subject = "";
      this.choices = [];
      requestAnimationFrame(() => {
        this.$refs.observer.reset();
      });
    }
  }
};
</script>