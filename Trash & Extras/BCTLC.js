/*function displyAboutFunc() {
    const showDiv = document.getElementsByClassName('updatesSection');
    const hideDiv = document.getElementsByClassName('aboutBCTLCSection');
    [showDiv, hideDiv].forEach(
        div => {
            div.style.display=div.style.display === 'none'? 'block':'none';
        }
    );
}

document.getElementsByClassName('updatesBtn').addEventListener('click', displyAboutFunc);
*/

const funcAbout = document.getElementsByClassName('aboutBtn');
funcAbout.addEventListener('click', function() {
    const showAbout = document.getElementsByClassName('updatesArea');
    showAbout.style.display = 'block';
})