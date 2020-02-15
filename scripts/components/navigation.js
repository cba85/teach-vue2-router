export let Navigation = {
  template: `
        <ul class="main-nav">
        <!--
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        -->
        <li><router-link :to="{ path: '/' }" exact>Home</router-link></li>
        <li><router-link :to="{ path: '/about' }">About</router-link></li>
        <li><router-link :to="{ path: '/contact' }">Contact</router-link></li>
        <li><router-link :to="{ path: '/faq' }">FAQ</router-link></li>
        <li><router-link :to="{ path: '/redirect' }">Redirect</router-link></li>
        <li><router-link :to="{ name: '404' }">404</router-link></li>
        <li><router-link :to="{ path: '/account' }" exact>Account</router-link></li>
        <li><router-link :to="{ name: 'page', params: { name: 'test' } }">Page</router-link></li>
        </ul>
      `
};
