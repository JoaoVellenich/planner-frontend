import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button/button";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-2.5">
            <span className="block truncate">Kayky Tavares</span>
            <span className="block text-zinc-400 text-xs truncate">
              kayky.tavares@alest.com.br
            </span>
          </div>
          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-2.5">
            <span className="block truncate">Guilherme Camara</span>
            <span className="block text-zinc-400 text-xs truncate">
              kayky.tavares@alest.com.br
            </span>
          </div>
          <CircleCheck className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-50" />
        Gerenciar convidados{" "}
      </Button>
    </div>
  );
}
