<?php

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;


$app = new \Slim\Slim();
$body = $app->request->getBody();


//connect to database
function getConnection() {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "app";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    mysqli_select_db($conn, $dbname);
    return $conn;
}

$dbh = getConnection();


// POST route

$app->post(
  '/register',
  function () use ($app, $dbh) {
    $json = $app->request->getBody();
    $resultJs = json_decode($json, true);

    $query1 = "SELECT `username`,`email` FROM `users` WHERE `username`='".$resultJs['username']."' OR `email`='".$resultJs['email']."'";

    $result1 = mysqli_query($dbh, $query1);
    $info = mysqli_fetch_assoc($result1);

    if($result1){
      if($info["username"]==$resultJs['username']){
        echo "Existing username";
        return;
      }
      if($info["email"]==$resultJs['email']){
        echo "Existing email";
        return;
      }
    }else{
      $query = "INSERT INTO `users`( `username`, `email`, `password`) VALUES ('".$resultJs['username']."','".$resultJs['email']."','".$resultJs['password']."')";

      $result = mysqli_query($dbh, $query);

      if($result != NULL) {
        echo "Successfully registered";
      } else {
        echo "Try again!";
      }
    }
  }
);

$app->post(
    '/login',
    function () use ($app, $dbh) {
        $json = $app->request->getBody();
        $resultJs = json_decode($json, true);
        $query = "SELECT * FROM `users` WHERE `password`='".$resultJs['password']."' AND (`username`='".$resultJs['username']."' OR `email`='".$resultJs['email']."')";
        $result = mysqli_query($dbh, $query);
        $info = mysqli_fetch_assoc($result);
        var_dump($info);
        if($info != NULL) {
          // $token=generateRandomString();
          $token="AAABBB";
          $queryUpdate = "UPDATE `users` SET `loginToken`='".$token."'  WHERE (`username`='".$resultJs['username']."' OR `email`='".$resultJs['username']."')";
          $info = mysqli_query($dbh, $queryUpdate);
          // $info = mysqli_fetch_assoc($result);

            if($info == true){
              echo "{token:".$token."}";
            }else{
              echo "Try again!";
            }

            echo "Successfully logged in";
        } else {
            echo "Try again!";
        }

    }
);

$app -> post ('/profile', function() use($app,$dbh){
  $json = $app->request->getBody();
  $result = json_decode($json,true);

  //validate users
  $user_id = validateUser($result["token"],$dbh);
  if($user_id){
    $id = validateUserProfileCreation($user_id, $dbh);
    if($id){

      $query =  "UPDATE `user_profile` SET `username`='".$result['username']."',`firstname`='".$result['firstname']."',`email`='".$result['email']."',`address`='".$result['address']."',`profession`='".$result['profession']."',`lastname`='".$result['lastname']."'";

      $result= mysqli_query($dbh, $query);
      if($result){
        echo '{result1: true}';
      }else {
        echo '{result1: false}';
      }
    }else{
      $query = "INSERT INTO `user_profile` (`user_id`, `username`, `firstname`, `lastname`, `email`, `profession`, `address`) VALUES ('".$user_id."', '".$result['username']."', '".$result['firstname']."', '".$result['lastname']."', '".$result['email']."', '".$result['profession']."', '".$result['address']."')";
      $result = mysqli_query($dbh, $query);
      if($result){
        echo '{result2: true}';
      }else {
        echo '{result2: false}';
      }
    }
  }

});

// $app -> post ('/delete', function() use($app,$dbh){
//   $json = $app->request->getBody();
//   $result = json_decode($json,true);
//   //validate users
//   $user_id = validateUser($result["token"],$dbh);
//   if($user_id){
//     $id = validateUserProfileCreation($user_id, $dbh);
//     if($id){
//
//       $query =  "DELETE FROM `user_profile` WHERE `id`=$id";
//
//       $result= mysqli_query($dbh, $query);
//       if($result){
//         echo '{result del: true}';
//       }else {
//         echo '{result del: false}';
//       }
//     }
//   }
// });
//
// $app -> post ('/get', function() use($app,$dbh){
//   $json = $app->request->getBody();
//   $result = json_decode($json,true);
//   //validate users
//   $user_id = validateUser($result,$dbh);
//
//   if($user_id){
//     $id = validateUserProfileCreation($user_id, $dbh);
//     if($id){
//
//       $query =  "SELECT `username`, `email`, `firstname`, `lastname`, `address`, `profession`  FROM `user_profile` WHERE ".$id." ";
//
//       $result = mysqli_query($dbh, $query);
//
//       if(mysqli_num_rows($result) > 0){
//          $info = json_encode(mysqli_fetch_assoc($result));
//          echo $info;
//
//       }else {
//         echo "0 results";
//       }
//     }
//   }
// });

function validateUserProfileCreation($user_id, $dbh) {
  $query = "SELECT * FROM `user_profile` WHERE `user_id` = '".$user_id."'";
  $result = mysqli_query($dbh, $query);
  if($result){
    $info = mysqli_fetch_assoc($result);
    return $info["id"];
  }else {
    return false;
  }
}

function validateUser($token, $dbh){
  $query = "SELECT * FROM `users` WHERE `loginToken` = '".$token."'";
  $result = mysqli_query($dbh, $query);
  if($result){
    $info = mysqli_fetch_assoc($result);
    return $info["id"];
  }else {
    return false;
  }
    // var_dump($info);
}

function generateRandomString($length=50){
  $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  $charactersLength = strlen($characters);
  $randomString="";
  for($i=0;$i<$length;$i++){
    $randomString =$randomString.$characters[rand(0, $charactersLength-1)];
  }
  return $randomString;
}


/**
 * Step 4: Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */
$app->run();
