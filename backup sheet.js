//show button here
document.getElementById("BtnClass").addEventListener('click', function(){
	
	const reelsCardtwo = document.getElementById("reelsCard2");
reelsCardtwo.style.display = 'block';
let showLess = 'Show less';
});
//hide button here
document.getElementById("showLessBtnId").addEventListener('click', function(){
	
	const reelsCardtwo = document.getElementById("reelsCard2");
reelsCardtwo.style.display = 'none';
});
//reels function ends here.

document.getElementById('div-button').addEventListener('click', function() {
	document.getElementById('preview').classList.remove('hidden');
});


document.getElementById('closePreviewPanel').addEventListener('click', function() {
	document.getElementById('preview').classList.add('hidden');
});
//new function ends here
document.getElementById('RecentAddedBtn').addEventListener('click', function() {
	document.getElementById('homeSectionId').remove('homeSectionId');
	document.getElementById('newSectionId').classList.add('newSectionId');
	const exploreShow = document.getElementById('newSectionId');
	exploreShow.style.display = 'block'
	
});

let hideExplorediv = document.getElementById("exploreSectionId");
	hideExplorediv.style.display = 'none';




/*
//recent function ends here
document.getElementById('RecentAddedBtn').addEventListener('click', function() {
	document.getElementById('homeSectionId').remove('homeSectionId');
	document.getElementById('homeSectionId').classList.add('homeSectionId');
	const recentShow = document.getElementById('homeSectionId');
	recentShow.style.display = 'block'
});
*/





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
/*
//series funcion starts here
document.getElementById('RecentAddedBtn').addEventListener('click', function() {
	document.getElementById('homeSectionId').add('homeSection');
	document.getElementById('exploreSectionId').classList.remove('exploreSectionId');
	document.getElementById('Series').classList.remove('SeriesSection');
	document.getElementById('shortsSectionId').classList.remove('shortsSectionId');
	document.getElementById('savedSectionId').classList.remove('savedSectionId');
	const RecentShow = document.getElementById('homeSectionId');
	RecentShow.style.display = 'block';
	document.getElementById('exploreSectionId') = RecentShow.style.display = 'none';
	document.getElementById('Series') = RecentShow.style.display = 'none';
	document.getElementById('shortsSectionId') = RecentShow.style.display = 'none';
	document.getElementById('savedSectionId') = RecentShow.style.display = 'none';
});
//series function ends here
*/

