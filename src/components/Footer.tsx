import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Kurumsal": ["Hakkımızda", "Tarihçe", "Yönetim", "Tüzük", "İletişim"],
    "Futbol": ["Milli Takımlar", "Ligler", "Kupalar", "Hakemler", "Teknik Yönetim"],
    "Medya": ["Haberler", "Fotoğraflar", "Videolar", "Basın Bültenleri", "Basın Kartı"],
    "Hizmetler": ["Lisans İşlemleri", "Transfer Sistemi", "Tahkim Kurulu", "Disiplin Kurulu", "Statüler"]
  };

  return (
    <footer className="bg-tff-gray-dark text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
          {/* Logo and Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-display text-lg font-bold">
                TFF
              </div>
              <div>
                <div className="font-display text-sm font-bold">Türkiye</div>
                <div className="font-display text-xs font-semibold text-white/80">
                  Futbol Federasyonu
                </div>
              </div>
            </div>
            <p className="text-xs text-white/70 mb-3">
              Türk futbolunun resmi yönetim organı
            </p>
            
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-bold mb-3 text-sm">{title}</h4>
              <ul className="space-y-1.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-white/70 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-0.5">Adres</p>
                <p className="text-white/70">
                  Hasan Doğan Milli Takımlar Kamp ve Eğitim Tesisleri<br />
                  Riva, İstanbul
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-0.5">Telefon</p>
                <p className="text-white/70">+90 (212) 123 45 67</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-0.5">E-posta</p>
                <p className="text-white/70">info@tff.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/70">
          <p>© 2024 Türkiye Futbol Federasyonu. Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Koşulları</a>
            <a href="#" className="hover:text-white transition-colors">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
