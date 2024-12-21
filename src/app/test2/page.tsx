'use client'; // This tells Next.js to treat this file as a client-side component
import Image from 'next/image';
import '../styles/test2.css';

import Bottom from '@/components/bottom';
import Header from '@/components/header';

const TestPage2: React.FC =() =>(
    <section id="test2">
      <Header />
      <div className="testBox2">
        <h1> This is aaaaaaaa Test2 222222! </h1>
      </div>
      </section>
)

export default TestPage2;