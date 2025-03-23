variable "github_token" {
  description = "GitHub Access Token"
  type        = string
  sensitive   = true
}

variable "repository_name" {
  description = "The full name of the repository (e.g., owner/repo)"
  type        = string
}

variable "cloudflare_api_token" {
  description = "CloudFlare API token"
  type        = string
  sensitive   = true
}

variable "apex_domain" {
  description = "Domain registered in CloudFlare"
  type        = string
}

variable "GitHub_a_records" {
  type = list(string)
  default = [
    "185.199.108.153",
    "185.199.109.153",
    "185.199.110.153",
    "185.199.111.153"
  ]
}