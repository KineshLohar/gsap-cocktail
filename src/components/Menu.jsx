import { useRef, useState } from "react";
import { sliderLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {

    const contentRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(() => {

        // const scrollEff = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: "#menu",
        //         start: 'top 10%',
        //         end: "bottom bottom",
        //         scrub: true
        //     }
        // })

        // scrollEff.to('#m-left-leaf', {
        //     y: -100
        // })

        gsap.fromTo('#title', {
            opacity: 0
        }, {
            opacity: 1,
            duration: 1
        })

        gsap.fromTo('.cocktail img', {
            opacity: 0, xPercent: -100
        }, {
            opacity: 1,
            xPercent: 0,
            duration: 1
        })

        gsap.fromTo('.details h2', {
            opacity: 0, yPercent: 100
        }, {
            opacity: 1,
            yPercent: 0
        })
        gsap.fromTo('.details p', {
            opacity: 0, yPercent: 100,
        }, {
            opacity: 1,
            yPercent: 0,
            delay: 0.1
        })

    }, [currentIndex])

    const totalCocktails = sliderLists.length;

    const goToSlide = (index) => {
        setCurrentIndex((index + totalCocktails) % totalCocktails)
    }

    const getCocktailAt = (indexOffset) => {
        return sliderLists[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
    }

    const currentCocktail = getCocktailAt(0);
    const nextCocktail = getCocktailAt(1);
    const prevCocktail = getCocktailAt(-1);

    return (
        <section id="menu">
            <img src="/images/slider-left-leaf.png" alt="slider-left-leaf" id="m-left-leaf" />
            <img src="/images/slider-right-leaf.png" alt="slider-right-leaf" id="m-right-leaf" />

            <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
            </h2>
            <nav className='cocktail-tabs'>
                {
                    sliderLists?.map((cocktail, index) => {
                        const isActive = index === currentIndex;
                        return (
                            <button
                                key={cocktail.id}
                                className={`
                                    ${isActive ? 'text-white border-white'
                                        : 'text-white/50 border-white/50'
                                    }
                                    `}
                                onClick={() => goToSlide(index)}
                            >
                                {cocktail.name}
                            </button>
                        )
                    })
                }
            </nav>
            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="right arrow" />
                    </button>
                    <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
                        <span>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="left arrow" />
                    </button>
                </div>
                <div className="cocktail">
                    <img src={currentCocktail.image} alt={currentCocktail.name} className="object-contain" />
                </div>

                <div className="recipe">
                    <div ref={contentRef} className="info">
                        <p>Recipe for:</p>
                        <p id="title">{currentCocktail.name}</p>
                    </div>
                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Menu;