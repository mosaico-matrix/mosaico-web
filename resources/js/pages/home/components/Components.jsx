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
                        description="Zero W, 3 or 4"
                        imageSrc={'/images/rpi.webp'}
                    />

                    <LandingProductFeature
                        title="Matrix Bonnet"
                        description="Or manual wiring if you're feeling brave"
                        imageSrc={'/images/bonnet.png'}
                    />

                    <LandingProductFeature
                        title="LED Matrix"
                        description="Any 64x64 is good, search on AliExpress or Amazon"
                        imageSrc={'/images/matrix.png'}
                    />
                </LandingProductFeaturesGrid>
            </>
        );
    }
