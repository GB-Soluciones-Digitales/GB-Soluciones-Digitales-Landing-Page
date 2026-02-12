import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-foreground px-6 pt-20">
            <div 
                className="absolute inset-0 opacity-5" 
                style={{
                    backgroundImage: "radial-gradient(circle at 2px 2px, hsl(var(--primary-foreground)) 2px, transparent 0)",
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="relative mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary-foreground/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary"/>
                        Software que trabaja para vos
                    </p>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance"
                >
                    Tu negocio merece software que <span className="text-primary">realmente funcione</span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70 text-pretty"
                > 
                    Creamos sistemas web a medida que eliminan tareas manuales, centralizan tu información y te dan el control total de tu operación.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                >
                    <a 
                        href="#contacto"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        Contactanos
                        <ArrowRight className="h-4 w-4"/>
                    </a>
                    <a 
                        href="#servicios"
                        className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-8 py-3.5 text-sm font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/5"
                    >
                        Ver Servicios
                    </a>
                </motion.div>
            </div>
        </section>
    )
}