<script>
  let userObject = null;
  const userbase = window.userbase;
  let authPromise = userbase.init({appId: '7e03f771-442d-4523-b503-10b2d582c494'})
    .then(({user}) => userObject = user)
  let username , password ;
  let error = "Username and Password are incorrect";
  const signIn = () => authPromise = userbase.signIn({username, password}).then(user => userObject = user);
  // const signUp = () => authPromise = userbase.signUp({username, password}).then(user => userObject = user);
  const signOut = () => authPromise = userbase.signOut().then(() => userObject = null)
</script>


<div class="form">
  <div class="tab-content">
    <div id="signup">
      
      {#await authPromise}<p style="color: white; font-size: 35px;">Loading...</p>{:then _}
      {#if !userObject}
      <h1>Hello Astems!</h1>
      <form>
        <div class="field-wrap">
          <input id="username" type="text" placeholder="Username" bind:value={username} />
        </div>
        <div class="field-wrap">
          <input id="password" type="password" placeholder="Password" bind:value={password}/>
        </div>
        <p class="forgot"><a href="/">Quên mật khẩu?</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/login">Bạn chưa có tài khoản?</a></p>
        <button  type="button" class="button button-block" on:click={signIn}>Đăng nhập</button>
      </form>
      {:else}
        <!-- <a href="/">{userObject.username.toUpperCase()}</a> -->
	      <h1 style="display: flex;justify-content: center; align-items: center;color:palevioletred ;width: 100%;height: 100vh; font-size: 80px;">Hi, {userObject.username.toUpperCase()}!</h1>
	      <button style="position: absolute; top: 10px; right: 10px;background-color: gray; color: white; border: 1px solid;border-radius: 5px; font-size: 20px; cursor: pointer;" on:click={signOut}><i class="fa-solid fa-right-from-bracket"></i></button>
      {/if}
      {:catch} <p style="color: red; font-size: 100px; display: flex; justify-content: center; align-items: center;">Error!</p><p style="color: white; font-size: 30px;"> {error} </p>{/await}
    </div>
    <div id="login"></div>
  </div>
</div>


<style>
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #1ab188;
    transition: 0.5s ease;
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
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
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
    border-radius: 5px;
    padding: 15px 0;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    background: #1ab188;
    color: #ffffff;
    transition: all 0.5s ease;
    -webkit-appearance: none;
  }
  .button:hover,
  .button:focus {
    background: #13d6a2;
    color: whitesmoke;
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
