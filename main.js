// execute script after page load
window.onload = function digital_fn(){

    // toggle button
    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse");

    toggle.addEventListener('click', function(event){
        collapse.classList.toggle('active')
        //console.log(toggle)
    });

    // Close mobile view menu after click
    document.querySelectorAll(".collapse").forEach(n => n.addEventListener ("click", () =>{
      toggle.classList.remove("active");
      collapse.classList.remove("active");
    }))

    //masonry js
    let grid = document.querySelector("#site-main .merch-area .images-flex");

    let msnry = new Masonry(grid, {
        itemSelector : '.flex-item',
        gutter : 100,
        fitWidth: true,
    })
}
