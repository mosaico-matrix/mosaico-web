import { Button } from '@/components/shared/ui/button';
import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
export default function Heading() {
    return (
        <LandingPrimaryImageCtaSection
            title="MOSAICO"
            description="A free and open-source platform that allows users and developers to create, share, and display custom widgets on a LED matrix."
            imageSrc="/images/matrix-rainbow.webp"
            imageAlt="LED Matrix"
            imagePerspective="paper"
        >
            <Button size="xl" asChild>
                <a href="/docs">Get Started</a>
            </Button>
        </LandingPrimaryImageCtaSection>
    );
}
