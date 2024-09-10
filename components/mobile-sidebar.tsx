"use client";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

export default function MobileSidebar() {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(()=>{
       setIsMounted(true) 
    },[])

    if(!isMounted){
        return null
    }

    return (
        <>
            <Sheet>
                {/* Ensure this Button is not inside another button or clickable component */}
                <SheetTrigger>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu /> {/* Icon is fine, but double-check nesting */}
                    </Button>
                </SheetTrigger>
                <SheetContent side='left' className="p-0">
                    <Sidebar /> {/* Ensure Sidebar doesn't have nested buttons */}
                </SheetContent>
            </Sheet>
        </>
    );
}