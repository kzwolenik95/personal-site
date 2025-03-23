resource "github_repository" "repo" {
  name = var.repository_name

  pages {
    source {
      branch = "main"
    }
    build_type = "workflow"
    cname      = "www.${var.apex_domain}"
  }
}

data "cloudflare_zones" "domain-zone" {
  name = var.apex_domain
}

resource "cloudflare_dns_record" "apex" {
  count   = length(var.GitHub_a_records)

  zone_id = data.cloudflare_zones.domain-zone.result.0.id
  comment = "Github pages- ${var.apex_domain}"
  content = var.GitHub_a_records[count.index]
  name    = var.apex_domain
  proxied = false
  ttl     = 3600
  type    = "A"
}

locals {
  github_owner = split("/", github_repository.repo.full_name)[0]
}

resource "cloudflare_dns_record" "www" {
  zone_id = data.cloudflare_zones.domain-zone.result.0.id
  comment = "Github pages - www.${var.apex_domain}"
  content = "${local.github_owner}.github.io"
  name    = "www.${var.apex_domain}"
  proxied = false
  ttl     = 3600
  type    = "CNAME"
}
