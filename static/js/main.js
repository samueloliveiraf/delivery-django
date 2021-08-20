
if (typeof owlCarousel === 'function') {
    $("#owl-demo").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsiveClass:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
}
