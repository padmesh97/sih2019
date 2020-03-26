var mydb=firebase.database();
 var ref=mydb.ref('stndata').on('value',read_every,read_every_error);
  function post_feed()
 {
 	var curr=document.getElementById("station").value;
 	var grp_police=document.getElementById("grp").value;
  	var fcourt=document.getElementById("fc").value;
  	var hsptl=document.getElementById("hospital").value;
  	var wash=document.getElementById("washroom").value;
  	var wait=document.getElementById("waiting").value;

  	var key=mydb.ref().child('stndata').push().key;

  	mydb.ref('stndata/' +key).set({
	  					uid: key,
	  					stn:curr,
					    grp:grp_police,
					    fc:fcourt,
					    hospital:hsptl,
					    washroom:wash,
					    waiting:wait
					  }, function(error) {
						    if (error) {
						      	alert("something went wrong.Please Retry.");
						    } else {
						      alert("DATA TRANSMITTED Successfully");
						    }
						  });
  	window.location.href="stnquery.php?station="+curr+"&grp="+grp_police+"&fc="+fcourt+"&hospital="+hsptl+"&washroom="+wash+"&waiting="+wait;
  }
   function read_every(data)
  {
  }

  function read_every_error(err)
  {
  	 alert("Database read error");
  }