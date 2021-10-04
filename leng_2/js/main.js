window.onload = function() {
  let x = document.getElementById("contain");

  x.addEventListener("click", myFunction);

  function myFunction() {
      let element = document.getElementById("bottomMenu_ul");
      element.classList.toggle("open");
      let headerInner = document.getElementById("headerInner");
      headerInner.classList.toggle("open");
      x.classList.toggle("change");
  }
};
