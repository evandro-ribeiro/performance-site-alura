setTimeout(function(){

	var iframe = '<iframe class="elasticMedia" src="https://www.youtube.com/embed/94yuIVdoevc" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
	var container = document.querySelector('.elasticMedia-container');
	if (container) container.innerHTML = iframe;

}, 600);