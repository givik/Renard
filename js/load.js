function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 700);
    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

onReady(function () {

	$('body').css('display', 'block');
	$('#wings').css({'opacity' : '0'});
	$('#social').css({'opacity' :'0'});

	var ind = 0;


	// registering custom effect
	$.cssEase['bounce'] = 'cubic-bezier(0,1,0.5,1.3)';

	var int = setInterval(function(){
		if(!ind){
			$('#renard .logo').transition({
				perspective: '700px', rotateY: '20deg'
			}, 900);
			ind = 1;
		}
		else{
			$('#renard .logo').transition({
				perspective: '700px',  rotateY: '-20deg'
			}, 900);
			ind = 0;
		}

	}, 1000);


	setTimeout(function(){
		clearInterval(int);

		$('#renard .logo').transition({
			perspective: '1000px', rotateY: '0deg', duration: 500
		});

		$('#wings, #social').transition({ opacity: 1, duration: 1500 });

		// TOP
		$('.wing-top').transition({ y: '-=5', duration: 0 });
		$('.wing-top').transition({ y: '+=5', duration: 2000 });

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

	}, 4000);

});