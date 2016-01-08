<?php 

//echo $_POST['pwd'];

$handle = fopen("../logs/debug.log", "a");
fwrite($handle, "---------------------------------------------------------\n");
fwrite($handle, date('m/d/y H:m:s'). " -- ");
foreach ($_POST as $k => $v)
{
  $str = $k ." => ". $v. ", ";
  fwrite($handle, $str);
}

 fwrite($handle, "\n");
 fclose($handle); 


$mysqli_conn = new mysqli("localhost", "teenatho", "mechcomp100$", "teenatho_webmain");
if ($mysqli_conn->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli_conn->connect_errno . ") " . $mysqli_conn->connect_error;
}

$sql="SELECT Name, Password FROM Users";
$result = mysqli_query($mysqli_conn ,$sql);

// Fetch all
$result_arr = mysqli_fetch_array($result,MYSQLI_ASSOC);

// Free result set
mysqli_free_result($result);

mysqli_close($mysqli_conn );


//Testing
//echo json_encode($result_arr);
//echo json_encode(array('success' => TRUE, 'result' => $result_arr));

if( $_POST['name'] == $result_arr['Name'] && $_POST['pwd'] == $result_arr['Password'] )
 echo json_encode(array('success' => TRUE));
else
  echo json_encode(array('success' => FALSE));  
 

  


?>