import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';
export default function Privacy() {
    const faqItems = [
        {
            question: 'How are downloads from the widgets store handled?',
            answer: "You don't need to create an account to download widgets from the store. You can freely download and use any widget without any tracking. " +
                "To prevent abuse, we may limit the number of downloads per IP address, but that's it—no cookies, no tracking, no ads, no tracking pixels, no analytics, nothing.",
        },
        {
            question: 'What if I want to create and upload a widget?',
            answer: "To create and upload a widget, you will need to create an account on the platform. However, we don’t store any personal information, " +
                "as you can create an account by simply connecting with your GitHub account."
        }
    ];


    return(
        <LandingFaqCollapsibleSection
    title='Privacy?'
    description="The whole mosaico ecosystem is Open Source Software, we don't store any sensitive data at all :)"
    faqItems={faqItems}
    />)
}
