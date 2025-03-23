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
    pre: '<a class=printButton href="" onclick=''if(window.location.pathname == "/resume/") { window.print(); } return false;'' style="display: none;"><i class="fas fa-print"></i>'
    post: '<script> if (window.location.pathname === "/resume/") { document.querySelectorAll(".printButton").forEach(el => el.style.display = ""); }</script>'
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
          As a Cloud Admin L2, **I manage Kubernetes clusters on Amazon EKS** as part of a Cluster-as-a-Service team, providing infrastructure for application teams across the organization. I operate and troubleshoot Terraform pipelines in GitLab that automate cluster provisioning and upgrades, working closely with the DevOps team responsible for maintaining the underlying Terraform modules. **I handle Kubernetes manifests for internal cluster-specific tools** and coordinate with AWS support to resolve infrastructure-related issues. I use Datadog to monitor cluster health, creating alerts and dashboards to ensure visibility for both our team and application owners. **My contributions include optimizing monitoring coverage while reducing Datadog costs** and enhancing team efficiency by developing CLI scripts that streamline routine tasks. I collaborate with application teams and the DevOps group to address cluster-related needs, ensuring reliable and scalable Kubernetes environments.
      - title: System Administrator
        subtitle: Comarch SAS – Bogota, Colombia
        date: 2019.06 — 2023.03
        description: |
          As a System Administrator, I advanced to a 2nd line support role, **taking ownership of monitoring systems** and client communication. I managed on-premise Linux systems, Oracle databases, and evolving Java applications while supporting the transition of the web layer to Docker-based microservices and an early-stage Kubernetes deployment on OpenShift within the company's private cloud. **I implemented an automated interface for an internal tool, reducing a complex and error-prone one-hour manual process to a few minutes.** This automation not only improved operational efficiency but also minimized human error during critical workflows. **I automated server configurations using Bash, Python, and Ansible and maintained Jenkins pipelines**, troubleshooting deployments and contributing to permanent solutions. My monitoring responsibilities expanded **to configuring Prometheus and creating advanced Grafana dashboards** while continuing to enhance Nagios scripts for better system observability. I collaborated with international clients in Dominican Republic, Colombia and Argentina, addressing technical concerns and improving ticket response times. Additionally, I provided one-off SQL reports to meet client-specific requests, such as data integrity checks. Despite my new responsibilities, I continued to handle select tasks from my previous role to ensure consistent service quality and operational efficiency.
      - title: 1st line support enginner
        date: 2017.07 — 2019.06
        subtitle: Comarch SA – Cracow, Poland
        description: |
          In this role, I provided technical support for on-premise Linux systems, Oracle databases, and Java applications on Apache, Tomcat, and Oracle WebLogic. **I automated routine tasks using Bash and Python scripts scheduled with cron, reducing manual work and improving efficiency.** I extended Nagios monitoring by creating custom scripts for system checks not covered by default, enhancing system visibility. By resolving tickets promptly and collaborating with 2nd line engineers and developers, I maintained high SLAs and improved incident response processes. I also documented monitoring procedures and standard operating workflows, facilitating better knowledge sharing across the team.
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
