'use client';
import Image from 'next/image';
import styles from '../styles/news.module.css';
import {useFetchProjects} from '../fetchProject';
import {useRef} from 'react';

export default function NewsPage() {

    const {loading, projects} = useFetchProjects();
    const wrapperRef = useRef<HTMLDivElement>(null);

    if(loading){
        return (
            <section id="news">
                <h2>Loading...</h2>
            </section>        
        );
    }
    const handlePrevClick = () => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;
        
        const itemWidth = wrapper.children[0].clientWidth;
        const gap = 32;
        const currentScroll = wrapper.scrollLeft; 
        const newPosition = Math.max(currentScroll - (itemWidth + gap), 0);
        
        wrapper.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
    };
      
    const handleNextClick = () => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const itemWidth = Math.ceil(wrapper.children[0].getBoundingClientRect().width);
        const gap = 32;
        const currentScroll = wrapper.scrollLeft; 
        const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
        const newPosition = Math.min(currentScroll + itemWidth + gap, maxScroll);
        
        wrapper.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });

        setTimeout(() => {
        const actualScroll = wrapper.scrollLeft;
        if (actualScroll !== newPosition) {
            wrapper.scrollLeft = newPosition;
        }
        }, 300); 
    };

    return (
        <section id="news">
            <div className="container">
                <div className={styles.contextContainer}>
                    <div className="leftContext">
                        <div className="title">
                            <div className="titleEn">
                                News
                            </div>
                            <div className="titleJp">
                                ニュース
                            </div>
                        </div>
                    </div>
                    <div className={styles.contentsContainer}>
                        <button className={`${styles.navButton} ${styles.prevButton}`} onClick={handlePrevClick}>
                            &lt;
                        </button>
                        
                        <div className={styles.projectsWrapper} ref={wrapperRef}>
                            {projects.map((project) => {
                                const {title, description, id,img} = project;
                                return (
                                    <div className={styles.project} key={id}>
                                        {img && (
                                            <Image className={styles.newsImg}
                                                src={`https:${img}`}
                                                alt={title} 
                                                width={222}
                                                height={240}
                                                
                                            />
                                        )}
                                        <div className={styles.newsContents}>
                                            <div className={styles.newsDate}>
                                                {project.createdAt === project.updatedAt 
                                                    ? `published at: ${new Date(project.createdAt).toLocaleDateString()}`
                                                    : `updated at: ${new Date(project.updatedAt).toLocaleDateString()}`
                                                }
                                            </div>
                                            <h1 className={styles.newsTitle} suppressHydrationWarning>{title}</h1>
                                            <p className={styles.newsDetails} suppressHydrationWarning>{description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <button className={`${styles.navButton} ${styles.nextButton}`} onClick={handleNextClick}>
                            &gt;
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}