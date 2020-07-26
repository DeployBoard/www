terraform {
  required_version = ">= 0.12.0"

  required_providers {
    aws = "~> 2.68.0"
  }

  backend "s3" {
    bucket = "terraform"
    key    = "www/www.tfstate"
    region = "us-east-1"
  }
}

provider aws {
  region  = var.region
  profile = var.profile
}
