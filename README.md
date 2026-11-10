# Aurora Dental Studio — Landing Page de Demonstração

Projeto conceitual de clínica odontológica fictícia, criado para apresentação comercial e portfólio. Não representa estabelecimento real.

## Como executar

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Para checar: `npm run lint`, `npm run typecheck`, `npm run build`.

## Demonstração segura

- Nome fictício: Aurora Dental Studio.
- Fotos externas são ilustrativas e exigem conferência de licença antes de uso comercial.
- Equipe, endereço e CRO não são inventados.
- CTAs levam ao contato demonstrativo; não há WhatsApp real configurado.
- Formulário demonstra validação local e não envia nem armazena dados.
- Endpoint `/api/leads` bloqueia armazenamento por padrão.

## Converter para clínica real

Edite `src/config/clinic.ts`, substitua fotos, revise tratamentos e FAQ, configure domínio, políticas, registros profissionais e telefone. Para habilitar o endpoint real, configure `ENABLE_REAL_LEADS=true`, `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY`, além de controles anti-spam e conformidade LGPD. O frontend deve ser adaptado para produção e validado antes de aceitar dados reais.

## Publicação

Importe o repositório na Vercel e execute o build. Revise licenças de imagem, SEO, responsividade, desempenho e acessibilidade antes de publicar.

**Estado dos testes:** dependências não instaladas neste ambiente; build e testes de navegador não verificados.
