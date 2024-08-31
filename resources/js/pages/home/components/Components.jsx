import { LandingProductFeaturesGrid } from '@/components/landing/LandingProductFeaturesGrid';
import { LandingProductVideoFeature } from '@/components/landing/LandingProductVideoFeature';

export default function Components()
{
        return (
            <>
                <LandingProductFeaturesGrid
                    title="What you'll need:"
                    containerType="wide"
                    description=""
                >
                    <LandingProductVideoFeature
                        title="Raspberry Pi"
                        description=""
                        autoPlay={true}
                        videoSrc="https://cache.shipixen.com/features/2-generate-content-with-ai.mp4"
                    />

                    <LandingProductVideoFeature
                        title="Matrx Bonnet"
                        description="Choose from more than 30+ themes or create your own. Upload your logo, set the size and we take care of the rest."
                        autoPlay={true}
                        videoSrc="https://cache.shipixen.com/features/3-theme-and-logo.mp4"
                    />

                    <LandingProductVideoFeature
                        title="Led Matrix"
                        description="Use our pricing page builder to create a beautiful pricing page. Choose from different layouts and monthly/yearly pricing options. It's as easy as it looks."
                        autoPlay={true}
                        videoSrc="https://cache.shipixen.com/features/11-pricing-page-builder.mp4"
                    />
                </LandingProductFeaturesGrid>
            </>
        );
    }
