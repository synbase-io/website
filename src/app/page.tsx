import { ThemeSwitcher } from "@/component/ui/theme-switcher";
import { H1 } from "@/component/ui/typography";

const Page = async () => {
    return (
        <div>
            <h1>Überschrift H1.</h1>
            <H1>Überschrift H1.</H1>
            <ThemeSwitcher />
        </div>
    );
};

export default Page;
