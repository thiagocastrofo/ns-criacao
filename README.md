# Gestão de Demandas — naSala

Plataforma de gestão de tarefas do time. Site estático (HTML + CSS + JavaScript puro), sem build e sem dependências para instalar. Basta abrir o `index.html` ou publicar no GitHub Pages.

## Conteúdo da pasta

```
demandas/
├── index.html          ← página principal (abra este arquivo)
├── .nojekyll           ← garante que o GitHub Pages sirva a pasta assets/
├── README.md           ← este arquivo
└── assets/
    ├── styles.css      ← todo o CSS
    └── app.js          ← toda a lógica + dados das tarefas
```

Os logos (naSala, nSco., nSeventos, cidade) são SVGs embutidos direto no `index.html`, então não há arquivos de imagem externos. Todos os caminhos são **relativos** (`assets/...`), funcionando em qualquer subdiretório do GitHub Pages.

---

## Publicar no GitHub Pages (passo a passo)

1. Crie um repositório novo em [github.com](https://github.com) (pode ser público ou privado).
2. Faça upload de **todo o conteúdo desta pasta** (o `index.html`, o `.nojekyll`, o `README.md` e a pasta `assets/`), mantendo a estrutura acima. O `index.html` precisa ficar na **raiz** do repositório.
3. No repositório, vá em **Settings → Pages**.
4. Em **Source**, escolha **Deploy from a branch**, selecione a branch **main** e a pasta **/ (root)**. Clique em **Save**.
5. Aguarde cerca de 1 minuto. A URL pública aparecerá no topo da página de Pages, no formato:
   `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`
6. Abra a URL e compartilhe com o time.

> Dica: se preferir testar antes, dê um duplo-clique no `index.html` que ele abre direto no navegador. Sem o Firebase configurado (veja abaixo), os dados ficam salvos apenas naquele navegador.

---

## Sincronização em tempo real (opcional — Firebase)

Sem configuração, o app funciona normalmente, mas cada pessoa vê os dados salvos no próprio navegador. Para que **todo o time veja e edite os mesmos dados ao vivo**, conecte um banco Firebase gratuito:

1. Acesse [console.firebase.google.com](https://console.firebase.google.com) e crie um projeto gratuito.
2. No menu lateral, abra **Realtime Database → Criar banco de dados** e inicie no **modo de teste**.
3. Em **Configurações do projeto (⚙️) → Seus apps → Web (`</>`)**, registre um app e copie o objeto `firebaseConfig`.
4. Abra `assets/app.js` e preencha o objeto `FIREBASE_CONFIG` (nas primeiras linhas) com os seus valores:

   ```js
   const FIREBASE_CONFIG = {
     apiKey:            "SUA_API_KEY",
     authDomain:        "seu-projeto.firebaseapp.com",
     databaseURL:       "https://seu-projeto-default-rtdb.firebaseio.com",
     projectId:         "seu-projeto",
     storageBucket:     "seu-projeto.appspot.com",
     messagingSenderId: "123456789",
     appId:             "1:123456789:web:abc123"
   };
   ```

5. (Recomendado) Em **Realtime Database → Regras**, defina regras adequadas ao seu uso. As regras abertas abaixo servem para testes rápidos; para produção, restrinja por autenticação:

   ```json
   { "rules": { ".read": true, ".write": true } }
   ```

6. Salve, faça commit e push. O GitHub Pages atualiza sozinho. Pronto: o time inteiro acessa a mesma URL com sincronização em tempo real.

> A chave de API do Firebase para apps web é pública por natureza (fica visível no navegador) e não é um segredo — a segurança vem das **regras** do Realtime Database, não da chave. Ainda assim, este projeto é entregue **sem nenhuma chave preenchida**; você adiciona a sua depois.

---

## Funcionalidades

- Tarefas com status via dropdown: Pendente, Em andamento, Concluído
- Categorias: NSCO, CIDADE, EVENTOS, OUTROS
- Tags automáticas de "Entrega próxima" e "ATRASADO" conforme a data
- Múltiplos responsáveis por tarefa, com avatares
- Datas de entrega e de apresentação
- Porte do projeto (Pequeno/Médio/Grande) e marcação de concorrência ganha
- Perfis do time com tempo de casa calculado por data de início
- Dashboard de workload com barras coloridas por carga
- Log de atividades
- Busca e filtros por casa e por membro
- Tema claro/escuro
- Sincronização em tempo real opcional (Firebase)
- Responsivo para desktop e mobile
