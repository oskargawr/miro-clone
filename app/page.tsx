import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="">
        this is a screen for authenticated users only
      </div>
      <div>
        <UserButton></UserButton>
      </div>
    </div>
  );
}
