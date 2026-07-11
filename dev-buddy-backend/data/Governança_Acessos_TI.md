# Documentação de Governança de Identidade e Acessos (IAM)

## 1. Visão Geral
Este documento define a matriz de controle de acessos baseada em cargos (RBAC). A integração central é realizada via Active Directory (AD/LDAP).

## 2. Mapeamento de Funções (Role-Based Access Control)

| Cargo | Grupo LDAP/AD | Escopo de Acesso (SSH) | Escopo de Acesso (SAP) | Outros Acessos |
| :--- | :--- | :--- | :--- | :--- |
| **SRE** | `g_sre_tech` | Prod / Staging (Completo) | Monitoramento | Kubernetes, Cloud |
| **Dev** | `g_dev_team` | Staging (Limitado) | Amb. Desenvolvimento | Git, CI/CD |
| **Admin Sys** | `g_admin_sys` | Total (Root/Admin) | Total (Config) | DB, Network |
| **Suporte** | `g_support_desk` | Não | Suporte (Nível 1) | Jira, Tickets |
| **Gerente TI** | `g_mgmt_it` | Somente Leitura | Relatórios | Dashboards, Finance |

## 3. Protocolos de Segurança e Auditoria
*   **Princípio do Menor Privilégio:** Usuários devem ser membros apenas dos grupos estritamente necessários para suas funções.
*   **Segregação de Funções (SoD):** Devs não possuem acesso de administrador em sistemas de produção.
*   **Ciclo de Vida:** A remoção de um usuário do grupo AD no LDAP revoga automaticamente o acesso em todas as ferramentas integradas (SSH, SAP, etc.).
*   **Revisão Periódica:** As associações de grupos devem ser auditadas trimestralmente.

## 4. Integração com IA
Este documento serve como fonte de verdade para verificações de conformidade. A IA deve consultar esta tabela ao avaliar solicitações de acesso ou auditorias de permissão.
