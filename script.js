$(document).ready(function() {

	var token = localStorage.getItem("lastname");
	if(!token){
		// Store
		$("#serverMsg").text("Please use the redeem button when you are at the booth \n The coupon will last for 5 minutes only once redeemed");
		$("#buttonDiv").removeClass("hidden");
	}else{
		//Get
		$("#serverMsg").text("Thank you for registering with MODAK! \n You have already used this coupon!");
		$("#buttonDiv").addClass("hidden");
	}

	$("#redeem").click(function(){
		$("#buttonDiv").addClass("hidden");
		setTokenNow();
		$("#serverMsg").text("Your coupon is valid for 5 minute from now"+(localStorage.getItem("lastname")));
	});
});

function setTokenNow(){
	localStorage.setItem("lastname", Date());
}