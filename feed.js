var firebaseConfig = {
    apiKey: "AIzaSyAsqHUIv4DtRQpxCVuAq1pKPwx5pLOX6gg",
    authDomain: "railway-111.firebaseapp.com",
    databaseURL: "https://railway-111.firebaseio.com",
    projectId: "railway-111",
    storageBucket: "",
    messagingSenderId: "771665732203",
    appId: "1:771665732203:web:476f2e883c9d9d77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var mydb=firebase.database();
 var ref=mydb.ref('feeds').on('value',read_every,read_every_error);
  function post_feed()
 {
 	var curr=document.getElementById("station").value;
  	var train_no=document.getElementById("train_no").value;
  	var train_name=document.getElementById("train_name").value;
  	var source=document.getElementById("source").value;
  	var destination=document.getElementById("dest").value;
  	var statuswa=document.getElementById("status").value;
  	var tme_hr=document.getElementById("tr_hr").value;
  	var tme_min=document.getElementById("tr_min").value;
  	var plt=document.getElementById("platform").value;

  	var key=mydb.ref().child('feeds').push().key;

  	var d=new Date();
  	var ts=d.getMinutes();
  	if(train_no!="" && train_name!="" && source!="" && destination!="" && statuswa!="" && plt!="" && tme_hr!="" && tme_min!="")
  	{
	  	mydb.ref('feeds/' +key).set({
	  					uid: key,
	  					stn:curr,
					    tr_no:train_no,
					    tr_name:train_name,
					    src : source,
					    dest:destination,
					    status:statuswa,
					    time_hr:tme_hr,
					    time_min:tme_min,
					    platform:plt,
					    timestamp:ts
					  }, function(error) {
						    if (error) {
						      	alert("something went wrong.Please Retry.");
						    } else {
						      alert("DATA TRANSMITTED Successfully");
						    }
						  });
	  	window.location.href="query.php?station="+curr+"&train_no="+train_no+"&train_name="+train_name+"&source="+source+"&destination="+destination+"&status="+statuswa+"&time_hr="+tme_hr+"&time_min="+tme_min+"&platform="+plt;
	}
	else
	{
		document.getElementById("err").style.display="block";
		document.getElementById("err-text").innerHTML="Please Enter Details Correctly";
		window.location.href="feed.html#err";
	}
  }
  function read_every(data)
  {
  }

  function read_every_error(err)
  {
  	 alert("Database read error");
  }