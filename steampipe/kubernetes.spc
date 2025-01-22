connection "kubernetes" {
  plugin         = "kubernetes"
  config_path    = "~/.kube/config"
  config_context = "default-context"
  source_types   = ["deployed"]
}