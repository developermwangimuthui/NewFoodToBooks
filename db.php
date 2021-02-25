<?php
$servername = 'localhost';
$user = 'root';
$password = 'Devam';
$dbname = 'userregistration';
$conn = mysqli_connect($servername,$user,$password,$dbname);
if(!$conn){
    die('Could not connect to server:'.mysqli_error);
}


if(isset($_POST['book'])){
    $firstname=$_POST['firstname'];
    $lastname=$_POST['lastname'];
    $department=$_POST['department'];
    $isbnnumber=$_POST['isbnnumber'];
    $drexelemail=$_POST['drexelemail'];
    $subject=$_POST['subject'];
     $file = $_FILES['myfile'];
     $filename = $file['name'];
     $filepath = "";
    if($filename !=""){
        $folder = "uploads/";
        $tempname =  $file['tmp_name'];
        $pathFilename = $folder.$filename;
        
        if(move_uploaded_file($tempname,$pathFilename)){
            $filepath = $folder."/".$filename;
//            echo "File uploaed successfully.";
            
        }else{
            echo "not uploaded";
           
        }
    }
    
    $sql = "INSERT INTO sellbook (firstname,lastname,department,isbnnumber,drexelemail,details,file_path) VALUES ('$firstname','$lastname','$department','$isbnnumber','$drexelemail','$subject','$filepath')";
    if(mysqli_query($conn,$sql)){
        echo "<script>alert('Record Added Successfully'); window.location.href ='sellbook.php';</script>";
        
        exit;
    }else{
        echo "Error: ".$sql.":- ".mysqli_error($conn);
    } 
    
    mysqli_close($conn);

    
}

if(isset($_POST['register'])){
    $name = $_POST['name'];
    $username = $_POST['username'];
    $cpassword = $_POST['confirmpassword'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    
    //escape slashes
     $name = stripslashes($name);
    $username =stripslashes($username);
    $cpassword =stripslashes($cpassword);
    $password = stripslashes($password);
    $email = stripslashes($email);
    
    if($password != $cpassword){
           echo "<script>alert('Password do  not match.'); window.location.href ='DevamLogin.php';</script>";
    }else{
        
         $sql = "INSERT INTO usertable(username,password,name,email) VALUES ('$username','$password','$name','$email')";
    
         if(mysqli_query($conn,$sql)){
            echo "<script>alert('Record Added Successfully'); window.location.href ='DevamLogin.php';</script>";

            exit;
        }else{
            echo "Error: ".$sql.":- ".mysqli_error($conn);
        } 

        mysqli_close($conn);
    }
    

}


if(isset($_POST['login'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    //escape slashes
    $username =stripslashes($username);
    $password = stripslashes($password);
    
    $sql = "SELECT username, password FROM  usertable WHERE username = '$username'  AND password = '$password'";
    
    
     if(mysqli_query($conn,$sql)){
       $results  = mysqli_query($conn,$sql);
        $row = mysqli_fetch_array($results,MYSQLI_ASSOC);
        $count = mysqli_num_rows($results);
            if($count > 0){
                $_SESSION['loged_user'] = $username;
                 echo "<script>alert('Login successful.'); window.location.href ='DevamLogin.php';</script>";
        
            }else{
                echo "<script>alert('Wrong email or password.'); window.location.href ='DevamLogin.php';</script>";
;
            }

        exit;
    }else{
        echo "Error: ".$sql.":- ".mysqli_error($conn);
    } 

    mysqli_close($conn);
    

}

?>