import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const competencies = [
    {
      icon: "Bed",
      title: "Профессиональный сон",
      description: "Могу спать 12+ часов в сутки. Эксперт по откладыванию будильника"
    },
    {
      icon: "Car",
      title: "Автомобильные мечты",
      description: "Porsche 911 GT3 RS - единственная вещь, которая меня реально заводит"
    },
    {
      icon: "Coffee",
      title: "Потребление контента",
      description: "YouTube, сериалы, соцсети. Могу смотреть 8 часов подряд без перерыва"
    },
    {
      icon: "Gamepad2",
      title: "Прокрастинация про-лвл",
      description: "Мастер откладывания дел на потом. Моя мантра: 'завтра обязательно'"
    }
  ];

  const achievements = [
    "Проспал всю пандемию и почти не заметил",
    "Умею найти оправдание любому ничегонеделанию",
    "Могу 3 дня подряд смотреть сериалы",
    "Настоящий эксперт по доставкам еды на дом"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[800px] w-[800px] rounded-full bg-accent/5 blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 bg-accent/10 font-roboto">
                  ПРОФЕССИОНАЛ ПО ЖИЗНИ
                </Badge>
                <h1 className="text-6xl lg:text-7xl font-black font-orbitron bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
                  НИХУЯ
                  <br />
                  НЕ ДЕЛАю
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>
              
              <p className="text-xl text-muted-foreground font-roboto leading-relaxed">
                Профессиональный расслабон и эксперт по ничегонеделанию. 
                Моя жизненная философия: зачем делать что-то сейчас, если можно отложить на потом? 
                Люблю машины, не люблю обязательства.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-roboto font-semibold px-8 py-6 text-lg">
      Написать о жизни
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="font-roboto font-semibold px-8 py-6 text-lg border-2">
                  Посмотреть мои мемы
                  <Icon name="Download" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 p-1">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-background to-muted flex items-center justify-center">
                  <img 
                    src="/img/cc3d8aa7-7821-4c2f-94e1-0eaa3eb978fd.jpg" 
                    alt="Porsche 911 GT3 RS - моя мечта и смысл жизни" 
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center animate-pulse">
                <Icon name="Shield" size={32} className="text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-orbitron text-foreground mb-4">
              МОИ СУПЕРСПОСОБНОСТИ
            </h2>
            <div className="h-1 w-16 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {competencies.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon name={item.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-orbitron text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-roboto leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 px-6 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-orbitron text-foreground mb-4">
              МОИ ЖИЗНЕННЫЕ ДОСТИЖЕНИЯ
            </h2>
            <div className="h-1 w-16 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-card rounded-xl border-2 hover:border-accent/50 transition-all duration-300">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={24} className="text-accent" />
                </div>
                <p className="font-roboto font-medium text-foreground">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold font-orbitron text-foreground mb-4">
              КОНТАКТНАЯ ИНФОРМАЦИЯ
            </h2>
            <div className="h-1 w-16 bg-accent mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name="Mail" size={32} className="text-primary" />
                </div>
                <h3 className="font-orbitron font-bold text-foreground">Email</h3>
                <p className="font-roboto text-muted-foreground">nichegonedelayu@mail.ru</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <h3 className="font-orbitron font-bold text-foreground">Телефон</h3>
                <p className="font-roboto text-muted-foreground">+7 (495) 000-00-00</p>
              </CardContent>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <h3 className="font-orbitron font-bold text-foreground">Адрес</h3>
                <p className="font-roboto text-muted-foreground">В кровати или на диване</p>
              </CardContent>
            </Card>
          </div>
          
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-roboto font-semibold px-12 py-6 text-lg">
            Поучить ничегонеделанию
            <Icon name="Calendar" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/5 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Icon name="Shield" size={32} className="text-primary" />
            <h3 className="text-2xl font-bold font-orbitron text-foreground">
              НИЧЕГО & ПОРШЕ
            </h3>
          </div>
          <p className="text-muted-foreground font-roboto mb-6">
            Просто живу и мечтаю о Porsche 911 GT3 RS
          </p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="sm" className="hover:text-primary">
              <Icon name="Linkedin" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary">
              <Icon name="Twitter" size={20} />
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary">
              <Icon name="Github" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}