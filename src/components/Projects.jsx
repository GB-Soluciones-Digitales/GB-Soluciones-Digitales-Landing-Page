import { ArrowUpRight, Github } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export function Projects() {
    return (
        <section id="proyectos" className="bg-background px-6 py-24 transition-colors duration-300">
            <div className="mx-auto max-w-6xl">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                        Proyectos
                    </p>
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                        Proyectos que hablan por sí solos
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                        No hace falta que nos creas a nosotros. Mirá el código, explorá los proyectos y sacá tus propias conclusiones.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <a 
                            href="https://github.com/Brian13b"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:border-primary/50 hover:shadow-md"
                        >
                            <Github className="h-5 w-5" />
                            Ver proyectos en Github
                            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}