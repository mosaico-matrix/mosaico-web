import { LandingProductFeaturesGrid } from '@/components/landing/LandingProductFeaturesGrid';
import { LandingProductVideoFeature } from '@/components/landing/LandingProductVideoFeature';

export default function WidgetShowcase() {

    return (
        <>
            <LandingProductFeaturesGrid
                title="Some examples of widgets"
                containerType="wide"
                description=""
            >
                <LandingProductVideoFeature
                    title="Image"
                    description="Upload your favorite images and display them on your screen."
                    autoPlay={true}
                    loop={true}
                    videoSrc="/videos/widgets/image.mp4"
                />

                <LandingProductVideoFeature
                    title="Date & Time"
                    description="Self-explanatory"
                    autoPlay={true}
                    loop={true}
                    videoSrc="/videos/widgets/date.mp4"
                />

                <LandingProductVideoFeature
                    title="List"
                    description="Groceries, todos, or anything else you can think of."
                    autoPlay={true}
                    loop={true}
                    videoSrc="/videos/widgets/list.mp4"
                />

                <LandingProductVideoFeature
                    title="Dice"
                    description="Board games geek? Roll the dice!"
                    autoPlay={true}
                    loop={true}
                    videoSrc="/videos/widgets/dice.mp4"
                />

                <LandingProductVideoFeature
                    title="Text"
                    description="Write a message to yourself or a loved one."
                    autoPlay={true}
                    loop={true}
                    videoSrc="/videos/widgets/text.mp4"
                />

                <LandingProductVideoFeature
                    title="Pulisc"
                    description="Widget I use with my roommates to keep track of whose turn it is to clean the house."
                    autoPlay={true}
                    loop={true}
                    videoSrc="/videos/widgets/pulisc.mp4"
                />

                <LandingProductVideoFeature
                    title="Weather"
                    description="Display the weather forecast for your location (WIP)."
                    autoPlay={true}
                    loop={true}
                    videoSrc="/videos/widgets/weather.mp4"
                />

                <LandingProductVideoFeature
                    title="Clock"
                    description="Self-explanatory"
                    autoPlay={true}
                    loop={true}
                    videoSrc="/videos/widgets/clock.mp4"
                />
            </LandingProductFeaturesGrid>
        </>
    );
}
