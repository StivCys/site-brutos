import { useState } from "react";
import { Button } from "@/components/ui/button";

const ShowsSection = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Sample events data
  const events = [
    { date: 15, title: "Rock Festival SP", venue: "Arena Anhembi", city: "São Paulo" },
    { date: 22, title: "Fire Show", venue: "Espaço das Américas", city: "São Paulo" },
    { date: 28, title: "Summer Rock", venue: "Marina da Gloria", city: "Rio de Janeiro" }
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const changeMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const hasEvent = events.some(event => event.date === day);
      days.push(
        <div
          key={day}
          className={`h-12 flex items-center justify-center text-sm cursor-pointer transition-all duration-200 rounded-md
            ${hasEvent 
              ? 'bg-primary text-primary-foreground font-bold animate-pulse-glow' 
              : 'hover:bg-muted'
            }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  return (
    <section id="shows" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-glow">
          Próximos Shows
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Calendar */}
          <div className="card-neon p-6">
            <div className="flex items-center justify-between mb-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => changeMonth('prev')}
                className="border-primary/20 hover:border-primary"
              >
                ←
              </Button>
              
              <h3 className="text-xl font-semibold">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h3>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => changeMonth('next')}
                className="border-primary/20 hover:border-primary"
              >
                →
              </Button>
            </div>

            {/* Week days header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map(day => (
                <div key={day} className="h-8 flex items-center justify-center text-xs font-medium text-muted-foreground">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {renderCalendar()}
            </div>

            <div className="mt-4 text-xs text-muted-foreground flex items-center">
              <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
              Dias com shows
            </div>
          </div>

          {/* Events list */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Agenda Confirmada</h3>
            
            {events.map((event, index) => (
              <div key={index} className="card-neon p-4 hover:border-primary/40 transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-lg text-foreground mb-1">
                      {event.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-1">
                      {event.venue}
                    </p>
                    <p className="text-primary text-sm font-medium">
                      {event.city}
                    </p>
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {event.date}
                  </div>
                </div>
              </div>
            ))}

            <div className="text-center pt-6">
              <Button className="btn-neon">
                Ver Todos os Shows
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowsSection;