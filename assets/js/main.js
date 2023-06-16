const codeToPage = {
  'edv': '/galerie/edv.html',
  'sportplatz': '/galerie/sportplatz.html',
  'mensa': '/galerie/mensa.html',
  'kleine Pausenhalle': '/galerie/-.html',
  'große Pausenhalle': '/galerie/-.html',
  'archiv': '/galerie/archiv.html'
};

const codeInput = document.getElementById('code-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
  const enteredCode = codeInput.value;
  
  if (codeToPage.hasOwnProperty(enteredCode)) {
    window.location.href = codeToPage[enteredCode];
  } else {
    alert('Code existiert nicht!');
  }
});

function copyText() {
	
  /* Copy text into clipboard */
  navigator.clipboard.writeText
    ("https://rupertiexplorer.github.io/galerie/mensa.html");
}


/*=============== SCROLL SECTIONS ACTIVE LINK ===============
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
*/