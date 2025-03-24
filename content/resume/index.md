---
title: "Resume - Krzysztof Zwolenik"
date: 2023-01-13T14:11:07-05:00
draft: false
type: "resume"
layout: "resume"
menu:
  main:
    name: "Download Resume"
    weight: -5
    pre: '<a class=printButton href="/Resume - Krzysztof Zwolenik.pdf" download="Resume - Krzysztof Zwolenik.pdf"; style="display: none;"><i class="fas fa-print"></i>'
    post: '<script> if (window.location.pathname === "/resume/") { document.querySelectorAll(".printButton").forEach(el => el.style.display = ""); }</script>'
name: Krzysztof Zwolenik
pro_title: DevOps engineer
description: DevOps Engineer with 7+ years of experience in the field, specializing in Kubernetes, Terraform, and cloud infrastructure automation. Proven track record of enhancing operational efficiency across teams to deliver scalable and reliable solutions.
personal_data:
  - value: Bilbao, Spain
  - value: +34 694 254 557
  - value: kzwolenik95@gmail.com
    link: mailto:kzwolenik95@gmail.com
  - value: LinkedIn
    link: https://www.linkedin.com/in/krzysztof-zwolenik-210101179
  - value: github
    link: https://github.com/kzwolenik95
sections:
  - name: Certificates
    content:
      - title: Certified Kubernetes Administrator (CKA)
        date: "2022.06.03"
      - title: AWS Certified SysOps Administrator – Associate
        date: "2023.10.30"
      - title: "HashiCorp Certified: Terraform Associate (003)"
        date: "2024.07.15"
  - name: Projects
    content:
      - title: Kubernetes on Digital Ocean
        description: |
          [This project](https://github.com/kzwolenik95/kubernetes-on-digitalocean) was developed to showcase the automated deployment of a Kubernetes cluster on DigitalOcean, employing Terraform for infrastructure provisioning and GitOps practices for configuration management.
          - Automated Kubernetes cluster on DigitalOcean using Terraform and Flux CD, integrating Vault, Kong ingress with TLS and Prometheus stack for monitoring
          - It demonstrates my expertise in deploying a secure, observable Kubernetes cluster using modern DevOps methodologies
          - it integrates various cloud-native technologies and follows best practices to create a high-quality infrastructure solution

      - title: Roadmap.sh DevOps Challenges
        description: |
          Roadmap.sh DevOps challenges provide practical projects from basic server setups to advanced deployments, which **I often extended** by experimenting with my own approaches or tools to further hone my skills

          - 🔭 [My Roadmap.sh Repository](https://github.com/orgs/roadmap-sh-kzwolenik95/repositories)
          - Highlighted Challenges:

            - [**Automated-Backups**](https://github.com/roadmap-sh-kzwolenik95/automated-backups): Proud of my clever pipeline design using the `dorny/paths-filter` action to skip jobs, reducing execution time
            - [**Dockerized-Service-Deployment**](https://github.com/roadmap-sh-kzwolenik95/dockerized-service-deployment): Utilized a distroless image and implemented caching in the GitHub Actions pipeline to reduce execution time
            - Several other [**intermediate**](https://github.com/orgs/roadmap-sh-kzwolenik95/repositories?q=topic%3Aintermediate) challenges that I extended further honing my DevOps skills
  - name: Skills
    cols: 3
    content:
      - items:
          - Kubernetes
          - Terraform
          - Python, Bash
          - Linux
          - AWS
          - Monitoring
          - CI/CD
          - Networking
          - Ansible
          - Docker
  - name: Work Experience
    content:
      - title: Cloud Admin L2
        subtitle: Aditi – Bogota, Colombia, later Remote from Spain
        date: 2023.03 – Present
        description: |
          - Manage Kubernetes clusters on Amazon EKS as part of a Cluster-as-a-Service team, providing infrastructure for application teams.
          - Operate and troubleshoot Terraform pipelines in GitLab for cluster provisioning and upgrades.
          - Collaborate with the DevOps team to maintain and improve Terraform modules.
          - Handle Kubernetes manifests for internal cluster-specific tools.
          - Coordinate with AWS support to resolve infrastructure-related issues.
          - Monitor cluster health using Datadog, creating alerts and dashboards for visibility.
          - Optimize monitoring coverage while reducing Datadog costs.
          - Enhance team efficiency by developing CLI scripts to streamline routine tasks.
          - Work closely with application teams to address cluster-related needs and ensure reliable Kubernetes environments.
      - title: System Administrator
        subtitle: Comarch SAS – Bogota, Colombia
        date: 2019.06 — 2023.03
        description: |
          - Ownership of monitoring systems and client communication.
          - Managed on-premise Linux systems, Oracle databases, and Java applications.
          - Supported the transition to Docker-based microservices and early-stage Kubernetes on OpenShift.
          - Automated a complex, error-prone manual process using an internal tool, reducing execution time from one hour to a few minutes.
          - Maintained and troubleshot Jenkins pipelines, contributing to permanent solutions.
          - Configured Prometheus and created advanced Grafana dashboards for monitoring.
          - Improved system observability with Nagios by creating custom bash scripts.
          - Collaborated with international clients (Dominican Republic, Colombia, and Argentina).
          - Provided ad hoc SQL reports for client-specific requests like data integrity checks.
      - title: 1st line support enginner
        date: 2017.07 — 2019.06
        subtitle: Comarch SA – Cracow, Poland
        description: |
          - Provided technical support for on-premise Linux systems, Oracle databases, and Java applications (Apache, Tomcat, and Oracle WebLogic).
          - Automated routine tasks using Bash and Python scripts scheduled with cron, improving efficiency.
          - Extended Nagios monitoring by creating custom scripts for system checks not covered by default.
          - Maintained high SLAs by resolving tickets promptly and collaborating with 2nd line engineers and developers.
          - Documented monitoring procedures and standard operating workflows to facilitate knowledge sharing across the team.
  - name: Education
    content:
      - title: Computer Science
        date: 2014.08 — 2018.03
        subtitle: AGH University of Science and Technology – Cracow, Poland
  - name: Languages
    content:
      - items:
          - "Polish: native"
          - "English: fluent"
          - "Spanish: fluent"
---

This is my resume page
