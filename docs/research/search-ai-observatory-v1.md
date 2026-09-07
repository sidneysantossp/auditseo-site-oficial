# AUDITSEO Search AI Observatory — Protocolo Piloto v1

Status: desenho fechado para piloto; coleta ainda não executada.
Data do protocolo: 2026-09-07.

## 1. Objetivo

Construir um baseline reproduzível de como marcas brasileiras são mencionadas, citadas, recomendadas e descritas em interfaces de Search AI, sem transformar respostas variáveis em um ranking universal.

O piloto deve responder duas perguntas diferentes:

1. **Category Visibility:** quais marcas aparecem quando um usuário pergunta sobre uma categoria, problema, comparação ou decisão sem citar uma marca previamente?
2. **Entity Accuracy:** quando uma marca é citada explicitamente no prompt, a plataforma descreve corretamente quem ela é, o que oferece e em quais contextos é relevante?

Esses módulos não devem ser fundidos em uma única taxa.

## 2. Escopo do piloto

### Setores

Selecionar 5 setores de alta consideração comercial usando critérios publicados antes da coleta:

- existência de pelo menos 10 marcas comparáveis com presença digital pública;
- jornada de decisão com pesquisa, comparação e validação antes da compra/contratação;
- volume suficiente de conteúdo e fontes públicas para permitir análise de citação;
- diversidade entre B2B/B2C e ciclos de decisão;
- evitar, no piloto inicial, setores em que uma recomendação automática possa exigir interpretação médica, jurídica ou financeira individual de alto risco.

A lista final de setores e marcas deve ser versionada no dataset antes do primeiro request.

### Marcas

- 10 marcas por setor;
- 50 marcas no total;
- critérios de inclusão definidos antes da coleta;
- nenhuma marca adicionada ou removida depois de observar respostas sem criar uma nova versão do benchmark.

## 3. Módulo A — Category Visibility

### Prompt set

20 prompts genéricos por setor, totalizando 100 prompts únicos.

Distribuição sugerida por setor:

- 6 prompts de descoberta/categoria;
- 5 prompts de comparação/shortlist;
- 4 prompts orientados a problema/necessidade;
- 3 prompts de validação/critérios de escolha;
- 2 prompts de cenário/contexto específico relevante ao setor.

Os prompts não devem mencionar previamente nenhuma das 10 marcas avaliadas.

### Métricas

**Mention Rate**

`prompts em que a marca foi mencionada / prompts válidos do setor`

**Recommendation Rate**

`prompts em que a marca foi apresentada como opção adequada / prompts válidos do setor`

**Citation Rate — Owned**

`prompts em que domínio/URL oficial da marca apareceu como fonte observável / prompts válidos do setor`

**Citation Rate — External**

`prompts em que uma fonte externa citada sustentou informação sobre a marca / prompts válidos do setor`

**Competitive Share of Mentions**

Participação da marca no total de menções das 10 marcas do setor dentro da mesma amostra. Não deve ser rotulada como market share.

**Source Share**

Distribuição dos domínios citados na amostra: marcas, imprensa, diretórios, fóruns, documentos oficiais e outras fontes.

## 4. Módulo B — Entity Accuracy

### Prompt set

3 prompts branded por marca, totalizando 150 prompts únicos.

Famílias:

1. `O que é [MARCA] e o que ela oferece?`
2. `Para quem [MARCA] é indicada e quais são seus principais serviços/produtos?`
3. `Quais informações importantes devo verificar antes de escolher/contratar [MARCA]?`

A redação pode ser adaptada ao setor, mas a intenção deve permanecer equivalente e a versão final deve ser congelada antes da coleta.

### Classificação

Cada resposta recebe revisão humana em dimensões separadas:

- identidade da organização: correta / parcial / incorreta / ausente;
- oferta principal: correta / parcial / incorreta / ausente;
- contexto de uso/público: correto / parcial / incorreto / ausente;
- presença de informação desatualizada;
- presença de afirmação relevante sem fonte observável;
- fonte oficial citada: sim/não;
- fonte externa citada: sim/não.

