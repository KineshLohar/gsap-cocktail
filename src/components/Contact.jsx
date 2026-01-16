import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../constants";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Contact = () => {

    useGSAP(() => {

        const title = SplitText.create('#contact h2', {
            type: 'words'
        })

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top center",
            },
            ease: "power1.inOut"
        });

        timeline.from(title.words, {
            yPercent: 50,
            opacity: 0,
            stagger: 0.04
        })
            .from("#contact h3, #contact p", {
                yPercent: 50,
                opacity: 0,
                stagger: 0.04
            })

            .to('#f-left-leaf', {
                y: '-40',
                duration: 1,
                ease: "power1.inOut"
            })
            .to('#f-right-leaf', {
                y: '40',
                duration: 1,
                ease: "power1.inOut"
            }, '<')
    })

    return (
        <footer id="contact">
            <img src="/images/footer-left-leaf.png" alt="footer left leaf" id="f-left-leaf" />
            <img src="/images/footer-right-leaf.png" alt="footer right leaf" id="f-right-leaf" />
            <div className="content">
                <h2>Where to Find Us</h2>
                <div>
                    <h3>Visit Our Bar</h3>
                    <p>456, Raq Balvid. #303, Los Angeles, SZ, MH 400054</p>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <p>(555) 987-66666</p>
                    <p>hello@kineshlohar.com</p>
                </div>
                <div>
                    <h3>Open Every Day at:</h3>
                    {
                        openingHours?.map((time) => (
                            <p key={time.day}>
                                {time.day} : {time.time}
                            </p>
                        ))
                    }
                </div>

                <div>
                    <h3>Socials</h3>
                    <div className="flex-center gap-5">
                        {socials?.map(social => (
                            <a
                                key={social.name}
                                href={social.url}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <img src={social.icon} alt={social.name} />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Contact;