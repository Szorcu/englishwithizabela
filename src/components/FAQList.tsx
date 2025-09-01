import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";

const ITEMS = [
  {
    id: "item-1",
    question: "Ile trwa jedna lekcja?",
    answer: "Standardowo jedna lekcja trwa 60 minut.",
  },
  {
    id: "item-2",
    question: "Ile kosztuje lekcja?",
    answer:
      "Indywidualna lekcja stacjonarnie u mnie lub online kosztuje 100 zł. Cena lekcji w domu ucznia będzie rozpatrywana indywidualnie. Cena lekcji w grupach również będzie rozpatrywana indywidualnie.",
  },
  {
    id: "item-3",
    question: "Jak wyglądają zajęcia?",
    answer:
      "Każde zajęcia są w 100% dostosowane do potrzeb ucznia. Nie miałam jeszcze dwóch identycznych lekcji. Biorę pod uwagę na pierwszym miejscu jaki jest Twój cel i dopiero wtedy ustalamy plan działania. Przygotuję Twoje dziecko do egzaminu ósmoklasisty i egzaminu maturalnego. Możemy także pracować nad brytyjską wymową lub zagadnieniami z gramatyki, których jeszcze nie do końca rozumiesz. Możemy również przełamywać barierę strachu i rozmawiać o ciekawych tematach ze świata technologii, muzyki czy medycyny. To Ty wybierasz o czym chcesz się uczyć. A nawet jak nie masz pomysłu, to ja mam wiele materiałów, z których możemy zaczerpnąć inspirację do konwersacji.",
  },
  {
    id: "item-4",
    question: "Na jakim poziomie muszę być, żeby zacząć lekcje?",
    answer:
      "Uczę dzieci i dorosłych na każdym poziomie zaawansowania. Najważniejsze są chęci, więc obecny poziom Twojej znajomości języka nie ma tak naprawdę dla mnie znaczenia.",
  },
  {
    id: "item-5",
    question: "Czy uczy pani w grupach?",
    answer:
      "Tak, obecnie uczę również małe 2-3 osobowe grupki uczniów. Uczniowie ci zgłosili się do mnie na nauczanie już jako grupa znajomych. Jeżeli masz taką grupkę, to zapraszam do kontaktu.",
  },
  {
    id: "item-6",
    question: "Jak mogę się zapisać na pierwszą lekcję?",
    answer:
      "Po prostu do mnie napisz lub zadzwoń. Wszystkie dane znajdziesz na mojej stronie głównej. Do zobaczenia!",
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
