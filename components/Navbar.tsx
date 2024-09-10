
import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "@/components/mobile-sidebar";

export default function Navbar() {
    return (
        <>
            <div className="flex items-center p-4">
                <MobileSidebar /> {/* No nesting issues here */}
                <div className="flex w-full justify-end">
                    <UserButton /> {/* Check if UserButton internally uses <button> and avoid wrapping */}
                </div>
            </div>
        </>
    );
}