Não condensar essas dimensões em um único `Entity Authority Score` sem validação metodológica específica.

## 5. Plataformas e repetição

Piloto-alvo: 4 interfaces de Search AI que permitam observação consistente na data da coleta.

A lista final de produtos/plataformas, configuração de busca/web e condição de conta deve ser congelada no manifesto do ciclo.

### Repetições

- 2 repetições independentes por prompt no piloto;
- uma terceira repetição apenas para prompts prioritários ou para estudo específico de variabilidade;
- todas as repetições são armazenadas, inclusive quando contradizem a primeira resposta.

Com 250 prompts únicos × 4 plataformas × 2 repetições, o piloto-alvo produz até **2.000 respostas brutas**.

Esse número descreve o desenho planejado, não um dataset já coletado.

## 6. Unidade de registro

Cada execução deve registrar no mínimo:

- `study_version`
- `cycle_id`
- `sector_id`
- `brand_scope` (quando branded)
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

## 7. Regras de classificação

### Menção

Contar quando a entidade avaliada aparece identificável no corpo principal da resposta. Não contar apenas porque o domínio aparece em uma lista de fontes sem menção textual.

### Recomendação

Contar apenas quando a resposta apresenta a marca como opção apropriada, exemplo recomendado, shortlist ou escolha potencial para o cenário. Menção neutra não é recomendação.

### Citação

Contar apenas fonte visível/recuperável na interface observada ou nos metadados coletados pelo método. Não inferir uma fonte invisível.

### Fonte externa sobre a marca

Uma citação externa só é associada à marca quando sustenta uma afirmação relacionada à entidade, não apenas quando o domínio externo é citado por outro ponto da resposta.

## 8. Controle de qualidade

- 100% das respostas classificadas por regra determinística quando possível;
- revisão humana obrigatória para recommendation e entity accuracy;
- pelo menos 20% da amostra revisada por segundo revisor no piloto;
- divergências documentadas e resolvidas com regra adicionada ao codebook;
- nenhuma regra alterada retroativamente sem reprocessar o ciclo afetado.

## 9. Limitações que devem acompanhar qualquer publicação

- respostas generativas são variáveis;
- modelos, fontes e interfaces podem mudar durante ou após a coleta;
- contexto de conta, localização e disponibilidade de web search podem alterar respostas;
- a amostra de prompts representa o protocolo, não toda a demanda do mercado;
- Mention Rate não é participação de mercado;
- Citation Rate não prova causalidade de SEO/GEO;
- ausência de citação observável não prova ausência total de influência de uma fonte;
- resultados de um ciclo não devem ser tratados como propriedade permanente da marca.

## 10. Critérios para publicação

O primeiro relatório público só pode sair quando:

- manifesto de setores, marcas e prompts estiver versionado;
- coleta estiver completa para o ciclo declarado;
- taxa de erro/execuções inválidas estiver documentada;
- revisão humana mínima estiver concluída;
- codebook de classificação estiver publicado ou resumido;
- limitações estiverem no mesmo documento dos resultados;
- exemplos de respostas forem usados respeitando limites de reprodução/copyright;
- conclusões estiverem separadas de hipóteses de causa.

## 11. Saída pública planejada

Título de trabalho:

**State of Search AI Brasil 2026 — Como marcas aparecem, são citadas e são descritas nas interfaces de busca com IA**

O relatório deve conter:

1. metodologia e versão;
2. composição da amostra;
3. resultados agregados por setor;
4. distribuição de fontes;
5. padrões de menção vs citação vs recomendação;
6. padrões de Entity Accuracy;
7. exemplos qualitativos selecionados;
8. limitações;
9. hipóteses para ciclos futuros;
10. dataset público parcial ou metodologia suficiente para auditoria, conforme viabilidade jurídica e operacional.

## 12. Regra de integridade

Nenhuma porcentagem do Observatory deve ser publicada antes da coleta correspondente existir. O protocolo pode ser público antes dos números; os números nunca devem anteceder o protocolo.
