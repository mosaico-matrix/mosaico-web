import {LandingFaqSection} from '@/components/landing/LandingFaq';

export default function Faq() {
    const faqItems = [
        {
            question: "Eww python is so slow on a Pi0, why didn't you use C++?",
            answer: "The software that runs on the Pi is actually written in C++ and is very fast and has a very low memory footprint. " +
                "The Python code is only used to interpret the widget dynamically so that there's no need to recompile the software every time you want to create a new widget! ",
        },
    ];

    return (


        <LandingFaqSection
            title='FAQ'
            description="Looking to learn more about our product? Here are some of the most common
    questions."
            faqItems={faqItems}
        />
    )
}
