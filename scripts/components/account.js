export let Account = {
  template: `
    <div class="account">
    <h2>Account</h2>
    <ul class="account-nav">
      <li><router-link :to="{ name: 'account.home'}" exact>Home</router-link></li>
      <li><router-link :to="{ name: 'account.profile'}">Profile</router-link></li>
      <li><router-link :to="{ name: 'account.password'}">Password</router-link></li>
    </ul>
    <router-view></router-view>
    </div>
      `
};
