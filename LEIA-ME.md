# Material suplementar de código — Ambulatório de ISTs da DSA/UFV

Autor do produto técnico: Wanderson Luís Batista. Preparado para revisão em 28/10/2026.

Jogo em funcionamento na plataforma Skip: https://mandala-das-ists-f8289.goskip.app/?v=944e7dc

## Conteúdo

- `site/pagina_ambulatorio_ists_fragmento.html`: cópia fiel do HTML fornecido pelo autor para a área de conteúdo da página institucional. É um fragmento usado com Elementor; não inclui a instalação WordPress, o assistente virtual nem o jogo.
- `jogo_mandala/`: código-fonte React/TypeScript da Mandala das ISTs, fornecido pelo autor a partir da plataforma Skip. Inclui interface, perguntas incorporadas e migrações de banco sem a migração de conta administrativa.

Este pacote foi preparado para disponibilização pública como material suplementar do portfólio. O endereço do jogo permite experimentar a versão hospedada; os scripts documentam a implementação recebida do autor.

## Executar o jogo localmente

Em um ambiente com Node.js e pnpm, dentro de `jogo_mandala/`:

```powershell
pnpm install --frozen-lockfile
pnpm build
pnpm preview --host 127.0.0.1
```

A interface e as perguntas básicas estão no código. Autenticação, registro de partidas e ranking dependem de uma instalação PocketBase própria e de configuração por variáveis de ambiente (`VITE_POCKETBASE_URL`). Nenhum dado de acesso ou configuração do ambiente original foi incluído. Recursos documentais de apoio que não são importados pelo código também foram omitidos.

## Limites de reprodução

O HTML não reconstrói automaticamente a página WordPress/Elementor. O funcionamento integral do jogo fora do ambiente Skip, incluindo as integrações de backend, não foi validado. Antes de reutilizar o conteúdo educativo em outro serviço, realizar revisão técnica de saúde e adaptar dados institucionais, horários, contatos e links ao contexto local.

Para dúvidas sobre adaptação: wanderson.batista@ufv.br.
