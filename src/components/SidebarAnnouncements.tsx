import { FileText, Download } from "lucide-react";

const SidebarAnnouncements = () => {
  const announcements = [
    {
      title: "TamSaha Dergisi - Mart 2024",
      type: "Dergi",
      icon: FileText
    },
    {
      title: "Hakem Semineri Duyurusu",
      type: "Duyuru",
      icon: FileText
    },
    {
      title: "Lisans İşlemleri Takvimi",
      type: "Doküman",
      icon: Download
    },
    {
      title: "Transfer Dönemi Bilgilendirmesi",
      type: "Duyuru",
      icon: FileText
    }
  ];

  const documents = [
    "TFF Tüzüğü 2024",
    "Statü ve Talimatlar",
    "Disiplin Kurulu Kararları",
    "Tahkim Kurulu Bildirisi"
  ];

  return (
    <div className="space-y-4">
      {/* Announcements */}
      <div className="sidebar-section">
        <h3 className="font-display font-bold text-sm mb-3 text-foreground border-b border-border pb-2">
          Duyurular
        </h3>
        <div className="space-y-3">
          {announcements.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-start gap-2 hover:text-primary transition-colors group"
            >
              <item.icon className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold group-hover:underline line-clamp-2">
                  {item.title}
                </p>
                <p className="text-xs text-muted-foreground">{item.type}</p>
              </div>
            </a>
          ))}
        </div>
        <a href="#" className="text-xs text-primary hover:underline font-semibold mt-3 inline-block">
          Tüm Duyurular →
        </a>
      </div>

      {/* Documents */}
      <div className="sidebar-section">
        <h3 className="font-display font-bold text-sm mb-3 text-foreground border-b border-border pb-2">
          Dokümanlar
        </h3>
        <div className="space-y-2">
          {documents.map((doc, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center gap-2 text-xs hover:text-primary transition-colors"
            >
              <Download className="w-3 h-3 text-primary" />
              <span className="hover:underline">{doc}</span>
            </a>
          ))}
        </div>
        <a href="#" className="text-xs text-primary hover:underline font-semibold mt-3 inline-block">
          Bilgi Bankası →
        </a>
      </div>

      {/* TamSaha Magazine */}
      <div className="sidebar-section">
        <h3 className="font-display font-bold text-sm mb-3 text-foreground border-b border-border pb-2">
          TamSaha Dergisi
        </h3>
        <div className="bg-card border border-border p-3">
          <div className="bg-primary/10 aspect-[3/4] flex items-center justify-center mb-2">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">TFF</div>
              <div className="text-xs text-muted-foreground mt-1">Mart 2024</div>
            </div>
          </div>
          <p className="text-xs font-semibold mb-2">TamSaha - Sayı 120</p>
          <a href="#" className="text-xs text-primary hover:underline font-semibold">
            Okumak için tıklayınız →
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidebarAnnouncements;
