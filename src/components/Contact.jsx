import React, { useState, useRef } from "react";
import { Instagram, Mail, MessageCircle, Send, Loader2 } from 'lucide-react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export function Contact() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const SERVICE_ID = "service_q4w8m9j"; 
    const TEMPLATE_ID = "template_zky36qc";
    const PUBLIC_KEY = "RAeyrWItVRfOglG7h"; 

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY) //
            .then((result) => {
                console.log(result.text);
                setLoading(false);
                setSubmitted(true);
                e.target.reset(); 
            }, (error) => {
                console.log(error.text);
                setLoading(false);
                setError(true);
            });
    };

    return (
        <section id="contacto" className="bg-background px-6 py-24 transition-colors duration-300">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Columna izquierda */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                            Contacto
                        </p>
                        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                            Tu proyecto empieza con una conversación
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                            Contanos qué necesitas. Sin compromiso.
                        </p>

                        <div className="mt-10 flex flex-col gap-6">
                            <a href="mailto:gbsoluciondigital@gmail.com" className="flex items-center gap-4 text-foreground transition-colors hover:text-primary group">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <p className="font-medium">gbsoluciondigital@gmail.com</p>
                                </div>
                            </a>
                            <a href="https://wa.me/5493434676232" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground transition-colors hover:text-primary group">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <MessageCircle className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                                    <p className="font-medium">Enviar mensaje</p>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/gbsolucionesdigitales/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground transition-colors hover:text-primary group">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Instagram className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Instagram</p>
                                    <p className="font-medium">GB Soluciones Digitales</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Columna derecha */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-xl border border-border bg-card p-8 shadow-sm"
                    >
                        {submitted ? (
                            <div className="flex h-full flex-col items-center justify-center text-center py-10">
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                                    <Send className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">¡Mensaje enviado!</h3>
                                <p className="mt-2 text-muted-foreground">Gracias por escribirnos. Te responderemos pronto.</p>
                                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-medium text-primary hover:underline">
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
                                <div>
                                    <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-foreground">Nombre</label>
                                    <input
                                        type="text"
                                        name="nombre" 
                                        required
                                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
                                        placeholder="Tu nombre"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium text-foreground">Mensaje</label>
                                    <textarea
                                        name="mensaje"
                                        required
                                        rows={4}
                                        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring transition-colors resize-none"
                                        placeholder="Contanos sobre tu proyecto..."
                                    />
                                </div>

                                {error && <p className="text-red-500 text-sm">Hubo un error al enviar. Intenta de nuevo.</p>}

                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <>Enviando... <Loader2 className="h-4 w-4 animate-spin" /></>
                                    ) : (
                                        <>Enviar mensaje <Send className="h-4 w-4" /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}