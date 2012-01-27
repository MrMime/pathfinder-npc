<html>
<head>
	<script type="text/javascript" src="jquery.js"></script>
	<script type="text/javascript" src="jquery.tipTip.js"></script>
	<script type="text/javascript" src="jquery.tipTip.minified.js"></script>
	<script>
		function fai(){
			$.ajax({
	        type: "POST",
	        url: "http://www.mxtoolbox.com/Public/Lookup.aspx/DoLookup",
	        data: '{"inputText":"blacklist:212.210.92.253"}',
	        success: function(response){
	            var obj = JSON.parse(response);
	            $('#result').html = obj;
	         }
		    });
		} 
	</script>
</head>
<body>
<form method="POST" action="http://mxtoolbox.com/Public/Loockup.aspx/DoLookup">
	<input type="text" name="inputText" size="25"/>
	<input type="submit" value="vai" />
</form>

<div id="result"></div>
<script>
	fai();
</script>
</body>
</html>