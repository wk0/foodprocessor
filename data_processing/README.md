# Food Processor - Data Client

Provides a notebook environment to edit your csv data locally & sync with S3. 

### Env
You will have to populate the `.env` file with AWS settings.
All of these should be available after `amplify init` in the frontend file: `./frontend/src/aws-exports.js`

An `.env.sample` is provided to create your `.env`

### Setup 
To start the dev environment: 
`pipenv install`

Then you can:
- `pipenv run test` to run tests (more to come!)
- `pipenv run download-dev` to download csv files from the s3 bucket
- `pipenv run upload-dev` to upload new csv files from the /data-dev folder

The download & upload also work with prod if you set that up

### Data processing 
For now, a sample notebook is provided to show a pretty basic operation. 
I prefer to run the notebook in VSCode, (activate the env with `pipenv shell` first if you do)

Starting from the original `ingredients v1.csv`, it does some basic processing and writes `ingredients v2.csv` to the dev-data directory.

After it is written, you can upload it to the s3 bucket with the `pipenv run upload-dev` pipenv script, and see it in the frontend. 