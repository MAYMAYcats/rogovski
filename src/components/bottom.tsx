import Image from 'next/image';
import styles from '../app/styles/bottom.module.css'; 


export default function Bottom() {
    const onermants = Array(20).fill("/onermant.png"); // 20 images

    return (
        <div className={styles.imageRow}>
        {onermants.map((src, index) => (
            <div key={index} className={styles.imageContainer}>
            <Image src={src} 
                alt={`image ${index}`} 
                width={241} 
                height={161}
                 />
            </div>
        ))}
        </div>
    );
}