variable "github_token" {
  description = "GitHub Access Token"
  type        = string
  sensitive   = true
}

variable "repository_name" {
  description = "The full name of the repository (e.g., owner/repo)"
  type        = string
}