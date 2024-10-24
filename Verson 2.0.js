


document.getElementById('mainMenu').onclick = function (){
	let dropSubMenuShow = document.getElementById('dropSubMenu');
	dropSubMenuShow.style.display = 'block';
	
}


document.getElementById('headerId').onclick = function () {
	let containerHideSubMenu = document.getElementById('dropSubMenu');
		containerHideSubMenu.style.display = 'none';
		document.getElementById('headerId').onclick = function () {
			let containerHideSubMenu = document.getElementById('dropSubMenu');
		containerHideSubMenu.style.display = 'none';
		}
		document.getElementById('categorySearchId').onclick = function () {
			let containerHideSubMenu = document.getElementById('dropSubMenu');
		containerHideSubMenu.style.display = 'none';
		}
		document.getElementById('contentView').onclick = function () {
			let containerHideSubMenu = document.getElementById('dropSubMenu');
		containerHideSubMenu.style.display = 'none';
}
}

//////////////////////////////////////////////////////////////////////




/* Recent or New section is displayed here */
document.getElementById('RecentAddedBtn').onclick = function () {
	let homeSectionId = document.getElementById('homeSectionId');
	homeSectionId.style.display = 'block';
	let exploreSectionId = document.getElementById('exploreSectionId');
	exploreSectionId.style.display = 'none';
	let Series = document.getElementById('Series');
	Series.style.display = 'none';
	let shortsSectionId = document.getElementById('shortsSectionId');
	shortsSectionId.style.display = 'none';
	let savedSectionId = document.getElementById('savedSectionId');
	savedSectionId.style.display = 'none';
	let newSectionId = document.getElementById('newSectionId');
	newSectionId.style.display = 'none';
}

/* Explore section is displayed here */
document.getElementById('exploreBtn').onclick = function () {
	let homeSectionId = document.getElementById('homeSectionId');
	homeSectionId.style.display = 'none';
	let exploreSectionId = document.getElementById('exploreSectionId');
	exploreSectionId.style.display = 'block';
	let Series = document.getElementById('Series');
	Series.style.display = 'none';
	let shortsSectionId = document.getElementById('shortsSectionId');
	shortsSectionId.style.display = 'none';
	let savedSectionId = document.getElementById('savedSectionId');
	savedSectionId.style.display = 'none';
	let newSectionId = document.getElementById('newSectionId');
	newSectionId.style.display = 'none';
}

/* Recent or New section is displayed here */
document.getElementById('SeriesBtn').onclick = function () {
	let homeSectionId = document.getElementById('homeSectionId');
	homeSectionId.style.display = 'none';
	let exploreSectionId = document.getElementById('exploreSectionId');
	exploreSectionId.style.display = 'none';
	let Series = document.getElementById('Series');
	Series.style.display = 'block';
	let shortsSectionId = document.getElementById('shortsSectionId');
	shortsSectionId.style.display = 'none';
	let savedSectionId = document.getElementById('savedSectionId');
	savedSectionId.style.display = 'none';
	let newSectionId = document.getElementById('newSectionId');
	newSectionId.style.display = 'none';
}

/* shorts section is displayed here */
document.getElementById('shortsBtn').onclick = function () {
	let homeSectionId = document.getElementById('homeSectionId');
	homeSectionId.style.display = 'none';
	let exploreSectionId = document.getElementById('exploreSectionId');
	exploreSectionId.style.display = 'none';
	let Series = document.getElementById('Series');
	Series.style.display = 'none';
	let shortsSectionId = document.getElementById('shortsSectionId');
	shortsSectionId.style.display = 'block';
	let savedSectionId = document.getElementById('savedSectionId');
	savedSectionId.style.display = 'none';
	let newSectionId = document.getElementById('newSectionId');
	newSectionId.style.display = 'none';
	
}



//show button here

document.getElementById('BtnClass').onclick = function (){
	let reelsCardtwo = document.getElementById('reelsCard2');
	reelsCardtwo.style.display = 'block';
}


//hide button here
document.getElementById('showLessBtnId').onclick = function (){
	let reelsCardtwo = document.getElementById('reelsCard2');
reelsCardtwo.style.display = 'none';
}






/* Saved section is displayed here */
document.getElementById('savedBtn').onclick = function () {
	let homeSectionId = document.getElementById('homeSectionId');
	homeSectionId.style.display = 'none';
	let exploreSectionId = document.getElementById('exploreSectionId');
	exploreSectionId.style.display = 'none';
	let Series = document.getElementById('Series');
	Series.style.display = 'none';
	let shortsSectionId = document.getElementById('shortsSectionId');
	shortsSectionId.style.display = 'none';
	let savedSectionId = document.getElementById('savedSectionId');
	savedSectionId.style.display = 'block';
	let newSectionId = document.getElementById('newSectionId');
	newSectionId.style.display = 'none';
}




//Content preview function ends here.
document.get

document.getElementById('div-button').addEventListener('click', function() {
	document.getElementById('preview').classList.remove('hidden');
});


document.getElementById('closePreviewPanel').addEventListener('click', function() {
	document.getElementById('preview').classList.add('hidden');
});

////////////////////////////////////////////////////////////////////////

/* 

//new function ends here
document.getElementById('RecentAddedBtn').addEventListener('click', function() {
	document.getElementById('homeSectionId').remove('homeSectionId');
	document.getElementById('newSectionId').classList.add('newSectionId');
	const exploreShow = document.getElementById('newSectionId');
	exploreShow.style.display = 'block';
	
});



let hideExplorediv = document.getElementById("exploreSectionId");
	hideExplorediv.style.display = 'none';


//explore function ends here
document.getElementById('exploreBtn').addEventListener('click', function() {
	document.getElementById('homeSectionId').remove('homeSectionId');
	document.getElementById('exploreSectionId').classList.add('exploreSection');
	const exploreShow = document.getElementById('exploreSectionId');
	exploreShow.style.display = 'block'


});
//series funcion starts here
document.getElementById('SeriesBtn').addEventListener('click', function() {
	document.getElementById('homeSectionId').remove('homeSectionId');
	document.getElementById('Series').classList.add('SeriesSection');
	const seriesShow = document.getElementById('Series');
	seriesShow.style.display = 'block'
});
//shorts funcion starts here
document.getElementById('shortsBtn').addEventListener('click', function() {
	document.getElementById('homeSectionId').remove('homeSectionId');
	document.getElementById('shortsSectionId').classList.add('shortsSection');
	const shortsShow = document.getElementById('shortsSectionId');
	shortsShow.style.display = 'block'
});


//saved funcion starts here
document.getElementById('savedBtn').addEventListener('click', function() {
	document.getElementById('homeSectionId').remove('homeSectionId');
	document.getElementById('savedSectionId').classList.add('savedSectionId');
	const shortsShow = document.getElementById('savedSectionId');
	shortsShow.style.display = 'block'
});

//show button here
document.getElementById("BtnClass").addEventListener('click', function(){
	
	const reelsCardtwo = document.getElementById("reelsCard2");
reelsCardtwo.style.display = 'block';
});
//hide button here
document.getElementById("showLessBtnId").addEventListener('click', function(){
	
	const reelsCardtwo = document.getElementById("reelsCard2");
reelsCardtwo.style.display = 'none';
});


 */