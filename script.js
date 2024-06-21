let currentIndex = 1;
let totalSlides = 9;

const updateActiveSlides = () => {
    document.querySelectorAll(".title").forEach((el, index)=>{
        if(index === currentIndex){
            el.classList.add("active");
        }else{
            el.classList.remove("active");
        }
    })
}

const handleSlider = () => {
    if(currentIndex < totalSlides){
        currentIndex++;
    } else{
        currentIndex = 1;
    }

    gsap.to(".slide-titles", {
        onStart: ()=>{
            setTimeout(()=>{
                updateActiveSlides();
            }, 100);

            if(currentIndex + 1 < 10){
                updateImages(currentIndex + 1);
            }else{
                updateImages(1);
            }
        },
        x: `-${(currentIndex - 1) * 8.690}%`,
        duration: 2,
        ease: "power4.out"
    });
}

const updateImages = (imgNumber) => {
    let imgSrc = `./assets/car${imgNumber}-.jpg`;
    const imgTop = document.createElement("img");
    const imgBottom = document.createElement("img");

    imgTop.src = imgSrc;
    imgBottom.src = imgSrc;

    // imgTop.style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
    // imgBottom.style.clipPath = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
    // imgTop.style.transform = "translateX(-100px)";
    // imgBottom.style.transform = "translateX(-100px)";

    document.querySelector(".img-top").appendChild(imgTop);
    document.querySelector(".img-bottom").appendChild(imgBottom);

    gsap.from([imgTop, imgBottom], {
        // clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        // transform: "translateX(100px)",
        opacity: 0,
        transform: "translateX(-100px)",
        duration: 1,
        ease: "power4.out",
        // stagger: 0.15,
        onComplete: trimExcessImages,
    })
}

const trimExcessImages = () => {
    const selectors = [".img-top", ".img-bottom"];

    selectors.forEach((selector)=>{
        const container = document.querySelector(selector);
        const images = Array.from(container.querySelectorAll("img"));
        const excessCount = images.length - 1;
        
        if(excessCount > 0){
            images.slice(0, excessCount).forEach((image)=> container.removeChild(image));
        }
    })
}

document.addEventListener("DOMContentLoaded", ()=>{
    updateImages(2);
    document.addEventListener("click", handleSlider);
    updateActiveSlides();
})

