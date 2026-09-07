# AUDITSEO Search AI Observatory — Protocolo Piloto v1

Status: escopo, marcas e prompts congelados para o piloto; coleta ainda não executada.
Data do protocolo: 2026-09-07.

## 1. Objetivo

Construir um baseline reproduzível de como marcas de software B2B com presença no mercado brasileiro são mencionadas, citadas, recomendadas e descritas em interfaces de Search AI, sem transformar respostas variáveis em um ranking universal.

O piloto responde duas perguntas diferentes:

1. **Category Visibility:** quais marcas aparecem quando um usuário pergunta sobre uma categoria, problema, comparação ou decisão sem citar uma marca previamente?
2. **Entity Accuracy:** quando uma marca é citada explicitamente no prompt, a plataforma descreve corretamente quem ela é, o que oferece e em quais contextos é relevante?

Esses módulos não devem ser fundidos em uma única taxa.

## 2. Escopo congelado do piloto

O primeiro ciclo será um estudo de **software B2B no Brasil**, não uma amostra representativa de toda a economia brasileira.

### Categorias

1. CRM e gestão comercial
2. ERP e gestão para PME
3. Plataformas de e-commerce
4. Automação de marketing
5. Atendimento omnichannel e help desk

A escolha dessas categorias segue critérios definidos antes da coleta:

- pelo menos 10 marcas com presença digital pública e possibilidade real de comparação;
- jornada de decisão baseada em pesquisa, comparação e validação;
- abundância de páginas de produto, documentação, reviews e fontes externas;
- mistura de players brasileiros e globais operando ou sendo considerados no Brasil;
- baixo risco de uma recomendação da amostra exigir interpretação médica, jurídica ou financeira individualizada.

### Marcas

- 10 marcas por categoria;
- 50 marcas no total;
- manifesto congelado em `docs/research/observatory-brand-manifest-v1.csv`;
- campo de domínio oficial permanece `pending_verification` até conferência em fonte oficial;
- nenhuma marca pode ser adicionada ou removida depois de observar respostas sem criar uma nova versão do benchmark.

## 3. Módulo A — Category Visibility

### Prompt set

20 prompts genéricos por categoria, totalizando **100 prompts únicos**.

O manifesto completo está congelado em:

`docs/research/observatory-category-prompts-v1.csv`

Distribuição por categoria:

- 6 prompts de descoberta/categoria;
- 5 prompts de comparação/shortlist;
- 4 prompts orientados a problema/necessidade;
- 3 prompts de validação/critérios de escolha;
- 2 prompts de cenário/contexto específico.

Os prompts não mencionam previamente nenhuma das 10 marcas avaliadas no setor.

### Métricas

**Mention Rate**

`prompts em que a marca foi mencionada / prompts válidos da categoria`

**Recommendation Rate**

`prompts em que a marca foi apresentada como opção adequada / prompts válidos da categoria`

**Citation Rate — Owned**

`prompts em que domínio/URL oficial da marca apareceu como fonte observável / prompts válidos da categoria`

**Citation Rate — External**

`prompts em que uma fonte externa citada sustentou informação sobre a marca / prompts válidos da categoria`

**Competitive Share of Mentions**

Participação da marca no total de menções das 10 marcas da categoria dentro da mesma amostra. Não deve ser rotulada como market share.

**Source Share**

Distribuição dos domínios citados na amostra: marcas, imprensa, diretórios, fóruns, documentação e outras fontes.

## 4. Módulo B — Entity Accuracy

### Prompt set

3 prompts branded por marca, totalizando **150 prompts únicos**.

Os templates setoriais estão congelados em:

`docs/research/observatory-entity-prompt-templates-v1.csv`

A expansão é determinística: 3 templates × 10 marcas × 5 categorias = 150 prompts. Não existe escolha manual de prompt por marca depois de observar respostas.

### Classificação

Cada resposta recebe revisão em dimensões separadas:

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

A lista final de produtos/plataformas, configuração de busca/web e condição de conta deve ser congelada no manifesto do ciclo imediatamente antes da coleta, porque produtos e modos podem mudar rapidamente.

### Repetições

- 2 repetições independentes por prompt no piloto;
- uma terceira repetição apenas para estudo específico de variabilidade, em versão separada;
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

- classificação determinística sempre que possível;
- revisão humana obrigatória para Recommendation e Entity Accuracy;
- pelo menos 20% da amostra revisada por segundo revisor no piloto;
- divergências documentadas e resolvidas com regra adicionada ao codebook;
- nenhuma regra alterada retroativamente sem reprocessar o ciclo afetado;
- execuções inválidas ou incompletas permanecem registradas e entram na taxa de erro do ciclo.

## 9. Limitações que devem acompanhar qualquer publicação

- respostas generativas são variáveis;
- modelos, fontes e interfaces podem mudar durante ou após a coleta;
- contexto de conta, localização e disponibilidade de web search podem alterar respostas;
- a amostra de prompts representa o protocolo, não toda a demanda do mercado;
- o piloto representa cinco categorias de software B2B, não todas as empresas do Brasil;
- Mention Rate não é participação de mercado;
- Citation Rate não prova causalidade de SEO/GEO;
- ausência de citação observável não prova ausência total de influência de uma fonte;
- resultados de um ciclo não devem ser tratados como propriedade permanente da marca.

## 10. Critérios para publicação

O primeiro relatório público só pode sair quando:

- domínios oficiais das 50 marcas estiverem verificados;
- manifesto de marcas e prompts estiver versionado;
- manifesto de plataformas/modos do ciclo estiver congelado;
- coleta estiver completa para o ciclo declarado;
- taxa de erro/execuções inválidas estiver documentada;
- revisão humana mínima estiver concluída;
- codebook de classificação estiver publicado ou resumido;
- limitações estiverem no mesmo documento dos resultados;
- exemplos de respostas forem usados respeitando limites de reprodução/copyright;
- conclusões estiverem separadas de hipóteses de causa.

## 11. Saída pública planejada

Título de trabalho:

**State of Search AI Brasil 2026 — Software B2B: como marcas são mencionadas, citadas, recomendadas e descritas**

O relatório deve conter:

1. metodologia e versão;
2. composição da amostra;
3. resultados agregados por categoria;
4. distribuição de fontes;
5. padrões de menção vs citação vs recomendação;
6. padrões de Entity Accuracy;
7. exemplos qualitativos selecionados;
8. limitações;
9. hipóteses para ciclos futuros;
10. dataset público parcial ou metodologia suficiente para auditoria, conforme viabilidade jurídica e operacional.

## 12. Regra de integridade

Nenhuma porcentagem do Observatory deve ser publicada antes da coleta correspondente existir. O protocolo e os manifestos podem ser públicos antes dos números; os números nunca devem anteceder o protocolo.
