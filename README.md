Código-fonte das lives sobre [Laravel e React](https://www.youtube.com/watch?v=OsH8sZb8x1k&list=PLmY5AEiqDWwAKFymn4450k9XGLt8v3Xgd&index=1).<br>

## Requisitos

* PHP 8.2 ou superior;
* MySQL 8 ou superior;
* Composer;
* Node.js 20 ou superior;

## Como rodar o projeto baixado

Duplicar o arquivo ".env.example" e renomear para ".env".<br>
Alterar no arquivo ".env" as credencias do banco de dados.<br>

Para a funcionalidade recuperar senha funcionar, necessário alterar as credenciais do servidor de envio de e-mail no arquivo .env.<br>
Utilizar o servidor fake durante o desenvolvimento: https://mailtrap.io<br>
Servidor Iagente: https://login.iagente.com.br/solicitacao-conta-smtp/origin/celke<br>
Configurar DNS da Iagente: https://celke.com.br/artigo/como-configurar-o-dns-da-iagente-na-vps-da-hostinger

Instalar as dependências do PHP.
```
composer install
```

Instalar as dependências do Node.js.
```
npm install
```

Gerar a chave no arquivo .env.
```
php artisan key:generate
```

Executar as migration para criar a base de dados e as tabela.
```
php artisan migrate
```

Cadastrar registro de teste.
```
php artisan db:seed
```

Iniciar o projeto criado com Laravel.
```
php artisan serve
```

Executar as bibliotecas Node.js.
```
npm run dev
```

Acessar no navegador a URL.
```
http://127.0.0.1:8000
```


## Sequencia para criar o projeto

Criar o projeto com Laravel.
```
composer create-project laravel/laravel .
```

Instalar o Breeze.
```
composer require laravel/breeze --dev
```

Publicar a atutenticação, rotas, controladores e outros recursos para a aplicação
```
php artisan breeze:install
```

* Selecionar React com Breeze, digitar "react".
* Selecionar recurso opcional, digitar "dark".
* Selecionar framework para teste, digitar "1".

Executar as migration para criar a base de dados e os tabela,
```
php artisan migrate
```

Instalar as dependências no Node.js.
```
npm install
```

Executar as bibliotecas Node.js.
```
npm run dev
```

Iniciar o projeto criado com Laravel.
```
php artisan serve
```

Acessar no navegador a URL.
```
http://127.0.0.1:8000
```

Criar seed.
```
php artisan make:seeder UserSeeder
```

Cadastrar registro de teste.
```
php artisan db:seed
```

## Como usar o GitHub

Verificar a versão do GIT.
```
git -v
```

Baixar os arquivos do GitHub.
```
git clone -b <branch_nome> <repositorio_url> .
git clone https://github.com/celkecursos/semana-um-laravel-react.git .
```

Verificar a branch.
```
git branch
```

Baixar as atualizações do projeto.
```
git pull
```

Adicionar todos os arquivos modificados no staging area - área de preparação.
```
git add .
```

commit representa um conjunto de alterações em um ponto específico da história do seu projeto, registra apenas as alterações adicionadas ao índice de preparação.
O comando -m permite que insira a mensagem de commit diretamente na linha de comando.
```
git commit -m "Descrição do commit"
```

Enviar os commits locais, para um repositório remoto.
```
git push <remote> <branch>
git push origin main
```

## Deploy da aplicação
## Conectar o PC ao servidor com SSH

Endereço da hospedagem.
[Hostinger](https://hostinger.com.br?REFERRALCODE=1CESARNICOL13)

Criar chave SSH (chave pública e privada).
```
ssh-keygen -t rsa -b 4096 -C "seu-email@exemplo.com"
```
```
ssh-keygen -t rsa -b 4096 -C "cesar@celke.com.br"
```

Local que é criado a chave pública.
```
C:\Users\SeuUsuario\.ssh\
```
```
C:\Users\cesar/.ssh/
```

Exibir o conteúdo da chave pública.
```
cat ~/.ssh/id_rsa.pub
```

Acessar o servidor com SSH.
```
ssh root@93.127.210.72
```

Usar o terminal conectado ao servidor para listar os arquivo.
```
cd /home/user/htdocs/srv566492.hstgr.cloud
```

Listar os arquivo.
```
ls
```

Remover os arquivos do servidor.
```
rm -rf /home/user/htdocs/endereco-do-servidor/{*,.*}
```
```
rm -rf /home/user/htdocs/srv566492.hstgr.cloud/{*,.*}
```

## Conectar Servidor ao GitHub

Gerar a chave SSH no servidor.
```
ssh-keygen -t rsa -b 4096 -C "cesar@celke.com.br"
```

Imprimir a chave pública gerada.
```
cat ~/.ssh/id_rsa.pub
```

No GitHub, vá para Settings (Configurações) do seu repositório ou da sua conta, em seguida, vá para SSH and GPG keys e clique em New SSH key.<br>
Cole a chave pública no campo fornecido e salve.<br>

Verificar a conexão com o GitHub.
```
ssh -T git@github.com
```

Se gerar o erro "The authenticity of host 'github.com (xx.xxx.xx.xxx)' can't be established.".<br>
Isso é uma medida de segurança para evitar ataques de "man-in-the-middle".<br>
Necessário adicionar a chave do host do GitHub ao arquivo de known_hosts do seu servidor.<br>

Digite yes quando for solicitado.
```
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
```

Verificar a conexão novamente.
```
ssh -T git@github.com
```

Mensagem de conexão realizada com sucesso.<br>
Hi nome-usuario! You've successfully authenticated, but GitHub does not provide shell access.<br>

Usar o terminal conectado ao servidor. Primeiro acessar o diretório do projeto no servidor.
```
cd /home/user/htdocs/srv566492.hstgr.cloud
```

Baixar os arquivos do Git.
```
git clone --branch <branch_name> <repository_url> .
```

Duplicar o arquivo ".env.example" e renomear para ".env".
```
cp .env.example .env
```

Abrir o arquivo ".env" e alterar as variaveis de ambiente.
```
nano .env
```

Ctrl + O e enter para salvar.<br>
Ctrl + X para sair.<br>

Alterar o valor das variaveis de ambiente.
```
APP_NAME=Celke
APP_ENV=production
APP_KEY=
APP_DEBUG=false
APP_TIMEZONE=America/Sao_Paulo
APP_URL=https://srv566492.hstgr.cloud 
```

Comentar as variaveis de conexão.
```
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=celke
# DB_USERNAME=root
# DB_PASSWORD=
```

Alterar para armazenar as sessões no arquivo "file".
```
SESSION_DRIVER=file
```

Limpar cache de configuração.
```
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

Instalar as dependências do PHP.
```
composer install
```

Gerar a build. Compilar o código-fonte do projeto.
```
npm run build
```

Gerar a chave.
```
php artisan key:generate
```

Alterar a propriedade do diretório.
```
sudo chown -R user:user /home/user/htdocs/srv566492.hstgr.cloud
```

Reiniciar Nginx.
```
sudo systemctl restart nginx
```

Limpar cache.
```
php artisan config:clear
```

Quando gerar o erro "", necessário instalar o Vite. Executar e Etapa 1, Etapa 2 e Etapa 3.
```
npm install
```

Etapa 1 - Verificar se o Vite está instalado.
```
npx vite --version
```

Etapa 2 - Gerar a build. Compilar o código-fonte do projeto.
```
npm run build
```

Etapa 3 - Remover o diretório "node_modules".

Verificar as vulnerabilidades.
```
npm audit
```

Corrigir automaticamente todas as vulnerabilidades.
```
npm audit fix
```

Atualizar manualmente a dependência.
```
npm install nome-da-dependencia@latest
```

Criar a base de dados.<br>
Alterar no arquivo .env as credenciais do banco de dados.<br>
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nome-da-base-de-dados
DB_USERNAME=usuario-do-banco-de-dados
DB_PASSWORD=senha-do-banco-de-dados
```

Alterar para armazenar as sessões no arquivo "file".
```
SESSION_DRIVER=database
```

Executar as migration para criar a base de dados e as tabela.
```
php artisan migrate
```

Cadastrar registro de teste.
```
php artisan db:seed
```

Para usar um domínio próprio, é necessário adicionar o DNS da Hostinger no gerenciador de domínios, como, por exemplo, no "registro.br".<br>
Adicione o domínio na hospedagem.<br>
Alterar o arquivo "vhost" da hospedagem o domínio, por exemplo:
```
server_name celkeprime.com.br;
```

## Instalar o Node.js no servidor.

Atualizar a lista de pacotes disponíveis nos repositórios do sistema.
```
sudo apt update
```

Adicionar no repositório o Node.js 20.x.
```
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
```

Instalar o Node.js. -y automatizar a instalação de pacotes sem solicitar a confirmação manual do usuário.
```
sudo apt install -y nodejs
```

Reiniciar Nginx.
```
sudo systemctl restart nginx
```

Limpar cache.
```
php artisan config:clear
```

Remover o Node.js.
```
sudo apt remove nodejs
```