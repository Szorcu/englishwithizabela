import { Menu } from "lucide-react";
import { Button } from "./ui/Button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/Sheet";

export const Navbar = () => {
  return (
    <header className="absolute top-0 z-50 w-full bg-transparent">
      <nav
        aria-label="Główna nawigacja"
        className="mx-auto flex justify-end max-w-7xl items-center p-4 lg:p-8 lg:justify-center"
      >
        <div className="hidden lg:flex lg:gap-10">
          <a
            href="#oferta"
            className="text-sm font-semibold text-white hover:text-indigo-200"
          >
            Oferta
          </a>
          <a
            href="#o-mnie"
            className="text-sm font-semibold text-white hover:text-indigo-200"
          >
            O mnie
          </a>
          <a
            href="#faq"
            className="text-sm font-semibold text-white hover:text-indigo-200"
          >
            FAQ
          </a>
          <a
            href="#kontakt"
            className="text-sm font-semibold text-white hover:text-indigo-200"
          >
            Kontakt
          </a>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Otwórz menu"
                className="p-4 text-white hover:bg-white/5 hover:text-indigo-200 rounded-sm size-6 "
              >
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              className="w-full max-w-sm flex flex-col gap-8 px-8 py-10"
              onOpenAutoFocus={(event) => event.preventDefault()}
              onCloseAutoFocus={(event) => event.preventDefault()}
            >
              <SheetClose asChild>
                <a
                  href="#oferta"
                  className="text-base text-slate-900 font-semibold "
                >
                  Oferta
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  href="#o-mnie"
                  className="text-base text-slate-900 font-semibold "
                >
                  O mnie
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  href="#faq"
                  className="text-base text-slate-900 font-semibold "
                >
                  FAQ
                </a>
              </SheetClose>
              <SheetClose asChild>
                <a
                  href="#kontakt"
                  className="text-base text-slate-900 font-semibold"
                >
                  Kontakt
                </a>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
