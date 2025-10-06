import { Globe } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-9 text-xs">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity font-semibold">
              TFF.ORG
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity font-semibold">
              UEFA.COM
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity font-semibold">
              FIFA.COM
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5" />
            <select className="bg-transparent border-none outline-none cursor-pointer hover:opacity-80 transition-opacity text-xs font-semibold">
              <option value="tr">Türkçe</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
