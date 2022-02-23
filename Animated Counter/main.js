const counters = document.querySelectorAll(".counter"),
    speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.floor(count + inc);
            setTimeout(updateCount, 1);
        } else  {
            count.innerText = target;
        }
        
    }
    updateCount();
});