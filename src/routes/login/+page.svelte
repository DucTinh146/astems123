<script>
  import Login from '../signup/+page.svelte'

  let userObject = null;
  const userbase = window.userbase;
  let authPromise = userbase.init({appId: '7e03f771-442d-4523-b503-10b2d582c494'})
    .then(({user}) => userObject = user)
  let email, username , password ;
  // const signIn = () => authPromise = userbase.signIn({username, password}).then(user => userObject = user);
  const signUp = () => authPromise = userbase.signUp({email, username, password}).then(user => userObject = user);
</script>

<div class="form">
  <div class="tab-content">
    <div><a href="/signup">Back</a></div>
    <div id="signup">  
      {#if !userObject} 
      <h1>Đăng ký tài khoản</h1>
      <form action="/" method="post">
        <div class="field-wrap">
          <input type="text" required autocomplete="off" placeholder="Username" bind:value={username}/>
        </div>
        <div class="field-wrap">
          <input type="email"required autocomplete="off" placeholder="Email" bind:value={email}/>
        </div>
        <div class="field-wrap">
          <input type="password"required autocomplete="off" placeholder="Password" bind:value={password}/>
        </div>
        <button type="button" class="button button-block" on:click={signUp}>Đăng ký</button>  
      </form>
      {:else}
      <Login/>
      {/if}
    </div>  
    <div id="login"></div>    
  </div>
</div>

<style>
*, *:before, *:after {
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: #1ab188;
    transition: .5s ease;
}
a:hover {
    color: #179b77;
}
.form {
    background: rgba(19, 35, 47, 0.9);
    padding: 40px;
    max-width: 600px;
    margin: 40px auto;
    border-radius: 4px;
    box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);
}

.tab-content > div:last-child {
    display: none;
}
h1 {
    text-align: center;
    color: #ffffff;
    font-weight: 300;
    margin: 0 0 40px;
}

input {
    font-size: 22px;
    display: block;
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    background: none;
    background-image: none;
    border: 1px solid #a0b3b0;
    color: #ffffff;
    border-radius: 0;
    transition: border-color .25s ease, box-shadow .25s ease;
}
input:focus {
    outline: 0;
    border-color: #1ab188;
}

.field-wrap {
    position: relative;
    margin-bottom: 40px;
}
.button {
    border: 0;
    outline: none;
    border-radius: 0;
    padding: 15px 0;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .1em;
    background: #1ab188;
    color: #ffffff;
    transition: all 0.5s ease;
    -webkit-appearance: none;
}
.button:hover, .button:focus {
    background: #179b77;
}
.button-block {
    display: block;
    width: 100%;
}
.forgot {
    margin-top: -20px;
    text-align: right;
}

</style>