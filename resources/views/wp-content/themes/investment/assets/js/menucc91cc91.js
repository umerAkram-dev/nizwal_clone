document.addEventListener("DOMContentLoaded", function(){

  const navSelector = ".sticky-header-on";
  const navTopbarSelector = ".sticky-header-on .topbar";

  const navScrollClass = "scroll";  
  const navFixedTopClass = "fixed-top";  
  const topbarTooggleClass = "visually-hidden";

  if(document.querySelectorAll(navSelector).length > 0){
    navbarHeight = document.querySelector(navSelector).offsetHeight;
    window.addEventListener('scroll', function() {
        if (window.scrollY > 30) {
          document.querySelector(navSelector).classList.add(navFixedTopClass, navScrollClass);
          if(document.querySelector(navTopbarSelector)){
            document.querySelector(navTopbarSelector).classList.add(topbarTooggleClass);
          }
          // add padding top to show content behind navbar
        
          document.querySelector(':root').style.setProperty('--investment-header-height', navbarHeight + 'px');
        } else {
          document.querySelector(navSelector).classList.remove(navFixedTopClass, navScrollClass);
          if(document.querySelector(navTopbarSelector)){
            document.querySelector(navTopbarSelector).classList.remove(topbarTooggleClass);
          }
          
          // remove padding top from body
          document.querySelector(':root').style.setProperty('--investment-header-height', 0);
        } 
    });
  }
  
  // woocommerce shop table
  const shopTable = '.shop_table';
  if(document.querySelectorAll(shopTable).length > 0){
    document.querySelector(shopTable).classList.add('table', 'table-responsive');
  }
  
}); 
