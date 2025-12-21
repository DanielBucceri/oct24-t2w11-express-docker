provider "aws" {
    region = var.region
}

resource "aws_s3_bucket" "demo_bucket_alex" {
    bucket = "${replace(lower(var.project_name), " ", "-")}-bucket-${random_id.bucket_id.hex}"
}

resource "random_id" "bucket_id" {
  byte_length = 4
}