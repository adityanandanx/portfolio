import { FC } from "react";
import Talk from "../talk";

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <section className="w-full h-full min-h-screen p-5 md:p-10 max-w-screen-md mx-auto">
                {children}
            </section>
            <Talk />
        </>
    );
};

export default Layout;
