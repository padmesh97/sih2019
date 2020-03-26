<?php
$arr=new stdClass();

if(isset($_GET['station']) && isset($_GET['grp']) && isset($_GET['hospital']) && isset($_GET['washroom']))
{
	$arr->station=$_GET['station'];
	$arr->grp=$_GET['grp'];
	$arr->fc=$_GET['fc'];
	$arr->hospital=$_GET['hospital'];
	$arr->waiting=$_GET['waiting'];
	$arr->washroom=$_GET['washroom'];

	$enc=json_encode($arr);
	echo $enc;
	$file = "stndata.txt";
	// Open the file to get existing content
	$current = file_get_contents($file);
	// Append a new person to the file
	$current .= $enc."\n";
	// Write the contents back to the file
	file_put_contents($file, $current);

	header('Location:stnfeed.html');
}

if(isset($_GET['stn']))
{
	$result;$fresult="";
	$fn = fopen("stndata.txt","r");
  	while(! feof($fn))  
  	{
	$result = fgets($fn);
	$rslt=json_decode($result,true);
	if(strcasecmp($rslt['station'],$_GET['stn']) == 0)
		$fresult=$result;
  	}
  	fclose($fn);
  	echo $fresult;
}
?>