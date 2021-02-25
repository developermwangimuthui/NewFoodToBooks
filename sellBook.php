<?php

include_once 'db.php';


?>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<!--
Victory Template
http://www.templatemo.com/tm-507-victory
-->
        <title>Dragon Trades</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">

        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css/fontAwesome.css">
        <link rel="stylesheet" href="css/hero-slider.css">
        <link rel="stylesheet" href="css/owl-carousel.css">
        <link rel="stylesheet" href="css/templatemo-style.css">

        <link href="https://fonts.googleapis.com/css?family=Spectral:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">

        <script src="main.js"></script>
        <script src="script.js"></script>
        <script src="myscripts.js"></script>

        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js">
        </script>
        <link rel="stylesheet" href="style.css">
<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  
  
}

* {
  box-sizing: border-box;
}

/* Style inputs */
input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

/* Style the container/contact section */
.container {
  border-radius: 5px;
  background-color:powderblue;
  padding: 10px;
}

/* Create two columns that float next to eachother */
.column {
  float: center;
  width: 50%;
  margin-top: 6px;
  padding: 20px;
}

/* Clear floats after the columns */
.row:after{
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>
</head>
<body>
    <div class="header">
        <div class="container">
            
            <img src="logo.jpeg" alt="" width="180" height="180">
            <nav class="navbar navbar-inverse" role="navigation">
                <div class="navbar-header">
                    <button type="button" id="nav-toggle" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
                        <a href="#" class="navbar-brand scroll-top">Dragon Trades</a>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <!--/.navbar-header-->
                <div id="main-nav" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="sellBook.html">Sell Book</a></li>
                        <li><a href="DevamLogin.html">Log In</a></li>  
                        <li><a href="newIndex.html">New</a></li> 
                    </ul>
                </div>
                <!--/.navbar-collapse-->
            </nav>
            <!--/.navbar-->
        </div>
        <!--/.container-->
    </div>
    <!--/.header-->



<div class="container">
  <div style="text-align:center">
    <h2>Sell Your Book Info</h2>
    <p>Swing by to check out the books, or leave us a message:</p>
  </div>
  <div class="row txt-center">
    <div class="column">
    </div>
    <div class="column">
      
        
      <form action="db.php" method="post" enctype="multipart/form-data">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name..">
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">
        <label for="department">Department</label>
        <select id="department" name="department">
            <option value="CCI">Arts and Sciences</option>
            <option value="College of Medicine">Bennett S. LeBow Coll. of Bus.</option>
            <option value="College of Arts">Center for Civic Engagement</option>
            <option value="College of Arts">Close Sch of Entrepreneurship</option>
            <option value="College of Arts">Col of Computing & Informatics</option>
            <option value="College of Arts">College of Engineering</option>
            <option value="College of Arts">Dornsife Sch of Public Health</option>
            <option value="College of Arts">Goodwin Coll of Prof Studies</option>
            <option value="College of Arts">Miscellaneous</option>
            <option value="College of Arts">Nursing & Health Professions</option>
            <option value="College of Arts">Pennoni Honors College</option>
            <option value="College of Arts">Sch.of Biomed Engr,Sci & Hlth</option>
            <option value="College of Arts">School of Education</option>
        </select>
        <label for="INumber">ISBN Number</label>
        <input type="text" id="INumber" name="isbnnumber" placeholder="ISBN Number">
        <label for="dEmail">Drexel Email</label>
        <input type="text" id="dEmail" name="drexelemail" placeholder="Drexel Email">
        <label for="subject">Details</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
        <h3>Select a file:</h3>
          <label for="myfile">Select a file to upload:</label>
          <input type="file" id="myfile" name="myfile" ><br><br>
          <input type="submit" name="Submit" id="Submit" value="Submit">
      </form>
    </div>
  </div>
</div>

</body>
</html>


<footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <p>Copyright &copy; 2020 Dragon Trades</p>
                </div>
                <div class="col-md-4">
                    <ul class="social-icons">
                        <li><a rel="nofollow" href="http://www.facebook.com/templatemo" target="_parent"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fa fa-rss"></i></a></li>
                        <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <p>Designed by <em>Drexel Students</em></p>
                </div>
            </div>
        </div>
</footer>