import { Button } from '@/components/shared/ui/button';
import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';

export default function Landing() {
    return (
        <LandingPrimaryImageCtaSection
            title="MOSAICO"
            description="A free and open-source platform that allows users and developers to create, share, and display custom widgets on a LED matrix."
            imageSrc="/images/matrix-rainbow.webp"
            imageAlt="LED Matrix"
            imagePerspective="paper"
        >
            <div className="flex flex-col items-start justify-center text-center ">

                <Button size="xl" asChild>
                    <a href="/docs">Get Started</a>
                </Button>

                <div style={{height: '30px'}}></div>

                <div className="text-gray-500">
                    Download the app
                </div>
                <div style={{height: '12px'}}></div>

                <div className="flex flex-row justify-center items-center space-x-4">
                    <a href="https://apps.apple.com/us/app/mosaico-control/id6670337285" target="_blank" rel="noopener noreferrer">
                        <img src="/images/app-store.svg" alt="Download on the App Store" className="h-14"/>
                    </a>
                    <a href="" target="_blank"
                       rel="noopener noreferrer">
                        <img src="/images/google-play.svg" alt="Get it on Google Play" className="h-14"/>
                    </a>
                </div>

            </div>
        </LandingPrimaryImageCtaSection>
    );
}
