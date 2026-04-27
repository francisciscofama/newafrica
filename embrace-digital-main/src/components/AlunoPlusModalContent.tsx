import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AlunoPlusDetails from "@/components/AlunoPlusDetails";

type Props = {
  onRequestClose?: () => void;
};

export default function AlunoPlusModalContent({ onRequestClose }: Props) {
  const navigate = useNavigate();

  const goToDetailsPage = () => {
    navigate("/aluno-plus", { state: { autoStart: true } });
    onRequestClose?.();
  };

  return (
    <div className="h-full w-full flex flex-col min-h-0">
      {/* Header fixed only on sm+ */}
      <header className="hidden sm:block px-5 py-4 sm:px-6 sm:py-5 border-b border-border">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-secondary uppercase tracking-widest">Aluno+</p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mt-1 leading-tight">
              Teste vocacional grátis: descubra seu perfil e o curso ideal
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-3xl">
              Um teste inspirado na Teoria das Inteligências Múltiplas (Howard Gardner) para relacionar seus interesses
              e habilidades com áreas de estudo e possíveis caminhos.
            </p>
          </div>

          <div className="shrink-0 flex gap-2 mt-6">
            <Button size="sm" onClick={goToDetailsPage}>
              Começar meu teste
            </Button>
          </div>
        </div>
      </header>

      <main
        className="flex-1 min-h-0 overflow-y-auto px-5 py-4 sm:px-6 sm:py-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex flex-col gap-4">
          {/* Header scrolls on mobile */}
          <header className="sm:hidden pb-4 border-b border-border">
            <p className="text-xs font-semibold text-secondary uppercase tracking-widest">Aluno+</p>
            <h3 className="text-xl font-bold text-foreground mt-1 leading-tight">
              Teste vocacional grátis: descubra seu perfil e o curso ideal
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Um teste inspirado na Teoria das Inteligências Múltiplas (Howard Gardner) para relacionar seus interesses
              e habilidades com áreas de estudo e possíveis caminhos.
            </p>

            <div className="mt-3 flex gap-2">
              <Button size="sm" className="flex-1" onClick={goToDetailsPage}>
                Começar
              </Button>
            </div>
          </header>

          <AlunoPlusDetails variant="modal" />
        </div>
      </main>
    </div>
  );
}
