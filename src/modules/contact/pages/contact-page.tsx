import { MdEmail } from "react-icons/md";

export const ContactPage = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">Contacto</h1>
        <p className="text-sm md:text-base text-white/80">
          ¿Tienes alguna consulta o propuesta? Estoy disponible para
          colaborar.
        </p>
        <div className="flex items-center justify-center space-x-2">
          <MdEmail className="text-2xl md:text-3xl text-purple-400" />
          <a
            href="mailto:julioespinola9999@gmail.com"
            className="text-purple-300 hover:underline break-all"
          >
            julioespinola9999@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};
