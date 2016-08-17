
var accessCode = "";
var $storage_prefix = "robbytwo"
jQuery(document).ready(function($) {

	//alert("Hello robert");
	$(".container").append('<!-- Modal -->'+
							  '<div class="modal fade" id="myModal" role="dialog">'+
								'<div class="modal-dialog">'+
								  '<!-- Modal content-->'+
								  '<div class="modal-content">'+
									'<div class="modal-header">'+
									  '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
									 ' <h4 class="modal-title">Verify</h4>'+
									'</div>'+
									'<div class="modal-body">'+
									 ' <p>Hey there, I just need you to enter the secret code so that you can view my resume. If you dont have it, please'+ 
									 '<a href="contact.html"> contact me</a> and briefly tell me about yourself first.</p>'+
									'<p>Thank you for understanding.</p></div>'+
									'<div class="form-group">'+
									'<center><input id="code" type="password" placeholder="Enter code..."></input></center>'+
									'</div>'+
									'<div class="modal-footer">'+
									 ' <button type="button" class="btn btn-success btn-sm" onclick="verifyResumeRequest()">Enter</button>'+
									'</div>'+
								 ' </div>'+
								'</div>'+
							 ' </div>');
							 
	pageName = $("body").attr('pageName');
	
	
	if(pageName == "home"){
		console.log("Page name: "+pageName);	
	}
	
	if(pageName == "contact"){
		console.log("Page name: "+pageName);	
	}
	
	if(pageName == "about"){
		console.log("Page name: "+pageName);	
	}
	
	if(pageName == "resume"){
		console.log("Page name: "+pageName);	
		try{
			accessCode = $.jStorage.get($storage_prefix + ".cd");
		}catch(error){
			accessCode = "";
			window.location.href = "index.html"
		}
		
		if(accessCode == "" || accessCode != '8888'){
			window.location.href = "index.html"
		}
	}
});

function openResume(){
		//alert("What is the code?");
		
		$("#myModal").modal();
		
	}
	
function verifyResumeRequest(){
	var code = $('#code').val();
	
	console.log("Entered code: "+code);
	
	if(code == "8888"){
		$.jStorage.set($storage_prefix + ".cd",code);
		window.location.href="resume.html";
	}else{
		alert("Wrong code!");
		$("#myModal").modal('hide');
	}
}