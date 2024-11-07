import InfoButton from "@/Components/Button/InfoButton";
import SuccessButton from "@/Components/Button/SuccessButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function UserCreate({ auth }) {

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {

        e.preventDefault();

        post(route('users.store'));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Usuários</h2>}
        >
            <Head title="Usuário" />

            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4">
                        <h3 className="text-lg">Cadastrar</h3>
                        <div className="flex space-x-4">
                            <Link href={route('users.index')}>
                                <InfoButton>
                                    Listar
                                </InfoButton>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-gray-50 text-sm dark:bg-gray-700 p-4 rounded-lg shadow-m">
                        <form onSubmit={handleSubmit}>

                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Nome completo do usuário"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                {errors.name && <span className="text-red-600">{errors.name}</span>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Melhor e-mail do usuário"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                {errors.email && <span className="text-red-600">{errors.email}</span>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                                <input
                                    id="password"
                                    type="password"
                                    autoComplete="password"
                                    placeholder="Senha para o usuário acessar o sistema"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                {errors.password && <span className="text-red-600">{errors.password}</span>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">Confirma a Senha</label>
                                <input
                                    id="password_confirmation"
                                    type="password"
                                    autoComplete="password_confirmation"
                                    placeholder="Confirmar a senha"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                {errors.password_confirmation && <span className="text-red-600">{errors.password_confirmation}</span>}
                            </div>

                            <div className="flex justify-end">
                                <SuccessButton
                                    type="submit"
                                    disabled={processing}
                                    className="text-sm"
                                >
                                    Cadastrar
                                </SuccessButton>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}