import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-foreground px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {/* Logo y texto */}
        <div className="flex items-center gap-3">
          <img
            src="/icono_sin_fondo.png"
            alt="GB Soluciones Digitales"
            width={32}
            height={32}
            className="rounded-md"
          />
          <div>
            <p className="font-heading text-sm font-bold text-primary-foreground">
              GB Soluciones Digitales
            </p>
            <p className="text-xs text-primary-foreground/60">
              Donde la logica funciona
            </p>
          </div>
        </div>

        {/* Derechos */}
        <p className="text-xs text-primary-foreground/50 text-center sm:text-right">
          © {currentYear} GB Soluciones Digitales. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
