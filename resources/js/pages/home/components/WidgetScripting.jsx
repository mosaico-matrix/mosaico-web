import { LandingProductFeature } from '@/components/landing/LandingProductFeature';

export default function WidgetScripting()
{
    return (

    <LandingProductFeature
        imagePerspective="left"
        title="Write and publish your own widgets"
        variant="secondary"
        backgroundGlowVariant="secondary"
        description="With python you will feel right at home.
        Write your own widgets to dynamically display content on your LED matrix and share them with the community on the Mosaico App Store.
        "
        imageSrc="/images/widget-script.png"
        imageAlt="Widget Scripting"
    />
    )
}
