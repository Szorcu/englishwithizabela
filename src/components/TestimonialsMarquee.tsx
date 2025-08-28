import { Marquee } from "@/components/ui/Marquee";
import { TestimonialCard } from "./TestimonialCard";

const TESTIMONIALS = [
  {
    name: "Kinga",
    content:
      "Izabela jest wspaniałą osobą która ma podejście do każdego, chodzę do niej ponad rok i nie zamierzam przestać ;) polecam z całego serca ❤️ jeśli ktoś chce się nauczyć angielskiego, przygotować do egzaminu czy poprostu „podtrzymać” język angielski to nie ma lepszego wyboru ❤️",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Rafał",
    content:
      "Gorąco polecam korepetycje u Izabeli 🙂. Każda lekcja jest prowadzona w miłej atmosferze i zależnie od potrzeb - można trzymać się sztywno tematu lub od niego odbiegać aby nauczyć się dodatkowego słownictwa. Na lekcjach nie tylko uczyłem się angielskiego ale także podejścia do osób z zagranicy czy ogólnie do języka obcego. Pozwala to przełamać barierę i operować językiem bez większych przeszkód czy obaw że popełnię błąd. 5/5",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Laura",
    content:
      "Serdecznie polecam! Zajęcia są świetną możliwością nie tylko do zrozumienia angielskiej gramatyki, ale również do przełamania bariery językowej. Pani Izabela jest wspaniałą kobietą z ogromnym doświadczeniem oraz bardzo profesjonalnym podejściem do ucznia. Zajęcia odbywają się w bardzo przyjemnej atmosferze! :))",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Basia",
    content:
      "Iza jest najlepsza 👍 motywuje, uczy według potrzeb kursanta i jest wymagająca! Lekcje z nią to czysta przyjemność 😊",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Ignacy",
    content:
      "Serdecznie polecam panią Izabelę. Uczy według potrzeb ucznia, motywuje i wymaga.",
    img: "https://avatar.vercel.sh/jenny",
  },
];

export function TestimonialsMarquee() {
  const firstRow = TESTIMONIALS.slice(0, TESTIMONIALS.length / 2);
  const secondRow = TESTIMONIALS.slice(TESTIMONIALS.length / 2);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee>
        {firstRow.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            img={testimonial.img}
            name={testimonial.name}
            content={testimonial.content}
          />
        ))}
      </Marquee>
      <Marquee reverse>
        {secondRow.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            img={testimonial.img}
            name={testimonial.name}
            content={testimonial.content}
          />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
