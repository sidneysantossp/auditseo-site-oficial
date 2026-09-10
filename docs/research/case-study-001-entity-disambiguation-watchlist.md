# Case Study #001 — Entity Disambiguation Watchlist

Data de congelamento: 2026-09-08
Status: ativo para checkpoints pós-release

## Objetivo

Acompanhar se a entidade `AUDITSEO` passa a ser recuperada de forma mais consistente como a consultoria brasileira de Search Intelligence associada a `www.auditseo.com.br` e a Sidney Santos, sem confundir melhora de recuperação com garantia de ranking ou prova de comportamento interno de um mecanismo.

O watchlist existe porque o baseline pré-release mostrou simultaneamente:

- domínio oficial recuperável;
- associação pública `Sidney Santos — AUDITSEO` em diretório do LinkedIn;
- representação externa antiga como `Auditseo | Agência de SEO` na Opendi;
- uma entidade não relacionada usando o mesmo nome textual em `auditseo.app`;
- ausência dos novos ativos Authority → Lead na amostra de buscas feita antes do release.

Baseline detalhado:
`docs/research/case-study-001-external-web-baseline-2026-09-08.md`

## Queries congeladas

As queries abaixo não devem ser removidas porque apresentem resultados desfavoráveis.

| ID | Query | O que observar |
|---|---|---|
| ED01 | `AUDITSEO` | presença do domínio oficial, presença de entidades homônimas, títulos/snippets e fontes externas |
| ED02 | `AUDITSEO SEO` | associação da marca com SEO vs. ferramenta homônima / outros significados |
| ED03 | `AUDITSEO Search Intelligence` | recuperação da categoria central e páginas oficiais relacionadas |
| ED04 | `Sidney Santos AUDITSEO` | associação fundador ↔ organização ↔ especialidade |
| ED05 | `Sidney Santos Search Intelligence` | associação do especialista à categoria, sem depender apenas da marca |
| ED06 | `AUDITSEO GEO` | recuperação de hub comercial, artigos e/ou menções externas relevantes |
| ED07 | `AUDITSEO Search AI` | recuperação de páginas oficiais ligadas a Search AI e pesquisa |
| ED08 | `AUDITSEO ChatGPT` | recuperação de documentos sobre presença/recomendação/citação em ChatGPT |
| ED09 | `site:auditseo.com.br "Search Intelligence"` | expansão observável da superfície oficial relacionada à categoria |
| ED10 | `"AUDITSEO Research"` | recuperação do Research Hub ou referências externas ao programa de pesquisa |
| ED11 | `"Quanto custa uma consultoria de SEO + GEO/IA em 2026"` | recuperação do Benchmark #001 e possíveis reutilizações externas |
| ED12 | `"Como o mercado brasileiro vende GEO e Search AI em 2026"` | recuperação do Benchmark #002 e possíveis reutilizações externas |
| ED13 | `"Case Study #001" AUDITSEO` | recuperação do case oficial ou referências independentes |
| ED14 | `"AUDITSEO" "Agência de SEO"` | persistência/redução da narrativa externa antiga de agência |
| ED15 | `"AUDITSEO" "Consultoria de Search Intelligence"` | adoção externa/recuperação da narrativa atual |

## Campos a registrar por checkpoint

Para cada query:

- `checkpoint_date`
- `query_id`
- `official_domain_observed` — yes/no
- `official_url_observed`
- `founder_association_observed` — yes/no/not_applicable
- `search_intelligence_association_observed` — yes/no/not_applicable
- `unrelated_auditseo_observed` — yes/no
- `legacy_agency_label_observed` — yes/no/not_applicable
- `research_asset_observed` — yes/no/not_applicable
- `independent_external_reference_observed` — yes/no
- `notes`
- `evidence_url_or_capture_ref`

## Regra de interpretação

### Positivo

Exemplos de sinais compatíveis com melhor desambiguação:

- mais queries recuperam `auditseo.com.br` em contexto coerente com Search Intelligence;
- Sidney Santos aparece associado à AUDITSEO e à especialidade correta;
- Research Hub/benchmarks/case passam a ser recuperados por suas perguntas/títulos;
- fontes independentes passam a descrever a AUDITSEO com a narrativa atual;
- a representação antiga como “Agência de SEO” deixa de ser a principal descrição externa observada.

### Negativo

Exemplos:

- domínio oficial deixa de ser recuperado em queries branded onde aparecia no baseline;
- entidade homônima passa a dominar de forma consistente queries que antes recuperavam a AUDITSEO brasileira;
- snippets ou fontes externas passam a atribuir características incorretas à organização/fundador;
- novas inconsistências NAP/narrativa aparecem em fontes públicas relevantes.

### Inconclusivo

- uma única mudança de posição;
- diferença entre data centers/interfaces;
- ausência pontual de uma página em uma busca;
- mudança sem série comparável;
- resultados personalizados ou não reproduzíveis.

## Sem score composto no início

Não criar `Entity Authority Score`, `AI Entity Score` ou qualquer nota proprietária enquanto não houver histórico suficiente para justificar pesos.

O primeiro ciclo deve preservar dimensões separadas. Se um score vier a existir no futuro, a fórmula e os pesos devem ser publicados antes de serem usados como argumento comercial.

## Checkpoints

Executar pelo menos em:

- pré-release: 2026-09-08 — baseline já documentado;
- D+7;
- D+14;
- D+30;
- D+60;
- D+90;
- D+180.

Checkpoints por evento material podem ser adicionados sem substituir os pré-definidos.

## Relação com o Evidence Ledger

E014 representa o baseline M0 desta frente.

Uma mudança isolada após o release pode gerar M1 apenas quando houver evidência verificável e comparável. M2 exige repetição em múltiplas observações/queries. Nenhuma melhora deste watchlist, isoladamente, prova que um LLM “passou a entender” a entidade internamente.
