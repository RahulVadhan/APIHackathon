We Care
==============

We Care
We Care app gives extra money power in Account holders hand. If subscribed, the account holder could get upto 25 percent of the recurring salary credit every month in the account to meet any immediate monetary situation.  
Features
Eligibility
Bank Account needs to be atleast a year old
Bank account should be a Salary account
Once subscribed the account holder will get 25 Percent of the monthly Salary(Average of three months credited into the account)
The subscribed amount will be deducted once the salary of the account holder is credited into the account
Incase of non payment, the nominal fine of 0.25percent per month on subscribed amount is levied
The account holder can click and unsubscribe this feature anytime
Functioning
Subscribe by clicking Subscribe for Insta Loan and submit
Click Get Account Balances to get the available balance in account
Click Get Account Transaction to view last transaction to and from the account
Click Get Account List to view the list of interlinked accounts
Licence
No Licence required
Installation
App download on existing bank app with regular updates available
Platform
Any Platform friendly

Authors
Sandeep Saha
Contributor
Rahul Vadhan
Nitin Goyal
Himanshu Sehgal
Sandeep Saha
Acknowledgments
Awanish K Singh


A collection AISP and PISP APIs.

Pre-requisites
--------------

* You should have NODE JS installed on your system. You can download and install nodejs from [here](https://nodejs.org/en/download/).
* To check the version of node, use command 'node -v'
* Once nodejs is installed, install lerna by using the command

``` nowrap
npm install -g lerna
```

Usage
-----

### Install

First, install the dependencies:

``` nowrap
npm install
```

### Running the app

Create an enviroment file (.env) file in /packages/web-app folder and add an entry for REACT_APP_ACCOUNT_ID. This account id will be used for for fetching various details of an account.

You can also add an entry for PORT (optional) if facing any issue with port while running the application. This will run your app on the specified port number if added otherwise will point to the default port. 

``` nowrap
PORT=4001
REACT_APP_ACCOUNT_ID=11111111
```
To run the application, use command:

``` nowrap
npm start
```

#### Connecting with mock-server

Start the application in one instance with 'npm start' and in another instance, run the below command.

``` nowrap
npm run mock-server
```

This will stub the rest api calls and return the mock response.

#### Connecting with sdk

Download and setup the sdk code from the [url](https://github.com/HashApithon/openbanking-java-sdk)

### Getting familiar with open banking related terms

To get familiar with the terms, you can check the [glossary](https://bankofapis.com/glossary)