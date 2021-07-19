![Logo](https://github.com/wk0/foodprocessor/blob/main/frontend/public/logo192.png)
# Food Processor

Food Processor is a multi-use tool for chopping and mincing food data. 

Data can be chopped & minced on the backend via jupyter notebook, edited on the frontend in a clean UI, or as you please via CSV. 

To showcase the Food Processor, a Kaggle dataset is included.

Disclaimer: Food Processor is not yet ready for production use, but you can spin it up yourself with an AWS account. 

## Demo 
[Checkout a running demo](http://foodprocessor-20210719002024-hostingbucket-dev.s3-website-us-east-1.amazonaws.com/documents)


## Start:
- Head to the frontend readme to setup the app & aws resources with amplify
- Then follow the backend readme 



## Data

Sourced from Kaggle
https://www.kaggle.com/datafiniti/food-ingredient-lists

- Create a kaggle account
- Download the dataset from the above url
- Either:
    - unzip `ingredients v1.csv` into the data-dev/ folder and `pipenv run dev upload`
    - upload the file via the frontend Documents page


