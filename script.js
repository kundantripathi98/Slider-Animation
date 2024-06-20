let currentIndex = 1;
let totalSlides = 7;

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
    if(currentIndex > totalSlides){
        currentIndex++;
    } else{
        currentIndex = 1;
    }

    gsap.to(".slide-titles", {
        onStart: ()=>{
            setTimeout(()=>{
                updateActiveSlides();
            }, 100);

            updateImages(currentIndex + 1);
        },
        x: `-${(currentIndex - 1) * 11.1111}%`,
        duration: 2,
        ease: "power4.out"
    });
}

const updateImages = (imgNumber) => {
    let imgSrc = `${imgNumber}`
}

const trimExcessImages = () => {
    const selectors = [".img-top", ".img-bottom"];

    selectors.forEach((selector)=>{
        const container = document.querySelector(selector);
        const images = Array.from(container.querySelectorAll("img"));
        const excessCount = images.length - 5;
        
        if(excessCount > 0){
            images.slice(0, excessCount).forEach((image)=> container.removeChild(image));
        }
    })
}