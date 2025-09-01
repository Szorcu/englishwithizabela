import { Quote } from "lucide-react";

interface TestimonialCardProps {
  img: string;
  name: string;
  content: string;
}

export const TestimonialCard = ({
  img,
  name,
  content,
}: TestimonialCardProps) => (
  <figure className="relative flex flex-col gap-6 h-full w-sm overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]">
    <div className="flex flex-col gap-3">
      <Quote className="text-red-600" size={32} strokeWidth="1" />
      <blockquote className=" text-sm">{content}</blockquote>
    </div>

    <div className="flex flex-row items-center gap-2 mt-auto">
      <img className="rounded-full" width="32" height="32" alt="" src={img} />
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium dark:text-white">
          {name}
        </figcaption>
      </div>
    </div>
  </figure>
);
