# Frontend 
Frontend for Food Processor, view & upload CSV files.

###  Start
You can run the app locally in this directory with:
`yarn` to install deps
`yarn start` to start the app

However, you won't see much, since you'll need an S3 Bucket & Cognito Auth

### Amplify
There's a detailed config guide here: 
- https://docs.amplify.aws/cli/start/install#pre-requisites-for-installation

If you already have an AWS account, its pretty easy:
Install the cli
`npm install -g @aws-amplify/cli`
`amplify configure`
then:
`amplify push`

### Ship amplify
To ship to the hosting bucket, run: `amplify publish` 
(I used the S3/Cloudfront Dev option for the demo)

###  Notable Tools/Libraries: 
- React
- AWS Amplify 
- TailwindCSS (& TailwindUI)
- React Router
