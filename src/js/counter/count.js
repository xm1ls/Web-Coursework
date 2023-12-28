function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            $("#achievements-members").counter({
                autoStart: true,
                duration: 1000,
                countFrom: 0,
                countTo: 2245341,
                runOnce: true,
                placeholder: "2245341",
                easing: "easeOutCubic",
                onStart: function () { },
                onComplete: function () { },
                numberFormatter: function (number) {
                    let formattedNumber = Math.round(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                    return formattedNumber;
                }
            });
            $("#achievements-clubs").counter({
                autoStart: true,
                duration: 2000,
                countFrom: 0,
                countTo: 46328,
                runOnce: true,
                placeholder: "46328",
                easing: "easeOutCubic",
                onStart: function () { },
                onComplete: function () { },
                numberFormatter: function (number) {
                    let formattedNumber = Math.round(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                    return formattedNumber;
                }
            });
            $("#achievements-bookings").counter({
                autoStart: true,
                duration: 3000,
                countFrom: 0,
                countTo: 828867,
                runOnce: true,
                placeholder: "828867",
                easing: "easeOutCubic",
                onStart: function () { },
                onComplete: function () { },
                numberFormatter: function (number) {
                    let formattedNumber = Math.round(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                    return formattedNumber;
                }
            });
            $("#achievements-payments").counter({
                autoStart: true,
                duration: 4000,
                countFrom: 0,
                countTo: 1926436,
                runOnce: true,
                placeholder: "1926436",
                easing: "easeOutCubic",
                onStart: function () { },
                onComplete: function () { },
                numberFormatter: function (number) {
                    let formattedNumber = Math.round(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                    return formattedNumber;
                }
            });

            observer.unobserve(entry.target);
        }
    });
}

let observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

let elementsToObserve = document.querySelectorAll('[id^="achievements"]');
elementsToObserve.forEach(element => {
    observer.observe(element);
});