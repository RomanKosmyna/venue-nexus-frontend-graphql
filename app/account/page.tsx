import UserAccountSettings from "@/src/components/User/UserAccountDetails/UserAccountDetails/UserAccountDetails";

import "../../src/styles/page.scss";

const Page = () => {
    return (
        <main className={"page"}>
            <div className={"content-wrapper"}>
                <UserAccountSettings/>
            </div>
        </main>
    );
};

export default Page;