export let Course = {
  template: `
        <div class="course">
        Course
        </div>
      `,
  mounted() {
    if (!loggedIn) {
      this.$router.push({
        name: "login",
        query: {
          redirect: this.$route.path
        }
      });
    }
  }
};
