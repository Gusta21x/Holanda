import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-texto text-nude-principal py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-serif font-bold mb-2 text-dourado">Camilla Holanda</h3>
            <p className="text-nude-principal/90 text-sm uppercase tracking-wider">Esteticista Cosmetóloga Especialista em Clareamento</p>
            <p className="text-nude-principal/70 text-xs mt-1">Método CLARIÉ® — Clareamento Íntimo e Corporal</p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-6">
              <a href="https://instagram.com/camillaholandaa" target="_blank" rel="noopener noreferrer" className="text-dourado hover:text-nude-principal transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://wa.me/5562992690307" target="_blank" rel="noopener noreferrer" className="text-dourado hover:text-nude-principal transition-colors font-medium">
                (62) 99269-0307
              </a>
            </div>
            <p className="text-nude-principal/70 text-sm">Anápolis | Brasília - DF</p>
          </div>
        </div>

        <div className="border-t border-nude-principal/10 mt-10 pt-8 text-center">
          <p className="font-serif italic text-xl text-nude-principal mb-2">"Seu corpo merece cuidado, sua autoestima merece brilhar."</p>
          <p className="text-xs text-nude-principal/50 mb-4">
            Site desenvolvido por <a href="https://www.instagram.com/gz.sites/" target="_blank" rel="noopener noreferrer" className="hover:text-dourado transition-colors">Gustavo | GZ Sites</a>
          </p>
          <p className="text-xs text-nude-principal/50">
            &copy; {new Date().getFullYear()} Camilla Holanda. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
