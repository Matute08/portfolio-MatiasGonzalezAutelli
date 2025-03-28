"use client";
import { notificacionMail, notificacionError } from "./notification";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {

    const form = useRef<HTMLFormElement>(null);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        emailjs
        .sendForm('service_5omf06d', 'template_7cer9cf', form.current!, {
          publicKey: 'snCbtxVCdNEhQoULh',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            notificacionMail("Mail enviado");
          },
          (error) => {
            console.log('FAILED...', error.text);
            notificacionError("Error al Enviar Mail")
          },
        );



    };


    return (
        <div className="w-full isolate px-6 mb-30 lg:px-4 flex justify-center">
            <form
                ref={form} 
                onSubmit={(e) => {
                    e.preventDefault();
                    const formElements = form.current?.elements as HTMLFormControlsCollection;
                    const userName = (formElements.namedItem("user_name") as HTMLInputElement).value.trim();
                    const userEmail = (formElements.namedItem("user_email") as HTMLInputElement).value.trim();
                    const message = (formElements.namedItem("message") as HTMLTextAreaElement).value.trim();

                    if (!userName || !userEmail || !message) {
                        notificacionError("Todos los campos son obligatorios");
                        return;
                    }

                    handleSubmit(e);
                }}
                action="#"
                method="POST"
                className=" mt-8 sm:mt-8 w-full"
            >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6">
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="first-name"
                            className="block text-1xl font-semibold text-[var(--secondary)]"
                        >
                            Nombre <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="first-name"
                                name="user_name"
                                type="text"
                                autoComplete="given-name"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    
                    
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="email"
                            className="block text-1xl font-semibold text-[var(--secondary)]"
                        >
                            Email <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="user_email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block text-1xl font-semibold text-[var(--secondary)]"
                        >
                            Message <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                defaultValue={""}
                            />
                        </div>
                    </div>
                    
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactMe;
