import { Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MatchSection = () => {
  const matches = [
    {
      competition: "Süper Lig",
      homeTeam: "Galatasaray",
      awayTeam: "Fenerbahçe",
      homeScore: 2,
      awayScore: 1,
      date: "15 Mart 2024",
      time: "19:00",
      status: "Bitti"
    },
    {
      competition: "Süper Lig",
      homeTeam: "Beşiktaş",
      awayTeam: "Trabzonspor",
      homeScore: null,
      awayScore: null,
      date: "16 Mart 2024",
      time: "20:00",
      status: "Yaklaşan"
    },
    {
      competition: "Türkiye Kupası",
      homeTeam: "Antalyaspor",
      awayTeam: "Sivasspor",
      homeScore: 1,
      awayScore: 1,
      date: "14 Mart 2024",
      time: "18:00",
      status: "Bitti"
    }
  ];

  const standings = [
    { position: 1, team: "Galatasaray", played: 28, won: 22, drawn: 4, lost: 2, points: 70 },
    { position: 2, team: "Fenerbahçe", played: 28, won: 21, drawn: 5, lost: 2, points: 68 },
    { position: 3, team: "Beşiktaş", played: 28, won: 18, drawn: 6, lost: 4, points: 60 },
    { position: 4, team: "Trabzonspor", played: 28, won: 16, drawn: 7, lost: 5, points: 55 },
    { position: 5, team: "Başakşehir", played: 28, won: 14, drawn: 8, lost: 6, points: 50 }
  ];

  return (
    <section className="py-6 bg-background">
      <div className="space-y-4">
        <h2 className="font-display text-lg font-bold border-b-2 border-primary pb-2">
          Maçlar ve Puan Durumu
        </h2>
        <Tabs defaultValue="fixtures" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="fixtures" className="text-xs">Maçlar</TabsTrigger>
            <TabsTrigger value="standings" className="text-xs">Puan Durumu</TabsTrigger>
          </TabsList>

          <TabsContent value="fixtures" className="space-y-2">
            {matches.map((match, index) => (
              <div key={index} className="match-card">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-primary">
                    {match.competition}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{match.date}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">{match.homeTeam}</span>
                    <span className="text-xl font-bold">
                      {match.homeScore !== null ? match.homeScore : "-"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">{match.awayTeam}</span>
                    <span className="text-xl font-bold">
                      {match.awayScore !== null ? match.awayScore : "-"}
                    </span>
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t border-border flex items-center justify-between">
                  <span className={`text-xs font-semibold ${
                    match.status === "Bitti" ? "text-muted-foreground" : "text-primary"
                  }`}>
                    {match.status}
                  </span>
                  <span className="text-xs text-muted-foreground">{match.time}</span>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="standings">
            <div className="bg-card border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-2 py-2 text-left font-semibold">#</th>
                      <th className="px-2 py-2 text-left font-semibold">Takım</th>
                      <th className="px-2 py-2 text-center font-semibold">O</th>
                      <th className="px-2 py-2 text-center font-semibold">G</th>
                      <th className="px-2 py-2 text-center font-semibold">B</th>
                      <th className="px-2 py-2 text-center font-semibold">M</th>
                      <th className="px-2 py-2 text-center font-semibold">P</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standings.map((team) => (
                      <tr key={team.position} className="border-b border-border hover:bg-muted/30 transition-colors">
                        <td className="px-2 py-2 font-semibold">{team.position}</td>
                        <td className="px-2 py-2 font-semibold">{team.team}</td>
                        <td className="px-2 py-2 text-center">{team.played}</td>
                        <td className="px-2 py-2 text-center">{team.won}</td>
                        <td className="px-2 py-2 text-center">{team.drawn}</td>
                        <td className="px-2 py-2 text-center">{team.lost}</td>
                        <td className="px-2 py-2 text-center font-bold text-primary">{team.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MatchSection;
