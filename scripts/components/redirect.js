export let Redirect = {
  template: `
        <div>This div will never be displayed</div>
      `,
  mounted() {
    /*
      // Always use push
      this.$router.push({
        name: "home"
      });
      */
    // Remove browser history
    this.$router.replace({
      name: "home"
    });
  }
};
