output "bucket_name" {
    description = "The name of the s3 bucket that was created"
    value = aws_s3_bucket.demo_bucket_alex.bucket
}