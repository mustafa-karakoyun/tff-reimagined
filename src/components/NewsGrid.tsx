import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import newsNationalTeam from "@/assets/news-national-team.jpg";
import newsLeague from "@/assets/news-league.jpg";
import newsYouth from "@/assets/news-youth.jpg";

const NewsGrid = () => {
  const news = [
    {
      image: newsNationalTeam,
      category: "Milli Takım",
      title: "Teknik Direktör: 'Hedefimiz Şampiyonluk'",
      date: "15 Mart 2024",
      excerpt: "A Milli Takım teknik direktörü turnuva öncesi açıklamalarda bulundu"
    },
    {
      image: newsLeague,
      category: "Süper Lig",
      title: "Haftanın En Güzel Golleri",
      date: "14 Mart 2024",
      excerpt: "Süper Lig'de geride bıraktığımız hafta sonu muhteşem goller atıldı"
    },
    {
      image: newsYouth,
      category: "Genç Takımlar",
      title: "Altyapı Akademisi Yeni Yetenekler Yetiştiriyor",
      date: "13 Mart 2024",
      excerpt: "TFF Futbol Akademisi'nden geleceğin yıldızları çıkıyor"
    },
    {
      image: newsNationalTeam,
      category: "Milli Takım",
      title: "Kadro Açıklandı: 25 Futbolcu Kampa Çağrıldı",
      date: "12 Mart 2024",
      excerpt: "Teknik heyet milli maç için kadrosunu belirledi"
    },
    {
      image: newsLeague,
      category: "Süper Lig",
      title: "Şampiyonluk Yarışında Son Durum",
      date: "11 Mart 2024",
      excerpt: "Puan tablosunda heyecan dorukta, her maç kritik önem taşıyor"
    },
    {
      image: newsYouth,
      category: "Kadın Futbolu",
      title: "Kadın Futbolunda Önemli Adımlar",
      date: "10 Mart 2024",
      excerpt: "TFF kadın futbolunun gelişimi için yeni projeler hayata geçiriyor"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Son Haberler</h2>
          <Button variant="ghost" className="hidden md:flex items-center gap-2">
            Tüm Haberler
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <article key={index} className="news-card group cursor-pointer">
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground line-clamp-2">
                  {item.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button className="w-full md:w-auto">
            Tüm Haberleri Gör
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
