import { Heart } from "@/component/icon/heart";
import { Small } from "@/component/ui/typography";

const Page = async () => {
    return (
        <Small className="mt-16 text-center font-semibold">
            Back soon
            <Heart className="ml-1 h-6 w-6" />
        </Small>
    );
};

export default Page;
