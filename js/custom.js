jQuery(document).ready(function(){ 
	
	/* ---------------------------------------------------------------------- */
	/*	Custom Functions
	/* ---------------------------------------------------------------------- */
	
	// Needed variables
	var $logo 	= $('#logo');
		
	// Show logo 
	$('.tab-resume,.tab-portfolio,.tab-contact').click(function() {
	  $logo.fadeIn('slow');
	});
	// Hide logo
	$('.tab-profile').click(function() {
	  $logo.fadeOut('slow');
	});	
	
	/* ---------------------------------------------------------------------- */
	/*	Menu
	/* ---------------------------------------------------------------------- */
	
	// Needed variables
	var $content 		= $("#content");
	
	// Run easytabs
  	$content.easytabs({
	  animate			: true,
	  updateHash		: false,
	  transitionIn		:'slideDown',
	  transitionOut		:'slideUp',
	  animationSpeed	:600,
	  tabs				:"> .menu > ul > li",
	  tabActiveClass	:'active',
	});
	
	// Hover menu effect
	$content.find('.tabs li a').hover(
		function() {
			$(this).stop().animate({ marginTop: "-7px" }, 200);
		},function(){
			$(this).stop().animate({ marginTop: "0px" }, 300);
		}
	);
	/* ---------------------------------------------------------------------- */
	/*	Portfolio
	/* ---------------------------------------------------------------------- */ 
	
	// Needed variables
	var $container	 	= $('#portfolio-list');
	var $filter 		= $('#portfolio-filter');
		
	// Run Isotope  
	$container.isotope({
		filter				: '*',
		layoutMode   		: 'masonry',
		animationOptions	: {
		duration			: 750,
		easing				: 'linear'
	   }
	});	
	
	// Isotope Filter 
	$filter.find('a').click(function(){
	  var selector = $(this).attr('data-filter');
		$container.isotope({ 
		filter				: selector,
		animationOptions	: {
		duration			: 750,
		easing				: 'linear',
		queue				: false,
	   }
	  });
	  return false;
	});	
	
	// Portfolio image animation 
	$container.find('img').adipoli({
		'startEffect' 	: 'transparent',
		'hoverEffect' 	: 'boxRandom',
		'imageOpacity' 	: 0.6,
		'animSpeed' 	: 100,
	});
	
	// Copy categories to item classes
	$filter.find('a').click(function() {
		var currentOption = $(this).attr('data-filter');
		$filter.find('a').removeClass('current');
		$(this).addClass('current');
	});	
	
	// Projects accordion
	$(function() {
		$(".workProjects" ).accordion({
		  collapsible: true,
		  heightStyle: "content",
		  active: false
		});
	  });
	/* ---------------------------------------------------------------------- */
	/*	prettyPhoto
	/* ---------------------------------------------------------------------- */
			
	$("a[rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'fast', slideshow: 5000, autoplay_slideshow: false, show_title: true, allow_resize: true, autoplay: true, social_tools: false, deeplinking: false, theme: 'pp_default'
	});
		
	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */
	
	// Needed variables
	var $contactform 	= $('#contactform'),
		$success		= 'Your message has been sent. Thank you!';
		
	$contactform.submit(function(){
		$.ajax({
		   type: "POST",
		   url: "php/contact.php",
		   data: $(this).serialize(),
		   success: function(msg)
		   {
				if(msg != 'error'){
					response = '<div class="success">Thanks for sending your message! I\'ll get back to you shortly!</div>';
				}
				else{
					response = '<div class="error">There was a problem sending your message. Please try again!</div>';
				}
				// Hide any previous response text
				$(".error,.success").remove();
				// Show response message
				$contactform.prepend(response);
			}
		 });
		return false;
	});	
	/* ---------------------------------------------------------------------- */
	/*	Google Maps
	/* ---------------------------------------------------------------------- */
	
	// Needed variables
	var $map 				= $('#map'),
		$tabContactClass 	= ('tab-contact'),
		$heg 				= '47.121622,27.570013',
		$mios 				= '47.1337102,27.5734471';
		$ness 				= '47.155257,27.5889848';
	
	$content.bind('easytabs:after', function(evt,tab,panel) {
		if ( tab.hasClass($tabContactClass) ) {
			$map.gMap(
			{ 
				markers: 
				[
					//{ 
					//	address: $heg,
					//	html: "<br/><h3>Host Europe Group</h3><div>Poitiers Boulevard, no. 10</div><br/>"
					//},
					//{ 
					//	address: $mios,
					//	html: "<br/><h3>MiOS, Ltd.</h3><div>Poitiers Boulevard, no. 16</div><br/>"
					//},
					{ 
						address: $ness,
						html: "<br/><h3>Ness Digital Engineering</h3><div>Street Palas 5C</div><br/>"
					},
					{ 
						address: "Strada Gen. Berthelot 16, Iasi, Romania",
						html: "<br/><h3>Faculty of Computer Science</h3><div>Street Gen. Berthelot no. 16</div><br/>"
					},
					//{ 
					//	address: "Iasi, Romania",
					//	html: "<br/><h3>Residence</h3><div>Iași, Romania</div><br/>"
					//}
				],
				address: "Strada Palas 5C, Iasi, Romania",
				zoom: 12,
				icon: { 
						image: "//maps.google.com/mapfiles/marker.png",
						iconsize: [26, 46],
						iconanchor: [12,46],
						infowindowanchor: [12, 0] 
					  }
			});
		}
  	});
	
	//$('.menu-tab').bind('click', function(){
	//	ga('send','event','Menu Navigation','Select',$(this).text());
	//});
	//
	//$('.socialicons li').bind('click', function(){
	//	ga('send','event','Social Media','View Social Profile',$(this).text());
	//});
	//
	//$('.photo-inner').bind('click', function(){
	//	ga('send','event','Social Media','Tap Main Photo','View LinkedIn Profile');
	//});
	//
	//$('.projects li').bind('click', function(){
	//	ga('send','event','Resume','Open Project URL',$(this).text());
	//});
	//	
	//$('.portfolio-filter-type').bind('click', function(){
	//	ga('send','event','Portfolio','Select Filter',$(this).text());
	//});
	//
	//$('.isotope-item').bind('click', function(){
	//	ga('send','event','Portfolio','View Project',$(this).text());
	//});
});	