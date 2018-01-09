//A workaround to bootstrap's data-toggle limitations
$("div.nav-arrow2").click(async function(){
	//Wait for things to be set, before fixing it!
	let wait = ms=> new Promise(r=>setTimeout(r, ms));
	await wait(600);
	//Setup correct properties to fix scrolling
	var page_top = document.getElementById('page-top');
	page_top.style += " padding-right: 16px;";
	page_top.className += " modal-open";
	var mainNav = document.getElementById('mainNav');
	mainNav.style.paddingRight = "32px";
});