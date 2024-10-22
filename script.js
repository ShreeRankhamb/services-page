//  This is homepage function

// var a="project";

// console.log(a);

// placeholder text disappering function 

function clearPlaceholder() {
    document.getElementById('search').placeholder = '';
}

function resetPlaceholder() {
    if (document.getElementById('search').value === '') {
        document.getElementById('search').placeholder = 'Job title, company, keyword';
    }
}

// Function to change "Interest" to "Passion" and vice versa during the blink
function changeWordDuringBlink() {
    const wordElement = document.getElementById('changingWord');
    const isInterest = wordElement.innerHTML === 'Interest';

    // Set opacity to 0 before changing the text for a smooth transition
    wordElement.style.opacity = '0';

    setTimeout(() => {
        if (isInterest) {
            wordElement.innerHTML = 'Passion';
            wordElement.classList.remove('interest'); // Remove blue class
            wordElement.classList.add('passion'); // Add orange class
        } else {
            wordElement.innerHTML = 'Interest';
            wordElement.classList.remove('passion'); // Remove orange class
            wordElement.classList.add('interest'); // Add blue class
        }

        // Restore opacity to 1 after changing the text
        wordElement.style.opacity = '1';
    }, 500); // Matches the duration of the transition
    
}
// Change the word in sync with the blink cycle (2s animation duration means change every 2 seconds)
setInterval(changeWordDuringBlink, 2000); // Change every 2 seconds

function func() {
    window.location.assign("login.html")
}

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

function func1() {
    window.location.assign("index.html")
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBt");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
 
  function myFunction1() {
    var dots = document.getElementById("dots-1");
    var moreText = document.getElementById("more-1");
    var btnText = document.getElementById("myBt-1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function myFunction2() {
    var dots = document.getElementById("dots-2");
    var moreText = document.getElementById("more-2");
    var btnText = document.getElementById("myBt-2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
 
  function myFunction3() {
    var dots = document.getElementById("dots-3");
    var moreText = document.getElementById("more-3");
    var btnText = document.getElementById("myBt-3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function myFunction4() {
    var dots = document.getElementById("dots-4");
    var moreText = document.getElementById("more-4");
    var btnText = document.getElementById("myBt-4");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }


 
 






