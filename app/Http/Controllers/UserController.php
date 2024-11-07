<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index(): Response
    {
        $users = User::orderByDesc('id')->paginate(10);

        return Inertia::render('Users/UserIndex', ['users' => $users]);
    }

    public function show(User $user): Response
    {
        return Inertia::render('Users/UserShow', ['user' => $user]);
    }

    public function create(): Response
    {
        return Inertia::render('Users/UserCreate');
    }

    public function store(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8|max:255|confirmed'
            ],
            [
                'name.required' => 'O campo nome é obrigatório!',
                'name.string' => 'O nome deve ser uma string válida.',
                'name.max' => 'O nome não pode ter mais que :max caracteres.',
                'email.required' => 'O campo e-mail é obrigatório.',
                'email.string' => 'O e-mail deve ser uma string válida.',
                'email.email' => 'O e-mail deve ser um endereço de e-mail válido.',
                'email.max' => 'O e-mail não pode ter mais que :max caracteres.',
                'email.unique' => 'Este e-mail já está cadastrado.',
                'password.required' => 'O campo senha é obrigatório.',

                'password.string' => 'A senha deve ser uma string válida.',
                'password.min' => 'A senha não pode ter menos que :min caracteres.',
                'password.max' => 'A senha não pode ter mais que :max caracteres.',

                'password.confirmed' => 'A confirmação da senha não corresponde.',
            ]
        );

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        return Redirect::route('users.show', ['user' => $user->id])->with('success', 'Usuário Cadastrado com sucesso!');
    }

    public function edit(User $user) : Response
    {        
        return Inertia::render('Users/UserEdit', ['user' => $user]);
    }

    public function update(Request $request, User $user)
    {
        
        $request->validate(
            [
                'name' => 'required|string|max:255',
                'email' => "required|string|email|max:255|unique:users,email,{$user->id}",
            ],
            [
                'name.required' => 'O campo nome é obrigatório!',
                'name.string' => 'O nome deve ser uma string válida.',
                'name.max' => 'O nome não pode ter mais que :max caracteres.',
                'email.required' => 'O campo e-mail é obrigatório.',
                'email.string' => 'O e-mail deve ser uma string válida.',
                'email.email' => 'O e-mail deve ser um endereço de e-mail válido.',
                'email.max' => 'O e-mail não pode ter mais que :max caracteres.',
                'email.unique' => 'Este e-mail já está cadastrado.',
            ]
        );

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        return Redirect::route('users.show', ['user' => $user->id])->with('success', 'Usuário editado com sucesso!');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return Redirect::route('users.index')->with('success', 'Usuário apagado com sucesso!');
    }
}
