"use client";

import { Button } from "@/components/ui/button";

export default function BackToTopButton() {
    return (
        <Button
            className="m-2"
            size="sm"
            variant="outline"
            onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
            }
        >
            Back to top
        </Button>
    );
}
