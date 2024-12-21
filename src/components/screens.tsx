interface ScreensProps {
    title: string;
    titleJp: string;
    subTitle: string;
    detail: string;
}

export default function Screens(props: ScreensProps){
    return (
        <>
        <div>
            <h1>
                {props.title}
            </h1>
            <h1>
                {props.titleJp}
            </h1>
            <h2>
                {props.subTitle}
            </h2>
            <p>
                {props.detail}
            </p>
        </div>
        </>
    );
}