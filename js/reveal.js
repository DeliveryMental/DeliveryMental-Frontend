if (window.innerWidth < 992) {
    ScrollReveal().reveal('.tile', { interval: 10, reset: true });
    //ScrollReveal().reveal('#notification > *', { interval: 3, reset: true });
} else {
    //menu

    ScrollReveal().reveal('#menu', {
        delay: 200,
        duration: 700,
        reset: true,
        easing: 'ease-in'
    });

    ScrollReveal().reveal('#firstHalf', {
        delay: 200,
        duration: 700,
        easing: 'ease-in'
    });

    ScrollReveal().reveal('#sub_1', {
        delay: 200,
        duration: 700,
        easing: 'ease-in'
    });

    ScrollReveal().reveal('#sub_2', {
        delay: 500,
        duration: 700,
        easing: 'ease-in'
    });

    ScrollReveal().reveal('#sub_3', {
        delay: 800,
        duration: 700,
        easing: 'ease-in'
    });

    ScrollReveal().reveal('#sub_4', {
        delay: 1100,
        duration: 700,
        easing: 'ease-in'
    });

    //notifications

    ScrollReveal().reveal('.notification', {
        delay: 800,
        duration: 700,
        easing: 'ease-in'
    });

    ScrollReveal().reveal('.noti', {
        delay: 1100,
        duration: 700,
        easing: 'ease-in'
    });

    //schedule

    ScrollReveal().reveal('#schedule', {
        delay: 1100,
        duration: 700,
        easing: 'ease-in'
    });
}