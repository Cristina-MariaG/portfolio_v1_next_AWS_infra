# Project – Eco DB
**Secure Web Application for Economic Data Management and Distribution**

---

## Project Description

I designed and developed a web application (**Eco DB**) for managing economic data, used in production by **company employees and external partners**.  
The application allows users to **view, filter, create, update, and delete data**, with **fine-grained role- and category-based access control** (read-only users, users with extended permissions, and super administrators).

The **backend is a secure, centralized platform**, exposing **REST APIs** consumed both by the main web application and by **other internal business applications**, supporting **real-world users in professional contexts**.  
Every access is **strictly verified**: requests are authenticated using **tokens**, and user roles and permissions are enforced to ensure access only to authorized data.

Data can be **filtered at the backend** using multiple query parameters and **dynamically in the frontend** according to business needs (categories, indicators, periods, user roles).  
Authentication is handled via **Keycloak (SSO)**, providing secure login, token generation and validation, and automatic synchronization of users and roles with the application database.

The project followed an **Agile methodology**, starting with an initial MVP, followed by **iterative improvements based on user feedback**, resulting in a **robust and scalable production-ready application**.

---

## Technical Approach & Implementation

- **MVP development:** JavaScript + Django  
- **User testing** and business requirement gathering  
- **Backend evolution:**  
  - Secure REST APIs  
  - Support for multiple client applications  
  - Advanced server-side filtering  

- **Application refactor and final implementation:**  
  - **Frontend:** Vue.js + Vuetify  
  - **Backend:** Django / Django REST Framework  

- **Databases:**  
  - MySQL (primary relational database)  
  - NoSQL for specific storage and performance needs  

- **Data transformation from Excel:**  
  - Cleaning, normalization, and validation  
  - Advanced manipulation using **Pandas**  
  - Integration into a production-ready database  

- **DevOps & deployment:**  
  - Docker containerization  
  - CI/CD with GitLab  
  - Traefik reverse proxy for routing, security, and access management  

---

## Skills Acquired

### Security & Access Management
- SSO authentication implementation with **Keycloak**  
- Authentication token generation and validation  
- Securing APIs and application routes  
- Synchronization of Keycloak users and roles with the application database  
- Fine-grained role- and category-based access control  
- Systematic verification of every user and application request  

### Backend & API Architecture
- Design of an **API-first backend using Django REST Framework**  
- Backend shared across multiple business applications  
- Implementation of **complex server-side filtering**  
- Management of query parameters (filtering, sorting, pagination)  
- Design and management of **SQL and NoSQL databases**  
- Data modeling and schema optimization  

### Data Processing & Manipulation
- Transformation of **Excel data** into structured databases  
- Cleaning, validation, and normalization  
- Advanced manipulation using **Pandas**  
- Filtering, aggregation, and restructuring of economic data  
- Converting raw data into reliable, production-ready datasets  

### Frontend Development
- Development of a **Single Page Application (SPA) with Vue.js**  
- UI design and implementation with **Vuetify**  
- State management with **Vuex**  
- Dynamic data filtering based on multiple parameters  
- Role-based UI rendering and feature access  

### DevOps & Deployment
- Application containerization with **Docker**  
- Integration of **Traefik** as reverse proxy  
- CI/CD pipeline management with **GitLab**  
- Deployment and maintenance of a **multi-service architecture**  

### Methodology & Collaboration
- Agile methodology with iterative development  
- Business requirement analysis and prioritization  
- Ability to evolve an MVP into a **scalable production application**  
- Collaboration with technical and non-technical stakeholders  
