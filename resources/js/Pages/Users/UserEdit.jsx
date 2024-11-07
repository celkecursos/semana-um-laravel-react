import InfoButton from "@/Components/Button/InfoButton";
import WarningButton from "@/Components/Button/WarningButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function UserEdit({ auth, user }) {

    const { data, setData, put, processing, errors } = useForm({
        id: user.id || '',
        name: user.name || '',
        email: user.email || '',
    });

    const handleSubmit = (e) => {

        e.preventDefault();

        put(route('users.update', {user: data.id}));
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
                        <h3 className="text-lg">Editar</h3>
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

                            <div className="flex justify-end">
                                <WarningButton
                                    type="submit"
                                    disabled={processing}
                                    className="text-sm"
                                >
                                    Salvar
                                </WarningButton>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}