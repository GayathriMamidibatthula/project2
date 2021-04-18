function login()
	{
		//var email = document.getElementById("email").value;
        var uname = document.getElementById("uname").value;
        uname = uname.toLowerCase();
		var pwd = document.getElementById("pwd1").value;
        console.log(`Username is ${uname}`);
		// var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
        else if (uname=='admin'){
            window.location = "./admin.html";
        }
		else if(pwd.length < 6 )
		{
			alert("Password length must be more than 6 characters.");
		}
		else
		{
            window.location = "./users.html";
			}
	}
	//Reset Inputfield code.
	function clearFunc()
	{
		document.getElementById("uname").value="";
		document.getElementById("pwd1").value="";
	}	

