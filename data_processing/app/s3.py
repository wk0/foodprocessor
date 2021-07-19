import os
import boto3
from botocore.exceptions import ClientError
import argparse

# get s3 resource with provided env credentials
s3 = boto3.resource(
    "s3",
    aws_access_key_id=os.environ["AWS_ACCESS_KEY"],
    aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
)


def _download_s3_folder(bucket_name, local_dir=None, s3_folder="public"):
    """
    Download the contents of a folder directory
    Args:
        bucket_name: the name of the s3 bucket
        local_dir: a relative or absolute directory path in the local file system
        s3_folder: the folder path in the s3 bucket
    """
    bucket = s3.Bucket(bucket_name)
    for obj in bucket.objects.filter(Prefix=s3_folder):
        target = (
            obj.key
            if local_dir is None
            else os.path.join(local_dir, os.path.relpath(obj.key, s3_folder))
        )
        if not os.path.exists(os.path.dirname(target)):
            os.makedirs(os.path.dirname(target))
        if obj.key[-1] == "/":
            continue
        bucket.download_file(obj.key, target)


def _upload_files_s3(bucket_name, local_dir, s3_folder="public"):
    """
    Upload a novel files in folder to an S3 bucket
    Args:
        bucket_name: Bucket to upload to
        local_dir: Folder to upload
        s3_folder: S3 path to place the file
    :return: True if file was uploaded, else False
    """
    bucket = s3.Bucket(bucket_name)
    existing_files = []
    for obj in bucket.objects.filter(Prefix=s3_folder):
        existing_files.append(obj.key.split("/")[1])

    for file in os.listdir(local_dir):
        if file.endswith(".csv") and file not in existing_files:
            try:
                path = local_dir + "/" + file
                response = s3.meta.client.upload_file(
                    path, bucket_name, f"{s3_folder}/{file}"
                )
            except ClientError as e:
                print("Uploading to s3 error", e)


def upload_folder(app_env):
    if app_env == "dev":
        _upload_files_s3(
            local_dir="data-dev",
            bucket_name=os.environ["USER_FILES_DEV_BUCKET"],
            s3_folder="public",
        )
    elif app_env == "prod":
        _download_s3_folder(
            local_dir="data-prod",
            bucket_name=os.environ["USER_FILES_PROD_BUCKET"],
            s3_folder="public",
        )


def download_folder(app_env):
    # Call based on current env settings
    if app_env == "dev":
        _download_s3_folder(
            bucket_name=os.environ["USER_FILES_DEV_BUCKET"],
            s3_folder="public",
            local_dir="data-dev",
        )
    elif app_env == "prod":
        _download_s3_folder(
            bucket_name=os.environ["USER_FILES_PROD_BUCKET"],
            s3_folder="public",
            local_dir="data-prod",
        )


if __name__ == "__main__":
    # Instantiate the parser
    parser = argparse.ArgumentParser(description="S3 scripts for Food Processor")
    parser.add_argument("app_env", type=str, help="dev or prod")
    parser.add_argument("action", type=str, help="download or upload")

    args = parser.parse_args()
    app_env = args.app_env
    action = args.action

    if action == "upload":
        upload_folder(app_env)
    elif action == "download":
        download_folder(app_env)
    else:
        print("Did not specify upload or download!")
