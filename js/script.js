

document.addEventListener("DOMContentLoaded", function () {
    let loader = document.getElementById("loader");
    let percentage = document.getElementById("percentage");
    let progress = 0;

    function updateLoader() {
        loader.style.borderTopColor = "#ffffff";
        loader.style.borderRightColor = "#ffffff";
        loader.style.borderBottomColor = "#ffffff";
        loader.style.borderLeftColor = "#3498db";
    }
    function updatePercentage() {
        percentage.innerHTML = progress + "%";
    }

    function loading() {
        if (progress < 100) {
            progress += 1;
            updateLoader();
            updatePercentage();
            setTimeout(loading, 20); // Adjust the timeout for the desired speed
        } else {
            // Remove the loader when loading is complete
            document.body.removeChild(loader.parentElement);
        }
    }

    loading();
});
document.addEventListener("DOMContentLoaded", function () {
    let loader = document.getElementById("loader");
    let percentage = document.getElementById("percentage");
    let progress = 0;

    function updateLoader() {
        loader.style.borderTopColor = "#ffffff";
        loader.style.borderRightColor = "#ffffff";
        loader.style.borderBottomColor = "#ffffff";
        loader.style.borderLeftColor = "#3498db";
    }

    function updatePercentage() {
        percentage.innerHTML = progress + "%";
    }

    function loading() {
        if (progress < 100) {
            progress += 1;
            updateLoader();
            updatePercentage();
            setTimeout(loading, 20); // Adjust the timeout for the desired speed
        } else {
            // Remove the loader when loading is complete
            document.body.removeChild(loader.parentElement);
        }
    }

    loading();
});
 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
 });

 const hiddenElements = document.querySelectorAll('.hidden');
 hiddenElements.forEach((el) => observer.observe(el));
