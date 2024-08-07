import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestModal } from "./invite-guest-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestStep } from "./steps/invite-guest-step";

export function CreateTripPage() {
  const navigate = useNavigate();

  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const [emailToInvite, setEmailToInvite] = useState<string[]>([]);

  function openGuestInput() {
    setIsGuestInputOpen(true);
  }
  function closeGuestInput() {
    setIsGuestInputOpen(false);
  }
  function openGuestModal() {
    setIsGuestModalOpen(true);
  }
  function closeGuestModal() {
    setIsGuestModalOpen(false);
  }
  function openConfirmModal() {
    setIsConfirmModalOpen(true);
  }
  function closeConfirmModal() {
    setIsConfirmModalOpen(false);
  }
  function addMemberToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();
    if (!email) {
      return;
    }
    if (emailToInvite.includes(email)) {
      return;
    }
    setEmailToInvite([...emailToInvite, email]);
    event.currentTarget.reset();
    return;
  }
  function removeEmailFromInvite(emailToRemove: string) {
    const newEmailList = emailToInvite.filter(
      (email) => email != emailToRemove
    );
    setEmailToInvite(newEmailList);
  }
  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/trips/123");
  }
  return (
    <div className="h-screen flex items-center justify-center bg-patter bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <DestinationAndDateStep
          closeGuestInput={closeGuestInput}
          isGuestInputOpen={isGuestInputOpen}
          openGuestInput={openGuestInput}
        />
        <div className="space-y-4">
          {isGuestInputOpen && (
            <InviteGuestStep
              emailToInvite={emailToInvite}
              openConfirmModal={openConfirmModal}
              openGuestModal={openGuestModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestModalOpen && (
        <InviteGuestModal
          emailToInvite={emailToInvite}
          addMemberToInvite={addMemberToInvite}
          removeEmailFromInvite={removeEmailFromInvite}
          closeGuestModal={closeGuestModal}
        />
      )}

      {isConfirmModalOpen && (
        <ConfirmTripModal
          closeConfirmModal={closeConfirmModal}
          createTrip={createTrip}
        />
      )}
    </div>
  );
}
