import { Calendar } from "lucide-react";
import newsNationalTeam from "@/assets/news-national-team.jpg";
import newsLeague from "@/assets/news-league.jpg";
import newsYouth from "@/assets/news-youth.jpg";

const NewsGridCompact = () => {
  const news = [
    {
      image: newsNationalTeam,
      category: "Milli Takım",
      title: "Teknik Direktör: 'Hedefimiz Şampiyonluk'",
      date: "15 Mart 2024",
      excerpt: "A Milli Takım teknik direktörü turnuva öncesi açıklamalarda bulundu ve hedeflerini paylaştı."
    },
    {
      image: newsLeague,
      category: "Süper Lig",
      title: "Haftanın En Güzel Golleri",
      date: "14 Mart 2024",
      excerpt: "Süper Lig'de geride bıraktığımız hafta sonu muhteşem goller atıldı."
    },
    {
      image: newsYouth,
      category: "Genç Takımlar",
      title: "Altyapı Akademisi Yeni Yetenekler Yetiştiriyor",
      date: "13 Mart 2024",
      excerpt: "TFF Futbol Akademisi'nden geleceğin yıldızları çıkıyor."
    },
    {
      image: newsNationalTeam,
      category: "Milli Takım",
      title: "Kadro Açıklandı: 25 Futbolcu Kampa Çağrıldı",
      date: "12 Mart 2024",
      excerpt: "Teknik heyet milli maç için kadrosunu belirledi."
    },
    {
      image: newsLeague,
      category: "Süper Lig",
      title: "Şampiyonluk Yarışında Son Durum",
      date: "11 Mart 2024",
      excerpt: "Puan tablosunda heyecan dorukta, her maç kritik önem taşıyor."
    },
    {
      image: newsYouth,
      category: "Kadın Futbolu",
      title: "Kadın Futbolunda Önemli Adımlar",
      date: "10 Mart 2024",
      excerpt: "TFF kadın futbolunun gelişimi için yeni projeler hayata geçiriyor."
    },
    {
      image: newsNationalTeam,
      category: "Haberler",
      title: "UEFA Başkanı TFF'yi Ziyaret Etti",
      date: "9 Mart 2024",
      excerpt: "Önemli görüşmeler gerçekleştirildi."
    },
    {
      image: newsLeague,
      category: "Süper Lig",
      title: "Futbolcular Sağlık Kontrolünden Geçti",
      date: "8 Mart 2024",
      excerpt: "Sezon ortası sağlık kontrolleri tamamlandı."
    }
  ];

  return (
    <section className="py-6 bg-background">
      <div className="space-y-0">
        {news.map((item, index) => (
          <article key={index} className="news-card-compact group cursor-pointer flex gap-3 py-3">
            <div className="relative overflow-hidden w-28 h-20 flex-shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="hero-badge">
                  {item.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>{item.date}</span>
                </div>
              </div>
              
              <h3 className="font-display text-sm font-bold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                {item.title}
              </h3>
              
              <p className="text-xs text-muted-foreground line-clamp-2">
                {item.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <a href="#" className="text-sm text-primary hover:underline font-semibold">
          Tüm Haberler için tıklayınız →
        </a>
      </div>
    </section>
  );
};

export default NewsGridCompact;
