import {LandingFaqSection} from '@/components/landing/LandingFaq';

export default function Faq() {
    const faqItems = [
        {
          question: "Cool but why?",
            answer: "Basically, this is my bachelor thesis project. I didn't want to do something boring and I wanted a project that would be useful to me. " +
                "I also wanted to learn more about embedded systems and IOT. This is my first time writing code for actual hardware!",
        },
        {
            question: "What exactly is a widget?",
            answer: "Nothing more than a python script! Well, you also need to submit a small 'metadata' file to describe your widget properties and a" +
                " form configuration if you want your widget to be configurable. ",
        },
        {
            question: "What is a configurable widget?",
            answer: "A configurable widget is a widget that can be customized by the user. For example, a weather widget can be configured to display the temperature in Celsius or Fahrenheit.",
        },
        {
            question: "Eww python is so slow on a Pi0, why didn't you use C++?",
            answer: "The software that runs on the Pi is actually written in C++ and is very fast and has a very low memory footprint. " +
                "The Python code is only used to interpret the widget dynamically so that there's no need to recompile the software every time you want to create a new widget! ",
        },

        AGGIUNGI QUI ALTRO TIPO SIMULATORE
    ];

    return (


        <LandingFaqSection
            title='FAQ'
            faqItems={faqItems}
        />
    )
}
