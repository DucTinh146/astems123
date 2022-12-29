<script>
    import { page } from '$app/stores';

</script>

<div class="form">
    <div class="tab-content">
      <div id="signup">   
        <h1>Xin chào!</h1>
        
        <form action="/" method="post">
        
        <!-- <div class="top-row"> -->
          <div class="field-wrap">
            <!-- <label>
                Email<span class="req">*</span>
              </label> -->
              <input type="email"required autocomplete="off" placeholder="Email"/>
          </div>
      
          <div class="field-wrap">
            <!-- <label>
                Mật khẩu<span class="req">*</span>
              </label> -->
              <input type="password"required autocomplete="off" placeholder="Mật khẩu"/>
          </div>
        <!-- </div> -->

        <p class="forgot"><a href="#">Quên mật khẩu?</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/login">Bạn chưa có tài khoản?</a></p>
        
        <button type="submit" class="button button-block">Đăng nhập</button>
        
        </form>

      </div>
      
      <div id="login">   
        <h1>Welcome Back!</h1>
        
        <form action="/" method="post">
        
          <div class="field-wrap">
          <label>
            Email Address<span class="req">*</span>
          </label>
          <input type="email"required autocomplete="off"/>
        </div>
        
        <div class="field-wrap">
          <label>
            Password<span class="req">*</span>
          </label>
          <input type="password"required autocomplete="off"/>
        </div>
        
        <p class="forgot"><a href="#">Forgot Password?</a></p>
        
        <button class="button button-block">Log In</button>
        
        </form>

      </div>
      
    </div><!-- tab-content -->
    
</div> <!-- /form -->

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
label {
    position: absolute;
    transform: translateY(6px);
    left: 13px;
    color: rgba(255, 255, 255, 0.5);
    transition: all 0.25s ease;
    -webkit-backface-visibility: hidden;
    pointer-events: none;
    font-size: 22px;
}
label .req {
    margin: 2px;
    color: #1ab188;
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
.top-row:after {
    content: "";
    display: table;
    clear: both;
}
.top-row > div {
    float: left;
    width: 48%;
    margin-right: 4%;
}
.top-row > div:last-child {
    margin: 0;
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