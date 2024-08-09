import { Heart } from "@/components/icon/heart";
import { Small } from "@/components/ui/typography";

const Page = async () => {
    //const hello = await api.funnyPhrase.hello({ text: "vom Server" });

    // void api.post.getLatest.prefetch();

    return (
        <Small className="mt-16 text-center font-semibold">
            Back soon
            <Heart className="ml-1 h-6 w-6" />
        </Small>
    );
};

export default Page;
