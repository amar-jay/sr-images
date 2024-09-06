import FileDropdown from "@/components/file-dropdown";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <FileDropdown/>
      <a href="/sr">
      <Button 
        className="mt-8 flex-grow w-full"
      >
        Increase Image Quality 
        </Button>
        </a>

    </main>
  );
}
