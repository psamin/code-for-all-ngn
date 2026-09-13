import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CodeHeading } from "@/components/CodeHeading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User } from "lucide-react";
import teamPraneethS from "@/assets/team-praneeth-s.jpeg";
import teamSoumith from "@/assets/team-soumith.png";
import teamPratik from "@/assets/team-pratik.png";
import teamAnith from "@/assets/team-anith.png";

const Team = () => {
  const officers = [
    {
      name: "Praneeth S.",
      role: "Founder/Owner",
      bio: "Georgia Tech CS and Math student overseeing nonprofit operations, partnerships, and curriculum strategy to expand computing education access.",
      photo: teamPraneethS
    },
    {
      name: "Soumith Kondamadugula",
      role: "CEO",
      bio: "Leading the organization's vision and strategy to bring computer science education to more students.",
      photo: teamSoumith
    },
    {
      name: "Pratik Mondal",
      role: "CTO",
      bio: "Overseeing our technology and technical programs to give students hands-on experience with real tools.",
      photo: teamPratik
    },
    {
      name: "Anith Sascydharan",
      role: "COO",
      bio: "Managing day-to-day operations and program execution to maximize impact.",
      photo: teamAnith
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <CodeHeading prefix="//">Our Team</CodeHeading>
            <p className="text-xl text-muted-foreground">
              Meet the passionate leaders driving our mission to democratize computer science education
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {officers.map((officer, index) => (
                <Card 
                  key={index} 
                  className="border-border hover:border-primary transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                >
                  <CardHeader>
                    <div className="w-full aspect-square bg-card/50 rounded-lg mb-4 flex items-center justify-center border border-border overflow-hidden">
                      {officer.photo ? (
                        <img 
                          src={officer.photo} 
                          alt={officer.name}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <User className="w-24 h-24 text-muted-foreground" />
                      )}
                    </div>
                    <CardTitle className="font-mono text-xl">{officer.name}</CardTitle>
                    <CardDescription className="font-mono text-primary">{officer.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{officer.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-mono text-2xl font-bold">
              <span className="text-primary">{'>'}</span> Want to Join Our Team?
            </h2>
            <p className="text-muted-foreground">
              We're always looking for passionate individuals who want to make a difference in computer science education. 
              Reach out to learn about volunteer and leadership opportunities.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
