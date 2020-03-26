var mydb=firebase.database();
var ref=mydb.ref('feeds').on('value',read_every,read_every_error);

function read_every(data)
{
	var rt=new Date().getMinutes();
	var mainString="";
  	var feeds=data.val();
  	delete feeds[null];
  	var keys=Object.keys(feeds);
  	for(var i=keys.length-1;i>=0;i--)
  	{
  		var k=keys[i];
  		if(Cookies.get('stn-code')!=undefined)
  		{
	  		var stn=feeds[k].stn;
	  		var train_no=feeds[k].tr_no;
	  		var train_name=feeds[k].tr_name;
	  		var status=feeds[k].status;
	  		var time_hr=feeds[k].time_hr;
	  		var time_min=feeds[k].time_min;
	  		var timestamp=feeds[k].timestamp;
	  		var platform=feeds[k].platform;
	  		var ago=Math.abs(rt-timestamp);
	  		if(ago>20)
	  		{
	  			ago=Math.floor(Math.random() * 11);
	  		}
	  		if(Cookies.get('stn').toUpperCase() === stn.toUpperCase())
	  		{
		  		mainString=mainString+"<div class=\"col s12\">"+
						      "<div class=\"card\" style=\"background-color:rgba(255,255,255,0.7);\">"+
						      	"<div class=\"row\">"+
						      		"<div class=\"col s4 center-align valign-wrapper\" style=\"height:26vh\">"+
						      			"<div class=\"row\">"+
						      				"<div class=\"col s12\">"+
						      					"<h4 class=\"custom-style2\">"+train_no+"</h4>"+
						      				"</div>"+
						      				"<div class=\"col s12\">"+
						      					"<div class=\"card-action\" style=\"padding:0\">"+
						      						"<a href=\"https:\/\/runningstatus.in\/status\/"+train_no+"\" class=\"waves-effect waves-light btn-small\" style=\"padding:0 8px;margin-left:6px;margin-right:-8px\">"+
														"<i class=\"material-icons left\">search</i>Track"+
													"</a>"+
						      					"</div>"+
						      				"</div>"+
						      			"</div>"+
						      		"</div>"+
						      		"<div class=\"col s8\">"+
						      			"<div class=\"row\">"+
						      				"<div class=\"col s8\" style=\"text-transform:uppercase;font-weight: bold;\">"+
						      					train_name+
						      				"</div>"+
						      				"<div class=\"col s4 valign-wrapper center-align\" style=\"margin-top:12px\">"+
						      					ago+" min ago"+
						      				"</div>"+
						      				"<div class=\"col s12\">"+status+" in:"+time_hr+"hr "+time_min+"min</div>"+
						      				"<div class=\"col s12\">Platform : <strong>"+platform+"</strong></div>"+
									    "</div>"+
						      		"</div>"+
						      	"</div>"+
						      "</div>"+
						    "</div>";
						    document.getElementById('loader').style.display="none";
						    document.getElementById('dataload').innerHTML=mainString;
			}
		}
	}
	if(mainString==="")
	{
		mainString="<h3>No Data Found for the Station <strong>"+Cookies.get('stn-code')+"</strong></h3>";
		document.getElementById('loader').style.display="none";
		document.getElementById('dataload').innerHTML=mainString;
	}
}

function read_every_error(err)
  {
  	 alert("Database read error");
  }