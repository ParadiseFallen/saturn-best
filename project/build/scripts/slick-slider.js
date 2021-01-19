$(()=>{
    if ($('#slider').length !== 0) {
        $('#slider').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                prevArrow: $('#slider-left-btn'),
                nextArrow: $('#slider-right-btn'),
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                    },
                    {
                        breakpoint: 577,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
    }
    if ($('#table-slider-data').length !== 0) {
        $('#table-slider-data').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: $('#table-slider-left-btn'),
                nextArrow: $('#table-slider-right-btn')
            });
    }
})
