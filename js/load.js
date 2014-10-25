$( window ).ready(function() {
	$.waitForImages.hasImgProperties = ['backgroundImage'];
	
	$('#main').waitForImages(function() {
	
	    // All descendant images have loaded
	    setTimeout(function(){;
			$('#main').fadeIn(500);
			$('#wings').fadeOut(0);
			$('#social').fadeOut(0)
	
		}, 500);
		
			
		// registering custom effect
		$.cssEase['bounce'] = 'cubic-bezier(0,1,0.5,1.3)';
	
		// toogle hover effect
		$('.close').on({
		    'mouseenter':function(){
				$(this).transition({
					transform: 'scale(0.9)'
				}, 300, 'bounce');
		    },'mouseleave':function(){
				$(this).transition({
					transform: 'scale(1)'
				}, 300, 'bounce');
		    }
		});
	
		/*
	var ind = 0;
		var int = setInterval(function(){
			if(!ind){
				$('#renard .logo').transition({
					perspective: '500px', rotate: '-10deg', rotateY: '-10deg'
				}, 700, 'bounce');
				ind = 1;
			}
			else{
				$('#renard .logo').transition({
					perspective: '500px',  rotate: '10deg', rotateY: '10deg'
				}, 700, 'bounce');
				ind = 0;
			}
	
		}, 800);
	*/
	
	
		setTimeout(function(){
			
			/*
	clearInterval(int);
			
			$('#renard .logo').transition({
				perspective: '1000px', rotate: '0deg', duration: 400
			});
	*/
	
			$('#wings').fadeIn(500);
			setTimeout(function(){
				$('#social').fadeIn(1000);
			}, 500);
			/*
			// TOP
			$('.wing-top').transition({ y: '-=6', duration: 0 });
			$('.wing-top').transition({ y: '+=6', duration: 2000 });
	
			// LEFT TOP
			$('.wing-left-top').transition({ x: '-=10', duration: 0 });
			$('.wing-left-top').transition({ x: '+=10', duration: 1000 });
	
			// RIGHT TOP
			$('.wing-right-top').transition({ x: '+=10', duration: 0 });
			$('.wing-right-top').transition({ x: '-=10', duration: 1000 });
	
			// LEFT BOTTOM
			$('.wing-left-bottom').transition({ x: '-=10', rotate: '-=2deg', duration: 0 });
			$('.wing-left-bottom').transition({ x: '+=10', rotate: '+=2deg', duration: 2000 });
	
			// RIGHT BOTTOM
			$('.wing-right-bottom').transition({ x: '+=10', rotate: '+=2deg', duration: 0 });
			$('.wing-right-bottom').transition({ x: '-=10', rotate: '-=2deg', duration: 2000 });
			*/
	
		}, 1000);
	});
});