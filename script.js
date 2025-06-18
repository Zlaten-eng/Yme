// script.js
// Facebook login functionality
function facebookLogin() {
    FB.login(function(response) {
        if (response.authResponse) {
            // User logged in, get their profile information
            FB.api('/me', {fields: 'name,email'}, function(response) {
                console.log(response);
                // Handle user data
            });
        } else {
            // User cancelled login or did not fully authorize
            console.log('User cancelled login or did not fully authorize.');
        }
    }, {scope: 'email'});
}

// Initialize Facebook SDK
window.fbAsyncInit = function() {
    FB.init({
        appId: 'your-app-id',
        cookie: true,
        xfbml: true,
        version: 'v13.0'
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Add event listener to Facebook login button
document.querySelector('.facebook-button').addEventListener('click', facebookLogin);
