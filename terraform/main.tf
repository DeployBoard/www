resource "aws_s3_bucket" "www" {
  bucket = local.bucket_name
  acl    = "public-read"
  //policy = "${file("policy.json")}"

  website {
    index_document = "index.html"
    error_document = "404.html"

    routing_rules = <<EOF
[
  {
    "Condition": {
      "KeyPrefixEquals": "documents/"
    },
    "Redirect": {
      "ReplaceKeyPrefixWith": "docs/"
    }
  },
  {
    "Condition": {
      "KeyPrefixEquals": "documentation/"
    },
    "Redirect": {
      "ReplaceKeyPrefixWith": "docs/"
    }
  }
]
EOF
  }
}
