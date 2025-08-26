import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";

const ITEMS = [
  {
    id: "item-1",
    question: "Jak wyglądają zajęcia?",
    answer:
      "Zajęcia odbywają się online przez komunikator (np. Zoom, Google Meet). Lekcje są indywidualne, dostosowane do Twojego poziomu i celów.",
  },
  {
    id: "item-2",
    question: "Czy muszę kupować dodatkowe materiały?",
    answer:
      "Nie, wszystkie potrzebne materiały do nauki otrzymasz ode mnie w cenie zajęć.",
  },
  {
    id: "item-3",
    question: "Jak mogę zapisać się na pierwszą lekcję?",
    answer:
      "Wystarczy wypełnić formularz kontaktowy na stronie lub napisać bezpośrednio na maila/Instagram.",
  },
  {
    id: "item-4",
    question: "Ile trwa jedna lekcja?",
    answer:
      "Standardowa lekcja trwa 60 minut, ale istnieje możliwość ustalenia krótszych lub dłuższych sesji w zależności od Twoich potrzeb.",
  },
  {
    id: "item-5",
    question: "Czy przygotowujesz do egzaminów językowych?",
    answer:
      "Tak, pomagam w przygotowaniach do IELTS, TOEFL, egzaminów Cambridge oraz matury rozszerzonej.",
  },
  {
    id: "item-6",
    question: "Czy mogę odwołać lekcję?",
    answer:
      "Tak, wystarczy poinformować mnie minimum 24h przed zajęciami, wtedy ustalimy nowy termin.",
  },
  {
    id: "item-7",
    question: "Na jakim poziomie muszę być, żeby zacząć?",
    answer:
      "Nie ma to znaczenia – pracuję z uczniami od poziomu podstawowego (A1) aż po zaawansowany (C1/C2).",
  },
];

export const FAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {ITEMS.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
