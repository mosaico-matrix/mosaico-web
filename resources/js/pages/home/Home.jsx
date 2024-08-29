import Heading from "./components/Heading.jsx";
import Features from "./components/Features.jsx";

export default function Home() {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Heading />
            <Features />
        </div>
    );
}
