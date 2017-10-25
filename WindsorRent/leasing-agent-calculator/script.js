$(document).ready(function(){
	//Declaring all Global variables
	var property_type ="";
	var room_amount =0;
	var total1 = $("#total1");
	var total2 = $("#total2");
	var apartment_multiplier = 0.75;
	var house_multiplier = 0.5;
	var room12_multiplier = 1;
	var room34_multiplier = 0.9;
	var room56_multiplier = 0.8;
	var room78_multiplier = 0.7;
	var room910_multiplier = 0.6;
	var result=0;
	var pro_add=0;
	var pro_sub=0;
	$("#amount_of_rooms").hide();
	total1.text(0);
	total2.text(0);
  // Bind Click event to the drop down navigation button
  	$(".nav-button").click(function() {
    /*  Toggle the CSS closed class which reduces the height of the UL thus
        hiding all LI apart from the first */
    $(this).parent().parent().toggleClass("closed");
  });
//Once drop down select is clicked, the property_type = selected option
	$( "#property_type_select" ).click(function() {
	    property_type = $( this ).val();
		if (property_type ==="room rental"){
			$("#amount_of_rooms").slideDown(300).delay(2200);
		}else{$("#amount_of_rooms").hide();
	}
	});
//Load Empty result and grab rental price to compute total
    $("#calculate").click(function(){
		var room_amount = Number(document.getElementById('amount_of_rooms').value);
        var result;
		var rental_price = document.getElementById('rental_price').value;
		//Apartment Condition
        if (property_type === "apartment"){
			if (rental_price>666.66){
        		result =rental_price *apartment_multiplier;
			}else{
				result = 500
			}
		//House Condition
		}else if (property_type ==="house") {
			if (rental_price>1100){
				result =rental_price *house_multiplier;
			}else{
				result = 550;
			}
		//Room Condition
	}else if(property_type==="room rental" && room_amount===1 ){
		if(rental_price>400){
			result=rental_price*room12_multiplier;
		}else{
			result=400;
		}
	}else if(property_type==="room rental" && room_amount===2 ){
		if(rental_price>800){
			result=rental_price*room12_multiplier;
		}else{
			result=800;
		}
	}else if(property_type==="room rental" && room_amount===3 ){
		if(rental_price>1200){
			result=Math.round(rental_price*room34_multiplier);
		}else{
			result=1080;
		}
	}else if(property_type==="room rental" && room_amount===4 ){
		if(rental_price>1600){
			result=Math.round(rental_price*room34_multiplier);
		}else{
			result=1480;
		}
	}else if(property_type==="room rental" && room_amount===5 ){
		if(rental_price>2000){
			result=Math.round(rental_price*room56_multiplier);
		}else{
			result=1600;
		}
	}
		var baseresult = result;
		console.log(baseresult);
		$("#pro_add").click(function(){
			result+=25;
			total1.text(baseresult);
			total2.text(result);
		});
		$("#pro_sub").click(function(){
			if (result>baseresult){
				result-=25;
				console.log(result);
				console.log(baseresult);
				total1.text(baseresult);
				total2.text(result);
			}
		});
		total1.text(baseresult);
		total2.text(result);
	    rental_price=("");
		//result=0;
	});
});
