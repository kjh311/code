$( document ).ready(function() {


// DESKTOP VIEW NAVBAR
	$("#care-tab").on("click", function(){
    	$("#fit-guide-tab").removeClass("current");
    	$("#materials-tab").removeClass("current");
    	$("#care-tab").addClass("current");
    	$("#fit-guide-content").fadeTo(200, 0).hide();
    	$("#percentages-wrapper").fadeTo(200, 0).hide();
    	setTimeout(function(){ 
	    	$("#care-content").fadeTo(200, 1);
    	}, 100);
	});

	$("#fit-guide-tab").on("click", function(){
    	$("#care-tab").removeClass("current");
    	$("#materials-tab").removeClass("current");
    	$("#fit-guide-tab").addClass("current");
    	$("#care-content").fadeTo(200, 0).hide();
    	$("#percentages-wrapper").fadeTo(200, 0).hide();
    	setTimeout(function(){
	    	$("#fit-guide-content").fadeTo(200, 1);
    	}, 100);
	});

	$("#materials-tab").on("click", function(){
    	$("#care-tab").removeClass("current");
    	$("#fit-guide-tab").removeClass("current");
    	$("#materials-tab").addClass("current");
    	$("#care-content").fadeTo(200, 0).hide();
    	$("#fit-guide-content").fadeTo(200, 0).hide();
    	setTimeout(function(){
	    	$("#percentages-wrapper").fadeTo(200, 1);
    	}, 100);
	});


// MOBILE ACCORDION
	var acc = $(".accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].onclick = function() {
	    this.classList.toggle("active");
	    var panel = this.nextElementSibling;
	    if (panel.style.maxHeight){
	      panel.style.maxHeight = null;
	    } else {
	      panel.style.maxHeight = "375px";
	    } 
	  }
	}

	$(".accordion-1").on("click", function(){
		$(".plus-1").toggle();
	});
	$(".accordion-2").on("click", function(){
		$(".plus-2").toggle();
	});
	$(".accordion-3").on("click", function(){
		$(".plus-3").toggle();
	});

});