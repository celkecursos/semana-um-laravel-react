import React from "react";

import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth }){

    const currentYear = new Date().getFullYear();

    const appName = import.meta.env.VITE_APP_NAME || "Seu Gerenciador de Condimínio";
    
    return(
        <>
            <Head title="Home" />

            <div className="bg-gradient-to-r from-purple-500 to-blue-900 min-h-screen flex flex-col justify-center items-center text-white">

                <header className="text-center">

                    <h1 className="text-3xl font-bold mb-6">Gerencie seu condomínio com eficiência!</h1>

                    <p className="text-lg mb-10">Controle despesas, organize assembleias e mantenha os moradores informados.</p>
                </header>

                <div className="flex justify-center space-x-4">
                     {/* Verifica se o usuário está autenticado */}
                     {auth.user ? (
                            <Link href={route('dashboard')} className="bg-purple-900 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                                Painel de Controle
                            </Link>
                        ) : ( // Se o usuário não estiver autenticado
                            <>
                                <Link href={route('login')} className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
                                    Acessar
                                </Link>

                                <Link href={route('register')} className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
                                    Cadastrar
                                </Link>
                            </>
                        )}
                </div>

                <section className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">

                    {/* Descrição do primeiro recurso */}
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg w-72 text-center">
                        <h3 className="font-bold text-xl mb-4">Gestão de Despesas</h3>
                        <p>
                            Monitore todas as despesas do condomínio, garantindo transparência e controle.
                        </p>
                    </div>

                    {/* Descrição do segundo recurso */}
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg w-72 text-center">
                        <h3 className="font-bold text-xl mb-4">Comunicação Eficiente</h3>
                        <p>
                            Mantenha os moradores informados com comunicados e convocações de assembleias.
                        </p>
                    </div>

                    {/* Descrição do terceiro recurso */}
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg w-72 text-center">
                        <h3 className="font-bold text-xl mb-4">Relatórios e Documentos</h3>
                        <p>
                            Acesse relatórios financeiros e documentos do condomínio com facilidade.
                        </p>
                    </div>

                </section>

                {/* Seção do rodapé */}
                <footer className="mt-16 text-center">
                    {/* Exibe o ano atual e o nome do aplicativo */}
                    <p>@ {currentYear} {appName}. Todos os direitos reservados.</p>
                </footer>

            </div>

        </>
    )
}