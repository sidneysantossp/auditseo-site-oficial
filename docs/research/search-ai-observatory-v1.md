# AUDITSEO Search AI Observatory — Protocolo Piloto v2

Status: universo de mercado e prompts congelados; coleta ainda não executada.
Data da revisão: 2026-09-07.

## 1. Objetivo

Construir um baseline reproduzível de como prestadores de SEO e Search Intelligence com atuação no Brasil aparecem, são citados, são recomendados e são descritos em interfaces de Search AI.

O piloto não tenta medir “todo o mercado brasileiro” e não pretende produzir um ranking universal de melhores agências. Ele responde duas perguntas delimitadas:

1. **Category Visibility:** quais prestadores aparecem quando um usuário formula perguntas reais sobre contratação de SEO, SEO técnico, Search AI/GEO ou autoridade/conteúdo sem citar previamente uma marca?
2. **Entity Accuracy:** quando um prestador é citado explicitamente, a plataforma descreve corretamente sua identidade, especialidades, serviços e evidências públicas?

Os módulos não são fundidos em um único score.

## 2. Escopo do piloto

### Mercado

**SEO e Search Intelligence no Brasil.**

Critérios de inclusão do universo:

- site ou presença pública ativa voltada ao mercado brasileiro;
- oferta pública ligada a SEO, SEO técnico, conteúdo/autoridade, GEO/Search AI ou disciplina diretamente adjacente;
- presença em diretórios, rankings, resultados de busca ou fontes públicas do mercado antes da coleta;
- diversidade entre operações tradicionais, consultorias, agências técnicas e novos players de Search AI;
- nenhum prestador adicionado ou removido depois da primeira execução sem nova versão do estudo.

### Conflito de interesse

A AUDITSEO é patrocinadora do estudo e também integra o universo observado. Essa inclusão deve ser explicitada em toda publicação. A AUDITSEO não recebe prompt privilegiado, regra de classificação diferente, exclusão de respostas negativas ou tratamento especial na revisão.

O piloto não deve ser apresentado como ranking editorial de “melhores agências”.

### Universo congelado

20 prestadores no manifesto `observatory-brand-manifest-v1.csv`.

Antes da coleta, cada domínio oficial deve ser confirmado em fonte oficial e a coluna `domain_status` deve sair de `pending_verification`.

## 3. Módulo A — Category Visibility

### Prompt set

80 prompts genéricos, congelados em `observatory-category-prompts-v1.csv`.

Quatro famílias de intenção, 20 prompts por família:

1. **Provider Selection** — seleção e comparação de consultorias/agências SEO;
2. **Technical SEO** — auditoria técnica, indexação, JavaScript, migração e risco;
3. **Search AI / GEO** — presença em ChatGPT e outras interfaces, mensuração e metodologia;
4. **Entity, Content & Authority** — entidade, especialistas, conteúdo citável e autoridade temática.

Os prompts não mencionam previamente nenhuma das 20 marcas avaliadas.

### Métricas

**Mention Rate**

`prompts em que a marca foi mencionada / prompts válidos da família`

**Recommendation Rate**

`prompts em que a marca foi apresentada como opção adequada / prompts válidos da família`

**Citation Rate — Owned**

`prompts em que domínio/URL oficial do prestador apareceu como fonte observável / prompts válidos da família`

**Citation Rate — External**

`prompts em que uma fonte externa citada sustentou informação sobre o prestador / prompts válidos da família`

**Competitive Share of Mentions**

Participação da marca no total de menções das 20 marcas dentro da mesma amostra. Não deve ser rotulada como market share.

**Source Share**

Distribuição dos domínios citados: prestadores, imprensa, diretórios, plataformas, fóruns, redes profissionais e outras fontes.

## 4. Módulo B — Entity Accuracy

### Prompt set

3 templates branded por prestador, totalizando 60 prompts únicos quando expandidos sobre o manifesto de 20 marcas.

Templates:

1. `O que é [MARCA], quais serviços ela oferece e em que tipo de projeto atua?`
2. `Em quais áreas de SEO, Search AI, conteúdo ou autoridade [MARCA] parece se especializar e quais evidências públicas sustentam essa descrição?`
3. `Quais informações, provas e limitações eu deveria verificar antes de contratar [MARCA] para um projeto de SEO ou Search Intelligence?`

### Classificação

Cada resposta recebe revisão em dimensões separadas:

- identidade da organização: correta / parcial / incorreta / ausente;
- serviços/oferta: correta / parcial / incorreta / ausente;
- especialidade percebida: sustentada / parcialmente sustentada / não sustentada / ausente;
- contexto de cliente/projeto: correto / parcial / incorreto / ausente;
- informação desatualizada: sim/não;
- afirmação relevante sem fonte observável: sim/não;
- fonte oficial citada: sim/não;
- fonte externa citada: sim/não.

