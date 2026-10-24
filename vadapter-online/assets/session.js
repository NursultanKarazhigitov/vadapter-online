// Signed in to the platform already? Then «Sign in» becomes «Open dashboard →».
// Clerk keeps a small marker cookie on vadapter.online: a sign-in time, or 0 when signed out.
// It carries no personal data and nothing is sent anywhere; the page only reads it.
(function () {
  try {
    var signedIn = document.cookie.split(';').some(function (part) {
      var match = part.trim().match(/^__client_uat(?:_[^=]*)?=(\d+)$/);
      return match && Number(match[1]) > 0;
    });
    if (!signedIn) return;
    var links = document.querySelectorAll('a[href="https://app.vadapter.online"]');
    for (var i = 0; i < links.length; i++) {
      if (links[i].textContent.trim() === 'Sign in') links[i].textContent = 'Open dashboard →';
    }
  } catch (e) { /* the button simply stays «Sign in» */ }
})();
