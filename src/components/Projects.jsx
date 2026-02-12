import { ArrowUpRight, Github } from "lucide-react";
import React from "react";

export function Projects() {
    return (
        <section id="proyectos" className="bg-background px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                        Proyectos
                    </p>
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                        Proyectos que hablan por si solos
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                        No hace falta que nos creas a nosotros. Mira el codigo, explora los proyectos y saca tus propias conclusiones.
                    </p>

                    <a 
                        href="https://github.com/Brian13b"
                        target="_blankk"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    >
                        <Github className="h-5 w-5" />
                        Ver proyectos en Github
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </a>
                </div>
            </div>
        </section>
    )
} 