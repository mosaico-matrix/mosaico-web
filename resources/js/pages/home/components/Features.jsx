import {LandingFeatureList} from '@/components/landing/feature/LandingFeatureList';
import {
    CodeIcon,
    GithubIcon, GlobeIcon, GripIcon,
    LayersIcon,
    LineChartIcon, SmartphoneIcon,
    SparklesIcon,
    ThumbsUpIcon,
    ZapIcon,
} from 'lucide-react';

export default function Features() {
    const featureItems = [
        {
            title: 'Software',
            url: 'https://github.com/mosaico-matrix/mosaico-software',
            description:
                'The code that runs on the Pi and drives the LED matrix. ' +
                'Written in C++ and Python it manages the connection to the mobile app, the database of the installed widgets,' +
                ' the rendering of the widgets and the communication with the LED matrix.',
            icon: <SparklesIcon/>,
        },
        {
            title: 'Mobile App',
            url: 'https://github.com/mosaico-matrix/mosaico-client',
            description:
                'The end user interface to the Mosaico ecosystem. ' +
                'Written in Dart with Flutter it allows the user to browse the app store, install widgets, ' +
                'configure them, create slideshows and manage the connection to the LED matrix.',
            icon: <SmartphoneIcon/>,
        },
        {
            title: 'IDE',
            url: 'https://github.com/mosaico-matrix/mosaico-ide',
            description:
                'A small, dummy app that allows new developers to write and test their widgets while previewing them on the LED matrix. ' +
                'Written in Dart with Flutter it provides a simple interface to write and test widgets.',
            icon: <CodeIcon/>,
        },
        {
            title: 'Website + App Store',
            url: 'https://github.com/mosaico-matrix/mosaico-web',
            description:
                'The web stack that powers the Mosaico website and the app store. ' +
                'Written in Laravel and React it allows developers to submit their widgets and the mobile app to browse and install them.',
            icon: <GlobeIcon/>,
        },
        {
            title: 'Matrix Simulator',
            url: 'https://github.com/mosaico-matrix/mosaico-software',
            description:
                'A small, dummy app that allows new developers to write and test their widgets while previewing them on the LED matrix. ' +
                'Written in Dart with Flutter it provides a simple interface to write and test widgets.',
            icon: <GripIcon/>,
        }
    ]

    return (
        <LandingFeatureList
            withBackgroundGlow
            backgroundGlowVariant="primary"
            variant="primary"
            title={"The mosaico ecosystem"}
            description={
                ''
            }
            featureItems={featureItems}
        />);
}
