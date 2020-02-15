export let UserProfile = {
  props: ["username"],
  data() {
    return {
      user: {
        username: "Clément",
        name: "Clément Barbaza"
      }
    };
  },
  template: `
    <div>User {{ username }}</div>
    `,
  head() {
    return {
      //title: this.user.name // Mixin
      title() {
        // Plugin
        return {
          inner: this.user.username
        };
      }
    };
  }
};
