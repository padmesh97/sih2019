<?php
$arr=new stdClass();

if(isset($_GET['station']) && isset($_GET['train_no']) && isset($_GET['train_name']) && isset($_GET['platform']))
{
	$arr->station=$_GET['station'];
	$arr->train_no=$_GET['train_no'];
	$arr->train_name=$_GET['train_name'];
	$arr->source=$_GET['source'];
	$arr->destination=$_GET['destination'];
	$arr->status=$_GET['status'];
	$arr->time_hr=$_GET['time_hr'];
	$arr->time_min=$_GET['time_min'];
	$arr->platform=$_GET['platform'];
	$arr->ts=date("G").':'.date("i");

	$enc=json_encode($arr);
	echo $enc;
	$file = "data.txt";
	// Open the file to get existing content
	$current = file_get_contents($file);
	$new_curr="";
	foreach(preg_split('/\r\n|\r|\n/', $current) as $line)
	{
	  $new_j=json_decode($line,true);
      if(!($_GET['train_no']==$new_j['train_no'] && strcasecmp($_GET['station'],$new_j['station'])==0))
      {
      	$new_curr.=$line."\r\n";
      }
	}
	$new_curr.= $enc."\r\n"; 
	// Append a new person to the file
	// Write the contents back to the file
	file_put_contents($file, $new_curr);

	header('Location:feed.html');
}

if(isset($_GET['stn']))
{
	$result;
	$fn = fopen("data.txt","r");
  	while(! feof($fn))  
  	{
	$result = fgets($fn);
	$rslt=json_decode($result,true);
	if(strcasecmp($rslt['station'],$_GET['stn']) == 0)
		echo $result;
  	}
  	fclose($fn);
}
?>