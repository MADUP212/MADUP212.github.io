(function () {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var progress = document.querySelector(".scroll-progress");
    if (progress) {
        var updateProgress = function () {
            var doc = document.documentElement;
            var scrollable = doc.scrollHeight - doc.clientHeight;
            var pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
            progress.style.width = pct + "%";
        };
        document.addEventListener("scroll", updateProgress, { passive: true });
        updateProgress();
    }

    var revealEls = document.querySelectorAll(".reveal");
    if (revealEls.length && !reduceMotion && "IntersectionObserver" in window) {
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        revealEls.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        revealEls.forEach(function (el) {
            el.classList.add("is-visible");
        });
    }
})();
