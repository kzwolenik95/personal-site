---
title: "Resume - Krzysztof Zwolenik"
date: 2023-01-13T14:11:07-05:00
draft: false
type: "resume"
layout: "resume"
menu:
  main:
    name: "Print Resume"
    weight: -5
    pre: '<a id=printButton href="" onclick=''if(window.location.pathname == "/resume/") { window.print(); } return false;'' style="display: none;"><i class="fas fa-print"></i>'
    post: '<script> if (window.location.pathname === "/resume/") { document.getElementById("printButton").style.display = ""; }</script>'
name: Krzysztof Zwolenik
pro_title: DevOps engineer
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

  - name: Work Experience
    content:
      - title: Cloud Admin L2
        subtitle: Aditi – Bogota, Colombia, later Remote from Spain
        date: 2023.03 – Present
        description: |
          - Managed and upgraded EKS clusters, ensuring high availability and security compliance.
          - Automated infrastructure provisioning using Terraform, reducing deployment times by 30%.
          - Debugged and optimized GitLab CI/CD pipelines, enhancing overall system reliability.
          - Resolved complex application issues running in Kubernetes, ensuring minimal downtime.
          - Monitored system health and performance using Datadog, proactively addressing potential - issues.
      - title: System engineer
        subtitle: Comarch SAS – Bogota, Colombia
        date: 2019.06 — 2023.03
        description: |
          - Deployed and managed Kubernetes clusters for development, staging, and production environments.
          - Configured and maintained Prometheus and Grafana monitoring stacks, creating actionable dashboards.
          - Developed and maintained Jenkins pipelines to streamline application deployments.
          - Automated routine tasks using Python and Bash, improving team efficiency.
          - Collaborated with cross-functional teams to resolve technical issues and ensure smooth operations.
      - title: 1st line support enginner
        date: 2017.07 — 2019.06
        subtitle: Comarch SA – Cracow, Poland
        description: |
          - Responded to customer inquiries, troubleshooting Linux OS, SQL database, and Apache web server issues.
          - Reacted to monitoring alerts, escalating complex incidents as needed.
          - Documented procedures and issue resolutions in Confluence to support knowledge sharing.
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
