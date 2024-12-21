'use client'; // This tells Next.js to treat this file as a client-side component
import Image from 'next/image';
import '../styles/test.css';

import Bottom from '@/components/bottom';
import Header from '@/components/header';

const TestPage: React.FC =() =>(
    <section id="test">
      <Header />
      <div className="testBox">
        <h1> This is aaaaaaaa Test ! </h1>
      </div>
      </section>
)

export default TestPage;