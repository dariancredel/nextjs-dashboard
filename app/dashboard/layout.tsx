// layout (kinda like a page container) for each route
// layout files represent the UI for a route/page that can be shared between several routes/pages
// since it is the base structure for the pages of the current and other segments it relies on partial re-rendering by maintaining React sate (an avoid unnecessary re-rendering)
// other concepts: nested layouts, colocation, root layout

import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children, }: { children: React.ReactNode; }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}