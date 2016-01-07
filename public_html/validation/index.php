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
 
 
//echo $_POST['pwd'];
 

 
echo json_encode(array('success' => TRUE));
 

  


?>