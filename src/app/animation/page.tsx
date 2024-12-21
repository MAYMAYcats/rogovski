'use client'; // This tells Next.js to treat this file as a client-side component
import Image from 'next/image';
import '../styles/animation.css';
import Bottom from '@/components/bottom';

const AnimationPage: React.FC =() =>(
    <section id="animation">
        <div className="animationContainer">
            <div className="animation">
                <video autoPlay muted loop className="video">
                    <source src="/animation.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    </section>
);

export default AnimationPage;