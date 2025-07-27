import { CommonLayout } from "@/components/common-layout"

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <CommonLayout>
            {children}
        </CommonLayout>
    )
}

export default Layout;