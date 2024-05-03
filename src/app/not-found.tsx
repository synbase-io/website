import "server-only";

import Image from "next/image";

const Page = () => {
    return (
        <div>
            <h1>404</h1>

            <Image src={"/heart.png"} alt={"Herz"} width={30} height={30} />
        </div>
    );
};

export default Page;
