import Heading from "./components/Heading.jsx";
import Features from "./components/Features.jsx";
import WidgetShowcase from "./components/WidgetShowcase.jsx";
import Credits from "./components/Credits.jsx";
import Faq from "./components/Faq.jsx";
import WidgetScripting from "./components/WidgetScripting.jsx";
import Components from "./components/Components.jsx";
import {Contact} from "lucide-react";
import Footer from "./components/Footer.jsx";

export default function Home() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Heading />
            <Footer/>
            {/*<Components />*/}
            {/*<WidgetScripting/>*/}
            {/*<WidgetShowcase />*/}
            {/*<Features />*/}
            {/*<Faq/>*/}
            {/*<Credits/>*/}
        </div>
    );
}
