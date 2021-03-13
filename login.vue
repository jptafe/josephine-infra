<template>
  <b-container>
  <b-card>
      <b-row align-v="center">
<div class="home">
  <div class="mb-4">
    
     <img class="brand" src="../assets/logo.png" alt="logo">
      <h1 class="display-3 text-primary">Welcome to Tracker</h1>
      <p class="lead text-primary">Track any progress in real time</p>
    </div>
</div>
      <h6 class="mb-4 text-muted">Login to your account</h6>
        <form action="" method="">
           <div class="form-group text-left">
             <label for="email">Email adress {{ email }} </label>
             <input type="email" class="form-control" placeholder="Enter Email" required>
           </div>
        <div class="form-group text-left">
             <label for="password">Password</label>
             <input type="password" class="form-control" placeholder="Password" required>
        </div>
        <div class="form-group text-left">
          <div class="custom-control custom-checkbox">
             <input type="checkbox" name="remember" class="custom-control-input" id="remember-me">
             <label class="custom-control-label" for="remember-me">Remember me on this device</label>
          </div>
        </div>
         <button class="btn btn-primary shadow-2 mb-4">Login</button>
       </form>
         <p class="mb-2 text-muted">Forgot password? <a href="forgot-password.vue">Reset</a></p>
         <p class="mb-0 text-muted">Don't have account yet? <a href="signup.vue">Signup</a></p>
   
      </b-row>
  </b-card>
</b-container>
</template>

<script>

export default {
 
}
</script>

<style>

</style>