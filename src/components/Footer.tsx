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
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-display text-xl font-bold">
                TFF
              </div>
              <div>
                <div className="font-display text-lg font-bold">Türkiye</div>
                <div className="font-display text-sm font-semibold text-white/80">
                  Futbol Federasyonu
                </div>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-4">
              Türk futbolunun resmi yönetim organı
            </p>
            
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-bold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-1">Adres</p>
                <p className="text-white/70">
                  Hasan Doğan Milli Takımlar Kamp ve Eğitim Tesisleri<br />
                  Riva, İstanbul
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-1">Telefon</p>
                <p className="text-white/70">+90 (212) 123 45 67</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-1">E-posta</p>
                <p className="text-white/70">info@tff.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>© 2024 Türkiye Futbol Federasyonu. Tüm hakları saklıdır.</p>
          <div className="flex gap-6">
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
