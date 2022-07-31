<!DOCTYPE html>
<html>
<title>W3.CSS Template</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body, h1,h2,h3,h4,h5,h6 {font-family: "Montserrat", sans-serif}
.w3-row-padding img {margin-bottom: 10px}
.bgimg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGfPF2hV5Q_KSTKO8MISc0xgjEOf3roM4WsQ&usqp=CAU');
  min-height: 100%;
}
body {
  background-image:url("https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png");
background-repeat: no-repeat;
  background-size: cover;
min-height: 100%;
}
</style>
<body>

<!-- Sidebar with image -->
<nav class="w3-sidebar w3-hide-medium w3-hide-small" style="width:40%">
  <div class="bgimg"></div>
</nav>

<!-- Hidden Sidebar (reveals when clicked on menu icon)-->
<nav class="w3-sidebar w3-black w3-animate-right w3-xxlarge" style="display:none;padding-top:150px;right:0;z-index:2" id="mySidebar">
  <a href="javascript:void(0)" onclick="closeNav()" class="w3-button w3-black w3-xxxlarge w3-display-topright" style="padding:0 12px;">
    <i class="fa fa-remove"></i>
  </a>
  <div class="w3-bar-block w3-center">
    <a href="#" class="w3-bar-item w3-button w3-text-white w3-hover-black" onclick="closeNav()">Home</a>
    <a href="#portfolio" class="w3-bar-item w3-button w3-text-white w3-hover-black" onclick="closeNav()">Portfolio</a>
    <a href="#about" class="w3-bar-item w3-button w3-text-white w3-hover-black" onclick="closeNav()">About</a>
    <a href="#contact" class="w3-bar-item w3-button w3-text-white w3-hover-black" onclick="closeNav()">Contact</a>
  </div>
</nav>

<!-- Page Content -->
<div class="w3-main w3-padding-large" style="margin-left:40%">

  <!-- Menu icon to open sidebar -->
  <span class="w3-button w3-top w3-white w3-xxlarge w3-text-black w3-hover-text-black" style="width:auto;right:0;" onclick="openNav()"><i class="fa fa-bars"></i></span>

  <!-- Header -->
  <header class="w3-container w3-center" style="padding:120px 10px" id="home">
    <h5 class="w3-jumbo"><b>Teja</b></h1>
    <p>Student.</p>
    <button class="w3-button w3-black w3-padding-large w3-margin-top">
      <i class="fa fa-download"></i> Download Resume
    </button>
  </header>

  <!-- Portfolio Section -->
  <div class="w3-padding-32 w3-content" id="portfolio">
    <h2 class="w3-text-black">My Profile</h2>
    <hr class="w3-opacity">
  </div>
<h7>Full name:TEJA PUNATI</h7>
<P>IT Student</p>

  <!-- About Section -->
  <div class="w3-content w3-justify w3-text-black w3-padding-32" id="about">
    <h2>About</h2>
    <hr class="w3-opacity">
    <p>Hi,i'm Teja,currently pursuing BTech in the feild of Information Technology from vignan's nirula institute of technology and sciences for women.Till now my acedamic CGPA is 8.5. My roll_no is 20NN1A0571.
    </p>
<p>comming to my Interests, i'm very much interested in coding,designing wed pages.</p>
  
    <h3 class="w3-padding-16">My Skills</h3>
    <p class="w3-wide">coding</p>
    <div class="w3-light-black">
      <div class="w3-container w3-center w3-padding-small w3-dark-grey" style="width:95%">95%</div>
    </div>
    <p class="w3-wide">Web Design</p>
    <div class="w3-light-black">
      <div class="w3-container w3-center w3-padding-small w3-dark-grey" style="width:85%">85%</div>
    </div>
    <p class="w3-wide">Communication Skill</p>
    <div class="w3-light-black">
      <div class="w3-container w3-center w3-padding-small w3-dark-grey" style="width:80%">80%</div>
    </div><br>

      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">55+</span><br>
        Projects Done
      </div>
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">89+</span><br>
        workshops attended
      </div>
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">150+</span><br>
        certification courses
      </div>
    </div>

    <button class="w3-button w3-light-black w3-padding-large w3-section">
      <i class="fa fa-download"></i> Download Resume
    </button>
  <div class="w3-padding-32 w3-content w3-text-black" id="contact" style="margin-bottom:64px">
    <h2>Contact Me</h2>
    <hr class="w3-opacity">

    <div class="w3-section">
      <p><i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> AP, INDIA</p>
      <p><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +00 898588602</p>
      <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: nehadalavayi@mail.com</p>
    </div>
    
   
    <p>Lets get in touch. Send me a message:</p>
    <form action="/action_page.php" target="_blank">
      <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name"></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Email" required name="Email"></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Subject" required name="Subject"></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Message" required name="Message"></p>
      <p>
        <button class="w3-button w3-black w3-padding-large" type="submit">
          <i class="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </p>
    </form>
  <!-- End Contact Section -->
  </div>  
  
  <!-- Footer -->
  <footer class="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge" style="margin:-24px">
    <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-instagram w3-hover-opacity"></i>
    <i class="fa fa-snapchat w3-hover-opacity"></i>
    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
    <i class="fa fa-twitter w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
    <p class="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" class="w3-hover-text-green">w3.css</a></p>
  <!-- End footer -->
  </footer>
  
<!-- END PAGE CONTENT -->
</div>

<script>
// Open and close sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "60%";
  document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidebar").style.display = "none";
}
</script>

</body>
</html>

