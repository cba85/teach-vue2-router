export let Login = {
  template: `
        <button type="submit" @click.prevent="login">Login</button>
      `,
  methods: {
    login() {
      loggedIn = true;
      let redirect = this.$route.query.redirect;
      //console.log(redirect);
      if (redirect) {
        this.$router.push(redirect);
        return;
      }

      this.$router.push({ name: "home" });
    }
  }
};
