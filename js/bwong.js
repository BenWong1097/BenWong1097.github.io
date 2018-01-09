//A workaround to bootstrap's data-toggle limitations
// var resetModal = async function(){
// 	//Wait for things to be set, before fixing it!
// 	let wait = ms=> new Promise(r=>setTimeout(r, ms));
// 	await wait(1000);
// 	//Setup correct properties to fix scrolling
// 	var page_top = document.getElementById('page-top');
// 	page_top.style += " padding-right: 16px;";
// 	page_top.className += " modal-open";
// 	var mainNav = document.getElementById('mainNav');
// 	mainNav.style.paddingRight = "32px";
// };

//Not using promises due to incompatibility... this'll do
var resetModal = function(){
	//Setup correct properties to fix scrolling
	var page_top = document.getElementById('page-top');
	page_top.style += " padding-right: 16px;";
	page_top.className += " modal-open";
	var mainNav = document.getElementById('mainNav');
	mainNav.style.paddingRight = "32px";
}

$("div.nav-arrow2").click(function(){setTimeout(resetModal, 500)});
