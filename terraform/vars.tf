variable "env" {
  description = "Environment"
  type        = string
  default     = "dev"
}

variable "region" {
  description = "Region"
  type        = string
  default     = "us-east-1"
}

variable "profile" {
  description = "Profile"
  type        = string
  default     = "deployboard"
}

locals {
  bucket_name = var.env == "prod" ? "www.deployboard.io" : "${var.env}-www.deployboard.io"
}
