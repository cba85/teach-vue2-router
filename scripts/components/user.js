export let User = {
  props: ["id"],
  template: `
        <div class="user">User {{ id }}</div>
      `,
  mounted() {
    console.log(this.$route.params);
  }
};
