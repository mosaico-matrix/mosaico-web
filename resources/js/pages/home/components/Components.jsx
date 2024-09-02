import { LandingProductFeaturesGrid } from '@/components/landing/LandingProductFeaturesGrid';
import { LandingProductVideoFeature } from '@/components/landing/LandingProductVideoFeature';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';

export default function Components()
{
        return (
            <>
                <LandingProductFeaturesGrid
                    title="What you'll need:"
                    containerType="wide"

                    description=""
                >
                    <LandingProductFeature
                        title="Raspberry Pi"
                        description=""
                        imageSrc={'/images/rpi.webp'}
                    />

                    <LandingProductFeature
                        title="Raspberry Pi"
                        description=""
                        imageSrc={'/images/rpi.webp'}
                    />

                    <LandingProductFeature
                        title="Raspberry Pi"
                        description=""
                        imageSrc={'/images/rpi.webp'}
                    />
                </LandingProductFeaturesGrid>
            </>
        );
    }
