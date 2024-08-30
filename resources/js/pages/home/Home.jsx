import Heading from "./components/Heading.jsx";
import Features from "./components/Features.jsx";
import WidgetShowcase from "./components/WidgetShowcase.jsx";
import Credits from "./components/Credits.jsx";
import Faq from "./components/Faq.jsx";
import WidgetScripting from "./components/WidgetScripting.jsx";

export default function Home() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Heading />
            <WidgetScripting/>
            <WidgetShowcase />
            <Features />
            <Faq/>
            <Credits/>
        </div>
    );
}
