import {LandingFaqSection} from '@/components/landing/LandingFaq';

export default function Faq() {
    const faqItems = [
        {
            question: "Cool, but why?",
            answer: "This is my bachelor thesis project. I wanted to do something interesting and useful while learning more about embedded systems and IoT. It's my first time coding for actual hardware!",
        },
        {
            question: "Can I try it out before buying all the components?",
            answer: "Absolutely! You can build and run the software on your computer. There's a special flag to compile an X11 application instead of sending output to the hardware matrix. The simulator is a 1:1 representation, so you’ll see exactly how your widgets will look on the real hardware.",
        },
        {
            question: "I can't run the simulator on Windows or Mac. Help!",
            answer: "Get Linux. Jk! For now, you can set up a virtual machine. I'm also planning to add a web-based simulator or standalone application for Windows and Mac.",
        },
        {
            question: "What exactly is a widget?",
            answer: "It's essentially a Python script! You also need a small 'metadata' file to describe your widget's properties, and a configuration form if you want it to be configurable.",
        },
        {
            question: "What is a configurable widget?",
            answer: "A configurable widget requires user input before it can be displayed. For example, the image widget needs an image upload. Users can submit multiple configurations for the same widget, allowing easy content changes.",
        },
        {
            question: "Python is slow on a Pi0. Why not use C++?",
            answer: "The software on the Pi is actually written in C++, it's fast and has a low memory footprint. Python is only used to dynamically interpret widgets, so you don’t need to recompile the software every time you create a new one.",
        },
    ];


    return (


        <LandingFaqSection
            title='FAQ'
            faqItems={faqItems}
        />
    )
}
