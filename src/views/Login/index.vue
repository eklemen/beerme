<template>
    <b-row class="justify-content-center">
        <b-col cols="12">
            <h1>Welcome</h1>
        </b-col>
        <b-col cols="12">
            <h3>Login</h3>
        </b-col>
        <b-col cols="12" sm="6">
            <b-form @submit.prevent="submitLogin">
                <b-form-input v-model="username" placeholder="Username" class="mb-3" />
                <b-form-input v-model="password" placeholder="Password" type="password" class="mb-3" />
                <b-button block type="submit" variant="outline-info">Login</b-button>
            </b-form>
            <h3 v-if="isNewUser">Welcome</h3>
            <h3 v-else>Welcome back {{ usernameStored }}</h3>
        </b-col>
        <b-col cols="12" class="mt-4">
            <span>New Here?</span>
            <b-button variant="link">Create Account</b-button>
        </b-col>
    </b-row>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from "vuex";

  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    computed: {
      ...mapState([
        'usernameStored'
      ]),
      ...mapGetters([
        'isNewUser'
      ])
    },
    methods: {
      ...mapMutations([
        'SAVE_USERNAME'
      ]),
      ...mapActions([
        'authenticateUser'
      ]),
      submitLogin() {
        console.log(this.username);
        this.SAVE_USERNAME(this.username);
        this.authenticateUser();
        this.$router.push('/dashboard');
      }
    }
  }
</script>
