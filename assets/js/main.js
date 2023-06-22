const codeToPage = {
  '11': '/galerie/ankunft.html',
  '21': '/galerie/sportplatz.html',
  '22': '/galerie/sporthallen.html',
  '23': '/galerie/sprachenraum.html',
  '24': '/galerie/kunstsäle.html',
  '31': '/galerie/informatik.html',
  '32': '/galerie/chemie.html',
  '33': '/galerie/physik.html',
  '34': '/galerie/biologie.html',
  '41': '/galerie/seketariat.html',
  '42': '/galerie/bibliothek.html',
  '43': '/galerie/lehrerzimmer.html',
  '51': '/galerie/mensa.html',
  '52': '/galerie/gPausenhalle.html',
  '53': '/galerie/kPausenhalle.html',
  '61': '/galerie/archiv.html',
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