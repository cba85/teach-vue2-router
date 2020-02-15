export let Home = {
  template: `
        <div class="home">
            <p>Home</p>
            {{ $router.resolve({ name: 'about' }).href }}
            <p id="one">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis laborum, sit harum facilis saepe quaerat suscipit? Quod eos explicabo nostrum, sapiente magni, magnam placeat labore dicta omnis, soluta iusto odit.</p>
            <p id="two">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo doloribus velit est quibusdam provident, quasi beatae magnam tempore, nam hic harum dolorem officia officiis, fuga repudiandae ullam impedit suscipit sapiente.</p>
        </div>
        `,
  mounted() {
    // Route object information
    //console.log(this.$route);
  },
  head() {
    return {
      //itle: "Homepage", // Mixin
      title: {
        inner: "Homepage" // Plugin
      }
    };
  }
};
