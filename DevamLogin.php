
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
  <script src="DevamLogin.js" type="text/javascript"></script>
  <link href="DevamLogin.css" rel="stylesheet" type="text/css" />

        
</head>
<body>
  <div id="main-nav" class="collapse navbar-collapse">
    <ul class="nav navbar-nav">
      <li><a href="index.html">Home</a></li>  
    </ul>
  </div>
<div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
		<div class="login-form">
            <form action="db.php" method="post">
                <div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label">Username</label>
					<input id="user" type="text" name="username" class="input">
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" name="password" class="input" data-type="password">
				</div>
				<div class="group">
					<input id="check" type="checkbox" class="check" checked>
					<label for="check"><span class="icon"></span> Keep me Signed in</label>
				</div>
				<div class="group">
					<input type="submit" class="button" name="login" value="Sign In">
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
            </form>
			 <form action="db.php" method="post">
			<div class="sign-up-htm">
    
				<div class="group">
					<label for="user" class="label">Name</label>
					<input id="name" type="text" name="name" class="input" required>
				</div>
                <div class="group">
					<label for="user" class="label">Username</label>
					<input id="user" type="text" name="username" class="input" required>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" name="password" class="input" data-type="password" required>
				</div>
				<div class="group">
					<label for="pass" class="label">Repeat Password</label>
					<input id="pass" type="password" name="confirmpassword" class="input" data-type="password" required>
				</div>
				<div class="group">
					<label for="pass" class="label">Email Address</label>
					<input id="pass" type="email" name="email" class="input" required>
				</div>
				<div class="group">
					<input type="submit" class="button" name="register" value="Sign Up">
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<label for="tab-1">Already Member?</label>
				</div>
			</div>
            </form>
		</div>
	</div>
</div>
</body>
</html>
<!--
  This was created based on the Dribble shot by Deepak Yadav that you can find at https://goo.gl/XRALsw
  I'm @hk95 on GitHub. Feel free to message me anytime.
-->