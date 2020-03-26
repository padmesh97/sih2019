var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var data =this.responseText;
       if(data!=="")
		{
			var res=JSON.parse(data);
			document.getElementById('grp_data').innerHTML=res.grp;
			document.getElementById('fc_data').innerHTML=res.fc;
			document.getElementById('wr_data').innerHTML=res.waiting;
			document.getElementById('wash_data').innerHTML=res.washroom;
			document.getElementById('doc_data').innerHTML=res.hospital;
		}
		else
		{
			document.getElementById('grp_data').innerHTML="N/A";
			document.getElementById('fc_data').innerHTML="N/A";
			document.getElementById('wash_data').innerHTML="N/A";
			document.getElementById('wr_data').innerHTML="N/A";
			document.getElementById('doc_data').innerHTML="N/A";
		}
      }
  	};
    xmlhttp.open("GET", "stnquery.php?stn=" + Cookies.get('stn').toLowerCase(), true);
    xmlhttp.send();