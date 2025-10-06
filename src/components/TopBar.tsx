import { Globe } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-tff-gray-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-10 text-sm">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-tff-gold transition-colors">
              TFF.ORG
            </a>
            <a href="#" className="hover:text-tff-gold transition-colors">
              UEFA.COM
            </a>
            <a href="#" className="hover:text-tff-gold transition-colors">
              FIFA.COM
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <select className="bg-transparent border-none outline-none cursor-pointer hover:text-tff-gold transition-colors">
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
