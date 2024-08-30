import { LandingMarquee } from '@/components/landing/LandingMarquee';
import {LandingAvatar} from '@/components/landing/social-proof/LandingAvatar';

export default function Credits() {
    return (

        <LandingMarquee>
            <div className="flex gap-8 px-4">
                {[
                    {
                        imageSrc: '/static/images/people/1.webp',
                        name: 'John Doe',
                    },
                    {
                        imageSrc: '/static/images/people/2.webp',
                        name: 'Jane Doe',
                    },
                    {
                        imageSrc: '/static/images/people/3.webp',
                        name: 'Alice Doe',
                    },
                    {
                        imageSrc: '/static/images/people/4.webp',
                        name: 'Bob Doe',
                    },
                    {
                        imageSrc: '/static/images/people/5.webp',
                        name: 'Eve Doe',
                    }
                ].map((person, index) => (
                    <LandingAvatar size="large" key={index} imageSrc={person.imageSrc} name={person.name} />
                ))}
            </div>
        </LandingMarquee>
    );
}
