terraform {
  cloud {
    organization = "roadmap-sh"
    hostname     = "app.terraform.io"

    workspaces {
      name = "personal-site"
    }
  }
  required_providers {
    github = {
      source = "integrations/github"
      version = "6.6.0"
    }
  }
}

provider "github" {
  token = var.github_token
}