Não condensar essas dimensões em um `Entity Authority Score` sem validação metodológica específica.

## 5. Tamanho planejado

- 80 prompts genéricos;
- 60 prompts branded;
- **140 prompts únicos**;
- alvo de 4 interfaces de Search AI;
- 2 repetições independentes por prompt.

Desenho-alvo máximo:

`140 × 4 × 2 = 1.120 respostas brutas`

Esse número descreve o protocolo planejado. Não é um volume já coletado.

## 6. Plataformas e repetição

As quatro interfaces só serão congeladas quando:

- permitirem observação consistente na data do ciclo;
- estiver definido se a busca/web está habilitada;
- idioma e localização puderem ser mantidos comparáveis;
- condição de conta e produto puder ser registrada.

Todas as repetições serão armazenadas, inclusive quando contradizem a primeira resposta.

## 7. Unidade de registro

Cada execução deve registrar no mínimo:

- `study_version`
- `cycle_id`
- `intent_family`
- `brand_scope` quando branded
- `prompt_id`
- `prompt_family`
- `prompt_text`
- `platform`
- `product_mode`
- `web_search_state`
- `language`
- `market/location_context`
- `account_state`
- `run_number`
- `requested_at`
- `response_text`
- `citations_raw`
- `source_domains`
- `brands_mentioned`
- `brands_recommended`
- `owned_domain_cited`
- `external_brand_source_cited`
- `entity_accuracy_labels`
- `reviewer_id`
- `review_status`
- `notes`

## 8. Regras de classificação

### Menção

Contar quando a entidade aparece identificável no corpo principal da resposta. Não contar apenas porque o domínio aparece em uma lista de fontes sem menção textual.

### Recomendação

Contar apenas quando a resposta apresenta a marca como opção apropriada, shortlist, exemplo recomendado ou escolha potencial para o cenário. Menção neutra não é recomendação.

### Citação

Contar apenas fonte visível/recuperável na interface ou nos metadados coletados. Não inferir fonte invisível.

### Fonte externa sobre a marca

Uma citação externa só é associada à marca quando sustenta uma afirmação relacionada à entidade, não apenas quando o domínio é citado por outro ponto da resposta.

## 9. Controle de qualidade

- regras determinísticas aplicadas quando possível;
- revisão humana obrigatória para Recommendation e Entity Accuracy;
- pelo menos 20% da amostra revisada por segundo revisor no piloto;
- divergências documentadas e resolvidas no codebook;
- nenhuma regra alterada retroativamente sem reprocessar o ciclo afetado;
- resultados da AUDITSEO revisados sob as mesmas regras dos concorrentes.

## 10. Limitações que devem acompanhar qualquer publicação

- respostas generativas são variáveis;
- modelos, fontes e interfaces podem mudar durante ou após a coleta;
- contexto de conta, localização e disponibilidade de web search podem alterar respostas;
- a amostra representa estas quatro famílias de intenção, não todo o mercado de SEO;
- o manifesto de 20 prestadores não representa todo prestador existente no Brasil;
- Mention Rate não é participação de mercado;
- Recommendation Rate não prova qualidade real do serviço;
- Citation Rate não prova causalidade de SEO/GEO;
- ausência de citação observável não prova ausência total de influência de uma fonte;
- a AUDITSEO possui conflito de interesse por financiar e integrar o universo observado.

## 11. Critérios para publicação

O primeiro relatório público só pode sair quando:

- domínios oficiais estiverem verificados;
- manifesto de 20 prestadores e 140 prompts estiver versionado;
- quatro interfaces e configurações estiverem congeladas;
- coleta estiver completa para o ciclo declarado;
- execuções inválidas estiverem documentadas;
- revisão humana mínima estiver concluída;
- codebook estiver publicado ou resumido;
- limitações e conflito de interesse estiverem no mesmo documento dos resultados;
- conclusões estiverem separadas de hipóteses de causa.

## 12. Saída pública planejada

Título de trabalho:

**Search AI Visibility Brasil 2026 — Como prestadores de SEO e Search Intelligence aparecem nas respostas de IA**

Estrutura planejada:

1. metodologia e versão;
2. universo e critérios de inclusão;
3. resultados por família de intenção;
4. distribuição de fontes;
5. menção vs citação vs recomendação;
6. Entity Accuracy;
7. exemplos qualitativos selecionados;
8. posição da AUDITSEO tratada com disclosure explícito;
9. limitações;
10. hipóteses para ciclos futuros.

## 13. Regra de integridade

Nenhuma porcentagem do Observatory pode ser publicada antes da coleta correspondente existir. O protocolo pode anteceder os números; os números nunca devem anteceder o protocolo.
