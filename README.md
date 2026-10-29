# Código suplementar do Ambulatório de ISTs da DSA/UFV

Material do produto técnico de Wanderson Luís Batista, desenvolvido para comunicar o atendimento do Ambulatório de ISTs da Divisão de Saúde da Universidade Federal de Viçosa.

- [Página institucional](https://www.dsa.ufv.br/ambulatorio-de-ist/)
- [Jogar Mandala das ISTs](https://mandala-das-ists-f8289.goskip.app/?v=944e7dc)
- Contato do autor: wanderson.batista@ufv.br

## Arquivos

- [`site/pagina_ambulatorio_ists_fragmento.html`](site/pagina_ambulatorio_ists_fragmento.html): HTML fornecido pelo autor para o conteúdo da página criada no Elementor. É um fragmento, não uma exportação completa do WordPress.
- [`jogo_mandala/`](jogo_mandala/): projeto React, TypeScript e Vite recebido da plataforma Skip, com a interface e as perguntas da Mandala.
- [`LEIA-ME.md`](LEIA-ME.md): instruções de instalação e limites de reprodução.

O código do assistente virtual, o servidor de rastreamento e a instalação WordPress da DSA não estão neste repositório. O HTML contém links para serviços externos e para o ambiente institucional original; quem adaptar a página deve substituir esses endereços, os contatos e os dados de atendimento.

## Executar a interface do jogo localmente

Com Node.js e pnpm instalados:

```powershell
cd jogo_mandala
pnpm install --frozen-lockfile
pnpm build
pnpm preview --host 127.0.0.1
```

A compilação foi verificada em 28 de outubro de 2026. Autenticação, registro de partidas e ranking dependem de uma instalação própria do PocketBase e da variável `VITE_POCKETBASE_URL`. O funcionamento completo fora da Skip não foi validado.

## Origem e limites

O pacote público foi preparado a partir dos arquivos fornecidos pelo autor. Foram excluídos arquivos de ambiente, configurações da plataforma e uma migração de criação de conta administrativa presentes no ZIP original. Antes de reutilizar o conteúdo educativo em outro serviço, revise as informações de saúde e adapte os dados institucionais ao contexto local.
