export let About = {
  template: `
        <div class="about">
            About
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, pariatur quaerat corporis fugit amet rem, quidem itaque voluptas, reiciendis maxime totam? Aliquid ex dolores iste similique ipsa vel delectus repellendus.</p>
            <router-link :to="{ name: 'home', hash: '#two' }">Back to homepage on section 2</router-link>
        </div>
        `
};
