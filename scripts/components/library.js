export let Library = {
  template: `
        <div>Redirection</div>
    `,
  mounted() {
    this.$router.replace({ name: "courses" });
  }
};
