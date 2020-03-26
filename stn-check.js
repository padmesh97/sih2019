function stn_submit()
{
	document.getElementById("initial1").style.display="none";
	document.getElementById("initial2").style.display="block";
	var r=document.getElementById("fill2").value;
	var stn_code=r.substring(0,3);
	var stn=r.substring(4,r.length);
	document.getElementById("stn").innerHTML=stn_code;
	Cookies.set('stn-code',stn_code,{ expires:1});
	Cookies.set('stn',stn,{ expires:1});
	location.reload(true);

}