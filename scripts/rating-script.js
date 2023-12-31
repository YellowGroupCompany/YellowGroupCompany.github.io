// Select all elements with the "i" tag and store them in a NodeList called "stars"

const stars = document.querySelectorAll(".stars i");

// Loop through the "stars" NodeList

stars.forEach((star, index1) => {

   // Add an event listener that runs a function when the "click" event is triggered

    star.addEventListener("click", () => {

        // Loop through the "stars" NodeList Again

        stars.forEach((star, index2) => {

            // Add the "active" class to the clicked star and any stars with a lower index
            // and remove the "active" class from any stars with a higher index
        
            index1 >= index2 ? star.classList.add('filled') : star.classList.remove('filled');
        });
    });

    star.addEventListener("mouseenter", () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add('hovered') : star.classList.remove('hovered');
            if (index1 >= index2 && !star.classList.contains('filled')) {
                star.classList.add('hovered') 
            } else {
                star.classList.remove('hovered')
            }
        });
    });

    star.addEventListener("mouseleave", () => {
        stars.forEach((star, index2) => {
            index1 == index2 ? star.classList.remove('hovered', 'un-hovered') : star.classList.remove('hovered', 'un-hovered');
        });
    })
});