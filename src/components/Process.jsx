import { Search, Code2, Handshake, Lightbulb } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        icon: Search,
        title: "Entendemos tu negocio",
        description: "Antes de escribir una sola línea de código, nos tomamos el tiempo de entender qué necesitas y por qué."
    },
    {
        number: "02",
        icon: Lightbulb,
        title: "Propuesta clara",
        description: "Te presentamos un plan concreto: qué vamos a construir, cómo y en cuánto tiempo. Sin letra chica."
    },
    {
        number: "03",
        icon: Code2,
        title: "Desarrollo con entregas",
        description: "Vas viendo resultados desde el primer día. Entregas parciales, feedback constante, sin sorpresas."
    },
    {
        number: "04",
        icon: Handshake,
        title: "Soporte continuo",
        description: "No desaparecemos después de entregar. Te acompañamos para que tu sistema funcione y evolucione."
    },
]

export function Process() {
    return (
        <section id="proceso" className="bg-muted px-6 py-24 transition-colors duration-300">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                            Proceso
                        </p>
                        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"> 
                            Simple, transparente y sin vueltas
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                            Trabajamos con un proceso claro para que siempre sepas en qué etapa está tu proyecto.
                        </p>
                    </motion.div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={step.number} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative text-center group"
                        >
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110 duration-300">
                                <step.icon className="h-7 w-7" />
                            </div>
                            <span className="mb-2 block font-heading text-xs font-bold uppercase tracking-widest text-primary">
                                Paso {step.number}
                            </span>
                            <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                                {step.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}