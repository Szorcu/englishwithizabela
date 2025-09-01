import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "ab8d6404-af7d-4394-9d1e-d5ee23b6bbcd");
    formData.append("from_name", "English with Izabela Website");
    formData.append("subject", "Nowa wiadomość z formularza kontaktowego");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((response) => response.json());

      if (response.success) {
        toast("Wiadomość wysłana!", {
          description:
            "Dziękuję za kontakt. Odpowiem tak szybko, jak będę mogła 🙂",
        });

        form.reset();
      } else {
        toast("Błąd formularza", {
          description: "Coś poszło nie tak. Spróbuj ponownie później.",
        });
      }
    } catch (error) {
      toast("Błąd formularza", {
        description: "Coś poszło nie tak. Spróbuj ponownie później.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white/90 p-6 shadow-2xl ring-1 ring-black/10 backdrop-blur-sm sm:p-8">
      <h3 className="mb-6 text-2xl font-semibold text-slate-900">
        Wyślij wiadomość
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-600">
            Imię
          </label>
          <input
            name="first_name"
            type="text"
            required
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            placeholder="Jak masz na imię?"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-600">
            E-mail
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            placeholder="twoj@email.com"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-600">
            Wiadomość
          </label>
          <textarea
            name="message"
            rows={3}
            required
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            placeholder="Wpisz tutaj swoją wiadomość..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          {isLoading ? "Wysyłanie..." : "Wyślij"}
        </button>
      </form>
    </div>
  );
}
