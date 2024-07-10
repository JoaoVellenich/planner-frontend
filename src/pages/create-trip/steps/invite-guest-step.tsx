import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestStepProps {
  openGuestModal: () => void;
  emailToInvite: string[];
  openConfirmModal: () => void;
}

export function InviteGuestStep({
  emailToInvite,
  openConfirmModal,
  openGuestModal,
}: InviteGuestStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button
        type="button"
        onClick={openGuestModal}
        className="flex items-center gap-2 flex-1"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailToInvite.length > 0 ? (
          <span className="text-zinc-100 text-lg">
            {emailToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-zinc-400 text-lg">Quem estará na viagem?</span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800"></div>

      <button
        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
        onClick={openConfirmModal}
      >
        Confirmar viagem
        <ArrowRight className="size-5 text-lime-950" />
      </button>
    </div>
  );
}
