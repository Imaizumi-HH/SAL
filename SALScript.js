function loginCheck(event){
                event.preventDefault();

            const userid=document.getElementById("uid").value;
            const passid=document.getElementById("pass").value;

            if (userid == "SAINI" && passid == "senpai" ){
                alert("Login Successful!!")
                window.location.href="SAL1.html"
            }
            else{
                alert("Invalid UserID or Password. Please try again.")
            }
        }

function showSal(salId) {
    let sals = document.querySelectorAll(".sal");
    sals.forEach(sal => sal.classList.remove("active"));

    const target = document.getElementById(salId);
    if (target) {
        target.classList.add("active");
    }

}

const audio = document.getElementById("myAudio");
  const button = document.getElementById("muteButton");

  function toggleMute() {
    audio.muted = !audio.muted;
    button.textContent = audio.muted ? "volume_off" : "volume_up";
  }

window.addEventListener("click", () => {
    audio.play().catch(() => {
      console.log("Autoplay blocked by browser.");
    });
  });

  let visible = false;

  function itachi() {
    const iframe = document.getElementById("sasuke");
    visible = !visible;
    iframe.style.display = visible ? "block" : "none";
  }

  function brock() {
    const iframe = document.getElementById("misty");
    visible = !visible;
    iframe.style.display = visible ? "block" : "none";
  }