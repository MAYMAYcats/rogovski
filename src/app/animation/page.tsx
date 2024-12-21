'use client'; // This tells Next.js to treat this file as a client-side component
import '../styles/animation.css';

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