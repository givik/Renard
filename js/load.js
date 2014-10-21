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

});