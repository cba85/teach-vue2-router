export let NavigationCustom = {
  template: `
          <ul>
            <router-link
              :to="{ path: '/' }"
              tag="li"
              replace
              active-class="home-active"
              event="dblclick"
              >
                <a>Home</a>
            </router-link>
            <router-link :to="{ path: '/about' }" tag="li" active-class="about-active">
              <a>About</a>
            </router-link>
          </ul>
        `
};
