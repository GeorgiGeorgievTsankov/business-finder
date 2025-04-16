"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, MapPin, Search, Code, Globe, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              BusinessFinder
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Открийте локални бизнеси без уебсайт и превърнете ги във ваши клиенти
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Search className="w-5 h-5" />
                Започнете Търсене
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Globe className="w-5 h-5" />
                Научете Повече
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Как работи BusinessFinder?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <Search className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Умно Търсене</h3>
              <p className="text-muted-foreground">
                Използваме SerpAPI и Google Maps за откриване на бизнеси без онлайн присъствие
              </p>
            </Card>
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <Building2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Локален Фокус</h3>
              <p className="text-muted-foreground">
                Концентрирайте се върху бизнеси във вашия град или регион
              </p>
            </Card>
            <Card className="p-6 bg-card hover:shadow-lg transition-shadow">
              <Code className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Готови за Развитие</h3>
              <p className="text-muted-foreground">
                Идентифицирайте потенциални клиенти, нуждаещи се от уеб разработка
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">1000+</h3>
              <p className="text-muted-foreground">Открити Бизнеса</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">София</h3>
              <p className="text-muted-foreground">Основен Фокус</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">95%</h3>
              <p className="text-muted-foreground">Успеваемост</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готови ли сте да развиете вашия бизнес?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Започнете да откривате потенциални клиенти още днес
          </p>
          <Button size="lg" variant="secondary" className="gap-2">
            <TrendingUp className="w-5 h-5" />
            Регистрирайте се Безплатно
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 BusinessFinder. Всички права запазени.</p>
        </div>
      </footer>
    </div>
  );
}