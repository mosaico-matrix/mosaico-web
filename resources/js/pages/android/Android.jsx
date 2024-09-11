import { LandingPrimaryTextCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { Button } from '@/components/shared/ui/button';
export default function Android() {
    return (
        <LandingPrimaryTextCtaSection
            title="I love google Play review team!"
            description="I'm still waiting for Google Play to approve the app (has been in review for 7+ days). In the meantime, you can download the APK from here and install it manually.
            Sorry for the inconvenience.">
            <Button size="xl" asChild>
                <a href="/apks/app-release.apk" download>
                    Download APK
                </a>
            </Button>
        </LandingPrimaryTextCtaSection>
    );
}
