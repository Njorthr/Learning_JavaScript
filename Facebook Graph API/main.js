window.fbAsyncInit = function() {
    FB.init({
      appId      : '3000844946897980',
      cookie     : true,
      xfbml      : true,
      version    : 'v13.0'
    });

      FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
      }); 
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   function statusChangeCallback(response) {
       if (response.status === "connected") {
           console.log("Logged in and authenticated");
           setElements(true);
           testAPI();
       } else {
            console.log("Not Authenticated");
            setElements(false);
       }
   }
  
      function checkLoginState() {
      FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
      });
      }

function testAPI() {
    FB.api("/me?fields=name,email", function (respons) {
        if (response && !response.error) {
            console.log(response);
        }
    })
}

function setElements(isLoggedIn) {
    if (isLoggedIn) {
        document.querySelector("#logout").style.display = "block";
        document.querySelector("#profile").style.display = "block";
        document.querySelector("#fb-btn").style.display = "none";
        document.querySelector("#heading").style.display = "none";
    } else {
        document.querySelector("#logout").style.display = "none";
        document.querySelector("#profile").style.display = "none";
        document.querySelector("#fb-btn").style.display = "block";
        document.querySelector("#heading").style.display = "block";
    }
} 
function logout() {
    FB.logout(function (respons) {
       setElements(false);
    });
}