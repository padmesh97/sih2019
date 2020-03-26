<?php

$train=$_GET['train_no'];

$key='peangffdsd';
$date=date("d-m-Y");

$url = 'http://api.railwayapi.com/v2/live/train/'.$train.'/station/ndls/date/'.$date.'/apikey/'.$key.'/';

$i=1;
$result;$fresult="Train no. :".$train."\n";
	$fn = fopen("data.txt","r");
  	while(! feof($fn))  
  	{
	$result = fgets($fn);
	$rslt=json_decode($result,true);
	if($rslt['train_no']==$train)
		{
			$fresult="Place: ".$rslt['station']." at ".$rslt['ts']." hrs for ".$rslt['status']." in ".$rslt['time_hr']."  hr and ".$rslt['time_min']." min ";
			$i++;
		}
  	}
  	fclose($fn);
  	if($i==1)
  	{
  		$fresult.="No Data Available";
  	}
  	else
  		$fresult="Train no. :".$train."\n".$fresult;

  	echo $fresult;

?>