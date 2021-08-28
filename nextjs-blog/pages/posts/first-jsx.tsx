import Link from 'next/link'
import Image from 'next/image'
import {Head} from "next/document";

const FirstJSX = () => {
    // To add attributes like className, target, rel, etc.
    // add them to the <a> tag, not to the <Link> tag.
    // see https://github.com/vercel/next-learn-starter/blob/master/snippets/link-classname-example.js
    // https://nextjs.org/docs/api-reference/next/link
    return (
        <>
            <HeadMeta/>
            <h1>First Post</h1>
            <WithRoute/>
            <YourImage/>
        </>
    );
};

const WithRoute = () => {
    return (
        <>
            <h2 className="title">
                <Link href="/posts/first-post">
                    <a>this page!</a>
                </Link>
            </h2>
            <h2>
                <Link href="/">
                    Back to home
                </Link>
            </h2>
        </>
    );
}

const YourImage = () => (
    <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
    />
)

const HeadMeta = () => {
    return (
        <Head>
            <title>First Post</title>
        </Head>
    )
}

export default FirstJSX;
