alert("Jay1External.js ");

document.body.addEventListener('portalOnPageLoad', function(e) {

  setTimeout(function() {
    alert("Jay, this should appear when the GWT has finsished building the page")
  }, 0);

}, false);

document.body.addEventListener('portalPageRendered', function(e) {

  setTimeout(function() {
    alert("Jay, this should appear when a page is rendered or rerendereed. eg. html first fetched, and when user navigates between static pages and/or collection list pages.")
  }, 0);

}, false);

document.body.addEventListener('portalDialogRendered', function(e) {

  setTimeout(function() {
    alert("Jay, this should appear when a portal dialog is rendered, e.g. add asset, mediaplayer")
  }, 0);

}, false);


document.body.addEventListener('portalDialogClosed', function(e) {

  setTimeout(function() {
    alert("Jay, this should appear when a portal dialog is closed")
  }, 0);

}, false);
