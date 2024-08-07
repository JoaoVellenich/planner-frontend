import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button/button";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links Importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-2.5">
            <span className="block truncate">Reserva Airbnb</span>
            <a
              href="$"
              className="block text-zinc-400 text-xs truncate hover:text-zinc-200"
            >
              https://airbnb/reserva/12312o2iuhniubndiaunsiuoiu3sadfasdfad
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>

      <Button variant="secondary" size="full">
        <Plus className="size-5 text-zinc-200" />
        Cadastrar link
      </Button>
    </div>
  );
}
