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
                    title="Generate sections with AI"
                    description="Save time by generating features, sales copy, FAQs and even example testimonials with AI. All beautifully designed."
                    autoPlay={true}
                    videoSrc="https://cache.shipixen.com/features/2-generate-content-with-ai.mp4"
                />

                <LandingProductVideoFeature
                    title="Add your branding"
                    description="Choose from more than 30+ themes or create your own. Upload your logo, set the size and we take care of the rest."
                    autoPlay={true}
                    videoSrc="https://cache.shipixen.com/features/3-theme-and-logo.mp4"
                />

                <LandingProductVideoFeature
                    title="Build your pricing page"
                    description="Use our pricing page builder to create a beautiful pricing page. Choose from different layouts and monthly/yearly pricing options. It's as easy as it looks."
                    autoPlay={true}
                    videoSrc="https://cache.shipixen.com/features/11-pricing-page-builder.mp4"
                />
            </LandingProductFeaturesGrid>
        </>
    );
}
