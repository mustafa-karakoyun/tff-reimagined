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
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="fixtures" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="fixtures">Maçlar</TabsTrigger>
            <TabsTrigger value="standings">Puan Durumu</TabsTrigger>
          </TabsList>

          <TabsContent value="fixtures" className="space-y-4">
            {matches.map((match, index) => (
              <div key={index} className="match-card">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-primary">
                    {match.competition}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{match.date} • {match.time}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{match.homeTeam}</span>
                      <span className="text-2xl font-bold">
                        {match.homeScore !== null ? match.homeScore : "-"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{match.awayTeam}</span>
                      <span className="text-2xl font-bold">
                        {match.awayScore !== null ? match.awayScore : "-"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-border">
                  <span className={`text-xs font-semibold ${
                    match.status === "Bitti" ? "text-muted-foreground" : "text-primary"
                  }`}>
                    {match.status}
                  </span>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="standings">
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold">#</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold">Takım</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold">O</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold">G</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold">B</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold">M</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold">P</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standings.map((team) => (
                      <tr key={team.position} className="border-b border-border hover:bg-secondary/50 transition-colors">
                        <td className="px-4 py-3 font-semibold">{team.position}</td>
                        <td className="px-4 py-3 font-semibold">{team.team}</td>
                        <td className="px-4 py-3 text-center">{team.played}</td>
                        <td className="px-4 py-3 text-center">{team.won}</td>
                        <td className="px-4 py-3 text-center">{team.drawn}</td>
                        <td className="px-4 py-3 text-center">{team.lost}</td>
                        <td className="px-4 py-3 text-center font-bold text-primary">{team.points}</td>
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
