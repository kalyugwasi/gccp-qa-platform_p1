What are some AppSheet data types available for you to use in your app? Select four.
- Name
- Price
- ChangeTimestamp
- Address

What is a slice in AppSheet?
- A slice is a subset of the rows, columns, and actions of a table that is used in an app.

What steps must you take when designing the data for your app? Select three.
- Determine the tables to use and the column structure that will store data in each table.
- Determine the relationships between the tables in your app.
- Determine the key column that will provide a unique identity for each row in the table.

What are some characteristics of app column formulas and initial value expressions in AppSheet? Select 3.
- An app column formula is used to update the value in a table column whenever a change is made to that table’s data via a form in the app.
- An app user can edit a table column’s value with an initial value expression.
- The initial value expression of a table column is not re-computed after that column’s value is updated by the app user.

A key is a column whose value provides a unique identity for each row in the table. What types of keys are used in tables in AppSheet apps? Select three.
- Natural keys
- System generated keys
- Row number keys

What is a show-type column used for in AppSheet?
- To improve the presentation of forms in the app

Which of the following components are used to implement automation in AppSheet? Select four.
- Event
- Task
- Process
- Bot

Which statements regarding AppSheet view events are true? Select 2.
- View Events enable you to configure actions that run when certain events occur in the app, such as saving a form.
- View events enable you to create custom navigation within your app.

Which of the statements regarding offline app access are correct? Select three.
- As the app creator, you can enable the app user to control when the app syncs data between the device and the backend.
- AppSheet apps can be used on a mobile device even when that device is offline and disconnected from the network.
- For offline access to work, the app must initially be launched on the device when it is online.

In AppSheet, an action is an operation that changes the state or navigational behavior of the app. What capabilities can you achieve with actions in your app? Select three.
- Delete a row from a table.
- Navigate the user from one app to another.
- Open a form to add or edit a table row.

Which statements correctly describe security filters in AppSheet? Select three.
- Security filters help to improve the performance of your app.
- Security filters are Yes/No expressions that are associated with each table in the app and commonly use the user's email address to limit the data shown to the app user.
- Security filters are used to control access to data or functionality for a user who is signed in to an app.

What does the update mode of a table or slice in AppSheet allow an app creator to do?
- Control whether an app user can update, add, or delete data rows in a table or slice.

To control individual user access to an AppSheet app, what should an app creator do? Select three options.
- Create a list of allowed users or email domains.
- Select an authentication provider.
- Enable the Require user signin option.

Access mode refers to the identity that AppSheet uses when it communicates with the cloud provider to access the sheets and tables used by your app. What are the two access modes used by AppSheet?
- App User
- App Creator

To invoke the AppSheet API, which items must the calling application send in the request? Select four.
- Application ID
- Content-Type
- ApplicationAccessKey
- Table name

What types of webhooks are currently supported in AppSheet? Select three.
- AppSheet API webhook
- Custom webhook
- Slack Hook

Which AppSheet components are required to create a webhook for an app? Select four.
- Process
- Event
- Bot
- Task

What can the AppSheet API be used for? Select three options.
- The AppSheet API can be used to invoke a predefined action on an app.
- The AppSheet API enables an external application to access the data used by an AppSheet app.
- The AppSheet API can be used to read, update, add, and delete rows from a table used by the app.

What is a partition expression in AppSheet used for? Select two.
- To identify a specific workbook of a partitioned dataset
- To identify a specific worksheet of a partitioned dataset

What actions are performed when data is fetched and stored via an app in AppSheet? Select three.
- The app running on the user’s device fetches data from the AppSheet backend server.
- The AppSheet backend server fetches the data from the cloud provider.
- The app stores the data on the user’s device.

Data partitioning is a technique used to improve the performance of an app when it uses large datasets. To implement data partitioning in AppSheet, what steps must you take? Select three.
- For each app user, provide access to the data from a specific partition.
- Store each data partition in separate files or worksheets with the identical column structure.
- Store a different subset of the data rows in each partition.

How are user settings used in AppSheet? Select three.
- They allow app users to select their option preferences in the app.
- They are used in expressions with the USERSETTINGS() AppSheet function.
- They are configured just like table columns in the AppSheet editor.

AppSheet enables team collaboration for app development. What steps should you take to create a team and co-author an app with other team members? Select three.
- Create a team, and then invite members to create their AppSheet accounts and join the team.
- Share the app with other team members, and assign appropriate app permissions.
- Create and use a team-shared data source.

How often is the minor version number of an app updated in AppSheet?
- Every time an app creator saves changes to the app’s definition

What steps should you take to upgrade an app to a new major version in AppSheet? Select three.
- Make a copy of the app to be upgraded, and name it appropriately.
- In the AppSheet editor, upgrade the app from the copy, and create a new major version of the app.
- Implement any changes in a copy of the app, test the copy, and deploy it.

What are the purposes of the stable version of an app in AppSheet? Select three.
- It can be used to control the rollout of future app versions.
- It can be used to assign specific app users to that version of the app.
- It allows an app creator to continue making and saving minor changes to an app without affecting users that use the stable version.

The stable version of an app is 1.000007, and its latest version is 1.000008. If the setting to control the rollout of the latest version is set to 5 percent in the AppSheet editor, which statement is correct for app users who are not already assigned an app version?
- Five percent of app users are assigned app version 1.000008, and 95% are assigned version 1.000007.

When the sync process attempts to update queued data changes from the app to the AppSheet server, an error report might indicate that the changes cannot be applied because the app definition (including table structure) has been changed on the AppSheet server. What are two ways to resolve this issue?
- Use manual recovery.
- Use recovery mode.

What data- and access-related problems might be reported for your app in AppSheet? Select three.
- A 401 authorization error is reported in AppSheet.
- The column structure in the app’s definition doesn’t match the underlying table.
- AppSheet cannot identify a table’s column headers.

An image does not load or display in the app. What is the likely cause of this issue?
- The relative folder path to the image file is incorrectly specified in the app’s table.

Which tool is used to create Anthos clusters on Azure?
- gcloud

Which component uses Google Cloud identities to access Anthos clusters?
- Anthos Connect Gateway

Anthos Clusters on AWS install Anthos Service Mesh automatically.
- False

Config Sync uses a pull mechanism to synchronize configuration files.
- True

What CLI command is used to change from a hierarchical repo to an unstructured repo?
- nomos hydrate

What CLI tool is used to create and manage Anthos clusters on bare metal?
- bmctl

What type of Anthos on bare metal cluster does not exist?
- Multi-cloud cluster.

What is the CLI tool used to create and manage Anthos clusters on bare metal?
- bmctl

Why does the Anthos on bare metal installer create a kind cluster?
- To reuse the software used to create and configure other clusters.

I need to install a Container Storage Interface (CSI) plugin if I want to…
- Use long-term persistence with PersistentVolumes and PersistentVolumeClaims.

Anthos on bare metal installs Anthos Service Mesh automatically.
- False

What component do we use to get cluster credentials so we can access the cluster through Google Cloud?
- Anthos Connect Gateway

What command can you use to get the state of an Anthos on bare metal cluster, to help diagnose cluster issues?
- bmctl check cluster –snapshot

System metrics and logs collected by Anthos clusters on bare metal are included with the Anthos license.
- True

Anthos clusters on bare metal provide backups for:
- The control plane, including etcd.

Which of the following Apigee entities are only scoped to a single environment?
- Caches

When a customer uses the hybrid deployment model, which part of the deployment infrastructure is managed by Google?
- Only the management plane

Which of the following entities is sometimes used to represent a phase of API development, such as staging or production?
- Environment

Which are core capabilities of the Apigee API Management Platform?
- Mediation and analytics

For a REST API, which API request would best represent updating an existing student?
- PUT /students/15

API-First development specifies that APIs should be designed and documented before they are implemented. Why is API-First development a recommended practice? Select two.
- API-First development increases the ability to do parallel development.
- API-First development allows issues to be found by technical and business stakeholders earlier in the API lifecycle.

Which parts of a REST API request together typically represent the operation being performed? Select two.
- The HTTP verb
- The path suffix

Which of the following combinations of proxy and target endpoints is not legal for an API proxy?
- Zero proxy endpoints and one target endpoint

Which of the following is not configured for an environment group?
- Base path

Which part of a proxy determines the target endpoint that will be used?
- Route rule

Which type of developer is configured in the Publish section of the Apigee console?
- App developer

Which of the following statements about API products are true? Select two.
- API products should be designed based on the needs of app developers.
- API products may be used to control access or service levels for APIs.

Which of the following statements are benefits of using a VerifyAPIKey policy in an API proxy? Select two.
- Any custom attributes associated with the developer, app, and API products will be populated as variables and can be used to control the behavior of the API.
- Only apps that have been registered to use the API will be allowed access.

Which status code range indicates an error caused by an issue with the client's request?
- 4XX

Which of the following conditions might cause a fault to be raised in an API proxy? Select two.
- Executing a RaiseFault policy
- A 404 Not Found status code received from a service callout

Which of the following policies can be used to call an external REST API? Select two.
- JavaScript policy
- ServiceCallout policy

Which policy can be used to validate that a request matches an approved pattern?
- OASValidation

Which of the following statements about shared flows are true? Select two.
- A shared flow attached to a flow hook will execute for all proxies in an environment.
- A shared flow cannot be tested without calling it from an API proxy.

Which of the following statements about the ResponseCache policy are true? Select two.
- In the ResponseCache policy, cache lookup should be skipped for requests used to update data.
- When the API returns user data, a unique user identifier should always be used as a cache key fragment.

Which of the following statements about the Quota policy are true? Select two.
- When Distributed is set to true in a Quota policy, message processors will share counts for a given identifier.
- The Quota policy does not limit the rate at which requests can be received.

Which of the following statements about the SpikeArrest policy is true?
- The SpikeArrest policy is primarily designed to protect services against traffic spikes.

Which statements about developer portals are true? Select two.
- Of the developer portal options, the integrated developer portal requires the least amount of effort to set up.
- The developer portal is typically where API keys are created.

When should an API's version be changed?
- Whenever a new required parameter is added to an existing API call

Which of the following statements about message logging is correct?
- The proxy endpoint PostClientFlow allows message logging after the API response has already been sent to the client.

Which of the following statement about Apigee's analytics are correct? Select two.
- Analytics data can be exported to tools like BigQuery.
- Metrics captured using the DataCapture policy may be used in custom analytics reports.

Which of the following are features of the Apigee Adapter for Envoy?
- Token validation and quota enforcement

Which of the following is a reason to select the hybrid cloud deployment option?
- The customer has strict requirements for running API traffic and hosting data within their network boundaries.

Which of the following statements about CI/CD with Apigee are correct? Select two.
- Enterprise teams should use source control for proxy development.
- The Apigee API may be called from CI/CD toolchains to manage the API lifecycle.

Which phase of a machine learning project occurs before collecting and preparing data?
- Assess whether a problem is right for machine learning.

Which description best defines machine learning?
- Machine learning refers to a branch of AI and one way to solve a problem autonomously.

You own a new local private transport service and want to use machine learning to adjust the pricing of your service throughout the day instead of using a fixed-pricing approach that does not change automatically. What data would a machine learning model need in order to predict when to adjust transport pricing?
- The time of day and customer demand

You work for a graphic design software company that offers a 7-day trial of your products to potential paying customers. You analyze why users convert their free trial into a software purchase. You are curious whether machine learning can predict which customers will convert their trial into a purchase and which users might need additional persuasion. Assess the following use case against a two-factor grid:“How could we use machine learning to predict whether a trial user will convert to a paid purchase after using the software’s unique color editing tools?
- This use case is clear and challenging.

A franchise movie-rental store has decided to launch their own streaming rental service to expand their presence in the online market. The stores are well known for their in-depth and personalized recommendations by the store clerks. The CEO wants the new rental streaming service to also provide relevant recommendations for its customers. What data should be collected and used to provide the most accurate customer recommendations in an online film and movie streaming service?
- A customer’s genre preferences and previous purchases

At a national energy provider company, the data analytics team has been suggesting long-term energy pricing based on customer usage reports from each region. You are the new manager of the data analytics team and want to introduce machine learning into the analytics process for repeatability and scalability. What effect can predictive insights using machine learning have on energy pricing in this use case?
- Machine learning can determine and adjust pricing in different regions instantly.

You work at a toy manufacturer that assembles action figures aimed at young children. Due to manufacturing faults, unsafe parts regularly need to be removed from the assembly line. How can machine learning scale the business intelligence needed in this quality control situation?
- Machine learning makes repeated decisions on which parts to remove.

You lead a team of researchers within a bioinformatics organization that aims to automatically annotate the functions of proteins. You can add this output data to your existing knowledge database, which contains information about other protein annotations. What type of machine learning use case is this?
- This is a classification use case.

You own a model trained to predict life expectancy that was trained on data collected from Norwegians. This model is successful in the Norwegian region; however, when used in nearby Lithuania, performance declines considerably. What is most likely the source of this issue?
- Data coverage

Machine learning has existed since the 1970s. However, there has been a surge in usage across all industries only recently. As a manager, why might you choose to introduce machine learning processes into your business now? Choose TWO answers.
- Machine learning algorithms are becoming more sophisticated and mature.
- The compute resources required for machine learning are more accessible.

You are a doctor at a small medical clinic studying the symptoms and effects of common health conditions. You want to use machine learning to predict which of your patients might have an increased probability of heart disease. However, you have a limited dataset due to having fewer patients than a full-sized hospital. What would be the preferred solution to identify patients with an increased probability of heart disease using machine learning?
- Use existing data from a large nearby hospital as proxy data.

Machine learning projects consist of many different phases. However, a lot of useful information cannot be described in the phases alone, such as guidance on machine learning best practices. What is considered an example of good practice in machine learning?
- Testing your machine learning projects with end users

You work at a medical research facility that analyzes patient data for local hospitals. You want to use machine learning for specialized image recognition in order to identify bacterial infections in patients’ x-ray images. What is the preferred method of obtaining a labeled dataset for this custom image recognition use case?
- Use AutoML Vision to classify the x-ray images.

Input data in a machine learning model is often made of three parts, which are: the features of an example, the resulting label, and the label type. How can the ‘features’ be defined in a machine learning context?
- The characteristics that give meaning to a piece of data

You are working on the data team at a global banking company. You are gathering a wide variety of labeled data from different departments and locations for future machine learning experiments. Before you can introduce the data to train the machine learning model, what do you need to do?
- Prepare the data and store it in a single location.

You work at a car manufacturing company that is ready to deploy a machine learning model. However, you want to evaluate the model first and decide to evaluate your model with a small set of data. You cannot measure how accurate the model is on all the original training data because it could memorize all answers and perform badly after deployment. What is a reasonable percentage of the data to reserve when you are evaluating the accuracy of a machine learning model?
- 10–25%

You work in the customer retention team at a bank and have noticed an increase in customers leaving your service. To solve this problem, you use machine learning with an objective to improve customer retention at your bank by personalizing services and loans. What is the preferred optimization of your objective to improve customer experience and retention at your bank?
- Provide offers based on customer spending behavior.

An organization wants to build a machine learning model that can recognize the architectural style of a building, from a set of their own custom images of buildings. Which Google ML product should the organization use for this use case?
- AutoML Vision, as this model is trained on your data set with your labels

You are the communications manager at a marketing company. Recently, you noticed an increase in spam marketing emails disguised as popular brand emails that you want to filter out of your inbox. You want to use machine learning to predict which emails are spam and should be filtered. What are some possible features in this machine learning use case to detect deceptive spam emails?
- Word sequence that is closer to those found in spam emails versus safe ones

You work at a mobile phone manufacturer and are preparing to launch the newest version of your high-end phone. You want to analyze the battery efficiency of your new phone against previous models. You have a backlog of historical data on previous models and their results, but these datasets exist in silos separate from the data for your new phone. How can you acquire a labeled dataset in this scenario when datasets exist in separate silos?
- Use a data warehouse to join the datasets into one source.

You lead the marketing team for a startup accommodation booking website. You want to provide users with personalized accommodation recommendations, but lack sufficient historical labeled data of customer bookings to use as an exclusive data source. Instead, you and your team have only been using user clicks and accommodation viewings as a proxy for your entire dataset. What is the issue of only using user clicks and accommodation viewings as your dataset that might lead to few converted bookings?
- Customers might browse accommodations while having no intention of booking them.

A survey is delivered over the internet through links within ads that appear on the homepage of popular newspapers' websites. The survey asks sensitive questions about readers' health and medical history. It can be argued that selection bias exists in this scenario. What justification is there for this reasoning?
- The ads might not be seen by older people who typically read physical newspapers.

Google has developed a set of AI principles that govern its research and product development and impact its business decisions. One of the AI principles is to avoid creating or reinforcing unfair biases. However, what should AI applications not do according to Google’s AI principles?
- Breach human rights

You are a scientist at a hospital studying the likelihood of common health conditions in your community. You want to use machine learning to predict which patients might have an increased probability of heart disease. You already have decided to use recently updated patient data including: age range, gender, medical history, weight, and how often, if ever, a person smokes. In this scenario, where and why might you expect to find reporting bias?
- A patient could lie about how often they smoke.

A survey is delivered over the internet through links within ads that appear on the homepage of popular newspapers' websites. The survey asks sensitive questions about readers' health and medical history. What type of bias is caused by not stating that surveyees might only include people who read the front page and not those who might consume primarily sports-related news?
- Reporting bias

Your company has decided to experiment with artificial intelligence to improve business processes and decision-making efficiency. Your company has decided to follow the AI principles developed by Google, and one of the AI principles is to avoid creating or reinforcing unfair bias. Why is it important to avoid creating unfair biases in machine learning models?
- Machine learning algorithms can reflect and reinforce biases that can have unjust affects on people.

An owner of a national live sports TV channel has had ongoing success for 15+ years. Recently, the viewership on the channel has decreased due to viewers moving to online streaming platforms. The owner finds data indicating social media discussion for the sporting events on the channel is increasing every year, and argues that viewers are very much still engaged. The owner uses this data to justify the channel to advertisers who can buy advertisement time across the day. In this scenario, what is an indisputable example of confirmation bias?
- The owner used social media discussion data as justification for viewer interest in the channel.

You are a data collector at a movie review aggregation company that is aimed toward family and children’s movies. As audience members are leaving the screening room at the cinema, you survey their opinion of the movie on an alphabetical grading scale. Your company only surveys audiences within the first week of a movie’s release and then locks the grades. The aggregate grade is provided to film production companies who want to improve future family and children’s films. In this scenario, what would be an example of selection bias?
- Only the opinions of the initial audiences at a cinema are included in the grade.

Google has developed a set of AI principles that govern its research and product development and affect its business decisions. One of the AI principles is to avoid creating or reinforcing unfair bias. Why does a company need to adhere to a set of agreed-upon standards when working with AI?
- How AI is developed and used will affect society.

An international airport has tasked a technology company to create a machine learning model that can identify potential criminals entering the country. The airport has provided the company with images of criminal and non-criminal residents, with their consent. The airport has long queues at immigration and hopes that introducing this electronic system will improve efficiency and the traveler experience. In this scenario, what assumption is being made that is an example of automation bias?
- The machine learning model will find a correlation between the criminals’ images that signifies potential criminal behavior.

You are a translation vendor manager who has been tasked by a publishing company to translate historical Finnish texts. The translation is from Finnish, which has no gender-distinctive pronouns, to English. To save time, your experienced Finnish team decides to use a popular machine learning translation tool for longer texts while they translate the shorter texts manually. In this scenario, where might you expect an increased amplification of biases?
- The translation tool will amplify biases through its gender pronoun assumptions in English.

You run a furniture store that accepts and sells used furniture. Until now, you have asked traders and employees to inspect the items and judge the condition of various parts. This information would be used to create a cost evaluation for the item. However, this business process is time consuming and laborious and is prone to oversights. How can you best use machine learning to automate the business processes in this scenario?
- Train a machine learning model that can predict the cost of furniture based on specific photos.

You work in a large technology company that has decided to create an app which uses the cloud to provide users with photo and image storage. You want to use machine learning to add features to the app such as search capabilities, automatic filters, facial recognition, subject recognition, and automatic album creation. To create such an app with these features would require many machine learning models working together. Which machine learning models would you expect to be used to automatically curate an album named “Cooking From Home”?
- Location detection and subject image recognition

You manage a website that provides users with personalized fashion and style advice. You do this through a machine learning model that is given a user’s style preferences, and the algorithm recommends clothing available from various websites. You receive a percentage of the sale if a customer decides to purchase the items. What are the benefits of personalization in machine learning in this use case?
- It allows the system to provide more valuable services and scalability.

Machine learning is becoming more affordable for businesses of all sizes. However, it can be tempting to use only one machine learning model in your business to save on costs, time, and maintenance. Why is it a good idea to divide a large machine learning use case into smaller use cases and then build separate models for each case?
- Combining multiple small models is more powerful than using one model to do everything.

You are the manager of a startup energy provider. You have a variety of unstructured and structured data from your customers that you want to organize, including correspondence emails, customer zip codes, phone numbers, average energy consumption information, and copies of letters sent to customers. How can unstructured data be defined?
- Data that cannot be easily stored or queried in a relational database

You run a machine learning project at a startup gaming app development business. You want to improve the user experience of your games and increase the sales of microtransactions. The business has some data that they can use to train a machine learning model but not enough to create the accurate results you want. How can you enrich and improve your existing dataset before training your machine learning model?
- Join your existing data with third-party data.

You work at an international sales organization and are planning a machine learning project. You are in the process of gathering and organizing customer data but have discovered that it is traditionally stored in offices around the world. You have contacted the global offices, which are willing to share their data with you but have no method of doing so. What is the best solution you could suggest that will help gather data for your project and also for other projects and processes in the future?
- Convert data to digital formats and place customer data into one database.

You work in a company that is using legacy systems for data storage. Your current business processes occur slowly and rely on sharing data. You want to implement data lake modernization and make better use of data warehouses, but first you need to convince your teams and machine learning engineers to support this change. What current problems might teams and machine learning engineers experience while using traditional data storage solutions?
- Inseparable combination of compute and storage

Organizations that are successful with ML, often have a solid strategy around their data. Select the answer that is aligned with a best practice and pillar of a successful data strategy?
- Design systems that will produce more data next year, so that your ML models can improve over time.

You manage a large e-commerce store with various departments that use sensitive customer data to improve business efficiency and processes. A customer can store their payment card details for faster online checkout. Also, the last 4 digits of a payment card are used to confirm a customer’s identity if they need to contact the customer service team. What technique can be used to protect payment card details when the customer service team needs to confirm a customer’s identity?
- Redact all but the last 4 digits of a customer’s payment card details from the system.

Organizations can use innovation principles to create a culture that organically encourage teams to generate bigger ideas and to think differently about problem solving with the capabilities of machine learning. Which of the following principles will help foster a culture of innovation?
- By focusing on the user, you can identify the most essential problems to solve and create more value

You have convinced the decision makers at your small business to allow a pilot machine learning project. The leaders have provided a reasonable, but not high, budget for the project. Also, they do not want to spend too much of the employees’ time, which might affect the core business. The team you have formed is excited about the project but currently lacks the skills needed for the pilot. How can you best garner the expertise needed for the machine learning project?
- Up-skill your current team using online learning platforms.

Which is an example of a target?
- A data lake.

What is a tenant project?
- A project that’s managed and hosted by Google but set aside for a specific tenant.

Data Fusion can help you do what with your data?
- Process data.

How does Cloud Data Fusion help you accelerate time to insight?
- It pulls data into data warehouses, data lakes, and data marts on Google Cloud.

Which is a common challenge of data integration?
- Data integration is expensive.

Your organization is implementing new machine learning processes. How can you use your data as you’re building out these processes?
- Share your data to break silos and enable data-driven decision making.

You’re organizing your resources in Google Cloud, and you need to allocate resources and set up billings. What should you use?
- A project.

The data of your organization has already been processed and stored, and you’re ready to start analyzing the data. Which tool should you use?
- BigQuery

You have enabled BigQuery and need to set up a dataset that is region specific. What should you do?
- Import your dataset and specify the location in the project.

What is an exchange?
- A collection of dataset listings for sharing and discovery.

How does Google Cloud ensure that data is shared securely and inexpensively?
- Centralized governance and security.

Which Analytics Hub role creates data assets and publishes exchanges?
- Publisher

You need a data storage solution for a Business Intelligence application. Which data storage solution should you use?
- A Data Warehouse

You need to unify distributed data to help automate data management. Which Google Cloud tool should you use?
- Dataplex

Lakehouse merges:
- BigQuery and data.

Which is NOT a benefit of using Dataplex?
- Efficient Data Ingestion

An HTTP function: (Select three).
- Must send back an HTTP response.
- Can be used to implement a webhook.
- Is triggered by a request made to its URL endpoint.

An event-driven function: (Select three).
- Responds to events that occur in your cloud infrastructure.
- Can be triggered from Eventarc sources if it is 2nd generation.
- Uses event triggers for various services like Pub/Sub, and Cloud Storage.

What are some features and benefits of using Cloud Functions? Select four. Cloud Functions:
- Are triggered by HTTP requests and events from Cloud Services.
- Supports seamless authentication with IAM.
- Can be integrated with Cloud databases.
- Can be locally developed and tested.

Which of these statements about Cloud Functions are correct? Select three. Cloud Functions:
- Can be used to extend Cloud services.
- Is integrated with Cloud Logging.
- Is a scalable functions-as-a-service platform.

Which of these statements about Cloud Functions triggers are correct? Select three.
- Triggers are specified during function deployment.
- Multiple functions can be triggered by the same trigger source settings.
- An event trigger reacts to cloud events.

An HTTP trigger: (Select two)
- Generates a URL when it is assigned to a function.
- Enables a function to respond to HTTP requests.

Which of these statements about Workflows are correct? Select three.
- Workflows is serverless.
- A workflow step can be defined to make an HTTP call to a URL.
- Workflows can combine services hosted on Cloud Run or Cloud Functions.

What are two reasons for using Serverless VPC Access?
- To connect Cloud Functions to internal resources in a VPC network.
- To send requests and receive responses using internal DNS and IP addresses.

A customer-managed encryption key (CMEK) is used to encrypt a function and its related data. What is the impact when such a key is disabled or destroyed?
- Executions that require new function instances will fail.

Which statements about function identity are correct? Select three.
- Cloud Functions uses the Compute Engine default service account as the default runtime service account for 2nd gen functions.
- Every function is associated with a runtime service account that serves as its identity.
- Cloud Functions uses the App Engine default service account as the default runtime service account for 1st gen functions.

Cloud Functions uses IAM to authorize the requesting identity. Which predefined IAM roles are used by Cloud Functions? Select four.
- Cloud Functions Admin
- Cloud Functions Invoker
- Cloud Functions Viewer
- Cloud Functions Developer

To limit access to Cloud Functions, what methods can you use? Select two.
- Use identity-based access controls.
- Use network-based access controls.

Which network setting allows Cloud Functions to route all outbound traffic from a function through a VPC network?
- Egress setting to route all traffic through a Serverless VPC connector.

Which statements about triggering Cloud Functions from Firestore database events are correct? Select two.
- A function can be triggered when a Firestore document is created, updated, or deleted.
- To trigger a function, you must specify an event type and the document path.

Which three statements about using environment variables with Cloud Functions are correct? Environment variables:
- Are key-value pairs that are accessed by the function code at runtime.
- Can be stored in a YAML file, whose filename can be provided during function deployment.
- Are provided during function deployment.

What are two methods of making a secret available to a cloud function?
- Mount the secret as a volume so that the function can access the secret from a file.
- Provide the secret as an environment variable when deploying the function.

What are three best practices to use when implementing IAM policies for Cloud Functions?
- Limit the number of user and service accounts that can access the function.
- Ensure that a function sends requests only to a subset of your other functions that are needed to perform its job.
- Allocate the minimum set of permissions required to develop and use your functions.

To optimize networking for your cloud function, which two approaches should you use?
- Persistent HTTP connections.
- Serverless VPC Access connectors to connect your cloud function to project resources.

Which statement regarding revisions of 2nd gen Cloud Functions is correct?
- You can split traffic between different revisions of a function.

How can you control the scaling behavior of Cloud Functions?
- Set the minimum and maximum number of function instances during deployment.

Which two statements about retrying of Cloud Functions are correct? Function retry:
- Can be enabled or disabled in Google Cloud console or with the gcloud CLI.
- If enabled, causes the function to be retried on failure for up to 7 days.

To improve the performance of your cloud function, what are three best practices to follow?
- Set a minimum number of instances when deploying your function.
- In your function code, reuse objects with global variables.
- Remove any unused dependencies from the function source.

Select two fundamental characteristics of cloud computing from this list.
- Resources are available from anywhere over the network.
- Customers can scale their resource use up and down.

Why might a Google Cloud customer use resources in several zones within a region?
- For improved fault tolerance

Which one of the following statements is true regarding the ability to scale cloud computing resources up and down?
- CPU, memory, and storage resources are elastic.

What cloud computing service binds application code to libraries that give access to the infrastructure an application needs?
- Platform as a service

Who benefits the most from billing by the second for cloud resources, such as virtual machines?
- Customers who create and run many virtual machines

What cloud computing service provides raw compute, storage, and network resources that are organized similarly to physical data centers?
- Infrastructure as a service

Which statement best describes how Google Cloud resources are associated within the resource hierarchy?
- All Google Cloud resources are associated with a project.

When would you choose to have an organization node? (Select two)
- When you want to create folders
- When you want to centrally apply organization-wide policies

How does the resource hierarchy control how IAM policies are inherited?
- IAM policies that are implemented by lower-level policies can override the policies defined at a higher level.

What is the difference between Identity and Access Management (IAM) basic roles and IAM predefined roles?
- Basic roles affect all resources in a Google Cloud project. Predefined roles apply to a specific service in a project.

Select the option that displays IAM roles from general to specific.
- Basic roles, predefined roles, custom roles

Consider a single hierarchy of Google Cloud resources. Which of these situations is possible? (Choose 3 responses.)
- There is no organization node, and there are no folders.
- There is an organization node, and there is at least one folder.
- There is an organization node, and there are no folders.

Which way of accessing Google Cloud lets you control services through the code you write?
- APIs

Your company has two Google Cloud projects and you want them to share policies. What is the least error-prone way to set this up?
- Place both projects into a folder, and define the policies on that folder.

A Google Cloud customer wants to load-balance traffic among the backend VMs that form part of a multi-tier application. Which load-balancing option should this customer choose?
- The regional internal load balancer

Which statement best describes how VPC routers and firewalls work?
- They are managed by Google as a built-in feature.

Which interconnect option is a service level agreement (SLA) available for?
- Dedicated Interconnect

Which term describes a secure, individual, private cloud-computing model hosted within a public cloud?
- Virtual private cloud (VPC)

Select the true statement about Google’s VPC networks and subnets.
- Networks are global, and subnets are regional.

Preemptible VMs can offer advantages over a standard Compute Engine VM. What is a reason customers choose preemptible VMs?
- To reduce cost

Your application needs to store data with strong transactional consistency, and you want seamless scaling up. Which storage option is the best choice for your application?
- Cloud Spanner

You manufacture devices with sensors and need to stream huge amounts of data from these devices to a storage option in the cloud. Which storage option is the best choice for your application?
- Bigtable

Why would a customer consider the Coldline Storage class?
- To save money on storing infrequently accessed data

Which statement describes the correct Cloud Storage use case?
- Cloud Storage provides durable and highly available object storage.

How are Firestore and Bigtable alike? (Select two answers.)
- They are both highly scalable.
- They are both NoSQL databases.

Which SQL database service can scale to petabyte database sizes?
- Cloud Spanner

What is a Kubernetes pod?
- A group of containers

How do you keep your Kubernetes version updated in Google Kubernetes Engine?
- The Google Kubernetes Engine team periodically performs automatic upgrades of your cluster to newer stable versions.

How do containers access an operating system?
- Containers use a shared base operating system stored in a shared kernel layer.

Select two reasons for using containers to deploy applications. (Choose 2 responses.)
- Migrating workloads is simpler.
- It creates consistency across development, testing, and production environments.

What is a Kubernetes cluster?
- A group of machines where Kubernetes can schedule workloads.

Anthos provides a rich set of tools for monitoring and maintaining the consistency of your applications across which of the following locations?
- Applications hosted on-premises, in the cloud, or in multiple clouds.

Where do the resources used to build Google Kubernetes Engine clusters come from?
- Compute Engine

Which Google Cloud service should you choose to perform business analytics and billing on a customer-facing API?
- Apigee Edge

Which statements are true about App Engine? (Select 2).
- App Engine manages the hardware and networking infrastructure required to run your code.
- The daily billing for an App Engine application can drop to zero.

App Engine is best suited to the development and hosting of which type of application?
- A web application

What are the advantages of using App Engine’s flexible environment instead of its standard environment? (Select 3).
- You can install third-party binaries.
- You can use SSH to connect to the virtual machines on which your application runs.
- Your application can write to the local disk.

Select the managed compute platform that lets you run stateless containers through web requests or Pub/Sub events.
- Cloud Run

Cloud Run can only pull images from:
- Artifact Registry

Why might a Google Cloud customer choose to use Terraform?
- Terraform can be used as an infrastructure management system for Google Cloud resources.

Why might a Google Cloud customer choose to use Cloud Functions?
- Their application contains event-driven code that they don't want to provision compute resources for.

Select the advantage of putting the event-driven components of your application into Cloud Functions.
- Cloud Functions handles scaling these components seamlessly.

Why would a developer choose to store source code in Cloud Source Repositories? (Select 2)
- To keep code private to a Google Cloud project
- To reduce work

You want to create alerts on your Google Cloud resources, such as when health checks fail. Which is the best Google Cloud product to use?
- Cloud Monitoring

There are “Four Golden Signals” that measure a system’s performance and reliability. What are they?
- Latency, traffic, saturation, errors

Which option describes a commitment made to your customers that your systems and applications will have only a certain amount of “downtime”?
- Service level agreement

Which definition best describes a service level indicator (SLI)?
- A time-bound measurable attribute of a service

Select the two correct statements about Cloud Logging.
- Cloud Logging lets you define metrics based on your logs.
- Cloud Logging lets you view logs from your applications and filter and search on them.

Which of the following is not a main component of Google Earth Engine?
- Data Processor

Google Earth Engine enables users to:
- Spend less time setting up infrastructure and more time on data science.

How does Google Earth Engine improve the speed of computation?
- Map tiles are pre-tiled.

What is a benefit of using Google Earth Engine for imagery with large amounts of cloud cover?
- Imagery can be compressed into a cloud free mosaic.

The Earth Engine Data Catalog includes which of the following data types?
- All of the Above

What code editor function lets you create a cloud-free mosaic?
- maskS2Clouds

You must analyze soil moisture over time, not just during a single season. What can you use to accomplish this in Google Earth Engine?
- A time series

Using a chlorophyll index can enable you to detect what?
- Algae levels in water

In the Google Earth Engine code editor, what can you adjust to enhance a composite’s image quality?
- The date filter, to gather more imagery and pixel data.

At what resolution is Dynamic World available?
- 10 Meters

What is a benefit of using Google Earth Engine for research purposes in the Public Sector?
- Earth Engine is free for all research purposes.

Google Earth Engine integrates with which product?
- Vertex AI

How long does it take for an image to go from a satellite to Earth Engine?
- 12 hours

A container image is:
- A package with your application and everything that the application needs to run.

Which of the following statements about Cloud Build are correct? Select two.
- In addition to Cloud Source Repositories, Cloud Build integrates with different source code repositories such as GitHub, Bitbucket, and GitLab.
- With Cloud Build, you can continuously build, test, and deploy your application on Google Cloud.

Which of the following statements about Buildpacks are correct? Select three.
- When processing a source directory, a builder executes two phases of a buildpack: the detect phase and the build phase.
- Google Cloud’s buildpacks are built into Cloud Run.
- Buildpacks are a way to turn your application source code into a container image without writing a Dockerfile.

What are three best practices to use when working with containers or container images?
- Launch the container process with the CMD or ENTRYPOINT instruction in your Dockerfile.
- Scan your container images for software vulnerabilities.
- Remove unnecessary files and tools from the container image.

Which of the following statements about using Docker are correct? Select three.
- A multi-stage build is used to create optimized and secure container images.
- A Dockerfile contains a set of instructions that is used to build a container image.
- Dockerfiles provide a powerful, and flexible mechanism to create container images.

Which of the following statements about Kubernetes and Google Kubernetes Engine are correct? Select three.
- A Kubernetes cluster consists of a control plane and machines called nodes.
- Google Kubernetes Engine is a fully managed Kubernetes service that runs on Google Cloud.
- In Kubernetes, you can create and configure various kinds of resources in the API either imperatively or declaratively.

From which of these container registries can Cloud Run pull container images? Select three.
- Docker Hub
- Artifact Registry
- Container Registry

In Kubernetes, a pod is:
- A group of one or more containers.

Which two pricing models are supported by Cloud Run?
- CPU always allocated
- Pay per use

Which of the following statements about Cloud Run are correct? Select three.
- You can use Cloud Run to execute scheduled tasks or jobs.
- Cloud Run runs and autoscales containers on-demand.
- To deploy your container to Cloud Run, you can use the Google Cloud console, gcloud CLI, YAML configuration file, or Terraform.

What are some of AppSheet’s capabilities? Select two.
- AppSheet enables you to create apps with various types of views including tables, galleries, charts, and maps.
- Using AppSheet, you can create and use forms to capture user input data.

A citizen developer is:
- A line-of-business worker in an organization who uses no-code application development tools to develop apps for business functions.

Which one of the following statements regarding no-code application development is correct?
- No-code application development is the process of developing apps without writing any code.

What are some benefits of no-code application development platforms? Select two.
- Improved security and compliance
- Faster time to deployment

After connecting a data source to your app, what is one of the first steps you should take to build the app?
- Define the column types of the data and how the data will be used by the app.

AppSheet lets you connect spreadsheets as data sources for use with your app. What are two best practices for using spreadsheets with AppSheet?
- Ensure that the data type format is the same for each cell in a column.
- Name your spreadsheet columns appropriately using a header row.

As you build and customize your app, which is the quickest and easiest way to test it?
- Use the live app preview feature in the AppSheet editor.

How can you start creating an app in AppSheet? (Select two methods)
- Copy an existing template.
- Start by configuring a data source for the app.

What are some characteristics of AppSheet table references? (Select 2)
- A reference enables the app to easily retrieve information from a related row in another table.
- A reference is a relationship between related tables that use a column of type Ref in one table that contains a value from a key column of a related row in the other table.

What is a virtual column in AppSheet?
- It is a column that is usually populated using an app formula.

Which statements about the key column of a table that is used in AppSheet are correct? (Select 2)
- The value in a key column uniquely identifies each row in the table.
- Any table used in AppSheet must define a key column.

What types of data sources are supported by AppSheet? (Select 2)
- Databases
- Spreadsheets

In the AppSheet editor, how can you customize the style of your app? Select two methods.
- Use format rules to customize how data is displayed in the app.
- Use the Brand tab in the editor to configure the appearance of your app.

AppSheet provides various types of views. Which type of view displays data in a scrollable list format?
- Deck

What options do creators have to position views for user navigation in the app? Select two.
- In the app’s main menu
- Use the navigation bar at the bottom of the app’s screen.

What kind of data is insufficient to plot locations in a Map view in AppSheet?
- Zip code

Which view type can you enable to give new users a sequence of information about your app?
- Onboarding

What are the two kinds of app deployment methods supported by AppSheet? (Select 2)
- Instant deployment
- Traditional deployment

What is one of the first steps that you should perform before making your app available to end users?
- Run a deployment check on the app.

Which statements regarding the sharing of apps with end users are correct? (Select 2)
- You can enable users to share the app using the in-app share button.
- You can use the Share icon in the AppSheet UI to add users to the app.

You have an application that uses Oracle as the backend database. The application currently takes snapshots of the Oracle tables every 1,000 entries and keeps the snapshots for 72 hours. You need to convert the backend database of the application to BigQuery and want to use the most efficient method to meet the same data retention level. What should you do?
- Use BigQuery's time travel window.

What is one of the main reasons BigQuery can scale effectively to store and query large datasets?
- Storage and compute are handled separately and automatically scale to match consumption.

Which two statements about BigQuery resources are true? (Choose two.)
- A BigQuery slot is a combination of CPU, memory, and networking resources.
- BigQuery is optimized for high-read data.

What is the column limit per table in BigQuery?
- 10,000

In Oracle, tables are organized into schemas within a database. How does this compare with the data resource hierarchy in BigQuery?
- In BigQuery, tables are stored within datasets.

You work on Project A. You need to run a query on BigQuery datasets stored in Project B, which is another project in your organization. Where will the query charges be billed?
- To Project A

Your application uses Oracle as the backend database. You have a database-level account to perform the backend tasks for the application including creating tables and views, performing queries, and deleting tables. You want to migrate the backend database of your application to BigQuery and provision an account to perform the same tasks by using Google best practices. What should you do?
- In Google Cloud’s Identify and Access Management (IAM), create a service account for the application; in BigQuery, assign it the role of BigQuery data editor on the specific datasets.

You want to follow Google-recommended practices to limit the rows of all tables in your dataset for a specific access group in your organization. What should you do?
- Create a separate dataset as an authorized dataset based on the original source dataset.

Oracle can ingest streaming data by using Oracle Cloud Infrastructure (OCI) Streaming. How does BigQuery ingest streaming data?
- BigQuery can ingest streaming data by using the BigQuery Storage Write API.

You want to automate the loading of external third-party data into BigQuery on a scheduled basis without writing any code. Which ingestion option can you use to automatically load external data without writing code?
- BigQuery Data Transfer Service

You are loading multiple CSV and JSON files into BigQuery and want to optimize for load speed. Which Google best practice can help to optimize load speed?
- Load uncompressed CSV and JSON files.

You are coming from a row-based system and want to migrate your table schemas to BigQuery. Which best practice can help you optimize your table schemas in BigQuery?
- Identify columns that can be used to partition and cluster your data.

In Oracle, indexes are applied as optimization techniques and can be created using primary and foreign keys or other columns in a table. How are indexes applied differently in BigQuery?
- BigQuery offers optional indexes such as search indexes on the columns defined in the table schema.

Which type of statements supported by Google Standard SQL allows you to execute multiple SQL statements in one request?
- Procedural language statements

You have an application that currently uses Oracle as the SQL backend. The application uses data aggregation queries to provide approximate summary values to users. You want to migrate from Oracle to BigQuery, and leverage the efficient data aggregation queries. What should you do?
- Use data sketches in BigQuery.

You need to explore a non-clustered table in BigQuery that has a billion rows. Which option is a cost-effective Google best practice to review a sample of the data?
- Use table preview options in BigQuery to view data.

You have an application that uses Redshift as the backend database. The application currently takes snapshots of the Redshift tables every 1,000 entries and keeps the snapshots for 72 hours. You need to convert the backend database of the application to BigQuery and want to use the most efficient method to meet the same data retention level. What should you do?
- Use BigQuery's time travel window.

In Redshift, tables are organized within schemas. How does this compare with the data resource hierarchy in BigQuery?
- In BigQuery, tables are stored within datasets.

Your application uses Redshift as the backend database. You have a database-level account to perform the backend tasks for the application including creating tables and views, performing queries, and deleting tables. You want to migrate the backend database of your application to BigQuery and provision an account to perform the same tasks by using Google best practices. What should you do?
- In Google Cloud’s Identify and Access Management (IAM), create a service account for the application; in BigQuery, assign it the role of BigQuery data editor on the specific datasets.

Redshift can ingest streaming data by using Amazon Kinesis or Amazon-managed Apache Kafka. How does BigQuery ingest streaming data?
- BigQuery can ingest streaming data by using the BigQuery Storage Write API.

In Redshift, indexes can be applied as constraints (such as primary and foreign keys) and are not automatically enforced. How are indexes applied differently in BigQuery?
- BigQuery offers optional indexes such as search indexes on the columns defined in the table schema.

You have an application that currently uses Redshift as the SQL backend. The application uses data aggregation queries to provide approximate summary values to users. You want to migrate from Redshift to BigQuery, and leverage the efficient data aggregation queries. What should you do?
- Use data sketches in BigQuery.

You have an application that uses Snowflake as the backend database. The application currently takes snapshots of the Snowflake tables every 1,000 entries and keeps the snapshots for 72 hours. You need to convert the backend database of the application to BigQuery and want to use the most efficient method to meet the same data retention level. What should you do?
- Use BigQuery's time travel window.

In Snowflake, tables are organized into schemas within a database. How does this compare with the data resource hierarchy in BigQuery?
- In BigQuery, tables are stored within datasets.

Your application uses Snowflake as the backend database. You have a database-level account to perform the backend tasks for the application including creating tables and views, performing queries, and deleting tables. You want to migrate the backend database of your application to BigQuery and provision an account to perform the same tasks by using Google best practices. What should you do?
- In Google Cloud’s Identify and Access Management (IAM), create a service account for the application; in BigQuery, assign it the role of BigQuery data editor on the specific datasets.

Snowflake can ingest streaming data by using the Snowpipe Streaming API. How does BigQuery ingest streaming data?
- BigQuery can ingest streaming data by using the BigQuery Storage Write API.

In Snowflake, indexes can be applied as constraints (such as primary and foreign keys) and are not automatically enforced. How are indexes applied differently in BigQuery?
- BigQuery offers optional indexes such as search indexes on the columns defined in the table schema.

You have an application that currently uses Snowflake as the SQL backend. The application uses data aggregation queries to provide approximate summary values to users. You want to migrate from Snowflake to BigQuery, and leverage the efficient data aggregation queries. What should you do?
- Use data sketches in BigQuery.

You have an application that uses Teradata as the backend database. The application currently takes snapshots of the Teradata tables every 1,000 entries and keeps the snapshots for 72 hours. You need to convert the backend database of the application to BigQuery and want to use the most efficient method to meet the same data retention level. What should you do?
- Use BigQuery's time travel window.

In Teradata, tables are stored in a database within a warehouse. How does this compare with the data resource hierarchy in BigQuery?
- In BigQuery, tables are stored within datasets.

Your application uses Teradata as the backend database. You have a database-level account to perform the backend tasks for the application including creating tables and views, performing queries, and deleting tables. You want to migrate the backend database of your application to BigQuery and provision an account to perform the same tasks by using Google best practices. What should you do?
- In Google Cloud’s Identify and Access Management (IAM), create a service account for the application; in BigQuery, assign it the role of BigQuery data editor on the specific datasets.

Teradata can ingest streaming data by using Teradata Parallel Transporter (TPT) Stream. How does BigQuery ingest streaming data?
- BigQuery can ingest streaming data by using the BigQuery Storage Write API.

In Teradata, there are several different types of indexes including primary, secondary, and tertiary index methods. How are indexes applied differently in BigQuery?
- BigQuery offers optional indexes such as search indexes on the columns defined in the table schema.

You have an application that currently uses Teradata as the SQL backend. The application uses data aggregation queries to provide approximate summary values to users. You want to migrate from Teradata to BigQuery, and leverage the efficient data aggregation queries. What should you do?
- Use data sketches in BigQuery.

Which types of managed services are used to modernize retail and ecommerce applications?
- All of the above

What statement does NOT describe the larger retail modernization landscape?
- Ecommerce was a trend during the pandemic, but is no longer a relevant avenue for consumer shopping experiences.

What statement does NOT describe Google Cloud’s benefits to cloud practitioners in the retail and ecommerce industry?
- Google Cloud gives cloud practitioners a small set of managed services for modernizing real and ecommerce applications.

What answer does NOT describe the value of Google Cloud in the retail industry?
- Google Cloud provides many disconnected services that retailers can use individually to accelerate their digital transformation.

What does NOT describe Google Cloud’s mission in the retail industry?
- Google Cloud helps retailers deliver their ecommerce goods.

You’re deploying an application for high availability and have created web servers in multiple zones in a region. What should you do for the database to also be highly available?
- Create a failover replica in another zone.

You have a microservice responsible for managing customer accounts and orders. Strong consistency, ACID transactions, and strong schemas are all important. What type of database would you use?
- Relational

What are some things you should do when migrating an enterprise database to the cloud?
- All of the options.

You’ve been hired to help a customer with their migration to the cloud. They have a heavy investment in Oracle and want to move their existing Oracle databases to Google Cloud. What is your advice to them?
- Run Oracle using Bare Metal Solution.

'You are creating an application to sell to customers. Customers will run it on the public cloud of their choice - either Google Cloud, Azure, or AWS. Some customers may even want to run the application on-premises. What would be the best deployment choice for the database?'
- Kubernetes.

You have a SQL Server database running on a Windows server on-premises. You want to move it to the cloud as quickly as possible with minimal changes, and the database must continue to run on a Windows server. You should run the database using which service below?
- Compute Engine.

You need to deploy an application to Google Cloud. The database is relatively small, and only one application uses it. It is not mission-critical, so some downtime can be tolerated. Which migration approach should you use?
- Scheduled maintenance.

What are the four steps in Google’s cloud migration methodology?
- Assess, Plan, Deploy, Optimize.

What is a good reason to automate a cloud migration?
- All of the options.

Your company needs to move a large Oracle database to Google Cloud. There are many clients, some of which are customer-facing, core business services. Minimizing downtime is extremely important. What migration strategy would you recommend?
- Use a data access service and replication.

You’ve completed the migration of a large monolithic application and its database to Google Cloud. The database included web session management data, which you’ve decided to move to a separate microservice. Which managed database service would be easiest and cheapest to use to store the session data?
- Firestore.

You need to move your WordPress site to Google Cloud. It uses a LAMP stack on a single machine, and some downtime is OK. What migration strategy would you recommend?
- Lift and shift.

Your DBA wants to securely connect to databases in a private Google Cloud VPC. You want to allow them to directly connect from their workstation in their office using their Windows workstation. What should you do?
- Set up a VPN between their network and the VPC.

Why would you use Terraform instead of the Google Cloud Console to create network infrastructure?
- All of the options.

You’ve created two Google Cloud VPCs:a public one for web servers and database clients, and a private one for the databases. You want to connect them to allow communication via private IP addresses. Which should you use?
- VPC Peering.

Your company wants to move a large SQL Server database to Google Cloud. They currently run Enterprise edition with a failover cluster, and they want to replicate the database across multiple regions. They also want to integrate with their Active Directory for authentication. What would you recommend?
- Deploy SQL Server using Compute Engine.

What is an advantage of Cloud SQL over Compute Engine for running SQL Server databases?
- Automatic storage increases.

You want to download a patch from your Oracle bare metal server and you can’t access the internet. What is likely the solution?
- Set up a NAT gateway in your peered VPC network.

How do you connect to your Oracle database servers running in Bare Metal Solution?
- Connect using SSH from a Jump Server running in your peered network.

What is an advantage of running Oracle on Bare Metal Solution over a managed cloud platform like AWS RDS?
- All of the options.

Log data can be exported to where?
- All of the options.

Which monitoring metric below requires the Monitoring Agent to be installed on a virtual machine?
- Memory usage.

You want to automate a recurring job that runs every night. The job needs to extract data from an on-premises database, copy it to Cloud Storage, then run a Dataflow job to transform the data and load it into BigQuery. Which would be best?
- Cloud Composer.

Your company needs to upload about 500 TB of data to upload to Google Cloud Storage. Which data transfer service would you recommend?
- Transfer Appliance.

What would be a good criterion for deciding on the best candidate application for moving to the cloud first?
- All of the options.

Which is considered the best strategy for moving to the cloud?
- It depends on the application.

What are the key components used to create automation in AppSheet? Select four.
- Event
- Bot
- Step
- Process

What are some patterns or use cases where you can use AppSheet’s automation capabilities? Select three.
- Human “in the loop”
- Data change
- Notifications and information sharing

What are some types of steps available in AppSheet automation? Select four.
- Run a task
- Wait
- Branch on a condition
- Run a data action

What are some reasons to consider implementing automation in an organization? Select three.
- Eliminate human error.
- Create standardization.
- Remove or minimize manual work.

What can you monitor with the AppSheet automation monitor app? Select three.
- Bot runs
- Bot metrics
- Document parses

With what two inputs do you configure an automation process in AppSheet?
- Table
- Sequence of steps

Which statements on integrating Apps Script with AppSheet are correct? Select two.
- Collect data from multiple sources with Apps Script, and use AppSheet to interact with that data.
- Trigger Apps Script workflows in Google Workspace from AppSheet.

What are some characteristics of automation events in AppSheet? Select three.
- An event can trigger a bot when a table row is added or updated in the app.
- An event can trigger a bot based on data changes made in the app.
- An event can trigger a bot on a periodic schedule.

What are some categories of automation tasks available in AppSheet? Select three.
- Send an SMS.
- Call a webhook.
- Send a notification.

A bot that is triggered by an update to a table row in an AppSheet app can access the value that each column had before and after it is updated. Which two variables can be used to access the value in a column before and after the update?
- <<[_THISROW_AFTER].[Column Name]>>
- <<[_THISROW_BEFORE].[Column Name]>>

What are the requirements to receive push notifications from AppSheet? Select three.
- The user must have signed in to an AppSheet app with the same email address that is configured in the notification task.
- The app must be deployed.
- The user email address must be translated to an AppSheet user ID.

What types of documents can be parsed with AppSheet Document AI? Select three.
- Invoice documents
- W-9 forms
- Receipt documents

What are the three kinds of template variables used in AppSheet?
- Built-in variables
- Expression variables
- Column name variables

Which statements on embedded app view emails in AppSheet are correct? Select two.
- Dynamic content in embedded app view emails is interactive for a period of 30 days.
- Only Gmail is supported.

Sasha checked the VPC flow logs and observed that traffic ingresses and egresses through a load balancer. Sasha wants egress traffic to bypass the load balancer. What can they do?
- Create a new cluster using Dataplane V2, and deploy your applications to the new cluster.
- Create an external passthrough Network Load Balancer for use with your Ingress.

(Choose all that apply) For a cluster in autopilot mode, you can set:
- The node subnet
- The service address range
- Network tags

(Choose all that apply) Which statements about GKE standard mode clusters are true?
- An Alias IP range is used to assign IP addresses to pods.
- Standard mode clusters support more pods than autopilot mode.

The Anthos Service Mesh control plane interacts with the Envoy proxies to
- Configure them on pod creation.

Which CLI tool is used to install and manage Anthos Service Mesh?
- asmcli

Wasm plugins can be used to send telemetry to external backend such as Cloud Monitoring.
- True

You need to disguise pod addresses in an autopilot mode cluster. What can you do?
- Configure a GKE NAT ingress policy.

(Choose all that apply) To use Cloud NAT with GKE, you
- Create firewall policies as needed.
- Create a NAT configuration using Cloud Router.
- Enables Cloud NAT on the cluster VPC network.

Your autopilot mode cluster has run out of IP addresses. What can you do?
- Add secondary IP ranges to the cluster.

When should you set up quotas? Select the correct answer.
- When you want to set a limit on the number of concurrent resources in a project or the number of API requests.

What is meant by the scope of a budget? Select the correct answer.
- Refers to the combination of Google Cloud projects and products that the budget covers.

Suppose one of your engineers spun up an expensive compute instance in a Test environment and left it running overnight. You receive an alert notification the next day with a significant spike in your costs. Which of the following could you implement using cost management tools to help prevent this from happening in the future? Select the two correct answers.
- Set up a quota limit to cap service usage when developing and testing applications.
- Set up a programmatic budget notification to disable billing for the project specific to the test environment to stop usage when exceeding the budget threshold.

Which of the following best describes the ideal use cases for setting up a budget? Select the two correct options.
- To monitor resource consumption at specific intervals before the end of the billing cycle (e.g., at 25%, 50%, etc.).
- To receive an email alert notification for when your costs hit, or are forecasted to hit, a specified amount.

Which of the following is not a usage-based credit type that you can filter your billing data by? Select the correct answer.
- Tax reductions issued by Google Cloud for using cloud resources.

A budget can only be set for _______________ and configured to cover the scope of _____________ and/or ________________. Fill in the blanks by selecting the correct answer.
- A single billing account, projects, products

You run a query for the fifth time in BigQuery, and you receive the following error message - 'Custom quota exceeded: Your usage exceeded the custom quota for QueryUsagePerUserPerDay, which is set by your administrator.' What does this message mean? Select all that apply.
- Only your project administrator can adjust the quota limit.
- The limit will be reset the following day.
- You’ve exceeded the limit on the amount of queries that you can run for the day.

In AWS, you have an admin user, Tamara, who manages the organization with an attached policy that allows all IAM actions on all resources within the organization. How would you grant similar permissions in Google Cloud?
- Add Tamara to an admin group that is assigned the roles/resourcemanager.organizationAdmin on the organization.

The AWS resource hierarchy uses organizational units to organize accounts, which then contain resources. How would you create a similar hierarchy in Google Cloud?
- Folders, projects, resources

In AWS, you have been using AWS CloudShell for writing and running bash scripts to manage your AWS resources without setting up credentials and installing packages on the multiple local machines you use. You need to reimplement your scripts in Google Cloud. Which similar tool could you use?
- Cloud Shell

Alexander is a Storage Administrator, responsible for managing objects in Cloud Storage. He needs to have the right permissions for every project across the organization. What should you do?
- Add Alexander to a group that has the roles/storage.objectAdmin role assigned at the organizational level.

In your current AWS environment, you have an IAM role and instance profiles set up for use by a web application to access other services and resources. You need to set up the equivalent environment in Google. Which type of identity should you use in Google Cloud?
- Google Cloud IAM service account

What is the key difference and similarity in the scope of AWS VPCs and Google VPC networks?
- AWS VPCs are regional and contain Availability Zone subnets; Google Cloud VPCs are global and contain regional subnets.

Which service in Google Cloud enables you to connect two VPC networks from different organizations?
- VPC Peering

What is the purpose of a Cloud Router?
- A Cloud Router implements dynamic VPN that allows topology to be discovered and shared automatically, which reduces manual static route maintenance.

You have an AWS EC2 instance without an external IP address assigned, but that connects to AWS services and APIs through an AWS NAT Gateway. You want to configure a similar scenario with a Compute Engine VM. What should you do?
- Use Google APIs and services by enabling Private Google Access on the subnet used by the VM's network interface.

You have an AWS security group that is set up on a VPC, and then associated with instances. You want to replicate this environment in Google Cloud. What technology should you choose?
- Google firewall rules defined at the network level

You want to connect to Google Workspace and YouTube, but your organization cannot meet Google’s peering requirements. What network connection service should you choose?
- Carrier Peering

Where can Cloud Run pull container images from?
- Artifact Registry

Why might a Google Cloud customer choose to use Cloud Source Repositories?
- They don't want to host their own git instance, and they want to integrate with IAM permissions.

What is the advantage of using Cloud Functions for event-driven components of your application?
- Cloud Functions handles scaling these components seamlessly.

You use AWS Elastic Beanstalk to autoscale your container application in response to HTTP traffiC: What service in Google Cloud provides you similar compute functionality? What is one of the key differences about AWS Elastic Beanstalk and Cloud Run?
- AWS Elastic Beanstalk requires the user to configure scaling targets.

What type of GKE metrics provides information about CPU utilization?
- System metrics

You are ingesting GKE metrics into Cloud Monitoring. What is the prefix that helps you to identify the GKE system metrics?
- kubernetes.io

Google Cloud’s operations suite integrates several technologies, including monitoring, logging, error reporting, and debugging, that are commonly implemented in other environments as separate solutions using separate products. What are key benefits of integration of these services?
- Reduces over head, reduces noise, streamlines use, and fixes problems faster

In AWS, you use Amazon CloudWatch to define alarms that notify you when health checks on your AWS resources fail. Which product can you use in Google Cloud to define similar alerts for your Google Cloud resources?
- Cloud Monitoring

AWS X-Ray lets you report on latency to manage performance of your AWS applications. What Google Cloud service can you use to report on latency for your applications in Google Cloud?
- Cloud Trace

You need to take your existing Amazon EC2 launch templates and reimplement them for a Google Cloud solution. Which Google Cloud tool can you use?
- Instance Templates

You have been asked to train a junior team member who is familiar with AWS in the lifecycle of a Google Cloud virtual machine (VM). How can you describe the equivalent of the Amazon EC2 instance shutting-down state in Google Cloud?
- Terminating

You currently store data from Amazon EC2 instances in an EBS volume with automated snapshots providing availability across availability zones. You need to reimplement this scenario using Google Compute Engine. What should you use?
- Regional persistent disks

You need to create virtual machines that are optimized for high-end remote visualization, deep learning, and predictive analytics. What machine family in Compute Engine should you use?
- A2 series

You have a Virtual Machine that is running data pipeline batch Extract, Transform, and Load (ETL) jobs. If the VM fails, the ETL package should gracefully recover the data pipeline and it will restart at the point of failure. You want to choose the most cost-effective solution in Google Cloud. What should you do?
- Use a Spot VM to deliver the batch data pipeline job.

You need to apply load balancing to groups of heterogeneous instances in Google Cloud. Which option can you use?
- Unmanaged instance group

Which Google Cloud load balancing services support IPv6 clients? (Choose two).
- Global HTTP(S) load balancing
- SSL proxy load balancing

You need to set up a load balancer that operates at layer 4 of the Open Systems Interconnection (OSI) model. The load balancer needs to handle SSL layer traffic. What option should you choose in Google Cloud?
- External SSL Proxy Load Balancing

You need to automatically create virtual machines (VMs) in Google Cloud when demand increases for your application and delete VMs when demand drops. You want to have the VMs grouped together for convenient management. What should you use?
- A managed instance group with autoscaling enabled

Your organization uses AWS Application Load Balancer to load balance between your servers in a region at the application layer. You need to implement similar load balancing functionality in Google Cloud. What technology should you use?
- Application Capacity Optimizations with Global Load Balancing

In your AWS environment, you are using Amazon Athena, AWS Glue DataBrew, and Amazon S3 to analyze structured and unstructured data. You need to set up a data lake environment using Google Cloud. As part of this requirement, you have opted to choose a low-code, no code solution similar to AWS Glue DataBrew. Which option can you use to load data?
- Cloud Data Fusion

In your AWS environment, you have set up an AWS RDS database. To authorize connections, you have set up VPC security groups. You have been asked to set up a Cloud SQL database of an equivalent size. You want to use a Google-recommended method to authorize connections in a Cloud SQL database. What should you do?
- Use VPC firewalls.

You have a requirement to serve media files. Which is the best storage option?
- Cloud Storage

Which of the following is one of the key differences between an S3 bucket and cloud storage?
- Amazon S3 lets users tag individual objects with key-value pairs

What is the purpose of the Deployment object in Kubernetes?
- To ensure that a defined set of Pods is running at any given time.

What is one benefit of Anthos?
- You can use the same configurations for on-premises and GKE clusters.

How do Pods within the same node communicate with one another?
- Through the node networking namespace

In Amazon Elastic Kubernetes Service, a cluster has at least one node which is an EC2 instance. In Google Cloud, where do the compute resources come from that are used to build Google Kubernetes Engine clusters?
- Compute Engine

You use Azure Container Apps to autoscale your application in response to HTTP traffic. What service in Google Cloud provides you similar serverless compute functionality?
- Cloud Run

In Azure, you use Azure Monitor to define alerts that notify you when health checks on your Azure resources fail. Which product can you use in Google Cloud to define similar alerts for your Google Cloud resources?
- Cloud Monitoring

Azure Application Insights lets you report on latency to manage performance of your Azure applications. What Google Cloud service can you use to report on latency for your applications in Google Cloud?
- Cloud Trace

Consider an Azure environment, where there is an Azure Active Directory Service Principal and an Azure Managed Identity setup for a web application to access other services and resources. You need to set up an equivalent environment at Google. Which type of identity should you use in Google Cloud?
- Identity and Access Management service account

The Azure resource hierarchy uses management groups to organize subscriptions. These management groups contain resource groups with resources. How would you create a similar hierarchy in Google Cloud?
- Folders, projects, resources

In Azure, PowerShell can be used to script, automate, and manage the Windows workloads running on Azure Virtual Machines. You need to reimplement your scripts in Google Cloud. Which similar tool could you use to reimplement your scripts in Google Cloud?
- Cloud SDK

Which option best describes the difference in how user identities are managed between Azure and Google Cloud?
- In Azure, user identities are managed using Active Directory; in Google Cloud, user identities are managed outside IAM.

Your organization uses Active Directory as its corporate directory. Which managed service in Google Cloud automates best practices to sync your data and manage authentication and directory operations for Active Directory dependent cloud applications?
- Google Cloud Directory Sync

You have an Azure Network Security Group that is set up across a region, and then associated with subnets. You want to replicate this environment in Google Cloud. What technology should you choose?
- Google firewall rules defined at the network level

You have an Azure VM without an external IP address assigned to its network interface. The VM connects to a set of external IP addresses used by Azure APIs and services. You want to configure a similar scenario with a Compute Engine VM. What should you do?
- Use Google APIs and services by enabling Private Google Access on the subnet used by the VM's network interface.

What is the key difference and similarity in the scope of Azure VNets and Google VPC networks?
- Azure VNets are regional and contain regional subnets; Google Cloud VPCs are global and contain regional subnets.

You have been asked to train a junior team member who is familiar with Azure in the lifecycle of a Google Cloud virtual machine (VM). How can you describe the equivalent of the Azure VM’s deallocating state in Google Cloud?
- Terminating

You store data from Azure virtual machines in an Azure zone-redundant storage, which distributes data over different zones in the same region. You need to reimplement this scenario using Google Compute Engine. What should you use?
- Regional persistent disks

You have a Virtual Machine that is running data pipeline batch Extract, Transform, and Load (ETL) jobs. If the VM fails, the ETL package will gracefully recover the data pipeline and it will restart at the point of failure. You want to choose the most cost-effective solution in Google Cloud. What should you do?
- Use a Spot VM to deliver the batch data pipeline job.

You need to take your existing Azure Virtual Machine Resource Manager templates and reimplement them for a Google Cloud solution. Which Google Cloud tool can you use?
- Instance Templates

Your organization uses Azure Load Balancer and Azure Application Gateway to load balance between your servers in a region at the application layer. You need to implement similar load balancing functionality in Google Cloud. What technology should you use?
- Application Capacity Optimizations with Global Load Balancing

In your Azure environment, you are using Azure Synapse Analytics, Azure Data Factory, and Azure Data Lake Gen 2 to analyze structured and unstructured data. You need to set up a data lake environment using Google Cloud. As part of this requirement, you have opted to choose a low-code, no code solution similar to Azure Data Factory. Which option can you use to load data?
- Cloud Data Fusion

In your Azure environment, you have set up an Azure SQL database. To authorize connections, you have set up VNet firewall rules. You have been asked to set up a Cloud SQL database of an equivalent size. You want to use a Google-recommended method to authorize connections in a Cloud SQL database. What should you do?
- Use VPC firewalls.

In your current Azure environment, you have blobs stored in a container, which is owned by an Azure account. You need to move these files to Cloud Storage. Which option describes the hierarchy in Google Cloud?
- Project -> Bucket -> Object

In Azure Kubernetes Services, a cluster has at least one node which is an Azure Virtual Machine. In Google Cloud, where do the compute resources come from that are used to build Google Kubernetes Engine clusters?
- Compute Engine

What product should an enterprise use if they don’t have any ML expertise?
- Generative AI App Builder

What features are available as part of Generative AI App Builder?
- Enterprise Search, Personalize, Dialogflow Agents

What tool should you use to provide search functionality in your financial services product?
- Enterprise Search

Which products should you use for your enterprise use cases?
- Vertex AI + Generative AI App Builder

In which of the following scenarios should you use Enterprise Search? (Choose two).
- You lack the time to build a custom search system that is scalable and available.
- Improve developer productivity using code completion and code generation features.
- Quickly search and summarize your company’s annual compliance training videos and create study guides.
- Improve existing search result experiences with LLM-based capabilities such as summarizing results.

Why do business analysts choose Generative AI technologies like Enterprise Search?
- Improve time-to-value to search, navigate, and extract insights and understanding from large amounts of complex data

Choose the use case that cannot be satisfied with Enterprise Search
- Code search, where developers can paste a bug and Enterprise Search finds the piece of code that caused the issue.

Choose the answer that best describes the security posture of Gen App Builder.
- Gen App Builder offers the same security capabilities as other Google Cloud products like BigQuery, including data encryption in flight and disk and no data sharing across customers

The website team is creating a microservice that will be responsible for creating controls and serving configs to filter out what data is presented to users after they perform a query. Which role should you assign them?
- Discovery Engine Admin

The development team is creating a microservice that will be responsible for ingesting new documents into the Gen App Builder unstructured data store on bulk every hour. Which role should you assign them?
- Discovery Engine Editor

The security team needs to perform some audit tasks to your datastores on Gen App Builder to make sure the right documents and user events are being ingested. Which role should you assign them?
- Discovery Engine Viewer

What can be deleted in Enterprise Search? Select all that apply.
- All of the above are correct.

How can you improve the quality of recommendations and search results leveraging user actions? Select all that apply.
- All of the above are correct.

What data stores are available in an Enterprise Search engine?
- Website, structured and unstructured data stores.

What data stores can have a schema?
- Structured data

How do you change the default behavior of a search request?
- Boost controls change the order of results and filters remove entries from those results.

What kind of data can you search with a Website Engine?
- Images and public websites.

What do you use in unstructured search to divide or categorize information?
- Facets

Which metric indicates whether your users are finding what they were looking for?
- Click-through rate

While on vacation, a manager in the sales department used a computer in the business center of a hotel to access their Google Workspace account. They cannot remember whether they signed out and closed the browser. You should investigate a potential breach and strongly secure the account with the least amount of disruption to the sales manager. What should you do?
- Suspend the account temporarily. Review the mobile devices associated with the account, and wipe suspicious devices. Check the Login audit log for suspicious web sign-ins. Review the Security report for exposure of company data. Reset the account’s password and revoke any OAuth 2.0 tokens. Unsuspend the account and have the manager enroll a security key for 2-Step Verification. Have the manager review their Gmail settings for filters and forwarding.

Recently, proprietary research information on Google Drive was accidentally shared with a vendor by a member of one of the many research teams at Cymbal Labs. The CEO is adamant that similar errors must be prevented and has asked the IT team to revisit the Google Drive settings to tighten security. However, collaboration with several partner companies that are involved in drug development cannot be impaired. The partner companies are also using Google Workspace. What configuration changes must be made to Google Drive settings in the Google Admin console to improve the security posture of Cymbal Labs?
- Add the partner companies’ Google Workspace domains to the Allowlisted domains list. Change the Sharing outside of Cymbal Labs to Allowlisted Domains at the root organizational unit. Clear the checkbox for When sharing outside of Cymbal Labs is allowed, users in Cymbal Labs can make files and published web content visible to anyone with the link.

Cymbal Healthcare’s surgical training team has asked for a location in Google Drive to store resources that will be shared with surgical residents. A member of the IT team has created the shared drive. Two senior members of the surgical training team will move files from their own Google Drive folders to the new shared drive and need the ability to modify its settings. Five junior members of the team will be creating new guides on operative procedures but are not permitted to reorganize content. This repository will also be augmented by a few vendors who should have access to a single folder within the shared drive. When attempting to move files into the shared drive, one of the senior surgical trainers was blocked from adding content. You must resolve the issue and set permissions to align with the requirements for the rest of the collaborators on the shared drive. What should you do?
- Change the Migrations Settings in Google Drive to Allow users to migrate files to shared drives for the organizational unit that the senior surgical team member belongs to. Assign Manager access to the senior surgical team members. Assign Contributor access to the junior team members. Create a folder within the shared drive, and give the vendors Editor access.

Cymbal Healthcare’s IT help desk handles first-level support tickets for Google Workspace. The responsibilities for help desk members include checking the status of users, resetting passwords, managing Google Groups, reviewing logs, and transferring Drive files and folders between users. They should not be able to reset passwords for any C-level executives. You want to limit the Google Admin console privileges of help desk team members to their specific responsibilities. What should you do?
- Assign the Help Desk Admin role but specify the organizational units that the help desk are allowed to interact with. Assign the Services Admin and Groups Editor roles to the help desk members. Create a custom role with the Reports privilege, and assign it to the help desk members.

Cymbal Health has completed the purchase of a Google Workspace Enterprise subscription. Each department has an organizational unit for full-time employees. You must assign licenses to every full-time employee, but not to interns, part-time employees, partners, or contractors. You also want to ensure that future full-time employees receive licenses automatically when their accounts are added. What should you do?
- In the Google Admin console, go to Billing > License settings. Select the root organization, and change the setting for Google Workspace Automatic licensing to “OFF.” For each organizational unit for full-time employees, change the Google Workspace Automatic licensing to “ON.”

The facilities manager at Cymbal Health headquarters has requested a way for meeting rooms, surgical theaters, huddle spaces, and the auditorium on the campus to be centrally managed by members of his department. Staff members should be able to find and request time at each location. Several facilities administrators will be responsible for reviewing requests for each location and either affirming or denying access at the requested date and time. The surgical theater and auditorium must be made available automatically if all but one of the attendees decline an event. However, when an executive books either location, they must not be released under any circumstances. For all resources, details about the booked events should be hidden from the general staff members. The facilities manager also needs to report utilization of each space to the director of operations on a quarterly basis. You add the headquarters to the Buildings section of Resources in the Google Admin console and upload the list of rooms as resources for the building. What should you do next?
- Open each resource in Google Calendar while signed in as a Google Workspace administrator, and give the facilities administrators Make changes to events permission. Access permissions for events should be See only free/busy (hide details) for Cymbal Health. For the surgical theaters and auditoriums, set the Calendar-based room release to “ON,” and exempt the Executives group. Create a custom admin role with the privilege Room Insights, and assign it to the facilities manager. Set Resource booking permissions to Allow users to book resources that are shared as “See only free/busy.”

When Google Workspace was initially implemented, the IT team planned on most Google Groups to be created and managed through Google Cloud Directory Sync. However, several scenarios require Google Groups to be created solely in the Google Admin console. The human resource department requires a way to receive and respond to employee questions about upcoming changes to the benefits plan. Questions can be received through email or by using the web interface for the group. Both questions and answers should be viewable by full-time employees to reduce redundant queries. A member of the marketing department requires a group for mailing information about an upcoming event to celebrate the anniversary of the founding of Cymbal Health. This will be a one-way communication with the members that consists of periodic messages from the marketing department to promote the event. The member list will include employees, contractors, vendors, local politicians, business leaders, and donors. How should each group be created and configured?
- For the human resource department, create a group with the name “Benefits Questions.” Select the Access type as Team. Remove access for the Entire Organization and External. Add the “Full-time Employees” group as a member. The Access type will become Custom after the modifications. For the marketing department, create a group with the name “Cymbal Health Anniversary Event.” Set the Access type to Announcement Only, and set the Access settings to allow Group Members to view conversations. Set Who can join the group to Only invited users. Set Allow members outside your organization to “ON.”

The CIO of Cymbal Labs has asked that all department managers are given the ability to create and manage groups to improve communication and collaboration at the company. No other associates, aside from the IT team and department managers, should be able to create groups. The groups cannot be accessible to anyone outside of Cymbal Labs employees, although they can receive messages from contractors working on research projects. The groups created by the managers should not be visible to non-members of the group. Any group created by a manager must be visually distinct from other groups. You want management staff to utilize groups as directed by the CIO. What should you do?
- Change the service status for Groups for Business to ON for everyone. In Groups for Business settings, enable Group owners can allow external members. Set Accessing groups from outside this organization to Private. Set the Default for permission to view conversations to All group members. Set Apply this suffix to all group names in your organization to “mgr.” Create a custom admin role to allow the managers to create groups and assign the role to their accounts. Have the managers change their groups’ settings for Who can see group to Group members.

Cymbal Labs has an annual program for summer interns across departments. During their participation in the program, interns are given an email address and access to dedicated shared drives. Due to the limited nature of their involvement in research and development and the need to secure intellectual property, interns do not receive an Active Directory account. You have been asked to create 346 accounts from a list that you received from the director of the intern program. The list also contains several accounts for students that no longer participate in the internship program. What is the minimum that you must do to create the interns’ accounts separate from employee accounts and prevent any ex-interns from accessing their accounts?
- Create a new organizational unit called “Interns” in the Google Admin console. Use the bulk user update template to create a CSV file. Populate the columns First Name, Last Name, Email Address, Password, and Org Unit Path for each new user. For the ex-interns, enter their email address and change the cell data in the New Status column to Suspended. Upload the file.

The program manager for patient experience at Cymbal Health will be leaving the organization in less than a week. The new program manager will need access to the historical email of the former program manager. How will you transfer the email between accounts?
- Use the Data migration tool to migrate Gmail data to the new program manager’s Gmail.

Cymbal Labs is beginning trials for a new drug that prevents coronary heart disease and will be storing the data in a shared drive. How can you configure the shared drive so that only the IT department is able to change the shared drive membership and the shared drive settings?
- Add the team leaders and members as Content Managers, Contributors, and Commenters.

As part of Cymbal Health’s transition to Gmail, you need to reconfigure several email-enabled applications, including the telephone voicemail server and devices like multifunction printers, to send mail via Gmail. The compliance team wants messages routed from these apps and devices to be archived in Google Vault for discovery and the messages to be sent in the most secure manner possible. You need to configure Gmail settings to route messages from these apps and devices. What steps would you take?
- In Gmail settings for the root organizational unit, configure the SMTP relay service. Set Allowed Senders to Only addresses in my domain. Set Authentication to Only accept mail from the specified IP addresses, add the WAN IPs for Cymbal Health, and select Require SMTP authentication. For Encryption, select Require TLS encryption. In Gmail Compliance settings, turn on Ensure that a copy of all sent and received mail is stored in associated users' mailboxes for the Comprehensive mail storage setting.

Cymbal Health has hired a public relations consulting firm and an advertising agency to create a campaign that will raise awareness of their hospital’s designation as a Level I trauma center. The public relations consultants will use a Cymbal Health email account to correspond with the media. Both the public relations consultants and the advertising agency will store digital campaign assets in Google Drive. The consultants’ Google Workspace accounts should be associated with the marketing department. The marketing department has both the Gmail and Google Drive services enabled for all employees. You need to reconfigure the Gmail and Google Drive services to give appropriate access to the consultants. What should you do?
- Create separate organizational units for the public relations consultants and the advertising consultants as child organizational units of the marketing department org unit. Turn off the Gmail service for the advertising agency consultants.

Cymbal Healthcare has opened a small research facility in France as a precursor to an anticipated expansion of pharmaceutical sales to Europe. To comply with European Union regulations, the Google Workspace data created by the staff of the research facility must be stored within a data center geographically located on the continent. The Google Workspace accounts for the employees of the facility are spread across several organizational units specific to their job role. You want to ensure that Google Workspace core data for Gmail, Google Drive, and other services is stored in Google’s European data centers, while keeping the data for the American offices in Google’s United States data centers. What should you do?
- Set the Data Regions policy for the root organizational unit to United States. Create a group for the French research facilities employees, and set the Data Regions policy to Europe.

Cymbal Health has acquired a large physicians group to increase the geographic reach of its healthcare network. The physicians group uses an on-premises email server and will continue to do so for the next seven months, when their mail server licensing expires. A small pilot group of employees from the physicians group will be using Gmail prior to the eventual migration of all of the group’s mail to Google Workspace. The domain for the physicians group has been added to the Google Admin console and verified. What are the steps you must take to configure Gmail in the Google Admin console for the physicians group employees who will continue to use their on-premises email server?
- Change the MX records for the physicians group domain to point to Google servers. Create an organizational unit for the physicians group employees. In Gmail settings, add the on-premises email server as a host. Create a list with the users that will continue to use the on-premises email server. Create a Routing setting to apply to the organizational unit. Choose the Inbound and Internal - Receiving options for Email messages to affect. Configure the rule to route mail to the on-premises email server for the users on the list you created.

Cymbal Labs has decided to disallow access to Gmail from third-party desktop applications in order to improve security, provide a consistent email experience, and enable integration with other Google Workspace services such as Google Meet and Google Calendar. Several employees have already submitted requests, supported with business cases, to continue using third-party desktop email applications on their Windows PCs. These requests are specific to the use of Microsoft Outlook as a client and require sync with Google Calendar, Contacts, Notes, Tasks, and the Global Address List. You want to enable access to Microsoft Outlook as a client for Gmail with sync of the additional Google Workspace services like Calendar and Contacts for only those employees with approved requests. What should you do?
- Create an organizational unit for the users who will be using Microsoft Outlook. Turn on Enable Google Workspace Sync for Microsoft Outlook for my users for the organizational unit. Install the Google Workspace Sync for Microsoft Outlook app for each user on their Windows PC.

You have been tasked with helping to set up a pilot program for Google Chat at Cymbal Labs. Each department will have at least three employees who will participate as pilot users of Chat. The rest of the employees will not have access to Google Chat until the pilot users have had 45 days to evaluate the service. How would you enable access to Google Chat for only the employees in the pilot program without affecting the service configurations that are applied to them?
- Create a Google Group called “Google Chat pilot.” Add the employees that will be participating in the pilot of Google Chat to the group, and turn on the Google Chat service for the group.

The director of quality assurance at Cymbal Labs will be taking a leave of absence for three months. During their absence, they will not be responsible for any work-related communication. Several colleagues in the quality assurance department will share the duties of the director during the leave period. The director wants emails to be forwarded to these colleagues, but the conditions of the leave require them to not appear in the director’s Gmail account. How will you configure forwarding for the director’s messages during their leave?
- In Gmail Routing settings, configure Email forwarding using recipient address mapping. Create a map for each recipient for the director’s email address. Make sure that All incoming messages is selected and that Also route to original destination is not selected.

Cymbal Health has started a visiting nurses program that will initially utilize contractors. The contractors will require the Gmail and Google Calendar services but should not have access to any other Google Workspace services. How would you configure their access dynamically to account for turnover in personnel?
- Create an organizational unit for the contractors and disable all Google Workspace services other than Gmail and Google Calendar for its members.

To combat a tremendous increase in spam messages sent to email addresses that are publicly available on Cymbal Health websites, the security team has added a filtering server to the flow of inbound email which will append a custom header identifying messages as spam. How would you configure Gmail to accept these messages?
- Add the public IP address of the filtering server to the Spam, Phishing and Malware setting for Gmail.

The Director of Security at Cymbal Labs recently attended an information security conference and returned with questions about how the organization is handling an increase in spam and phishing attempts. The director wants you to prevent only C-level executives and department managers from receiving any spam messages in their mailboxes before a Google Workspace administrator performs a review. Also, no one at Cymbal Labs should receive emails from a list of domains recently identified in a Homeland Security briefing that the director received. How would you configure Gmail settings to protect the executives, managers, and the organization from spam and phishing attempts?
- Create a list of domains with the information provided by the director and use the list to create a blocked senders policy applied at the root organizational unit. Create a group of executives and directors. Select the Put spam in administrative quarantine option, and create and apply a spam policy to the group.

Since Cymbal Labs switched from its former email system to Gmail in Google Workspace, there has been a marked increase in the number of complaints from employees that their messages to external contacts are received in spam folders. The CTO has asked you to reduce how often Cymbal Labs emails are classified as spam by external recipients. What should you do?
- In the DNS records for your domain, add an SPF record for Google Workspace. In Gmail > Authenticate email, generate a DKIM record, and add it to your DNS records.

To further harden the systems of Cymbal Health, you suggested and received approval to implement spam, phishing, and malware policies for Gmail. After adding the policies to the Admin console, the help desk has reported an increase in tickets related to incoming messages from external senders that were not received, but seemingly come from legitimate sources. You want to identify why the messages were not received. What should you do?
- Ask the recipient for the email address of the sender. Use Email Log Search to identify the policy that causes the messages to be blocked, then modify the policy that is blocking emails.

One of the managers in the Cymbal Health accounting department inadvertentlyshared two Google Drive files with a vendor. The first file was a Google Sheet with a list that contained employee Social Security numbers, and the second file was a Google Doc that had employee ID numbers (in the convention CH, four digits, and the employee’s initials) and their respective salaries. The CIO has asked you to ensure that no one can share files with this type of information outside the organization again. You must secure the organization’s Google Drive content, but still allow appropriate file collaboration with partners. What should you do?
- Create a data protection rule to block external sharing of Drive content that contains Social Security numbers. Create another rule to block external sharing of files containing employee ID numbers.

The CIO of Cymbal Health has initiated an audit of interactions between the organization and technology solutions providers that store or interact with sensitive corporate data. They have asked you to document the process of sharing sensitive information with Google Cloud Support when troubleshooting Google Workspace service issues. How should you describe the process for securely sharing data with Google Cloud Support during troubleshooting?
- Files are shared to a Google-owned Workspace environment with an expiration date to revoke access when the case is closed.

The help desk has forwarded you a ticket with high priority because a researcher is locked out of their Google Workspace account. The researcher is traveling, and their login was flagged as suspicious. They also lost their mobile phone that morning. The researcher needs immediate access to help complete a time-sensitive government filing for a drug trial. The help desk has already changed the password for the researcher, but they are still unable to log on. What can you do to help the researcher regain access to their account?
- Temporarily turn off the login challenge.

Cymbal Health purchased a Google Workspace subscription to address the collaboration and communication requirements of different employees in their organization. The CIO has asked you to compile a short list of compelling features that would justify upgrading the current Enterprise Standard licenses to Enterprise Plus. Which list of Enterprise Plus features could you include in your recommendations for upgrading?
- Enterprise data regions, client-side encryption, and Access Transparency logs of admin activity

One of the lab managers at Cymbal Labs has contacted you to investigate and resolve an issue with a mail-enabled app that their team uses to send email messages. Messages sent from members of the lab to external recipients are not being received. You confirm the recipient addresses and the dates that the messages were sent with the lab team. When you use Email Log Search to find the messages, the search results reveal that the message status for the sent messages is “Rejected.” What would be your next step to troubleshoot the delivery issues for these messages?
- Confirm that you added the app as an allowed sender to the Simple Mail Transfer Protocol (SMTP) relay settings in the Google Workspace Admin console.

A new employee has opened several help desk tickets in the last week about messages that exist but do not appear in their mailbox. You have been asked to investigate the issue. The missing messages are all related to a project to expand the children’s wing of Cymbal Health’s main hospital campus. The messages come from both internal and external senders, and the employee uses the web interface for Gmail. You check the policies for spam, blocked senders, and routing, and rule out a problem due to Gmail settings. What should be the next step in your troubleshooting?
- Use Email Log Search to search for the messages and identify how they were handled by Gmail by viewing the post-delivery status.

The Cymbal Health human resource department outsourced payroll processing to a local service provider. The system of the service provider sends automated informational emails that are always marked as spam when they are received by a member of the HR team. In addition, several HR employees have received messages that appeared to be sent by the service provider but were determined to be phishing attempts. You want to configure Gmail settings to resolve both issues. What should you do?
- Add the external IP address of the service provider’s email server to the Email allowlist. Create a list of the sender email addresses that sent phishing attempts and use it to configure a blocked senders policy.

The marketing department at Cymbal Health has started using a third-party email newsletter service. Test newsletters have been marked as spam. How can you ensure that the newsletters will reach their recipients' inboxes?
- Add the domain of the third-party newsletter service to your SPF record.

An admin at Cymbal Labs made a change to Gmail settings that disrupted mail flow for a short time before it was reversed. The CIO wants to be notified every time a Gmail setting is changed. What should you do?
- Create a custom Alert rule for Admin log events that sends a notification when settings are changed.

To comply with a cyber insurance policy, all employees at Cymbal Labs must sign in using 2-Step Verification. Employees in IT and C-level executives need a second factor of authentication that cannot be phished. How would you deploy additional security for user logins in this scenario?
- Create a Google Group for IT and executive employees. Set 2-Step Verification Enforcement to On, and also set the Methods option to Only security key. At the top-level organization level, set Allow users to turn on 2-Step Verification, and activate the Enforcement option.

Security personnel at Cymbal Health have each been issued a company-owned Android phone. These devices must be unlocked with a complex passcode. If there are more than five failures when unlocking the screen, the device should be blocked from accessing Google Workspace, and an administrator should be notified. What mobile device policies should be applied to the organizational unit for the security personnel to meet the requirements?
- Set mobile management to Advanced. Set Universal settings > General > Password requirements > Require users to set a password to Strong. Create a rule with the template Block account on multiple failed screen unlocks, and set it to Block mobile device and send an alert.

A manager in the Cymbal Health accounting department has requested that emails containing the words “confidential,” “payroll,” and “salaries” must be prevented from being sent to anyone outside the company. When messages are flagged, the manager wants to be notified. What steps should you take to fulfill the request?
- Create a Gmail quarantine and make the manager a member of the reviewers group with the option to get periodic notifications. Create a content compliance rule for Gmail at the top-level organizational unit to do a simple content match on outbound messages, and send matches to the quarantine.

The Cymbal Health facilities department purchased a third-party app for scheduling that needs to integrate with Google Calendar. The current company policy for third-party apps is to prohibit untrusted apps from accessing any Google Workspace core service data. While reviewing the access required for the scheduling app, you discovered other apps that have been authorized by end users. How can you enable secure access for the new scheduling app while you prevent the continued use of other untrusted apps?
- In app access control, select the scheduling app in the Configured apps list and change the access to Trusted. Change third-party API access to Don't allow users to access any third-party apps. Review the Accessed apps list and change the Access setting to Trusted for any trusted applications.

The help desk at Cymbal Health has received a call from the urgent care facility. One of the physicians misplaced their personal Android phone during a busy evening shift. The device has an Android work profile. A help desk representative has asked for your help in resolving the situation. How do you secure the device and prevent potential unauthorized access to company data?
- In the Google Admin console, select the device on the Mobile & endpoints list and wipe the account. Reset the Google Workspace account password for the physician, and sign out all sessions.

A third party auditor recently identified that documents from a drug trial were shared externally. It is not clear yet whether the exposure was deliberate or accidental. The Cymbal Health Chief Information Security Officer (CISO) wants automated safeguards in place immediately to restrict external sharing of Drive files related to drug trials. What changes should you make to Drive sharing policies?
- Create a new label for file sensitivity, and require users to pick an option. Create a data protection rule that searches for a Google Drive label that reads “File Sensitivity” with the options restricted, confidential, or internal. As an action, choose Block external sharing for Google Drive in the rule options to receive an alert in the alert center.

After a recent policy change to block all Google Workspace Marketplace apps, a ticket that lists Google Docs add-ons that are no longer working is escalated. After verifying with the user and their manager that the add-ons are necessary for their work, you must allow the add-ons by using as few permissions as possible. What policies would you implement?
- Set the Manage Google Workspace Marketplace allowlist access option to Allow users to install and run only selected apps from the Marketplace. Add the add-on to the allowlist for the organizational unit that the user resides in. Audit the OAuth Scopes to review the access to core services and data.

Cymbal Labs has Windows desktop PCs and laptops in their research labs that are shared among the research personnel. Visiting partner policies must be applied to the Chrome browser including blocking unauthorized extensions, ending processes that use the Chrome task manager, and blocking all downloads. You must ensure that these Chrome policies are enforced on company devices regardless of who is logged on to Windows and whether they have signed on to the Chrome browser. How should you manage the Chrome browser on these Windows computers?
- Add a Chrome Browser Cloud Management subscription in the Google Admin console. Enroll the browsers and apply policies to each organizational unit.

Cymbal Labs entered into a partnership agreement with a company based in France to assist with development and reduce the go-to-market time for several new medications. The employees of the partner company will be given Google Workspace accounts to collaborate with Cymbal Health employees. You must ensure that the partner employees only connect from their main office and that third-party apps cannot access their Drive files. What policies would you implement?
- Create a context-aware access policy that has a Meet attributes condition of the IP subnet of the partner office. Assign the policy to the core services enabled for their organizational unit. Turn off the Drive SDK for their organizational unit.

You’re part of a team that is implementing a new single sign-on (SSO) service with a third-party identity provider (IdP) that uses SAML. A group of employees across Cymbal Health will participate in a pilot of the new system. You will be configuring the SSO profile in Google Workspace for the pilot. What steps must you complete to create a working SSO profile?
- Enter a sign-in page URL and upload an X.509 PEM certificate in a new SSO profile.

At Cymbal Labs, sensitive research must be protected from access by third-party apps. How can user installation of apps from the Google Workspace Marketplace be restricted?
- Users can install and run only certain apps based on an allowlist.

Cymbal Health needs to ensure that files containing personally identifiable information like social security numbers are not shared externally from Google Drive. What security measure can be enabled to warn admins of policy violations?
- Create a Data Protection rule from the PII template and enable Alerting.

At Cymbal Health, the Google Vault retention policy for Gmail messages is five years with an expiration action of purge only permanently deleted messages. A doctor has moved messages that they received ten years ago to Trash. When will the messages be purged from Gmail?
- They will be purged in 60 days.

The director of compliance for Cymbal Health wants detailed information about files that are shared externally. You must give the director a simple way to access more detailed information about externally shared files whenever it's necessary. What should you do?
- Create an admin role with the Dashboards privilege for the security center, assign it to the director’s account, and instruct them to view the widget for file exposure.

Cymbal Labs will spin off a small research team into its own company, led by one of the current executives. As part of the agreement between the companies, research data will be transferred to the new company from Google Workspace. The data resides in Google Drive, but the new company will not use Google Workspace. How will you transfer the data to the new company in a cost-efficient, centrally managed way?
- Utilize a third-party migration solution to migrate the Google Drive data to the Cloud Storage account of the new company.

Cymbal Health has acquired a primary care clinic group with three locations and 90 employees. The group uses Exchange Online for email, calendars, and contacts. The email of former employees is stored in PST files on a file server at one of the clinics. How would you migrate the email to Google Workspace?
- Install Google Workspace Migration for Microsoft Exchange on one of the clinic’s Windows PCs to migrate the email.

As part of an ongoing investigation, the Cymbal Health legal department is working with external attorneys. They need the email correspondence between company executives and an architectural firm regarding an expansion of the headquarters building. You must ensure that any messages related to the project are not purged from Gmail until the litigation is resolved. You have created a matter in Google Vault. How do you preserve the data and give the external attorneys ongoing access to Google Vault?
- Create a hold by using the appropriate dates, users, and search terms for the project. Create an organizational unit and accounts for the external attorneys. Create a custom admin role with Google Vault privileges. Assign the role to the external Google Workspace accounts of the attorneys.

You’re part of the IT security task force for Cymbal Labs. Part of your responsibility is to improve the security posture of Google Workspace policies based on Google best practices. You must identify potential risks and mitigate them quickly and efficiently. What should you do?
- Review the security health page and dashboard for policy recommendations and trending information for security reports.

Cymbal Labs has acquired a small research company with 18 employees. They used a hosted mail provider. You have created accounts in Google Workspace for their employees. Their IT person has asked for a recommendation for a centrally managed migration of their historical data into their new accounts with minimal cost. What would you recommend as a method for migration?
- Configure and run the data migration service in the Google Workspace Admin console.

Cymbal Labs uses Google Vault for email eDiscovery. The current retention period for Gmail, applied at the root organizational unit, is seven years. To comply with new email retention regulations, emails related to the testing of a particular drug product must be retained for ten years. How would you ensure that the organization meets the requirements of the retention regulations with minimum disruption to policies?
- Create a custom retention rule for Gmail with a scope of the root organization and conditions of: terms of the drug name; and a retention period of 3,650 days.

You are asked to create a shared drive for sensitive data about Cymbal Health company financials. Several employees will be made managers of the shared drive. It’s important that there is no unauthorized access to the data. The CTO wants the shared drive settings to be monitored and the help desk to be notified of any changes. How do you set up monitoring for the shared drive?
- Create a group with the shared drive managers. Create an Activity rule for Drive log events for shared drive settings changes and a condition of the shared drive managers group as actor group name. Set alert severity to high, and send email notifications to the help desk.

A manager at Cymbal Health has left the company. A new manager has been hired to replace them, starting tomorrow. You need to give the new manager access to the Google Drive files and folders that the former manager owns as efficiently as possible. What should you do?
- Delete the former manager’s account and choose the option to transfer the files and folders to the new manager’s account.

Cymbal Labs currently has a retention policy for Gmail of ten years. In compliance with HIPAA laws, and to adhere to a new corporate legal policy, the retention period must be changed to six years. You will modify the retention policy in Google Vault to the new retention period. What will happen to messages in Gmail that were sent or received more than six years ago?
- They will be immediately purged from user mailboxes, except for data that is part of a hold.

Which set of HTTP methods contains one that is invalid?
- PUT, TAIL, GET

What are three benefits of using Apigee hybrid?
- The hybrid runtime plane is deployed to Google Cloud, to other clouds, or in your own data center, giving you complete control over its management and operations.
- Apigee hybrid runs on Kubernetes, so you can achieve autoscaling and other operational benefits of a containerized system.
- With Apigee hybrid, you operate your API runtime plane with fewer software services than in a private cloud deployment, resulting in reduced cost of ownership.

How does Apigee help in the digital transformation of an enterprise?
- Apigee enables the entire digital value chain, from exposure to consumption of services and data, using APIs.

Which three deployment models are supported by Apigee?
- Customer-managed management and runtime planes
- Apigee-managed management and runtime planes
- Apigee-managed management plane and customer-managed runtime plane

Which hybrid runtime component provides an API interface to the management plane?
- MART

Which mechanism is used by the Apigee API to authenticate and authorize management API requests in hybrid?
- OAuth

Which three services are part of the Apigee hybrid management plane?
- Unified Analytics Platform (UAP)
- Apigee API
- Hybrid UI

In Apigee hybrid, which mechanism is used to map a domain name to an environment?
- Create an environment group with one or more domain names, and assign the environment to the group. Configure a virtual host in the runtime plane to use the environment group.

Which of the following methods of using the apigeectl command is invalid?
- apigeectl init -f ./overrides.yaml -c environment

Which of the following is a true statement regarding backup of the Cassandra datastore in the hybrid runtime plane?
- The Cassandra backup schedule is configured in the overrides configuration file using standard crontab syntax.

Which of the following properties cannot be configured in the overrides.yaml file used in the hybrid installation process?
- API proxy definition

How are API proxy changes made available in the runtime plane?
- The Synchronizer polls the management plane for proxy changes and makes them available to the Message Processors.

When using the Trace feature in Apigee hybrid, you:
- Cannot set breakpoints in the hybrid UI for API request or responseflows.

Which one of the following is true regarding API proxy deployment in Apigee hybrid?
- A deployed proxy revision is immutable.

Which one of the following is true regarding environments in Apigeehybrid:
- An environment is mapped to a single runtime deployment resource in the Kubernetes cluster.

Which one of the following statements about authentication between the hybrid management plane and runtime plane components is true:
- The Synchronizer runtime component uses a sidecar container to generate OAuth tokens used for securely communicating with the hybrid management plane.

In Apigee hybrid, roles that are granted to a user at the Google Cloud project level are inherited at:
- The Apigee hybrid environment level for all environments in the Apigee hybrid organization by default.

To securely communicate between the API proxy running in Apigee hybrid and the target backend, as a best practice:
- Create a TargetServer configuration with TLS and client authentication enabled. Use references to a truststore and keystore in the configuration of the target server.

In Apigee hybrid, the KMS, key-value map, and cache data are encrypted using organization- or environment-scoped encryption keys. Which one of the following is correct:
- KMS data is encrypted using an organization-scoped encryption key.

What are three factors to consider when planning capacity for your hybrid runtime infrastructure?
- Business strategy
- Service level agreements
- API processing logic

What is the recommended best practice to scale the Apigee hybrid runtimecomponent?
- Declare the min and max replica counts in the overrides.yaml file, and run the apigeectl apply command.

Which one of the hybrid runtime components cannot be autoscaled?
- Cassandra

When upgrading Apigee hybrid in a production environment, what sequence should you follow to upgrade the runtime plane components in the cluster?
- Upgrade Cassandra, telemetry components, Redis components, organization-level components, environments, and virtualhosts in that order.

When upgrading Apigee hybrid:
- You may need to upgrade the underlying Kubernetes platform.

What is the recommended best practice to perform a rolling incremental (A/B) update to a hybrid runtime component?
- Set the revision property in the overrides.yaml file, and run the apigeectl apply command.

Which is a valid critical path of components to troubleshoot when there are issues in the runtime execution of an API proxy?
- Ingress gateway, Message Processor, Cassandra

To properly monitor the health of the Apigee hybrid runtime plane, which metrics should be monitored?
- Metrics for the Kubernetes cluster, node, pod, container and application workloads

Which three analytics capabilities are supported in Apigee hybrid?
- Measure adoption of the API program by application developers.
- Create custom reports.
- Track operational performance of API proxies.

What are two of the key benefits of using generative AI features in Dialogflow CX? (Select two options)
- Chatbots provide accurate and helpful information
- Generated content is restricted to what you want it for

What are two of the main generative AI capabilities that have been added to Dialogflow CX? (Select two options)
- Generators
- Generative AI Agent

You have been asked to add generative AI capabilities to your Dialogflow CX virtual agent that will enable it to reference the existing FAQs on the company website. What generative AI feature would you add to your solution to enable this functionality?
- Generative AI Agent

Recently, some of your customers have been asking questions that your Dialogflow CX virtual agent is unable to answer. You realize that intents have not been defined for these types of questions. What generative AI feature would you add to your solution to handle conversations that have gone off-track?
- Generative Fallback

What is the correct syntax for a Generator’s output parameter?
- $request.generative

Which two language models can a Generator use to generate code? (Select two options)
- code-bison
- text-bison

Read the text prompt below and answer the following question. What information would the highlighted $conversation placeholder parse into the prompt? Your goal is to summarize a given conversation between a Human and an AI. Conversation: $conversation{USER:"Human:" AGENT:"AI:"}Human: $last-user-utterance A concise summary of the conversation in 1 or 2 sentences is:
- The conversation between the agent and the user, excluding the very last user utterance.

When configuring a Generator there are some controls that can be used to customize the behavior of the generative responses. What are the controls available to you to customize the generative AI responses? (Select two options)
- LLM parameters, such as Temperature, Top P and Top K
- Text Prompt

Generators have a particular set of capabilities that can be utilized by a Dialogflow CX virtual agent in a customer conversation. What are two capabilities of Generators? (Select two options)
- Sentiment analysis of customer responses
- Conversation Summarization

With generators, you can make a prompt contextual by marking words as placeholders by adding a $ before the word. These placeholders usually hold a position in the prompt that will be substituted for user input data at runtime. What session parameter can you associate with the $text prompt placeholder?
- Any of the session parameters identified in the Intents

You have been asked to enable generative responses for no-match events for specific pages, by enabling it in the Agent response section of the event handler. Where would you provide the information for the LLM to reference to generate its response?
- Intent description

Which statement is true for Generative Fallback:
- Aim to prevent no-match scenarios by providing good, varied training phrases to your intents.

Generative Fallback is a mechanism for handling points in a conversation with a Dialogflow CX virtual agent, where the user moves away from the intended flow and doesn't trigger another action or flow, known as a No Match error. What kind of user response could invoke a No Match error? (Select two options)
- An invalid input while form filling
- Saying something unexpected

A Dialogflow CX flow has been designed for booking diving trips. A particular page in the flow is configured to assist users with group reservations or full charters, the intent description states: ‘Currently you can assist users who are looking for a group reservation or a full charter. Initially collect travel details including departure period, destination, number of guests (min 4 max 15 people), contact details. The destination must be one of the following in the Pacific: Costa Rica, Mexico, Galapagos Islands.’ Which Generative Fallback enablement levels would be triggered if the user tries to book a full charter for 18 people? (Select two options)
- The page-level would be triggered as the minimum and maximum number of guests is specified in the intent description. The LLM also uses this description to generate the response.
- The parameter-level would be triggered as the minimum and maximum number of guests is defined as an entity parameter. The LLM uses the intent description to generate the response.

What is the correct definition of the $route-descriptions prompt placeholder?
- The intent descriptions of the active intents.

You can add a list of banned phrases for your Generative Fallback response. What happens if a banned phrase has been entered by a user as part of their response?
- A prescribed answer defined in Agent Says will be used to respond.

Which two features are used by Generative AI Agents to provide a response based on your data? (Select two options)
- Large Language Models
- Data stores

Data stores are used to find answers for end-user's questions. A data store can consist of different sources. What types of source data are available for data stores in a Vertex AI Search and Conversation?
- Website, structured and unstructured data.

A Virtual Agent uses intent detection to route customer questions to the relevant information. Generative AI capabilities can be added to handle certain intent detection routes. Which aspect of Dialogflow CX Agent intent detection do Generative AI Agents cover?
- State handlers

What are two other important and useful features that are part of Generative AI Agents and data stores? (Select two options)
- Data store prompt
- Grounding confidence

Which two statements are true for Generative AI Agents? (Select two options)
- With Hybrid Agents you can use a mix-and-match approach to leverage both intent-based flows and generative AI use cases.
- Keep what is working well in Dialogflow CX and add generative AI capabilities.

Choose the answer that best describes the security posture of Vertex AI Search and Conversation.
- Vertex AI Search and Conversation offers the same security capabilities as other Google Cloud Perimeter products like BigQuery, including data encryption, no data sharing across customers, and Google will never use your data to train foundation models.

The security team needs to perform some audit tasks to your datastores on Vertex AI Search and Conversation to make sure the right documents and user events are being ingested. Which role should you assign them?
- Discovery Engine Viewer

The development team is creating a microservice that will be responsible for ingesting new documents into the Vertex AI Search and Conversation unstructured data store on bulk every hour. Which role should you assign them?
- Discovery Engine Editor

What is the purpose of the ReAct pattern?
- To enable LLMs to generate both verbal reasoning traces and text actions to solve various language reasoning and decision making tasks.

What is a tool in the context of a playbook? (Select two options)
- Tools are API calls, defined by a schema in the OpenAPI 3.0 format.
- Tools are a collection of functions that are available to the playbook and the Dialog Manager.

What can you do to improve the accuracy of the agent’s behaviour?
- Write clear instructions combined with thorough training examples.

What are two powerful features of Generative Playbooks? (Select two options)
- Playbooks can leverage LLMs for instruction-driven flow development.
- Playbooks enable LLMs to access APIs and tools.

What are two of the limits of Generative Playbooks? (Select two options)
- 5 LLM calls per conversation turn
- 15k input tokens and 500 output tokens summed across a conversation turn

What are two key steps in connecting a Generative Playbook with a data store?
- Create a Playbook tool for the Generative AI Agent
- Select the data store in the tool user interface and save the tool.

What are two generative AI related features of Dialogflow CX that can be used with Playbooks? (Select two options)
- Data stores
- Generative AI Agents

Fernando wishes to stay as connected as possible to his teammates while he works from home. He wishes to install Google Chat on as many devices in his home as possible. Which of the following devices does NOT support Google Chat?
- His smart TV

Sherrie is active in many direct conversations. She notes that one conversation with a colleague hasn’t been active in six months and decides she wants to hide it from view. What does she need to do?
- Select the name of the direct conversation, then select Hide Conversation

Kaina is having a long conversation with Sherrie using Google Chat. She mentions a Google Meet may be easier than typing so much, and Sherrie agrees. What can Kaina do quickly to avoid interrupting the conversation’s flow?
- Select Add video meeting in the reply area of their chat

Anthony starts a direct Google Chat with Sherrie. She mentions some technological improvements that the Head Office intends to implement at the store level. Anthony wants to retain a few of her messages for quick reference in the future. What should he do?
- Click More actions then, Forward to inbox in Google Chat

Sherrie wishes to wish Kaina a happy birthday over chat. She wants to make the message extra special. Which of the following actions can Sherrie NOT take?
- Select the option to have her text animate on the screen

Sherrie, head of HR and Employee Development sees Jaspar is currently online and wishes to message him quickly. She doesn’t want to risk him not seeing his email until later. What should she do?
- Click on his name in the Chat list in chat.google.com, type her message, and press Enter or click the Send message icon

Kaina wants her team to be aware of current tasks being assigned amongst the group and when they finish. She would rather this be incorporated into everyone’s current work tools than create a new process. How should she proceed?
- Utilize the Tasks tab in the team Space

Store owners use a space to discuss recipes. Yousef sees a thread about possible changes to cinnamon buns and wants to receive notifications whenever there is new activity. What does he need to do?
- Click the thread and select Follow

Dao wants to strengthen the culture of On the Rise by encouraging more dialogue for shared interests amongst the team. He doesn’t want to add another recurring meeting to people’s agenda and doesn’t want people to feel pressure to engage, this should be fun. What can he do?
- Create a space entitled “Off the Clock” for teammates to discuss their passions and hobbies

Yousef is an On the Rise store owner located in Fort Lauderdale, Florida. He and other On the Rise store owners like to frequently communicate in order to share and store their collective knowledge for later reference. What is the best way for them to communicate their shared learning?
- A space in Google Chat

Roberto and his team at On the Rise Seattle are all members of the Cat Lovers space. He heard about an app that populates chats with cat photos via simple key commands. He wants to use it to delight his team. How can he search for the app?
- In the Start a chat submenu, search and add the app by selecting Find apps

An Ingress Gateway runs as
- A Kubernetes deployment.

How does service discovery work in an Anthos Service Mesh?
- Mesh control plane reads the Kubernetes endpoints and services.

You can reduce errors in your applications with the help of Anthos Service Mesh by (select all that apply)
- Mirroring traffic to new versions.
- Introducing retries in the Envoy proxies.
- Doing canary deployments using weights in your VirtualServices.
- Setting connection pools on mesh services.

Each request is checked against the Mesh CA to establish trust between the client and the server.
- False

Authorization policies define access control for mesh workloads using the following mechanisms: (select three)
- Check that service accounts are allowed.
- Check that specific networks are allowed.
- Check that specific API endpoints are allowed.

Peer authentication policies should be set to permissive to
- Slowly adopt mTLS across the mesh without breaking the current experience.

East-west routing handles communication between clusters.
- True

When are east-west Gateways needed? (select 2)
- Multi-cluster with multiple networks in AWS.
- Multi-cluster with multiple networks in Google Cloud.

Multi-cluster gateways
- Balance load across clusters.

Sherrie West has been speaking with the On the Rise Leadership Team and would like to draft a project proposal. She knows similar company docs already exist. What should she do?
- Start a new document from a template and select a proposal template from her organization

Seroja Malone has a series of recipes that she’d like to share with the On the Rise team. These files are currently Microsoft Word documents. What is one way for Seroja to turn them into Google Docs?
- Upload the Word docs to her Google Drive, select Open with Google Docs, select File, and Save as Google Docs

Sherrie West is working on an important Google Doc. She decides she’d like to make it easily available by adding it to her starred label. What does she need to do?
- Select the Star icon next to the document title

On the Rise partner owner Thomas Omar has completed a Google Doc and would now like to move it from his personal drive to the team shared drive. What is one way he can move the Doc?
- Select the Move icon

On the Rise partner owner Seroja Malone is traveling to Italy to meet with a new cinnamon supplier. Seroja wants to ensure she can work on her Google Doc for the duration of her flight. How can she check that the file is available for offline access?
- She can select See document status

Sherrie West is head of HR and Employee Development at On the Rise. She is developing a Google Doc training manual for new employees. Sherrie would like to make this Doc easy to navigate by adding a table of contents. What two things must she do to set this up?
- Insert a table of contents in her document
- Use heading styles in her document

Sherrie wants to make sure readers can easily move around the training document. She decides to add bookmarks to key sections. How does she create her bookmarks?
- She needs to select the text she wishes to bookmark and select Insert, then Bookmark

Sherrie decides to add a Chart that is linked to a survey she has recently shared with the On the Rise team via Google Forms. How can Sherrie ensure the chart in the Google Doc stays up to date as team members complete the survey?
- The chart in Google Docs is integrated with Google Sheets and will automatically update

Thomas Omar makes some changes in the new hire training document, but later decides he’d like to return to the version shared by Sherrie. What does he need to do?
- Select File, then Version history, then See version history, choose the version from the correct point in time, and then select Restore this version

Seroja Malone has just created a Google Doc featuring a new cinnamon bun recipe. She shares this Doc with On the Rise store owner Yousef Amadi. She’d like him to be able to download and print the file, but not make any changes. What type of collaborator role should she assign him?
- Viewer

Sherrie West has just completed a Google Doc that will serve as a new hire training manual. She would now like to transfer Doc ownership to On the Rise partner-owner Thomas Omar who is already an editor of the document. What does she need to do?
- Select Share, and choose Editor to the right of Thomas Omar, then Make owner

Kaina Gao would like to assign an action item to Anthony Dylan. What does she need to do? Select all that apply.
- <a href=mailto:+Anthony.Dylan@Ontherisebakery.com>+Anthony.Dylan@Ontherisebakery.store</a>, then check Assign to Anthony Dylan
- @<a href=mailto:AnthonyDylan@Ontherisebakery.com>AnthonyDylan@Ontherisebakery.store</a>, then check Assign to Anthony Dylan
- +Anthony.Dylan@Ontherisebakery.com, then check Assign to Anthony Dylan
- @AnthonyDylan@Ontherisebakery.com, then check Assign to Anthony Dylan

Anthony is working on the Google Doc when he notices that Kaina Gao is online as well. Anthony would like clarification regarding a few comments that Kaina Gao has left him. What is the best way for Anthony to collaborate with Kaina Gao?
- Use Google Chat to message her directly in the Google Doc

Kaina Gao is working on a Google Doc about new bakery trends. She’d like to leave a comment on a chart found on Page 2 of the document. What does she need to do?
- Place her cursor on the chart, select Add a comment, type her comment, and select Comment

Sherrie West has recently received a new version of the OTR new hire training manual from Thomas Omar. Unfortunately, rather than updating the original, Thomas has made his updates directly in a new Google Doc. How can Sherrie easily compare this new version with the version she sent him last week?
- She can use the Compare documents feature

Sherrie wants to email a very large file to her team. What is the best option?
- Select Insert files using Drive from Gmail

Sherrie West is busy at work when she receives an email from a store owner. She doesn’t have time to write back immediately, but she also doesn’t want to forget to respond later. What can she do? Select all that apply.
- Apply her custom label “Follow Up”
- Star the email
- Snooze the email

Sherrie is active in numerous On the Rise Google groups. She often receives notification emails. Sherrie decides to enable categories to better manage her Inbox. In which category will she now find messages from her Google groups?
- Forums

Sherrie and her team are about to send out a survey to On the Rise store employees. Sherrie wants to keep their feedback organized in her Inbox by creating a project label named “OTR Survey Feedback.” How can she create this label?
- Select More in the label list, then Create new label

Thomas Omar wants to email a confidential financial statement to his head office team. The document is stored in his personal Google Drive. Thomas wants his team to be able to read the document, but otherwise not alter it in any way. Which of the following share settings should he select?
- View

On the Rise store owner, Yousef Amadi, is responsible for three separate bakery locations. In order to manage his workload, he uses a task list to keep track of what needs to get done. He adds the task “Email Anthony Dylan Wastage Report.” What does he need to select to make this task repeat on a weekly basis?
- Select Task, then Edit Details, then choose the time and date details

Anthony Dylan is in negotiations with a new distributor. He sends the distributor an email using confidential mode and sets the email expiration date for one week’s time. The next day, Seroja Malone asks Anthony to revoke the distributor’s access to the email. What does Anthony need to do?
- He can open the sent message, and select Remove access

On the Rise store owner, Yousef Amadi, is piloting a new Point of Sale (POS) system at one of his locations. The system automatically sends him daily reports, yet these reports are automatically filtered as Spam. What steps can Yousef take to ensure future messages make it to his Inbox? Select TWO correct answers.
- Add the system sender email “inventory@pos.com” to his contact list
- Go into his Spam folder, select one of the messages incorrectly marked as spam, then select Not spam

Sherrie West often intends to email Thomas Omar, yet when she starts to type, her “To:” field in Gmail automatically populates with the name “Thomas O’Malley”. This name is only replaced by “Thomas Omar” once Sherrie reaches the fourth letter of his family name. Sherrie has accidentally sent Thomas O’Malley three emails meant for Thomas Omar. What can Sherrie do to fix this problem?
- Add Thomas Omar to her personal contacts

Sherrie West is creating an onboarding package for new On the Rise hires. One of the important steps is getting staff set up with their Gmail account, which includes adding a personalized signature line. Which of the following instruction lines should she include?
- From Settings, scroll to Signature, select Create new, add your name and the On the Rise logo, then select Save

Seroja Malone is traveling to Italy next week to meet with a new cinnamon distributor. She knows she will have limited access to her Gmail account and wants to set an Out-of-Office AutoReply while she is out of office. What does Seroja need to do?
- From Settings, select Out-of-Office AutoReply, type her subject and message, then select Out of Office AutoReply on

Kaina Gao wants to search for a message she sent to Anthony Dylan last May. She remembers the email related to a new store in Manila and included an attachment named “New Opportunities.pdf.” What are some ways she can narrow her search in order to quickly find this email?
- She can search for “Manila”

Anthony Dylan occasionally receives emails from On the Rise partner owner, Seroja Malone. Anthony wants to ensure that Seroja’s messages are automatically labeled as important in his Inbox. What does he need to do? Select TWO correct answers.
- Create a new filter and select the action <strong>Always mark it as important</strong>
- Open message from Seroja Malone and click to <strong>enable the important marker</strong> to the left of the label

What is the name of Google's video software tool?
- Google Meet

Kaina has decided on some recipe changes to the current menu. She needs to create a video meeting to discuss these changes with Seroja. Which option will NOT achieve this?
- Type <strong>Start Meeting</strong> in the Chrome browser

Seroja has scheduled a video conference to take place next week to check in with her team. She realizes she forgot to include Kaina. What should she do?
- Edit the event in Google Calendar to add Kaina as a guest

While the Google Meet video conference is in progress, Thomas wants to invite his wife, Seroja. Which is NOT a way he can add her to the call?
- Type her email address into the Google Meet chat

Yousef Amadi is a store owner located in Fort Lauderdale, Florida. He receives a Google Meet video invitation from Anthony, but knows he will be out of office. He decides he will still try to join by dialing in. Which option below will NOT achieve this?
- In Gmail, click <strong>Join a meeting</strong>

Later during the meeting, Kaina wants to share a supplier's webpage to Yousef for him to review prices on his own after the meeting. How can she do this using Google Meet?
- Paste a link to the webpage in the meeting chat box for Yousef to retrieve

Kaina Gao is head of Global Marketing at On the Rise. She organizes a Google Meet video call but realizes her audio isn’t working. What steps should she take to investigate this issue? Select two.
- Speak into her microphone and ensure that three green bars appear in response to her voice
- Click <strong>More options</strong>, select <strong>Settings</strong> and check if her microphone is set to her device’s defaults

During the video conference, Yousef Amadi wants to access some marketing resources that are attached to the meeting’s calendar event. What should he do? Select two.
- Open the attachments in the Google Calendar invite in her Inbox
- Click Meeting details, to view attachments

There are many people in the meeting and Kaina is having trouble identifying who is speaking. She wishes to modify her settings to better see the current speaker. What should she do?
- Adjust the <strong>Change layout</strong> setting in the <strong>More options</strong> menu to <strong>Spotlight</strong>

Kaina wants to see what everyone in the call thinks about some marketing campaigns she’s presented. She’d like a way to take a vote. What can she do?
- Start a poll using the <strong>Activities</strong> panel

Dao was invited to the meeting, but Kaina sees that he is not present and noticed he left a note in the Calendar invite saying he had a doctor appointment. Karina wants him to review important information being discussed. What should she do?
- Ask everyone present for their permission and select <strong>Record meeting</strong> from the <strong>More</strong> <strong>options</strong> menu. The recording will be sent to all invited.

Kaina wishes to brainstorm new menu ideas with the group but is concerned that certain people will speak so much that others may stay quiet. She wishes to separate the team into small working groups momentarily, to have a better chance of everyone getting involved. What should she do?
- Use the Activities function to split the call into smaller discussion groups

You want to examine messages generated by running code. Which tool might be best for doing this?
- Logs Explorer

You want to calculate the uptime of a service and receive alerts if the uptime value falls below a certain threshold. Which tool will help you with this requirement?
- Cloud Monitoring

Users have reported that an application occasionally returns garbage data instead of the intended results, but you have been unable to reproduce this problem in your test environment. Which tool might be of best help?
- Error Reporting

You want a simple way to see the latency of requests for a web application you deployed to Cloud Run. What Google Cloud tool should you use?
- Trace

You want to analyze the error rate in your load balancing environment. Which interface helps you view a chart with a ratio of 500 responses to all responses
- MQL

You want to be notified if your application is down. What Google Cloud tool makes this easy?
- Uptime check

What is the name of the project that hosts a metrics scope?
- Scoping project

In the statement “Maintain an error rate of less than 0.3% for the billing system”, what is an SLI?
- Error rate

Explain error budget.
- The proportion of alerts detected that were relevant to the sum of relevant alerts and missed alerts.

In evaluating your alerting policies, which below best describes precision?
- The proportion of events detected that were significant.

You want to compare resource utilization for VMs used for production, development, and testing. What should you do?
- Add a label called “state” to your VMs with the values “dev”, “test”, and “prod” and group by that label in your monitoring chart.

Your manager wants a daily report of resource utilization by application. Where would the best export sink be?
- Cloud Storage

Why are the Data Access audit logs off by default? Select three.
- They can be large
- May contain sensitive information
- They can be expensive to store

If you want to provide an external auditor access to your logs, what IAM role would be best?
- Logging Viewer

On the Rise store owner Yousef Amadi wants to create a presentation for his employees. How does he create a new Google Slides presentation? Select all that apply.
- Go to web address slides.new
- Go to Google Drive, select New, then select Google Slides

Yousef wants his presentation to match other On the Rise files and documents. How can he access his organization’s available Google Slide templates?.
- Go to Google Drive, select New, then select Google Slides, then select a From a template

On the Rise partner owner Thomas Omar will be taking a few days off and heading out of office. He is about to shut down his work computer, but wants to ensure the changes he has made in Google Slides have been saved. Choose the best answer?
- Select See document status

Kaina Gao has just inserted an image on-screen. She would now like to reposition it so it is in the middle of the page. What are some of the ways she can move the image? Select all that apply.
- She can select the image and use the arrow keys
- She can select the image and use the Arrange menu
- She can select the border lines of the image and drag it with her mouse

Kaina Gao is preparing a Google Slides presentation that she will present to the On the Rise marketing team next week. She’d like to add speaker notes so she doesn’t forget key points. What does she need to do?
- At the bottom of the slide in “Speaker notes” section, click Click to add speaker notes

Anthony is working on a slide that includes numerous elements, such as photos, charts, and text. He’d like to set up object animations. What are some of the customizations from which he can choose? Select all that apply.
- Animation speed (from slow to fast)
- When the animation occurs (on click, after previous, with previous)
- Animation per object or per group
- Animation order

Anthony Dylan is designing a Google Slides presentation for the On the Rise head office team. He’d like to add a chart so that data dynamically changes when updates are made in Google Sheets. How does he do this?
- Go to Insert, then Chart, then From Sheets

Anthony is working on a slide and decides he’d like to change the slide background from the default white to an image on his desktop. How does he do this? Select all that apply.
- He can open the Slide menu, select Change background, and then Choose image
- He can right-click an empty area of the slide, select Change background, and then Choose image

Thomas reviews his Google Slides presentation and determines that Slide 3 is not relevant for the head office meeting. How can he skip that slide while in presentation mode? Select all that apply.
- He can go to Slide 3, open the Slide menu, and select Skip slide
- He can right-click on Slide 3 in the preview panel and select Skip slide

Thomas Omar is working on a Google Slides presentation that he intends to present at the weekly On the Rise head office Google Meet. He adds a slide named “On the Rise News.” in the middle of the presentation. Later, he decides he’d like to have this slide appear at the end of the presentation. What does he need to do? Select all that apply.
- Select and drag the slide down in the preview panel
- Right-click on the slide preview and select Move slide to end in the menu

Thomas would like to import a single slide from a previous presentation he has stored on his Google Drive. What does he need to do?
- Open the File menu, select Import slides, select the presentation, select the specific slide, then select Import slides

On the Rise store owner Yousef Amadi has recently been added to a Google Slides presentation as a viewer. What can he do in View Mode? Select all that apply.
- Download it, as long as the owner allows it
- Print and copy it, as long the owner allows it

Seroja assigns Sherrie West as an editor. Seroja would like Sherrie to make content updates, but does not want her to share the file with additional collaborators. How can she set this up?
- Open the Share with people settings and disable editor sharing permissions

Seroja would like to review all the comments that have been added, edited, and resolved within the presentation. What does she need to do?
- Select Open comment history

Anthony decides he wants to edit the comment he has left for Seroja. How can he do this?
- He must select More options, then Edit

Anthony Dylan is working on a Google Slides presentation in which he and Seroja are both editors. He leaves a comment for @SerojaMalone, asking for her feedback. How does Seroja reply to Anthony’s comment?
- Select the Comment card, type her response, and select Reply

During the presentation, Thomas wants to quickly reference his speaker notes. How can he do this?
- He can select Notes

It’s Wednesday morning, and the On the Rise head office team is gathered for Thomas Omar’s Google Slides presentation. Thomas wants to move his slide deck into presentation mode. What does he need to do?
- Click the Present button

Thomas begins his presentation, but decides the deck is advancing too quickly. How does he update his settings so that the slide deck auto-advances every minute?
- He can select Options, then Auto-advance (when played), and choose Every minute

Which of the four golden signals are part of the Istio service mesh by default? Mark all that are true (2 correct answers).
- The time it takes for your traffic to service a request.
- The number of requests sent to your system.

Which of the following is a method of showing how much traffic is routed to each version of a service?
- In Kiali, use service graph traffic animation with requests percentage.

Which of the following are required to create a new, custom metric? Mark all that are true (3 correct answers).
- A rule resource with actions.
- An instance resource with a template.
- A handler resource with an adapter.

The base image of Grafana is preconfigured with which data source and dashboard?
- The Prometheus data source, and the Istio dashboard.

How can service operators verify the traffic management configuration setup in a service mesh?
- Use kubectl get and describe commands to review virtualservices and destinationrules for the details of the applied configurations.

Istio's abstract model informs how Pilot programs the Envoy proxies to route traffic. Which of the following are part of the Istio abstract model? Mark all that are true (3 correct answers).
- A set of policies applied to requests after routing decisions.
- A way to represent requests to services that reside outside the service mesh.
- Rules to control how requests are routed.

You have a cluster service, backed by 4 pods. How can you efficiently send 3% of your service traffic to a proposed new version of your service?
- Add VirtualService and DestinationRule configuration for your service mesh to define multiple versions with destination weights.

What can you do with service mesh to test the resiliency of your multi-service application without changing any of your source code?
- Use VirtualService configuration to introduce delays or abort faults in a small, random percentage of your requests.

Which of the following are traffic management capabilities you can configure in your service mesh? Mark all that are true (3 correct answers).
- Configure a VirtualService with the maximum number of retries that requests can be attempted to avoid clogging the network with requests to unavailable services.
- Configure a VirtualService with conditional routing based on checking the request header for a specific end user.
- Configure a VirtualService with conditional routing based on source labels, for calls from a specific version of a service.

You want to employ a zero-trust network, for your microservice communication. What should you do to decouple the tasks for securing your network from developing your application, while maintaining a consistent approach whether on cloud or on-premises?
- Use service mesh and Envoy proxies to enforce mTLS and authorization policies close, but separate from your services.

You're planning on enabling mTLS to enforce your zero-trust network policies. Which mTLS configuration should you use when starting with some services that don't yet accept or send encrypted traffic?
- Use PERMISSIVE mode to test whether it's safe to turn on authorization.

You're planning on enabling mTLS to enforce your zero-trust network policies. What is the easiest way to consistently enable mTLS for all of your services?
- Set a MeshPolicy for for mTLS in your service mesh.

What service mesh capability should you enable for the most secure service-to-service authentication?
- Enable mutual authentication which involves both sides of each request checking that requests are allowed.

Which entities are part of the Istio access control model? Mark all that are true (3 correct answers).
- An abstract persona with a set of permissions.
- Mappings of users or services to personas with permissions.
- Concrete users or services.

Which are the known states of your Anthos Config Management installation? Mark all that are true (3 correct answers).
- Anthos Config Management is synchronized with your config repo..
- Anthos Config Management is installed.
- Anthos Config Management is configured.

You want to use configuration-as-code for your Kubernetes-based service environments. Which of the following are benefits of putting your configs into source code control? Mark all that are true (3 correct answers).
- Misconfigured changes can be quickly reverted.
- Commits are immutable, so your config changes are permanently tracked.
- Changes are reviewed, like source code, and can be audited.

With Anthos Config Management, configs describe objects to be managed. Which are supported management operations? Mark all that are true (3 correct answers).
- Delete managed objects.
- Enable management of objects.
- Temporarily disable management of an object.

You want to use configuration-as-code for your Kubernetes-based service environments. Which of the following are benefits of Anthos Config Management? Mark all that are true (3 correct answers).
- It allows configurations in YAML or JSON, so no config re-writing is needed.
- It's declarative and checks continuously for the desired state.
- It manages clusters and services on-premises and in the cloud.

You want your service mesh to manage multiple services in many clusters. Which setup should you pick to minimize single points of failure, and to scale well?
- Use a multiple control-plane topology for your service mesh, which installs a control-plane in each cluster.

How do your requests to services registered in a different region get routed to that region?
- Requests are sent to the Ingress gateway in the target service region.

Which technique is used to identify services that reside outside of your service mesh?
- ServiceEntries are tagged with MESH_EXTERNAL when they reside outside the service mesh.

To extablish trust between services in different clusters, you need to complete which tasks?
- The CA signing certificates in each cluster must be signed by a root CA, and workloads need a certificate chain file.

Which technique is used to resolve names of services located in remote clusters?
- CoreDNS and ServiceEntries are used for remote services, kube-dns for local services.

What is one definition of a feature in machine learning?
- A value that is passed as input to a model

Which of the following is an instance of an entity type?
- Entity

Which of the following is the process of importing feature values computed by your feature engineering jobs into a featurestore?
- Feature ingestion

Vertex AI Feature Store provides a centralized repository for organizing, storing, and serving ML features. Using a central featurestore, enables an organization to efficiently share, discover, and re-use ML features at scale, which can increase the velocity of developing and deploying new ML applications. What are the key challenges that Vertex AI Feature Store solves?
- All of the options are correct.

Where are the features registered?
- Feature registry

What are the two methods feature store offers for serving features?
- Batch serving and Online serving

Which of the following are the requirements to build an effective machine learning model?
- All of the options are correct.

Which of the following statements is true about preprocessing?
- Preprocessing within the context of Cloud ML allows you to do it at scale.

A good feature has which of the following characteristics?
- All of the options are correct.

In what form can raw data be used inside ML models?
- After turning your raw data into a useful feature vectors

Which of the following statements is true?
- Different problems in the same domain may need different features.
- Flows are made up of pages.
- Each flow has a start page.

Which of the following statements are true regarding the ML.BUCKETIZE function?
- Both options are correct.

What do you use the tf.feature_column.bucketized_column function for?
- To discretize floating point values into a smaller number of categorical bins

Which of the following is true about Feature Cross?
- Both options are correct.

True or False: Feature Engineering is often one of the most valuable tasks a data scientist can do to improve model performance, for three main reasons: 1. You can isolate and highlight key information, which helps your algorithms "focus" on what’s important. 2. You can bring in your own domain expertise. 3. Once you understand the "vocabulary" of feature engineering, you can bring in other people’s domain expertise.
- True

What is the significance of ML.FEATURE_CROSS?
- ML.FEATURE_CROSS generates a STRUCT feature with all combinations of crossed categorical features except for 1-degree items.

Which of the following statements are true regarding the ML.EVALUATE function?
- All of the options are correct.

What is one-hot encoding?
- One-hot encoding is a process by which categorical variables are converted into a form that could be provided to neural networks to do a better job in prediction.

What is a feature cross?
- A feature cross is a synthetic feature formed by multiplying (crossing) two or more features. Crossing combinations of features can provide predictive abilities beyond what those features can provide individually.

To run a pipeline you need something called a ________.
- runner

Your development team is about to execute this code block. What is your team about to do?
- We are compiling our Cloud Dataflow pipeline written in Java and are submitting it to the cloud for execution.Notice that we are calling mvn compile and passing in --runner=DataflowRunner.

True or False: The Filter method can be carried out in parallel and autoscaled by the execution framework:
- True: Anything in Map or FlatMap can be parallelized by the Beam execution framework.

What is the purpose of a Cloud Dataflow connector? .apply(TextIO.write().to(“gs://…”));
- Connectors allow you to output the results of a pipeline to a specific data sink like Bigtable, Google Cloud Storage, flat file, BigQuery, and more.

Which of these accurately describes the relationship between Apache Beam and Dataflow?
- Apache Beam is the API for data pipeline building in Java or Python and Dataflow is the implementation and execution framework.

True or False: A ParDo acts on all items at once (like a Map in MapReduce).
- False

What is one key advantage of preprocessing your features using Apache Beam?
- The same code you use to preprocess features in training and evaluation can also be used in serving.

True or False: In TensorFlow Playground, in the output layer, the dots are colored orange or blue depending on their original values. The background color shows what the network is predicting for a particular area. The intensity of the color shows how confident that prediction is.
- True

True or False: In TensorFlow Playground, orange and blue are used throughout the visualization in slightly different ways, but in general orange shows negative values while blue shows positive values.
- True

True or False: In TensorFlow Playground, the data points (represented by small circles) are initially colored orange or blue, which correspond to zero and negative one.
- False

True or False: We can create many different kinds of feature crosses. For example: • [A X B]: a feature cross formed by multiplying the values of two features. • [A x B x C x D x E]: a feature cross formed by multiplying the values of five features. • [A x A]: a feature cross formed by squaring a single feature.
- True

Why might you create an embedding of a feature cross?
- All of the options are correct.

Fill in the blanks: In the __________ layers, the lines are colored by the __________ of the connections between neurons. Blue shows a _________ weight, which means the network is using that _________ of the neuron as given. An orange line shows that the network is assigning a __________ weight.
- Hidden, weights, positive, output, negative

True or False: One of the goals of tf.Transform is to provide a TensorFlow graph for preprocessing that can be incorporated into the serving graph (and, optionally, the training graph).
- True

Fill in the blank: The ______________ _______________ is the most important concept of tf.Transform. The ______________ _______________ is a logical description of a transformation of the dataset. The ______________ _______________ accepts and returns a dictionary of tensors, where a tensor means Tensor or 2D SparseTensor.
- Preprocessing function

What does tf.Transform do during the training and serving phase?
- Provides a TensorFlow graph for preprocessing

As an approach to feature engineering, which of the following most accurately describes what TensorFlow Transform is a hybrid of?
- Apache Beam on Dataflow and TensorFlow

What is Site Reliability Engineering (SRE)?
- Practices that balance the velocity of development features with the risk to reliability.

How do DevOps and SRE relate to each other?
- SRE is a way to implement DevOps.

Which is an SRE practice that promotes sharing ownership in IT?
- Error budgets

Which is a key pillar of DevOps philosophy?
- Accept failure as normal.

Which philosophy closes the gap between development and operations?
- DevOps

What are Site Reliability Engineers comfortable with?
- Failure

What can happen when team members don't feel psychologically safe?
- Moments of learning are lost.

What is one value SRE provides to an IT team?
- Developers are enabled to work at a higher velocity while maintaining reliability.

What is your team's clear and compelling goal that it strives to achieve?
- Mission

What is a reasonable degree of target reliability for an SLO?
- 99.9%

Which is the third phase of design thinking?
- Ideate

What would be the best way to practice canarying?
- Deploy a small feature change to users that are a representative subset of your typical customers.

What should you present change to your team members as?
- An opportunity

What is a benefit of continuous integration and continuous delivery (CI/CD)?
- It is less disruptive for customers.

Why is toil a problem?
- It becomes toxic in large quantities.

What does monitoring allow for?
- Visibility into a system

Which bias is the tendency to find information, input, or data that supports your preconceived notions?
- Confirmation bias

What does Google use OKRs as?
- KPIs

SLIs need to provide a clear definition of what?
- Good and bad events

Which type of IT role does Google recommend as a possible new SRE hire?
- Systems administrator

Which Google team can support you in jumpstarting your SRE implementation?
- Google Cloud Professional Services team

Scope is generally unbounded for which type of SRE implementation?
- Kitchen Sink

What practice does Google recommend that you establish before forming your first SRE team?
- Blameless postmortem culture

What does a blameless postmortem not help with?
- Decreasing engineering costs incurred after launch

What often accompanies toil automation that leaders should be prepared for?
- Resistance to change

Which phase of the SRE journey includes automating toil?
- Make Tomorrow Better than Today

Which is the term that describes breaking down the silos and closing gaps between development and operations teams?
- DevOps

Why should toil be limited to a bounded part of the SRE role?
- It prevents SREs from doing only sysadmin work.

What can you build with your team by acknowledging your own fallibility as a leader?
- Psychological safety

What does Google recommend you do with the four golden signals?
- Monitor the system

You've decided to adopt SRE practices and culture in your company. As change begins to happen, you notice that Naveen, one of your operations managers is avoiding new protocols and continuing with his normal work routine. In which group of people would you categorize Naveen?
- Bystander

What is one benefit of measuring toil?
- It triggers a reduction effort.

What are the five steps in design thinking methodology?
- Empathize, Define, Ideate, Prototype, Test

Your team members are unsure what goals they are trying to achieve within the team. What part of your team vision should you work to clarify?
- The mission

What is continuous delivery?
- Deploying to production frequently, or at the rate the business chooses.

Which type of SRE team implementation does Google recommend for an organization's first SRE team?
- Kitchen Sink

Generally, whose experience with a production service determines its availability?
- The customer’s

Your developers have felt inundated with too many manual and repetitive tasks that are tied to the production service. What is this called?
- Toil

Which DevOps pillar led to Google SRE practices, such as SLOs and error budgets, that promote shared ownership between developers and SREs?
- Reduce organizational silos

SREs are regularly on-call and required to solve problems fast. What is a primary skill SREs need for this?
- Troubleshooting

What is a service-level objective (SLO)?
- A precise numerical target for system reliability.

What do OKRs primarily help an organization do?
- Set goals

SREs believe that change is best when what?
- Small and frequent

Which TWO recommendations below ARE considered to be Compute Engine "best practices?"
- Utilize projects and IAM roles to control access to your VMs.
- Cloud Interconnect or Cloud VPN can be used to securely extend your data center network into Google Cloud projects.

Which TWO of the following statements is TRUE when discussing the Organization Policy Service?
- To define an Organization Policy, you will choose and then define a constraint against either a Google Cloud service or a group of Google Cloud services.
- Organization Policy Services allow centralized control for how your organization’s resources can be used.

Which of the following TWO statements about Google Cloud service accounts are TRUE?
- Service accounts are a type of identity.
- Virtual Machine (VM) instances use service accounts to run API requests on your behalf.

Which TWO of the following statements is TRUE with regards to security in BigQuery and its datasets?
- BigQuery has its own list of assignable IAM roles.
- A BigQuery Authorized View allows administrators to restrict users to viewing only subsets of a dataset.

Which TWO of the following statements are TRUE when discussing storage and BigQuery best practices?
- Do not use any personally identifiable information as object names.
- One option to serve content securely to outside users is to use signed URLs.

Which TWO of the following statements are TRUE when discussing Cloud Storage and IAM permissions?
- Using deny rules prevent certain principals from using certain permissions, regardless of the roles they're granted.
- Access can be granted to Cloud Storage at the organization, folder, project, or bucket levels.

Which TWO of the following statements about Application Security are TRUE?
- Applications are the most common target of cyberattack.
- Applications in general, including many web applications, do not properly protect sensitive user data.

Which TWO of the following vulnerabilities are scanned for when you use Web Security Scanner?
- Mixed content.
- Outdated or insecure libraries.

Which TWO of the following statements are TRUE when discussing the threat of OAuth and Identity Phishing?
- Being "hacked" on a social site can lead to being "hacked" on more critical websites, depending on your social site's account settings.
- Even small, unimportant pieces of personal data need to be secured from phishing attacks.

Which ONE of the following is NOT a security best practice on Kubernetes.
- Disable Workload Identity.

"Kubernetes service account" and "Google service account" are different names for the same type of service account.
- False

GKE has logging and monitoring functions built in.
- True

Which of these Google Cloud compute services provides environments for execution of code, in which users don't have to worry about infrastructure management? Choose all that are correct (2 correct answers).
- Cloud Functions
- App Engine

Which statements are true about cloud computing? Mark all that are true (2 correct answers).
- Customers pay for the resources they use or reserve.
- Customers who need more resources can get them rapidly

Within which of these Google Cloud geographic scopes are network latencies generally less than 1 millisecond? Choose all that are correct (2 correct answers).
- Region
- Zone

What type of resource is a Compute Engine virtual machine?
- Zonal

What is the base-level organizing entity for creating and using Google Cloud resources and services?
- Project

At what level in the Google Cloud resource hierarchy is billing set up?
- Project

Which type of quota resets at regular intervals?
- Rate quotas

Which of these ways to interact with give you access to the gcloud and kubectl commands? Choose all that are correct (2 correct answers).
- Cloud Shell
- Cloud SDK

One of the key characteristics of cloud computing is the concept of measured service. What is the primary customer benefit of the measured service aspect of cloud computing?
- You pay only for the resources you consume.

You are developing a new product for a customer and need to implement control structures in Google Cloud to help manage the Google Cloud resources consumed by the product and the billing for the customer account. What steps should you take to manage costs for this product and customer?
- Set up budgets and alerts at the project level for the product.

You are considering deploying a solution using containers on Google Cloud. What Google Cloud solutions are available to you that will provide a managed compute platform with native support for containers?
- Google Kubernetes Engine Clusters

You need to write some automated scripts to run periodic updates to the resources in your Google Cloud environment. What tools can you install in your own computers to allow you to run those scripts?
- The Cloud SDK

You are ready to start work building an application in Google Cloud. What IAM hierarchy should you implement for this project?
- Create a new folder inside your organization and create projects inside that folder for the resources.

Which of these problems are containers intended to solve? Mark all that are correct (3 correct answers).
- It's difficult to troubleshoot applications when they work on a developer's laptop but fail in production.
- Packaging applications in virtual machines can be wasteful.
- Applications need a way to isolate their dependencies from one another.

Why do Linux containers use union file systems?
- To efficiently encapsulate applications and their dependencies into a set of clean, minimal layers

What is significant about the topmost layer in a container? Choose all that are true (2 correct answers).
- An application running in a container can only modify the topmost layer.
- The topmost layer's contents are ephemeral. When the container is deleted the contents will be lost.

What is a stateful application?
- An application that requires user and session data to be stored persistently

When you use Kubernetes, you describe the desired state you want, and Kubernetes's job is to make the deployed system conform to your desired state and to keep it there in spite of failures. What is the name for this management approach?
- Declarative configuration

What is the relationship between Kubernetes and Google Kubernetes Engine?
- Google Kubernetes Engine is Kubernetes as a managed service.

What is the name for the computers in a Kubernetes cluster that can run your workloads?
- Nodes

Which of the following supports scaling a Kubernetes cluster as a whole?
- Google Kubernetes Engine

You are classifying a number of your applications into workload types. Select the stateful applications in this list of applications. Choose all responses that are correct (2 correct responses).
- A gaming application that keeps track of user state persistently.
- A shopping application that saves user shopping cart data between sessions.

You are deploying a containerized application, and you want maximum control over how containers are configured and deployed. You want to avoid the operational management overhead of managing a full container cluster environment yourself. Which Google Cloud compute solution should you choose?
- Google Kubernetes Engine

You are choosing a technology for deploying applications, and you want to deliver them in lightweight, standalone, resource-efficient, portable packages. Which choice best meets those goals?
- Containers

Google Compute Engine provides fine-grained control of costs. Which Compute Engine features provide this level of control? (2 correct responses)
- Fully customizable virtual machines
- Per-second billing

What is the difference between a pod and a container?
- A pod contains one or more containers.

Which control plane component is the only one with which clients interact directly?
- kube-apiserver

What is the role of the kubelet?
- To serve as Kubernetes’s agent on each node

Which control plane component is the cluster's database?
- etcd

In GKE, how are control planes provisioned?
- As abstract parts of the GKE service that are not exposed to Google Cloud customers

What is the purpose of configuring a regional cluster in GKE?
- To allow applications running in the cluster to withstand the loss of a zone

In GKE clusters, how are nodes provisioned?
- As Compute Engine virtual machines

What is the purpose of the Deployment object?
- To ensure that a defined set of Pods is running at any given time.

In a manifest file for a Pod, in which field do you define a container image for the Pod?
- spec

What are Kubernetes namespaces useful for? Choose all that are correct (2 correct answers).
- Namespaces allow you to use object names that would otherwise be duplicates of one another.
- Namespaces let you implement resource quotas across your cluster.

If you are deploying applications in your Pods that need persistent storage, which controller type should you use?
- StatefulSet

What is the purpose of a Service? Choose all that are true (2 correct answers)
- To allow you to choose how Pods are exposed
- To provide a load-balancing network endpoint for Pods

You are designing an application, and you want to ensure that the containers are located as close to each other as possible, in order to minimize latency. Which design decision helps meet this requirement?
- Place the containers in the same Pod.

You have deployed a new Google Kubernetes Engine regional cluster with four machines in the default pool for the first zone and left the number of zones at the default. How many Compute Engine machines are deployed and billed against your account?
- Twelve. (Four nodes are deployed in each of three zones. A control plane node is deployed in each zone which is indirectly billed against your account through the cluster management fee.)

Which Kubernetes component does the kubectl command connect to in order to carry out operations on a cluster?
- kube-apiserver

You need to ensure that the production applications running on your Kubernetes cluster are not impacted by test and staging deployments. Which features should you implement and configure to ensure that the resources for your production applications can be prioritized?
- Configure Namespaces for Test, Staging and Production and configure specific Kubernetes resource quotas for the test and staging Namespaces.

When configuring storage for stateful applications, what steps must you take to provide file system storage inside your containers for data from your applications that will not be lost or deleted if your Pods fail or are deleted for any reason?
- You must create Volumes using network based storage to provide durable storage remote to the Pods and specify these in the Pods.

You want to deploy multiple copies of your application, so that you can load balance traffic across them. How should you deploy this application's Pods to the production Namespace in your cluster?
- Create a Deployment manifest that specifies the number of replicas that you want to run.

Which use case demonstrates ML’s ability to process natural language?
- Identifying the topic and sentiment of customer email messages so that they can be routed to the relevant department.

Which technology relies on models to analyze large amounts of data, learn from the insights, and then make predictions and informed decisions?
- Machine learning

You’re watching a video on YouTube and are shown a list of videos that YouTube thinks you are interested in. What ML solution powers this feature?
- Personalized recommendations

Google applies generative AI to products like Google Workspace, but what is generative AI?
- A type of artificial intelligence that can produce new content, including text, images, audio, and synthetic data.

Artificial intelligence is best suited for replacing or simplifying rule-based systems. Which is an example of this in action?
- Training a machine learning model to predict a search result ranking.

How do data analytics and business intelligence differ from AI and ML?
- Data analytics and business intelligence identify trends from historical data, whereas AI and ML use data to make decisions for future business.

Which dimension for measuring data quality means that the data conforms to a set of predefined standards and definitions such as type and format?
- Validity

What does the consistency dimension refer to when data quality is being measured?
- Whether the data is uniform and doesn’t contain any contradictory information.

Google's AI principles are a set of guiding values that help develop and use artificial intelligence responsibly. Which of these is one of Google’s AI principles?
- AI should be socially beneficial.

Which option refers to the use of technologies to build machines and computers that can mimic cognitive functions associated with human intelligence?
- Artificial intelligence

Which feature of Vertex AI lets users build and train end-to-end machine learning models by using a GUI (graphical user interface), without writing a line of code.
- AutoML

Which Google Cloud AI solution is designed to help businesses improve their customer service?
- Contact Center AI

An online retailer wants to help users find specific products faster on their website. One idea is to allow shoppers to upload an image of the product they’re looking to purchase. Which of Google’s pre-trained APIs could the retailer use to expand this functionality?
- Vision API

What’s the name of Google’s application-specific integrated circuit (ASIC) that is used to accelerate machine learning workloads?
- Tensor Processing Unit (TPU)

Google Cloud offers four options for building machine learning models. Which is best when a business wants to code their own machine learning environment, the training, and the deployment?
- Custom training

BigQuery ML is a machine learning service that lets users:
- Build and evaluate machine learning models in BigQuery by using SQL.

Which Google Cloud AI solution is designed to help businesses automate document processing?
- Document AI

A large media company wants to improve how they moderate online content. Currently, they have a team of human moderators that review content for appropriateness, but are looking to leverage artificial intelligence to improve efficiency. Which of Google’s pre-trained APIs could they use to identify and remove inappropriate content from the media company's website and social media platforms.
- Natural Language API

Anthony Dylan has an On the Rise folder saved in his My Drive. He decides to invite Sherrie West and Seroja Malone to access the folder. Who now owns the content found in the folder?
- Anthony Dylan

Sherrie West has On the Rise employee files saved in her My Drive. What can she as the owner do with these files? Select all that apply.
- She can share a file link
- She can add collaborators
- She can move the files
- She can delete the files and restore them from the trash

Seroja Malone has just added the file “French baguette” to her On the Rise recipes folder, stored in her My Drive. Sherrie West has Viewer permissions to the folder. What can she do to the “French baguette” file?
- She can view the file

Seroja Malone gives her head baker access to the “French baguette” file. She assigns the baker as an Editor. Which of the following can he do? Select all that apply.
- He can view the file
- He can edit the file

Kaina Gao, Global Marketing and Sales recently attended an international conference about top trends in the bakery industry. She wants to create a new folder in her My Drive where she can store all the conference handouts and her personal notes. How does she do this? Select all that apply.
- Open Drive, select the My Drive label, then select New and choose Folder from the menu
- Open Drive, select the My Drive label, right click on an open spot in the file list and select New folder from the menu

Kaina Gao is working on a new file called “Bakery Trends”, located in her My Drive “OTR Marketing” folder. How can she add a shortcut back to her “Conference Notes” folder in her My Drive?
- She can right click on the OTR Marketing folder, Select Organize then Move and place it in her Conference Notes folder

Sherrie West needs to search for an On the Rise Google Sheet in her My Drive. Unfortunately, she can’t remember the name of the file. What are some ways she can narrow her search? Select all that apply.
- She can manually search by content type
- She can select Advanced search and choose a date range
- She can manually search by recent collaborators
- She can right click on the folder where the file is stored and select Search within

Sherrie West is a member of many shared drives. How can she set up her Google drive to only see the ones that she uses most often?
- Right click on the shared drives she does not use and select Hide shared drive from the menu

Sherrie West has just created a new file named “On the Rise employee onboarding”. Thomas asks Sherrie to move the file to the On the Rise shared drive as opposed to keeping it in her My Drive. Why might Thomas ask this? Select all that apply.
- This way the file is owned by everyone in the shared drive
- This way the file is available even if Sherrie leaves the company

There is a folder in the On the Rise shared drive called “Conference material”. This folder is full of old files that are no longer used. How can Thomas Omar delete these files from the shared drive? Select all that apply.
- He can select the files, and then select Move to trash
- He can drag all the files to the Trash

Seroja Malone would like to use the “On the Rise’ Google Docs template created by Sherrie West. What does she need to do?
- Select New, Google Docs, then From a Template, then choose the On the Rise template

Sherrie West often needs to list On the Rise job postings. She creates these files in Google Docs and likes them to have the same style. How can she create a template that she can easily re-use?
- Create a Google Doc OTR Job Posting to use as the template, then open the template gallery for Google Docs, select On the Rise, then choose Submit template

Seroja Malone is traveling and knows she won’t have an active internet connection. She is working on a Google Sheet named “Ingredient list”. How can she make this file available for offline viewing?
- She can right-click on “Ingredient list” from the files list and select Available offline

Yousef has a series of spreadsheets that he has created in Microsoft Excel. Which of the following statements are true? Select all that apply.
- Yousef can view Microsoft Excel spreadsheets using Google Sheets
- Yousef can upload Microsoft Excel spreadsheets to Google Drive

On the Rise store owner Yousef Amadi wants to create an inventory sheet for his employees. How does he create a new Google Sheets spreadsheet? Select all that apply.
- Type sheets.new in the browser address bar
- Go to Google Drive, select New, then select Google Sheets

Now, Thomas wants to add some data to the Sheet. What are some of his options? Select all that apply.
- Import it from a Microsoft Excel file
- Manually add the data
- Copy and paste it from another spreadsheet
- Paste it from within the same Google Sheet

On the Rise partner owner Thomas Omar is reviewing a Google Sheet named “On the Rise Monthly Sales Figures.” He’d like to better analyze the data by filtering the data. What does he need to do?
- Select one or more cells, open the Data menu, hover over Filter views, then select Create a new filter view

Seroja wants her Sheet to include a header row that does not move when viewers scroll through the spreadsheet. How does she set this up?
- She can select the row she wants, open the View menu, then choose Freeze and 1 row

Anthony Dylan is working on a Google Sheet that includes many long text strings. He notices that the text keeps overflowing onto the adjacent cell. How can he format his Sheet in order to fix this issue?
- He can select Text wrapping

Thomas Omar is working on a Google Sheet with sales data from On the Rise stores in the Asia Pacific region. He’d like to see an average sale price. This data is found in cells J3 through J44. Which of the following formulas should he use?
- =AVERAGE(J3:J44)

Seroja makes some changes in “On the Rise marketing data,” but later decides she’d like to return to the version shared by Kaina Gao. What does she need to do?
- Select File, Version history, then See version history, choose the version from the correct point in time, and then select Restore this version

Thomas wants to share a Google Sheets spreadsheet with On the Rise store owner Yousef Amadi. He’d like him to be able to download and print the file but not make any changes. What type of collaborator role should he assign to him?
- Viewer

Anthony is working on the Google Sheet when he notices that Sherrie is online as well. Anthony would like clarification regarding a few comments that Sherrie has left him. What is the best way for Anthony to collaborate with Sherrie?
- Use Google Chat to message her directly in the Google Sheet

Thomas is reviewing a Google Sheet named “On the Rise forecast report.” He’d like to leave a comment on cell A22. What does he need to do?
- Place his cursor on cell A22, select Add a comment, type his comment, and select Comment

What is the keyboard shortcut LookML developers can use to place themselves into Development mode? Please choose the best answer.
- Control + Shift + D.

What role most often manages the creation, configuration and ongoing maintenance of the Looker platform LookML project version control? Please choose the best answer.
- Looker administrator.

Where would a data explorer end user notice new LookML code you wrote, committed and implemented as a LookML developer? Please choose the best answer.
- Explores.

LookML developers can use Looker’s SQL Runner feature to investigate and modify any query.
- True

LookML developers cannot write, commit, or implement LookML code unless active Developer mode in the Looker platform.
- True

All users can access, read, and write to LookML files in Production mode.
- False

What are the fundamental components Looker uses to generate a complete SQL query? Please choose the best answer.
- Model, Explore, fields, filter, sort order.

The Looker platform can connect to other SaaS platforms, but specifically NOT business planning or web analytics solutions.
- False

Which of these features central to the value proposition of the Looker platform empowers the self-service of data viewers and data explorers by allowing them to work with and visualize data without writing SQL? Please choose the best answer.
- Looker agile modeling layer.

The number dimension type is the default dimension type assigned by Looker to a newly created dimension.
- False

count computes a distinct count of the field in the SQL parameter.
- False

Developers utilize the Looker modeling language (LookML) to define all but one of the following items. Which item would a LookML developer NOT define using LookML? Please choose the best answer.
- Extends.

Which option does NOT represent an example of a dimension? Please choose the best answer.
- The entirety of a data table.

Views correspond to Explores in the Looker platform.
- True

Which of these scenarios is possible using LookML? Please choose the best answer.
- Measuring the percentage of a COUNT function result.

User-defined dashboards are stored in version-controlled files associated with a project in a Git repository.
- False

What is the definition of a measure in Looker? Please choose the best answer.
- It leverages aggregate functions similar to those found in SQL to represent rows of data.

Using LookML, developers can reference fields in other view files.
- True

When you create a new LookML dashboard, what's the filename convention used? Please choose the best answer.
- new_dashboard.dashboard.lookml.

What is the default type given to a filter if one is not defined by a LookML developer? Please choose the best answer.
- string.

An Explore can be created from either a single view or table, or a combination of two views.
- True

How many different relationship parameters exist for how tables relate to one another? Please choose the best answer.
- Four (4).

A one-to-many type join can result in fanout if symmetric aggregates are not properly applied.
- True

Which of the following is required for symmetric aggregation to work in Looker? Please choose the best answer.
- Unique primary keys defined in all joined views, and defined join relationships among views.

The usage and implementations of type: location is NOT dependent on a database’s dialect.
- False

The LookML parameter explore_source corresponds to what part of a SQL query? Please choose the best answer.
- FROM.

Developers can implement caching in Looker to improve speed of query results.
- True

In what type of file contained within a LookML project would a LookML developer write code for a native derived table? Please choose the best answer.
- View file.

Which of these terms is NOT used to identify new tables or sub-selects in SQL? Please choose the best answer.
- Queries.

To what does a LookML developer add and apply a datagroup? Please choose the best answer.
- Explore.

Where in the Looker user interface can someone best and most easily write SQL queries for a SQL derived table? Please choose the best answer.
- Looker’s SQL Runner.

An Explore MUST be utilized for its LookML code to construct a native derived table.
- False

End users and LookML developers alike can create their own derived tables for their respective use cases.
- False

What is the recommended naming convention for persistent derived tables? Please choose the best answer.
- _____.scratch.

Filter parameters can be used to apply filters to a native derived table using the same syntax as a filtered measure.
- True

Developers create SQL derived tables by manually constructing SQL queries.
- True

In what language are native derived tables written? Please choose the best answer.
- LookML.

Persistent derived tables remain stored within the Looker platform, just like other derived tables.
- False

Developers can successfully utilize derived tables to roll up user data to the month time level in order to track periods of (in)activity and analyze retention.
- True

What is the process of monitoring, measuring, retraining, and serving ML models automatically and continuously to adapt to changes in the data before they’re redeployed?
- Continuous training

Which of the following steps is part of continuous integration and delivery (CI/CD) but not continuous training (CT)?
- Building the model

Which of the following characteristics of delivering an ML model is considered as a characteristic of maturity level 0?
- Manual, script-driven, and interactive process

What is the important aspect of MLOps which differs from DevOps?
- MLOps constantly monitors, retrains, and serves the model.

How does end-to-end MLOps help ML practitioners with the machine learning life cycle?
- End-to-end MLOps helps ML practitioners efficiently and responsibly manage, monitor, govern, and explain ML projects throughout the entire development lifecycle.

What is the MLOps life cycle iterative process that retrains your production models with the new data?
- Continuous training

What component of an ML pipeline is responsible for deploying the model to any edge devices?
- Upload model and deploy endpoint

You have several complex projects spanning multiple files, with complex dependencies. You also need to collaborate and share notebooks. Which notebook solution offers the best option?
- Workbench instances

When should you use Vertex AI Workbench instances instead of Colab Enterprise?
- All of the above

You have a use case that requires using BigQuery, Dataproc, and Spark. Which of these is available from the instance GUI?
- BigQuery

You want to use Colab Enterprise. You can create a Colab Enterprise notebook and run code in it without needing to understand runtimes. When you run your code for the first time, Colab Enterprise provides a default runtime and runs your code on it. To configure a runtime for specific needs, you must:
- Create a runtime template with the configuration that you need, then create a runtime based on that template, then connect to the runtime from your notebook and run your code.

You have an existing Workbench instance and want to add a GPU to the instance. How can you modify a Workbench instance configuration after it has been created?
- Stop the instance, then modify the hardware configuration, then click the submit button.

Which type of DNS record determines where mail destined for your domain is routed?
- MX Record

What are common uses for a DNS TXT record when using Google Workspace? (Choose 2)
- Email security records
- Domain verification

You need to make a change to your MX records and you want the change to be implemented as soon as possible. What approach can you take?
- Make the change in your DNS console and reduce the Time to Live (TTL) value to 1 hour. Once the change has been implemented revert the TTL value to 24 hours

In general, from where would you manage your domain's DNS records?
- In your domain registrar console

What policy defines what to do if an incoming message is not authenticated?
- DMARC

You have been asked to implement DomainKeys Identified Mail (DKIM) for your organization. How would you do this?
- Generate a DKIM record from Apps > Google Workspace > Gmail > Authenticate email. Add the record to your DNS records and then start authentication from the admin console

DKIM adds an encrypted signature to the header of all outgoing messages. What happens if you don't turn on email signing with your own domain DKIM key?
- Gmail signs all outgoing messages with this default DKIM domain key d=*.gappssmtp.com

What is the main purpose of a Sender Policy Framework (SPF) record?
- It specifies which servers/domains can send messages on your behalf

You have enabled protection against anomalous attachment types in emails from the Gmail > Safety page but you are finding some emails with valid attachment types are not being delivered. How can you resolve this?
- Add an allowlist of allowable file types to the entry in the Attachments section on the Safety page

The attachment section in the Gmail Safety settings page allows you to protect against malicious attachments. What actions can you perform on a suspicious attachment? (Choose 2)
- Move email to spam
- Keep email in inbox and show warning

Google recommends against the use of the Image URL proxy allowlist?
- True

What are valid reasons for allowing per-user outbound gateways in your organization? (Choose 2)
- An outbound gateway can prevent the appearance of "on behalf of" addresses in the From field
- An outbound gateway ensures that the same mail server delivers all messages from otherdomain and that server has a record that the mail has been sent

Messages from a single person that you trust are being marked as spam by Gmail. What approach is best to ensure that these messages reach the intended recipients inboxes?
- Add a spam setting which bypasses spam filters for messages received from addresses within an approved senders list. Add the user's email address to the list

Which of the following are reasons to use an inbound gateway? (Choose 2)
- Spam filtering
- Message archiving

Your organization has been receiving unwanted emails from another organization, and attempts by you to get the organization to stop sending the emails have failed. What approach is best to stop messages from this organization from reaching your users?
- Configure a blocked senders list and add the domain name to the list

In which type of compliance control can you apply a Data Loss Prevention (DLP) rule for Gmail?
- Content compliance

Which statements are true for an objectionable content rule? (Choose 2)
- In an objectionable content setting you create word lists for filtering for objectionable content
- An objectionable content setting works on inbound and outbound messages

You want to prevent your users from receiving mail from baddomain.com. What is the best way to achieve this?
- Add baddomain.com to a blocked senders list

What actions can an administrator perform on a quarantined message? (Choose 2)
- Deny
- Allow

What advantages does a routing setting have over an outbound gateway when you need to route mail through an external mail server?
- All of the options here

Which features in Google Workspace can be used to leverage Google's spam protection for users who are on a non-Gmail mail platform? (Choose 2)
- Non-Gmail mailbox
- SMTP Relay service

Which mail delivery scheme allows messages to be delivered to multiple mailboxes?
- Dual delivery

What must you define before you can change the route in a routing setting?
- A mail host

Which four of these apps are Google Workspace core services that are covered in the Google Workspace Terms of Service? (Choose 3)
- Google Calendar
- Google Drive
- Sites

What is the correct pathway in the admin console to getting to Google Workspace core services list?
- Admin Console > Apps > Google Workspace

For a domain that has implemented an organizational hierarchy, at what levels can Google Workspace services such as Sites and Gmail be turned on AND off? (Choose 2)
- At the group level
- At the OU level

All Additional Google services are turned ON by default.
- False

Which of the following settings cannot be set from the Gmail service settings?
- Default language

Which of these settings do the users control from their Gmail settings? (Choose 2)
- Add POP3 accounts to the user’s inbox
- Display language for the Gmail interface

Which of the following actions can be taken on a message when an attachment compliance rule is matched? (Choose 3)
- Modify message
- Quarantine message
- Reject message

What are Calendar Resources? (Choose 2)
- Bookable equipment
- Bookable conference rooms

Which Calendar settings can an administrator control for everyone in the organization? (Choose 2)
- Default level of internal sharing for primary calendars
- Highest level of external sharing for primary calendars

What can users control when it comes to their Calendar?
- Users control what they share internally

What are recommended to be configured before adding resources to the organization? (Choose 2)
- Buildings
- Features

A user left your company last month and you deleted their Google Workspace account 15 days ago. You have been contacted as the administrator and asked if you can recover the deleted user's documents. What should you do?
- Restore the user, transfer the files to a new owner, and delete the user again.

Your company allows external sharing of documents but your CEO is concerned about how documents are shared externally. As the administrator, which additional protections might you put in place? (Choose 2)
- Enable the feature that warns users when sharing outside the organization
- Require a Google sign in when viewing a shared file

Your company wants to adopt the policy that new documents will be shared internally with everyone in the company. This way users won’t have to explicitly share new documents with others. What’s the recommended way to set this up?
- Change Link Sharing Defaults to "ON - Primary target audience with the link"

From which places can you transfer file ownership from one user to another? (Choose 2)
- From the Drive and Docs service settings page
- When deleting a user from the admin console

What actions can you take as administrator from the Managed shared drives area in the admin console? (Choose 3)
- Manage shared drive sharing settings
- Restore a deleted drive or files
- Manage members

Which of the following features are only available in advanced management? (Choose 2)
- Device approvals
- Android work profiles

An end user in your organization has lost their device. This is a personal device with a work profile. Based on this training, what would be your next step?
- Wipe the device to remove the user's work profile

What icon do you click on the admin console in order to access the Google Device Management toolset?
- Devices

How can you automatically manage a device that falls out of compliance with your organization's policies?
- Add a device management rule

What constraints/filters are available in the search form? (Choose 3)
- Organizational Unit (OU)
- Specific Accounts
- Data Type (Mail, Drive etc)

How long are export files available for download?
- 15 days

When is a default retention rule applied to a message or a file?
- Only when there are no applicable custom retention rules or holds in place

What data types are supported by Vault? (Choose 3)
- Groups
- Drive
- Meet

What information can you find on the main report (the highlights) page? (Choose 3)
- Apps usage
- External file sharing
- Users account status

Your IT manager would like to know what changes have been made to your Google Workspace organizations settings. Where would you find this information?
- Admin audit log

What is editable in a System Defined Rule?
- Actions

Your organization has just purchased another company that has their own domain. They will be using Google Workspace and you want them to be able to continue receiving email to their existing address. What approach would you take?
- Add the new domain as a new (secondary) domain to your Google Workspace account.

Your company regularly works with another company that also uses Google Workspace and you wish to make it easier for users to collaborate using Drive. What action would you take?
- Add their primary domain, subdomains and any aliases to your list of trusted/allowed domains

Which of the following are true about a domain alias? (Choose 2)
- Domain aliases can only be applied to the primary domain from the admin console
- Domain aliases do not require additional Google Workspace licenses

What must you do before you can start to use Google Workspace services?
- Verify that you own the domain that you want to associate with Google Workspace.

What type of DNS record allows receiving mail servers to verify that the sending servers are authorized to send mail on your domain’s behalf?
- Sender Policy Framework (SPF) record.

Typically how long after new features are released to the Rapid release track will they be released on the Scheduled release track?
- At least 1 week

Your company just acquired a 100-employee startup and you quickly need to add the new employees to your domain. Using the Admin console, which is the most efficient way to add new users all at once?
- Add all the new users at once from a .csv file.

How does GCDS sync directory information?
- It updates Google Workspace with information from the local LDAP directory.

When adding users individually, how are passwords established?
- The admin can enter a password manually or allow the console to generate a temporary password for the new user.

What is the minimal amount of characters required of Google Workspace passwords?
- 8 characters

Which of the following are required when adding multiple users via a CSV file? (Choose 2)
- First Name
- Password

Which method can NOT be used to create a Google Group?
- Using Gmail.

You have created an Announcement group and you want to ensure that all users in your organization receive emails sent to the group. How would you do this?
- Check the 'Add all current and future users of <your company> to this group' setting when adding members for the first time.

What can be defined when creating a Resource? (Choose 2)
- Capacity.
- Name.

Once you have created your resources, how do you manage the resource calendar settings?
- From Google Calendar.

Which of the following statements are true? (Choose 2)
- Resources belong to a building so you cannot add a resource without a building definition.
- Features (such as video, audio equipment) are associated with a Resource.

When you delete a user, which of the following can be transferred to a new owner?
- Calendar.
- Email Address.

To allow a single user to receive email in their Gmail inbox addressed to multiple addresses you would add?
- An email alias.

How are site-based licenses assigned to users?
- Site-based licenses are automatically assigned to all users in the organization.

What is the behavior for a suspended user? (Choose 2)
- Email and new calendar invites are blocked on a suspended user's account.
- A suspended user cannot login to their account.

Under what conditions can a forgotten password be recovered by a user?
- Only if the administrator has enabled non-admin password recovery.

You want to enable Blogger for your full-time employees but restrict access to your contractors. Which method could be used to do this?
- Move the contractors into an OU and turn off Blogger for that OU.

Which of these statements are true about Google Workspace OUs? (Choose 2)
- A user may belong to one OU only.
- A Google Workspace account may contain multiple OUs.

How do settings inherit across OUs?
- Each child OU inherits settings from its parent, which you can then customize.

A user can change all the settings below from their About me page but which are editable by default? (Choose 2)
- Birthday.
- Work Location.

Where are custom directories defined for a user?
- In the users OU.

Users across your organization regularly email your suppliers and would like to have Google Workspace automatically auto-complete their email addresses in Gmail. What should you do?
- Use the Domain Shared Contacts API to add these external users to your directory.

What can you add to a user's profile that can be used by Google as a login challenge when they suspect that an unauthorized person is trying to access a user’s account.
- Employee ID.

When assigning an administrative role to a single user, where in the user's account page do you assign the role?
- Admin roles and privileges

Privileges in a pre-built administrator role can be customized.
- False

You can assign more than one administrator role to a user.
- True

What’s the recommended way to create a custom administrator role for your domain?
- Create a new role and choose the required privileges.

How does Google’s recommend Core IT users to book calendar resources?
- Ask Core IT users to book resources in the legacy platform.

How does Google Cloud Directory Sync synchronize directories?
- GCDS ensures the Google directory matches the local LDAP directory by pushing updates to Google only.

What is Google’s preferred method for verifying domain ownership?
- Add a TXT record to your DNS records.

Your organization is made up of multiple companies. You want each company to have its own set of users with their own email addresses. What type of domains would you use?
- A primary domain for the first company, and a secondary domain for each additional company.

How does GCDS support password synchronization from Active Directory?
- GCDS does not support the Active Directory password format. Customers should deploy G Suite Password Sync to support password changes.

At what phase in the deployment process would you typically configure your MX records to point to the Google servers?
- Early Adopter.

How can you ensure that messages forwarded from your legacy mail servers to Gmail are not classified as spam by Google?
- Configure the inbound gateway setting in Google Workspace.

After a Google Workspace deployment, the organization’s MX records will be pointing to Google’s mail servers. Mail is then delivered to each user’s Gmail inbox. What type of mail delivery is this?
- Direct Delivery.

During the Core IT phase how can you ensure that a message sent from a user on the legacy platform to a Core IT user is correctly delivered to their Gmail inbox?
- Setup a domain alias in Google Workspace and create forwarding rules for each Core IT user to forward intradomain messages to the shadow domain in Google Workspace.

A message is sent to Gmail to a valid user in your organization but the user has not yet been provisioned in Google Workspace. How can you ensure this mail is not lost and can be delivered to the intended recipient?
- Configure the default routing policy in Google Workspace to catch any unrecognized addresses and route those back to the legacy system.

When considering what data to migrate (mail, calendar and contacts) for the Global Go-Live, which of the following is considered best practice?
- Migrate only what you need.

Which Google tool would you use to perform a server side migration from Microsoft Exchange to Google Workspace?
- GWMME.

Which of the following are considered best practices for data migration?
- All of the options here.

What are options for adding Shared Contacts to Google Workspace?
- All of the options here.

Google recommends the use of calendar connectors during a deployment.
- True

During a deployment, what calendar coexistence challenges will your users face?
- All of the options here.

In a typical organization, what is the percentage of people who can adapt to change independently?
- Less than 20%

Why do some projects fail?
- All of the options here.

What best describes the Early Adopters?
- People who tend to be opinion formers in the organization.

Which of the following statements about the Proof Key for Code Exchange (PKCE) extension are true? Select two.
- PKCE uses a one-way hash to prove the identity of the app.
- The authorization code grant type with PKCE should be used instead of the implicit grant type.

Which of the following statements about JWTs are true? Select two.
- Apigee provides policies for generating and verifying JWTs.
- JWTs can be validated without sending them to a token server.

Which OAuth grant type should be used for untrusted apps that need access to user data?
- Authorization code grant type

Why does the client credentials grant type not use refresh tokens?
- Refresh tokens are only used when user credentials are necessary.

Which of the following policies are used to protect against parsing attacks? Select two.
- XMLThreatProtection policy
- JSONThreatProtection policy

Which of the following data stores does Apigee use when proving the proxy's identity to the backend service?
- Keystore

Which of the following statements about KVMs are true? Select two.
- Keys and values must both be strings.
- When the KeyValueMapOperations policy is being used, values from a KVM may only be retrieved into private variables.

Which of these is correct with regard to applying responsible AI practices?
- Decisions made at all stages in a project make an impact on responsible AI.

Organizations are developing their own AI principles that reflect their mission and values. What are the common themes among these principles?
- A consistent set of ideas about transparency, fairness, accountability, and privacy.

Which of the below is one of Google’s 7 AI principles?
- AI should uphold high standards of scientific excellence.

Why is responsible AI practice important to an organization?
- Responsible AI practice can help build trust with customers and stakeholders.

My customer wants to have a direct deal for CCAI, and not buy through an OEM partner or CCAI Platform. Can I do that? (Choose three)
- Yes, a third-party ISV offers a CCAI connector for the customer’s contact center.
- Yes, the customer will not need live voice features
- Yes, the customer’s telephony partner offers "bring your own AI" with a prebuilt CCAI integration.

Which of these connectivity protocols does CCAI support for live voice integrations? (Choose three)
- SIPREC
- SIP
- gRPC

Which of these protocols support telephony virtual agents? (Choose two)
- SIP
- gRPC

What do OEMs, CCAI Platform, and CCAI connectors all provide on top of CCAI? (Choose four)
- Full solution enterprise support
- Contact Center Solution completeness
- Pre-engineered integrations
- Seamless virtual agent handoffs with Agent Assist for Voice

A customer wants to upgrade their DTMF-based IVR with a virtual agent. When the virtual agent cannot contain the call, the customer wants the call routed to a relevant department with all of the context from the virtual agent. Which of these integration options should you consider? (Choose two)
- CCAI Platform
- Partner integration or connector

Which of these protocols support telephony agent assist? (Choose three)
- SIP
- gRPC
- SIPREC

Which of the following are sent through telephony integration’s gRPC to the CCAI APIs? (Choose three)
- Session parameters
- Programmatic events that change the conversation state
- The caller’s audio stream

Which of the following advanced speech settings is most impactful to the performance of your solution.
- Speech model

Google support asks you to share an audio recording of a problem behavior you’ve reported with your telephony experience. Which of the following considerations should you take: (Choose two)
- Check that the caller and agent audio are in separate files, or separate channels of a stereo audio.
- Record calls from your CCAI contact center solution.

Built-in Dialogflow features like barge-in, speech adaptation, and partial responses ensure consistent experiences regardless of your integration method.
- False

Which of the following features could help reliably authenticate users to your virtual agent? (Choose three)
- I can cross-reference Caller ID with a DTMF-collected pin code
- I can use a regexp entity and collect an alpha/numeric ID with required form-filling
- I can lookup known users from Caller ID then use Speaker ID to tell me which one is speaking

Your virtual agent has trouble understanding users. When you check Dialogflow conversation history, the transcripts do not match what the user said. You enable Dialogflow’s audio export bucket to record some calls that exhibit the issue and notice the speech is clear and understandable. How might you fix this?
- Configure a different Google speech model better suited for my use-case.
- Specify manual speech adaptations for the phrases I want to transcribe correctly.
- Ensure that I collect alpha/numeric sequences (like 12345678 or ABCD1234) through form-filling.
- Enable call companions to offer users an alternative input method.
- Check that auto speech adaptation is enabled, then make sure the agent’s training phrases and entities contain the phrases the users are actually saying.

Which of the following are returned from the CCAI APIs through the telephony integration’s gRPC. (Choose three.)
- Programmatic events that change the conversation state
- Start of speech detection
- Session parameters

You need at least one conversation profile per: (Choose three)
- Dialogflow agent
- Unique Agent Assist feature combination
- Language

When you test your virtual agent through your telephony integration, you experience long periods of silence before hearing a response to your inputs. How might you fix this? (Choose four)
- Specify a different speech model.
- Contact my integration owner for troubleshooting any networking or other processing issues.
- Check the performance of my fulfillments’ webhooks.
- Enable advanced timeout-based endpointing and increase the sensitivity slider.

Your employer asks you to design an AI-driven multi-channel automated voice and text solution across telephone, website, and social media. Which approach should you take?
- Integrate voice, web, and social channels in one solution architecture with a common Dialogflow virtual agent.

What are some benefits of choosing an open source integration?
- Your developer team may fork the integration to suit your needs.
- Allows you to extend your reach to platforms that do not have built-in integrations.

Dialogflow CX Messenger has built-in support for these CCAI features:
- Chat with a virtual agent

Which are useful components when building custom Neural Network models?
- All of the options are correct.

How does TensorFlow represent numeric computations?
- Using a Directed Acyclic Graph (or DAG)

Which of the following statements is true of TensorFlow?
- TensorFlow is a scalable and multi platform programming interface for implementing and running machine learning algorithms, including convenience wrappers for deep learning.

Which API is used to build performant, complex input pipelines from simple, re-usable pieces that will feed your model's training or evaluation loops.
- tf.data.Dataset

Which of the following is true when we compute a loss gradient?
- All options are correct.

What operations can be performed on tensors?
- They can be both reshaped and sliced

When should you avoid using the Keras function adapt()?
- When working with lookup layers with very large vocabularies

Which is true regarding feature columns?
- Feature columns describe how the model should use raw input data from your features dictionary.

What is the use of tf.keras.layers.TextVectorization?
- It turns raw strings into an encoded representation that can be read by an Embedding layer or Dense layer.

Which of the following is true about embedding?
- All options are correct.

Which of the following layers is not non-trainable?
- Hashing

What are distinct ways to create a dataset?
- A data source constructs a Dataset from data stored in memory or in one or more files and a data transformation constructs a dataset from one or more tf.data.Dataset objects.

Which of the following is not a part of Categorical features preprocessing?
- tf.keras.layers.Discretization

Which of the following is a part of Keras preprocessing layers?
- All of the options are correct.

Select the correct statement regarding the Keras Functional API.
- Unlike the Keras Sequential API, we have to provide the shape of the input to the model.

The Keras Functional API can be characterized by having:
- Multiple inputs and outputs and models with shared layers.

Non-linearity helps in training your model at a much faster rate and with more accuracy without the loss of your important information?
- True

The L2 regularization provides which of the following?
- It adds a sum of the squared parameter weights term to the loss function.

The predict function in the tf.keras API returns what?
- Numpy array(s) of predictions

How does Adam (optimization algorithm) help in compiling the Keras model?
- Both by updating network weights iteratively based on training data by diagonal rescaling of the gradients

How does regularization help build generalizable models ?
- By adding dropout layers to our neural networks

During the training process, each additional layer in your network can successively reduce signal vs. noise. How can we fix this?
- Use non-saturating, nonlinear activation functions such as ReLUs.

What is the significance of the Fit method while training a Keras model?
- Defines the number of epochs

Which file is the entry point to your code that Vertex AI will start and contains details such as “how to parse command-line arguments and where to write model outputs?
- task.py

Fill in the blanks. When sending training jobs to Vertex AI, it is common to split most of the logic into a _________ and a ___________ file.
- task.py, model.py

When you package up a TensorFlow model as a Python Package, what statement should every Python module contain in every folder?
- an init_.py

To make your code compatible with Vertex AI, there are three basic steps that must be completed in a specific order. Choose the answer that best describes those steps.
- First, upload data to Google Cloud Storage. Next, move code into a trainer Python package. Then submit your training job with gcloud to train on Vertex AI.

Fill in the blanks. You can use either pre-built containers or custom containers to run training jobs. Both containers require you specify settings that Vertex AI needs to run your training code, including __________, ____________, and ________.
- Region, display-name, worker-pool-spec

Which of these is a TRUE statement?
- Machine Learning models learn the relationship between your dataset features and label on your training dataset to then predict on a dataset where the correct label is unknown.

Which of the following describes a discipline that uses vast volumes of data and complex algorithms to train a model?
- Deep learning

What is an instance in a training dataset?
- A single observation or record of data

Which API lets you understand your video's entities at shot, frame, or video level?
- Video Intelligence API

Which API lets you perform complex image detection with a single REST API request?
- Vision API

What type of action can the Natural Language API perform?
- Give you the overall sentiment of a sentence or a text document

Which of the following is NOT a pre-trained Machine learning model on Google Cloud?
- Tensorflow

When creating a dataset for use in ML training, which of the below are the best practices to keep in mind?
- For faster iteration, consider training on just a sample of your dataset

True or False: Because of the learning nature of ML Models, you will spend very little time cleaning and processing your datasets
- False

Select the statements below that are an accurate description of machine learning: Select all 3 correct answers.
- An iterative cycle of continual data research, model refinement, and insights through a learning feedback loop
- A method of replacing heuristic rules and hardcoded logic trees with learning models
- A potentially viable option if you need to perform predictive analysis like "What is my revenue going to be next quarter?"

What does a sentiment score of -1.0 at a magnitude of 1.0 represent for text that has been processed through the NLP API?
- A strongly negative sentiment

What is a key input to a pre-trained ML model like the Translation API microservice? Select all 2 correct answers.
- You will need to provide the model with a data input -- for translation this is normally a block of text
- You need to provide the model with expected parameters like which languages you are translating to and from

Which critical step is missing from the below model phases? 1. Ingest data, 2. ? 3. Build a Training Dataset, 4. Create a Model, 5. Evaluate your Model, 6. Make Predictions
- Preprocess data

What are two advantages of cloud-based infrastructure? Select two answers.
- Reduced data loss
- Cost savings

All of XYZ Software Company’s infrastructure is physically located in their office. XYZ employees manage all of the servers, networks, and storage. What type of infrastructure does XYZ use?
- On-premises

What is the term for a resource that can fail without impacting the availability of data?
- Failure domain

Which term describes the time it takes for data to travel from one location to another?
- Latency

As a cloud security analyst, you have been hired to assist with a company’s digital transformation. The company’s management team has informed you that security is their highest priority. Based on this information, what type of hypervisor should the company choose and why?
- Type 1, because it replaces the operating system of the underlying computer

What is virtualization?
- Technology that creates a virtual version of physical infrastructure

What are two advantages of packaging software in containers? Select two answers.
- Containers enable users to run software quickly from one computing environment to another.
- Containers use less memory and fewer resources.

In the cloud, what is the term for computation performed by a physical computer in a remote environment?
- Compute

A small independent book publisher considers moving its data storage to the cloud. What are two potential benefits of this change? Select two answers.
- The publisher will be able to store more data.
- The publisher will save money.

What data type includes names, addresses, credit card numbers, and dates?
- Structured data

A music recording studio wants to store and organize a large amount of unstructured data in the form of audio files. Which type of cloud storage should they choose?
- Buckets

A team of developers is using a centralized place to store, download, and share data. What is this central location called?
- A repository

In an on-premises IT architecture, who is responsible for maintaining the servers, networks, and storage an organization uses to run and store data?
- The organization

A cloud service provider has data centers in multiple physical locations. One data center experiences an outage, but users are not affected since the cloud service provider’s resources are spread across many data centers. What cloud computing concept is this an example of?
- Redundancy

A cybersecurity analyst recommends that their team use a cloud environment with infrastructure and resources shared among users. Which type of cloud environment does this describe?
- Multi-tenant

After moving its information technology infrastructure to the cloud, an organization is able to reduce costs since it only pays for the resources it uses. What is the term for this model of paying for cloud services?
- Operational expenditure

What is an ephemeral resource in cloud computing?
- A resource meant to exist for a short period of time

An organization’s development team wants to transform one physical computer into multiple virtual machines. What technology can they use to distribute resources between virtual machines and keep them separate?
- A hypervisor

A software company creates a package that contains a file with the code and dependencies needed to run the company’s application. What is the name for this software package?
- A container

What is the term for the practice of duplicating data stored in the cloud across multiple failure domains to ensure it is always available?
- Redundancy

A security analyst is working with a database. The data they are using is organized into rows and columns. What is the term for this type of data?
- Structured data

Which data storage type splits data apart and stores it in different locations to maximize efficiency?
- Block storage

What are two types of security controls used to defend cloud resources? Select two answers.
- Identity
- Protective

You are attempting to log in to your email from a new device. The email system requires you to input a code it texts to your phone before you can access your inbox. What type of security control is this an example of?
- An identity control

Which tool is an example of a detective control?
- An intrusion detection system (IDS)

What is the term for a layered approach to vulnerability management that reduces risk?
- Defense in depth

What three things can cloud users do to prevent misconfigurations from causing security vulnerabilities? Select three answers.
- Properly manage IAM policies.
- Incorporate automation and safe security policies.
- Closely monitor resource provisioning.

Which two elements of cloud security are CSPs generally always responsible for? Select two answers.
- Ensuring network and resource availability
- Maintaining physical infrastructure

What is the term for the implicit and explicit agreement between the customer and the cloud service provider (CSP) regarding the accountability for security control?
- Shared responsibility model

What cloud services model was created to increase the level of trust between the users of cloud services and the cloud service provider?
- Shared fate

What are two characteristics of the shared fate model that improve on the shared responsibility model? Select two answers.
- The CSP and its customers have a stronger relationship.
- The CSP provides more security resources to cloud users.

What is the term for a cloud-hosted application accessed over the internet through a web browser or mobile app?
- Software as a service (SaaS)

In which model of cloud computing does the cloud service provider (CSP) have the least responsibility?
- Infrastructure as a service (IaaS)

A small software company is planning to move their infrastructure to the cloud. What two capabilities can the software company gain from choosing an IaaS model? Select two answers.
- Configure their cloud resources to increase and decrease depending on their needs.
- Devote more time to managing their cloud services and security.

A company moving its infrastructure to the cloud selects the platform as a service (PaaS) cloud service model. In this scenario, what is the CSP responsible for?
- Supplying and managing hardware and software resources

What is the term for a method of granting users and service accounts access to a cloud environment using IAM?
- Federation

You are configuring IAM policies for your employer. Your development team consists of 10 people who will all need access to the same few storage buckets and virtual machines within your cloud environment. How can you most effectively accomplish this objective?
- Create a group for the team members, then use an allow policy to bind the group to a role that has the needed permissions.

A consultant needs to simply demonstrate the principle of least privilege to a client. Which of the following examples should the consultant use to demonstrate the principle of least privilege?
- Granting a service account an identity and access management (IAM) role to perform a certain action only

What is the term for a non-human identity that is typically granted to a virtual machine, application, or service?
- Service account

What are two benefits of network segmentation? Select two answers.
- Allows issues to be handled more efficiently
- Reduces the network’s attack surface

What can cloud customers use to configure software-defined networking (SDN)?
- Their cloud provider’s console or an application programming interface

What is the purpose of a virtual private cloud (VPC)?
- It enables organizations to use the public cloud’s resources while being completely isolated from other cloud users.

An organization moves its network to the cloud. Their cloud service provider uses load balancing, which results in faster performance and prevents interruptions. Why does load balancing lead to this outcome? Select two answers.
- It ensures high availability of resources.
- It prevents servers from being overwhelmed with traffic.

An organization uses multi-factor authentication as part of its defense in depth strategy. What type of control is the organization using?
- Identity

What two factors affect customer and CSP responsibility levels under the shared responsibility model? Select two answers.
- Industry type and regulatory framework
- Workload and level of service

You work for a large organization that uses a variety of cloud services. How can you prevent vulnerabilities throughout your cloud assets?
- Consider how the different services’ security controls relate to each other.

What is the term for a model where the cloud service provider is involved in the customer’s security journey?
- Shared fate

An organization uses a software as a service (SaaS) email platform. What is the customer responsible for?
- Securing their content and access policies

An organization wants to migrate its IT infrastructure to the cloud while maintaining the most possible control over its workloads. Which cloud service model should the organization adopt?
- Infrastructure as a service (IaaS)

A team of 10 people in your organization need access to the same storage bucket to do their jobs. What is the safest, most efficient way to grant them access?
- Create a group for the team, then use an allow policy to give them access

A cloud security analyst is assigned to configure their organization’s software-defined network. What tools might the cloud security analyst use? Select two answers.
- An application programming interface (API)
- Their cloud provider’s console

Why is network segmentation important for security?
- It allows an organization to closely monitor and control network traffic.

A cloud security analyst wants to follow the principle of separation of duties by preventing a group of users from carrying out certain actions. What tool can the analyst use to achieve this?
- A deny policy

What is the term for a culture that consists of guidelines, best practices, and tools that cloud security teams can use to collaborate?
- DevSecOps

Why is an infinity loop a useful illustration for the DevSecOps lifecycle?
- Software is continuously monitored, tested, and released.

A software company transitions from a DevOps framework to a DevSecOps framework. What process might this change include?
- Conducting automatic security testing throughout the software development lifecycle

In the mid-2000s, the DevOps framework was developed. What two benefits did this framework provide? Select two answers.
- Software applications were monitored and tested continuously.
- Collaboration between developers and operations improved.

What process uses automation and tools to facilitate movement through each phase of the software development lifecycle?
- Software pipeline

A software company chooses to move from the waterfall method to a software pipeline. What are two likely results of this change? Select two answers.
- Developers will be able to modify an application’s code without disturbing other parts of the project.
- Seamless security scans will be enabled.

What security measure do organizations use as part of the CI/CD pipeline?
- Developers incorporate automated security tests through each phase of development.

Developers at a software company are creating and updating code. Next, the developers will upload the code into a shared repository. What phase of the CI/CD pipeline is taking place?
- Continuous integration

What is the purpose of the Supply-chain Levels for Software Artifacts (SLSA) framework?
- To provide standards for hardening an organization’s security posture

What is the term for a digital object, like a file or image, used in the software development lifecycle?
- An artifact

What is the term for the people, processes, and tools that play a role in software development?
- The software supply chain

An organization adopts the SLSA framework to improve their security posture. What new security practices might the organization start using? Select two answers.
- Examine any dependencies used in an artifact using security checks.
- Use a build platform that provides protection against tampering.

How would you change the location of the virtual machine in the Terraform file? Select two answers.
- Change the zone
- Change the region

In the Terraform code, what cloud resource does the first resource block create?
- The Virtual Private Cloud

You are preparing a presentation for Cymbal Bank's leadership that explains how IaC can improve the security of virtual machines. Which of the following statements should you include in the presentation? Select all that apply.
- Automation ensures developers consistently use the same configuration settings for provisioning infrastructure.
- IaC tools may offer the ability to scan the environment for configuration drift.
- IaC tools can help you detect invalid inputs in the build process.

In the Terraform code, what does the third resource block define? Select two answers.
- The zone of the virtual machine
- The virtual machine

A software company begins using infrastructure as code (IaC) to configure their cloud infrastructure. Which two benefits will the company experience? Select two answers.
- Decreased configuration drift
- Decreased risk of human error

How can using GitOps improve an organization’s security posture?
- It supports shifting left.

What practice includes provisioning and managing computing and storage resources using reusable scripts?
- Infrastructure as code (IaC)

A software company is considering implementing policy as code (PaC). How can PaC improve the organization’s compliance?
- Policies can be codified to automatically identify compliance violations.

Why was the DevSecOps framework developed?
- To reduce issues in software releases

A software company decides to move from developing software with the waterfall method to using a software pipeline. How will their software development lifecycle change as a result?
- The process will include more automation and tools.

An organization is using the CI/CD pipeline for software development. What will occur during the CD phase? Select two answers.
- Builds will be released to a staging environment.
- Builds will be deployed into a production environment.

A software company learns their product contains a vulnerability, and the security team suspects the issue was caused by a third-party dependency. What can the team consult to learn which dependencies are included in the product?
- The software bill of materials (SBOM)

An organization is confirming an artifact’s provenance in accordance with the SLSA framework. What two steps does this process include? Select two answers.
- Detailing how the artifact was built
- Documenting the artifact’s dependencies

As a cloud security analyst, you are using the declarative approach to configure IaC. What is this approach used to define?
- The system’s desired state

A software company creates an app that will collect and store sensitive user data. How can the organization use policy as code (PaC) to protect the data’s security?
- Configuring automated settings to check for compliance errors

An organization adapts the GitOps framework. What two processes might this change include? Select two answers.
- Using continuous integration as a method for submitting pull requests
- Using IaC as a core process for automation

As a cloud security analyst, you are assigned to choose the tools your organization will use in its software pipeline. What two goals can these tools achieve? Select two answers.
- Enabling modular testing
- Compiling and analyzing code

A software product is in the test stage of the CI/CD pipeline when a bug is found in the build’s code. What step will the pipeline take next?
- Stopping the process until developers fix the problem

An organization is developing a security budget. Which process can it use to assess and minimize potential threats to its computing assets?
- Information risk management

A cloud security analyst is monitoring cloud assets for security and compliance with best practices, regulations, and organization policy. What is this practice called?
- Cloud security posture management

What is the purpose of cloud security posture management tools?
- To serve as centralized places to find and analyze information about what’s going on in the cloud environment

What is threat intelligence used for? Select two answers.
- Stay ahead of potential attackers.
- Respond to security incidents.

How do cloud security analysts gather information about user actions, system activities, errors, and other security-related events in their organizations’ cloud environment?
- They use cloud logging tools.

A cloud security analyst is responsible for improving their organization’s security posture. What two things might the analyst do to achieve this goal? Select two answers.
- Decide which security products their organization chooses to use.
- Configure security products.

Unusual behavior is detected on an organization’s network. What is the first step a cloud security analyst should take in responding?
- Identify if the behavior is an actual event or a false positive.

What is the term for a security professional who designs and develops security controls and measures within an organization’s cloud infrastructure?
- A cloud security architect

A cloud security analyst is hired to join a team that detects and responds to cybersecurity incidents affecting an organization. What is the name of this team?
- Security Operations Center (SOC)

A software company is preparing to release a new product. The compliance department is focusing on making sure the product meets legal requirements, while the product department is most concerned with how easy the product will be to use. What skill can a cloud security analyst use in this situation?
- Balancing the needs of different stakeholders

A security analyst is preparing for an audit. What two tasks might be involved in this process? Select two answers.
- Identifying and fixing gaps
- Understanding audit requirements

A cloud security analyst has been assigned to create virtual machines in Google Cloud. What cloud shell command group can the analyst use?
- Compute

A cloud security analyst types the following code into the command line interface: gcloud compute networks create labnet --subnet-mode=custom What is the function of the word “labnet?”
- It is the name of the network.

A cloud security analyst is writing code to automate the provisioning of resources in their organization’s cloud infrastructure. What tool is the cloud security analyst using?
- Terraform

A cloud security analyst is training a colleague to use Cloud Shell. Which two tasks might the analyst teach their colleague to do with this tool? Select two answers.
- Create virtual private clouds (VPCs).
- Create storage buckets.

A cloud security analyst is reviewing identity and access management policies and testing security controls throughout their organization’s cloud infrastructure. What process is the analyst working on?
- Cloud security posture management

How can cloud security analysts keep up with the latest cyber threats?
- Reading blogs and reports published by security organizations

A cloud security analyst works for an organization that is subject to legal requirements. Which team will the analyst work closely with to ensure the organization’s cloud resources meet these legal requirements?
- Compliance

Why is it important for cloud security analysts to balance the needs of multiple stakeholders?
- Different stakeholders may have different security requirements.

A cloud security analyst is configuring a firewall to protect their organization’s cloud network. What is the firewall an example of?
- A security control

A cloud security analyst works for an online store that has been having issues with bots leaving spam reviews. What tool can the analyst use to address this problem?
- reCAPTCHA

A cloud security analyst is training a new coworker to use the Linux shell. What two tasks can the analyst train their coworker to do using this tool? Select two answers.
- Verify the status of applications in the infrastructure.
- Filter access to non-production IPs and ports.

A cloud security analyst is developing a script to perform tasks in their organization’s cloud environment. What tool is the analyst using?
- Cloud Shell

Your manager has asked you to build a production environment. How can you achieve this goal?
- Execute a Terraform script in Cloud Shell.

A cloud security analyst runs the command “gcloud compute networks create labnet” in Cloud Shell. What does this command do?
- Creates a new network with the name “labnet”

What is the goal of diffusion models?
- To learn the latent structure of a dataset by modeling the way in which data points diffuse through the latent space

What are some challenges of diffusion models?
- All of the above

Which process involves a model learning to remove noise from images?
- Reverse diffusion

What is the process of forward diffusion?
- Start with a clean image and add noise iteratively

What is the name of the model family that draws inspiration from physics and thermodynamics?
- Diffusion models

Flows are used to:
- Define conversational topics and the associated conversational paths.

You are building a virtual agent, and that virtual agent needs to determine what a customer is trying to achieve. What enables the virtual agent to determine customer goals?
- An Intent.

A virtual agent is:
- An AI version of a live call center or chat agent.

In Dialogflow CX, a list of all parameters you’d like to collect is referred to as a:
- Form.

Which Dialogflow CX feature is used to change response formats from text to buttons or Yes/No answers?
- Rich Response Messages.

What is a benefit of using Google’s translation hub, instead of a 3rd party vendor?
- 3rd party vendors are often expensive and slow.
- There are often legal implications when using 3rd party vendors.

The Translation API glossary is used to do what?
- Customize translations with domain-specific terms.

The Google Translation API provides translation to how many different languages?
- 100+

What translation advancement took place in 2018?
- Auto Machine learning could create a domain-specific customization of the model.

Health documents commonly need to be translated so that they can be accessible to multiple groups of constituents. Which is a common challenge of health document translation?
- A lack of language parity across documents.

In the Public Sector, there are often terms and words that need to be translated consistently in a specific way to preserve their meaning. What tool can you use in the Enterprise Translation Hub to achieve this?
- The glossary

Enterprise Translation Hub enables non-technical users to:
- Upload documents and translate those documents to a language of their choice.

In Enterprise Translation Hub, what are templates used for?
- Pre-defining commonly translated language presets.

How does Enterprise Translation Hub reduce the effort it would typically take to translate documents?
- Formatting is preserved, so you don’t have to reformat documents.

What abstraction is primarily used to administer user access in IAM ?
- Roles, an abstraction of job roles.

Which of the following is not a type of IAM role?
- Advanced

Which of the following is not a type of IAM member?
- Organization Account

Which Google Cloud data storage service offers ACID transactions and can scale globally?
- Cloud Spanner

Which data storage service provides data warehouse services for storing data but also offers an interactive SQL interface for querying the data?
- BigQuery

What data storage service might you select if you just needed to migrate a standard relational database running on a single machine in a datacenter to the cloud?
- Cloud SQL

A budget is set at $500 and an alert is set at 100%. What happens when the full amount is used?
- A notification email is sent to the Billing Administrator.

No resources in Google Cloud can be used without being associated with...
- A project.

How do quotas protect Google Cloud customers?
- By preventing uncontrolled consumption of resources.

What is the purpose of the Cloud Trace service?
- Reporting on latency as part of managing performance.

What is the foundational process at the base of Google's Site Reliability Engineering (SRE) ?
- Monitoring.

Google Cloud’s operations suite integrates several technologies, including monitoring, logging, error reporting, and debugging that are commonly implemented in other environments as separate solutions using separate products. What are key benefits of integration of these services?
- Reduces overhead, reduces noise, streamlines use, and fixes problems faster

A cloud security analyst works in the cloud application security domain. Which task is included in the analyst’s job description?
- Validating software security through testing

How can compliance build users’ trust in an organization?
- Demonstrating that a system meets the required level of security

What is the term for the process of applying regulatory or voluntary standards to meet contractual or third-party regulatory requirements?
- Compliance

A cloud security analyst is working to address virtual and physical security threats to their organization’s cloud system. What security domain is this task a part of?
- Cloud platform and infrastructure security

What is the term for the measure of how much a situation or circumstance affects the confidentiality, integrity, and availability of an asset?
- Risk

How are cloud compliance and risk related?
- Compliance certification proves that an organization is managing risks.

A cloud security analyst is implementing security controls to reduce risks. What two controls might the analyst be using? Select two answers.
- Two-factor authentication
- Data encryption

A cloud security analyst is working to determine their organization’s risk appetite for their cloud assets. How can the cloud security analyst achieve this goal?
- Determining the amount of risk the organization is willing to take on

How can attack path simulation help an organization choose the right preventative security controls for their cloud environment?
- Helping the organization identify where they could be attacked

A cloud security analyst is training a new colleague to use Security Command Center. What two tasks might the analyst be training their colleague to do? Select two answers.
- Assessing risks
- Identifying security vulnerabilities

An organization begins enforcing two-factor authentication and mandatory software updates, and removing access rights from users who no longer need them. What component of the PPT framework is the organization working to improve?
- Processes

How can an organization build a culture of compliance among its employees?
- Teaching employees procedures to use technology safely and effectively

A cloud security team selects and implements a new security control throughout their organization. Where can they communicate how the control relates to their organization’s risk management goals?
- In the team’s security plan document

An organization identifies a low-impact, low probability risk with one of its applications. What are two ways the organization can transfer the risk? Select two answers.
- Buying a cyber insurance policy
- Including the risk in the application’s terms of service

A cloud security team has identified a new security control for their organization to use. What step should the team take next?
- Develop an implementation plan

An organization installs code locks on its office doors. Only authorized employees are given the code. What type of security control are the locks?
- Physical

Which cloud security domain focuses on high-level security that aligns with an organization's objectives?
- Cloud concepts, architecture, and design

A software company demonstrates its alignment with industry standards by including a compliance notice on their website. What does this demonstrate to the organization’s customers?
- The organization meets a minimum standard of security.

A cloud security team uses two factor authentication to reduce the likelihood of an intruder accessing its cloud network. In this scenario, what is the two factor authentication an example of?
- A cloud security control

A cloud security team is working with their organization’s leadership to determine the maximum level of risk the organization can accept after security controls have been implemented. What is the term for this level of risk?
- Risk appetite

An organization purchases new antivirus software. What two strategies can the organization use to encourage staff to use the software correctly? Select two answers.
- Create compliant processes for using the software.
- Educate staff in using the software correctly.

A cloud security team is using Security Command Center to improve its security posture. What two tasks might the security team be working on? Select two answers.
- Detecting threats to cloud services
- Resolving web application vulnerabilities

A cloud security team is working to implement cloud security controls. What two goals can the team achieve using the controls? Select two answers.
- Safeguarding the cloud environment from vulnerabilities
- Meeting the organization’s compliance requirements

A cloud security team is deciding which cloud security controls to implement. What process can they use to identify the right controls for their organization?
- Threat modeling

A software company’s cloud security team has identified the security controls their organization’s cloud environment needs. What is the next task the team should complete?
- Develop an implementation plan.

A security team has identified a new security control their organization should implement, and the team is creating an implementation plan. What information should the security team include in the plan?
- Policies and procedures for applying the control

An organization uses a third-party system to process its customers’ credit card information. What framework can help the organization assess the third-party system’s security?
- SOC 2

An organization is using the NIST CSF to inform its new risk management plan. What two goals can this framework help the organization achieve? Select two answers.
- Decide where to focus their time and money for cybersecurity protection
- Understand their cybersecurity risks

What is the main goal of ISO 27001?
- To protect the confidentiality, integrity, and availability of information

What is the goal of risk management frameworks?
- To reduce risks to acceptable levels

Which framework is used to build trust and confidence for clients about a third-party service providers’ system?
- SOC 2

A software company is creating a new app, and the company wants to be sure it protects its users’ data privacy. What two protections can it include to achieve this goal? Select two answers.
- Informing users about how their personal information is used
- Letting users delete their personal information if they choose

Under the NIST Privacy Framework, what is the purpose of profiles?
- To help the organization achieve their desired privacy outcomes based on business needs

A cooking app is able to provide grocery store recommendations based on the users’ geographic location. When users log in to the app, they can choose whether or not to allow the app to access location information from their phone. What concept is this scenario an example of?
- Data privacy

What two goals was the NIST Privacy Framework developed to achieve? Select two answers.
- To create a common language for international cooperation on privacy
- To improve privacy risk management for an organization's data

An organization is deciding which industry-specific standards, rules, and requirements apply to their cloud resources. What two factors should the organization consider? Select two answers.
- The jurisdictions the organization operates in
- The type of data the organization works with

A United States-based app developer expands its operations and begins collecting data from users throughout the European Union. Which additional regulation will the organization need to comply with after this change?
- GDPR

What is the purpose of FedRAMP?
- To ensure compliance of third-party cloud services for government users handling sensitive data

A cloud security analyst provides consulting services to several organizations. Which two of the following organizations should the analyst advise to comply with FedRAMP? Select two answers.
- A healthcare app company that provides services to the federal government
- A government agency that collects protected health information

An employee of a healthcare organization accidentally modifies some user data in a cloud database. The employee is authorized to access the data, but not to change it. Which aspect of information security under ISO 27001 is affected by this event?
- Integrity

Who is responsible for enforcing Payment Card Industry Data Security Standard (PCI DSS) compliance?
- Payment card brands

A cloud security team is working to adhere to PCI DSS. They have identified all locations of cardholder data, and analyzed processes and IT assets for vulnerabilities that could expose the data. What two steps should they take next? Select two answers.
- Report the process to the bank and card brands they do business with
- Repair the identified vulnerabilities

A cloud security architect is preparing to use risk management frameworks. Why is the security architect using these frameworks? Select two answers.
- To reduce risks to an acceptable level.
- To improve security posture.

A cloud security team has been assigned to manage and reduce their organization’s cybersecurity risk, and to help leadership decide where to focus their cybersecurity budget. What tool can the cloud security team use to achieve these goals?
- The NIST Cybersecurity Framework

An organization plans to collect personal information and is investigating its compliance requirements. What two laws or regulations grant consumers certain rights regarding the use of their personal information? Select two answers.
- The General Data Protection Regulations, or GDPR
- The California Consumer Privacy Rights Act, or CPRA

A game developer includes settings that allow its customers to be in control of how and when their personal information is accessed and used. What practice are these settings an example of?
- Data privacy

An organization is developing a Profile using the NIST Privacy Framework. What is included in this task?
- Deciding which functions of the framework are the most important to their business

How can cybersecurity frameworks help organizations achieve compliance with privacy regulations?
- Suggesting controls organizations can use to protect data

A cloud security analyst is advising their clients in complying with applicable regulations. Which two clients should the analyst advise to comply with HIPAA? Select two answers.
- A health insurance company that serves residents in the U.S. state of Rhode Island
- An optometrist’s office that serves residents in the U.S. state of California

What is the purpose of the Federal Risk and Authorization Management Program (FedRAMP)?
- To ensure compliance of third-party cloud services for government users handling sensitive data

A cloud security team is working to ensure their organization meets compliance requirements. What two aspects of the organization should they consider? Select two answers.
- The organization’s geographic location
- What type of data the organization will work with

A cloud security team is auditing their organization’s adherence to PCI DSS. They have identified all locations of cardholder data. What step should they take next?
- Analyze processes and IT assets for vulnerabilities that could expose cardholder data

In the compliance report, which cloud resource is associated with the finding related to the control AC-6?
- cymbal-apps@appspot.gserviceaccount.com

In the compliance report, what is the severity of the finding related to the control IA-2?
- High

In the compliance report, which security controls have been identified as ineffective?
- CA-3, SC-7, IA-2, and AC-6

In the compliance report, which cloud resource(s) have been assigned public IP addresses? Select two answers.
- instance-2
- instance-1

In the compliance report, how many user accounts do not have multi-factor authentication (MFA) enabled?
- 5

A software company is implementing deterrent security controls. What two controls might the company be using? Select two answers.
- A company-wide policy stating consequences for misusing assets
- Passphrases to access company resources

What is a security guardrail?
- A broad rule that prevents an insecure action

An organization is applying security controls to a customer-facing application. What level are these security controls considered to be?
- Workload level

The developer of a user-facing app includes a piece of code that repairs damage after unauthorized activity and then notifies administrators of this action. What type of control is this an example of?
- Corrective controls

A cloud security team has been assigned to map security controls in their organization’s cloud environment. Which step should the team complete first?
- Identify the controls that already exist in their cloud infrastructure

An organization is preparing for its cloud environment to undergo an external audit. What two steps should the organization take as part of this process? Select two answers.
- Assess their cloud environment
- Test run an internal audit

How can an organization avoid spending too much time preparing for an audit?
- They should have processes in place that align with audit standards.

What information is assessed in a cloud audit?
- How well the organization’s security controls meet compliance requirements

An organization is planning to undergo a security assessment of its cloud environment. What will this process consist of?
- An automated scan to ensure that controls are in place as intended

How can an organization demonstrate to auditors that standards have been met?
- Prepare reports on existing security controls

How do cloud hierarchies help security teams put controls in place efficiently?
- Controls set at a higher level cascade down to lower levels.

What is the term for a security control supplied by a cloud service provider?
- An inherited control

A cloud security team is setting policies in its Google Cloud environment. At which hierarchy level should the team set company-wide controls?
- Organization

How can an organization maximize the benefit of cloud vendor inherited controls?
- Adapt the controls to fit business needs

Which two external entities may require an organization’s cloud environment to adhere to certain standards? Select two answers.
- One of the organization’s customers
- A regulator in the organization’s state

Which policy focuses on granting or denying privileges to users?
- Access Control

Using threat intelligence feeds to assist in the analysis of risk is an example of which control?
- Risk Assessment

What are some examples of changes that could be made to improve the Identification and Authentication policy? Select two answers.
- Require a minimum password length.
- Require multi-factor authentication (MFA) for all users.

Fill in the blank: The _____ control focuses on establishing security education policies and procedures.
- Awareness and Training

A cloud security analyst is using a programming language to write automated compliance checks against their organization’s cloud infrastructure. What is the term for this process?
- Policy as code (PaC)

A healthcare provider operating in the United States fails to comply with HIPAA standards. How might reputational risk affect this healthcare provider?
- Customers may lose trust in the provider.

A cloud security team begins using a policy as code approach in their organization’s cloud environment. What two benefits will the company receive from this change? Select two answers.
- It will be easier for stakeholders to track policies.
- Policies will be enforced more accurately.

A cloud security team is using a step-by-step process to ensure their organization’s resources align with frameworks, industry standards, and internal organizational systems to support their business goals. What is the term for this process?
- Compliance lifecycle

An app includes a piece of code that repairs damage after unwanted or unauthorized activity and then notifies administrators of this action. What is the term for this type of security control?
- A corrective control

A security team is using a spreadsheet to map controls. They have chosen control titles, domain categories, and descriptions to identify related controls. What two steps should they take next? Select two answers.
- Conduct an inventory of all assets.
- Group controls by type of asset.

An organization hires a third party to assess their cloud environment for alignment with security benchmarks. What is the term for this process?
- A cloud security audit

An organization is preparing for a cloud security audit. Which two security controls should they check for compliance with audit standards? Select two answers.
- Access control
- Network segregation

An organization is moving its IT infrastructure to the cloud and has chosen a cloud service provider. How can the organization get the most benefit from the cloud service provider’s security controls?
- Map the controls to compliance frameworks.

An organization wants to apply different cloud security controls for each of its departments. How can the organization most efficiently achieve this goal?
- Create folders for each department, then set controls at the folder level.

An organization that processes private health information is found to be in violation of HIPAA. The incident is publicized, and the organization loses customers. What type of risk is this scenario an example of?
- Reputational

How can using policy as code (PaC) help to simplify collaboration?
- It helps to ensure consistency between different departments or teams.

A security control applies to storage, computing, and networking. At what level is the security control used?
- Service

What is the purpose of the Open Web Application Security Project (OWASP®) Top Ten? Select two answers.
- To guide security testing efforts
- To minimize vulnerabilities in cloud environments

A cybersecurity analyst frequently uses a Common Vulnerability Enumeration (CVE®) identifier while discussing software vulnerabilities. What is the primary purpose of using a CVE® identifier?
- To streamline communication and sharing of vulnerability information

Neha is a security engineer. As part of her work, she has to frequently consult the Open Web Application Security Project (OWASP®) Top Ten report. What information does the OWASP® Top Ten report have that Neha needs to refer to?
- A list of crucial security threats for web applications

Cybersecurity specialists often refer to the National Vulnerability Database (NVD). What is the NVD?
- A public repository of system and software vulnerabilities

What are the two main built-in services the Security Command Center (SCC) uses to scan for vulnerabilities?
- Security Health Analytics and Web Security Scanner

What is one of the primary functions of Cloud Security Posture Management (CSPM) tools?
- Scan cloud assets and alert security teams of potential issues.

A chief technology officer (CTO) relies on a multicloud environment for their company’s operations. The CTO considers implementing Cloud Security Posture Management (CSPM) tools. What would be the primary role of these tools in the company's multicloud environment? Select two answers.
- Enhance the security within the company's environment
- Provide guidance to ensure compliance with standards

What is the primary purpose of a multicloud environment?
- To use more than one cloud service provider

A security professional wants to purchase cyber insurance. Which tool would they use as part of the cyber insurance purchasing process?
- Risk Manager

What are Google Cloud's default settings for data encryption? Select two answers.
- At rest
- In transit

An international organization needs to comply with regulations requiring data to be stored within specific geographic locations. How does Assured Workloads help the organization comply with these data residency controls?
- Assured Workloads automatically restricts data storage to the designated regions.

Which states of data does Assured Workloads control? Select two answers.
- In use
- At rest

A company purchases cyber insurance. Months later, during a cyber attack, the company's servers shut down. How does cyber insurance help the company? Select two answers.
- It can cover financial losses.
- It can assist in retrieving data.

Jennifer, the head of IT, considers implementing the shared fate model for better cloud security. What is Jennifer’s main goal for the IT team when adopting this model?
- Manage risks by fostering collaboration between the IT team and their CSP

A company recently started using cloud services. In the shared responsibility model, who is responsible for securing the company’s resources in the cloud?
- The company and its team

What report does an organization need to join the Risk Protection Program?
- Risk Manager Report

A cloud security professional creates a default service account. What role includes a large number of permissions and can pose a security risk if an account is compromised?
- Editor role

A cloud security professional wants to implement a domain restricted sharing constraint in the Organization Policy Service. What will this constraint limit in the company's cloud resources?
- The identities for use in Identity and Access Management policies

What purpose does a list constraint serve in the context of data residency requirements?
- It specifies a set of locations where cloud resources can be created.

A cloud security professional is setting up organizational policies for different project resources. What do tags help cloud security professionals do when setting up organizational policies? Select two answers.
- Define groups of resources
- Assign constraints to all resources in a group

What does the Open Web Application Security Project (OWASP) create?
- Guidelines and frameworks for securing software

An IT director implements a multicloud strategy. What benefit does this strategy offer?
- It optimizes the strengths of various cloud providers.

A security lead considers adopting Prisma Cloud to improve their company's remediation process. How would Prisma Cloud help with remediation?
- By verifying the availability of patches for identified vulnerabilities

A cybersecurity analyst needs to find a service in Google Cloud's Security Command Center (SCC) to protect against DDoS and common OWASP attacks. Which service should they use?
- Cloud Armor

Juan is a cloud security professional at a company that transitioned to the Google Cloud platform. Juan needs to maintain a strong security posture within the new cloud environment. How can Google Cloud's Policy Analyzer help Juan meet his goal? Select two answers.
- It can help him review the company's Identity and Access Management (IAM) policies.
- It can help him set permissions so that he has least privilege access.

An IT officer uses Assured Workloads to help manage their Google Cloud security and compliance requirements. With these tools, how does the IT officer implement necessary controls?
- They allow for automatic application per compliance.

Maria works as an underwriter for a cyber insurance company. What is Maria's responsibility in her role?
- To price an insurance policy

Anna is the IT manager at an organization that prefers on-premises computing. In this setting, who is responsible for securing the infrastructure?
- The organization’s security team

A cloud architect sets up organizational policies for a company's cloud resources. They come across the term "Boolean constraint." What does this term mean in cloud organizational policies?
- A constraint that is either enforced or not enforced

A cloud security manager turns on the "disable automatic role grants to default service accounts" constraint. What scenario does this constraint prevent?
- It prevents the default service accounts from automatically receiving the Editor role.

Which Google Cloud Interconnect service requires a connection in a Google Cloud colocation facility and provides 10 Gbps per link?
- Dedicated Interconnect

If you cannot meet Google’s peering requirements, which network connection service should you choose to connect to Google Workspace and YouTube?
- Carrier Peering

What is the purpose of Virtual Private Networking (VPN)?
- To enable a secure communication method (a tunnel) to connect two trusted environments through an untrusted environment, such as the Internet.

Which of the following approaches to multi-project networking, uses a centralized network administration model?
- Shared VPC

Which three Google Cloud load balancing services support IPv6 clients?
- SSL proxy load balancing
- TCP proxy load balancing
- HTTP(S) load balancing

Which of the following are applicable autoscaling policies for managed instance groups?
- CPU utilization
- Monitoring metrics
- Queue-based workload
- Load balancing capacity

Which of the following is not a Google Cloud load balancing service?
- Hardware-defined load balancing

What’s the benefit of writing templates for your Terraform configuration?
- Allows you to abstract part of your configuration into individual building blocks that you can reuse

What does Google Cloud Marketplace offer?
- Production-grade solutions from third-party vendors who have already created their own deployment configurations based on Terraform

Which of the following is a feature of Dataproc?
- It typically takes less than 90 seconds to start a cluster.

How are Managed Services useful?
- Managed Services may be an alternative to creating and managing infrastructure solutions.

What type of data does a cloud professional work with when preparing storage for their company's email server?
- Semi-structured

A company uses a data-storage system that holds its organizational data, including all proprietary information, and data used to maintain compliance. Where would this data be stored within a data storage area?
- The data would be stored in the systems of record.

A database administrator is managing a database for a hospital. They want to create a relationship between the patients table and the appointments table so that the medical staff can easily find all of the appointments scheduled for a particular patient. Which type of key will the database administrator need to connect the information in the tables?
- A foreign key

A cloud professional accesses data contained in a subject-oriented database that is a subset of larger data storage. What type of data storage tool has the cloud professional used?
- A data mart

A data scientist is working on a project to predict customer churn. They want to combine data from the customers table, the orders table, and the subscriptions table to get a complete picture of each customer's relationship with the company. Which type of key would the data scientist use to connect these tables?
- A foreign key

What data type in BigQuery is used to store any sequence of text characters?
- Strings

A data analyst at a retail company is developing a new data model for the company's product catalog. The data model will need to represent the hierarchical relationship between product categories and products. Which of the following data structures would be most appropriate for the data model?
- Nested array

A data engineer is designing a new database schema for a system that will store and process customer data. The customer data will include the customer's name, address, phone number, and email address. Which data type is appropriate for the column that will store the customer data?
- Struct

A data analyst at a retail company is developing a new data warehouse to store product data. The data warehouse will need to store a list of products that the company sells, and each product’s name, description, and price. Which data type is appropriate for the column that will store the list of products?
- Array

A data analyst at a retail company is developing a new data warehouse to store and analyze data from the company's website and point-of-sale systems. The analyst is responsible for choosing the right data types for the columns in the data warehouse tables. Which data type is appropriate for the column that stores the product prices?
- Float

A data engineer at a financial services company is designing a new system to detect fraudulent transactions. The system will need to process a large transfer of real-time transaction data. Which type of data processing would be most appropriate for the new system?
- Streaming

A data team at a social media company is developing a new dashboard to track user engagement. The dashboard will use streaming processing. Why does the data team choose to use streaming processing?
- It is well-suited for processing data from a variety of sources.

A data engineer at a gaming company is designing a new system to process real-time player data, such as player location, inventory, and a player's progress on their current quests. Which of the following data processing methods would be most appropriate for the new system?
- Streaming

A data analyst at a retail company is developing a new data warehouse to store and process data from the company's website and point-of-sale systems. The data warehouse will need to store a large amount of historical data, such as customer purchase history and product sales data. Which type of data processing would be most appropriate for the data warehouse?
- Batch

A data scientist at a healthcare company is developing a new machine learning model to predict patient churn. The model will be trained on a dataset of historical patient data, such as patient demographics and medical history. Which type of data processing would be most appropriate for this project?
- Batch

A data analyst needs to confirm that their organization is correctly storing data. To do that, they check the link formed between a data source and its storage location. What is the term for this link?
- Data connection

A data analyst for a retail company needs to store data on customer demographics, purchase history, and product preferences. This data is highly structured and needs to be accessible to employees in different departments. Which type of data storage would be most appropriate for this scenario?
- Relational database

A retailer keeps data within a pair of tables. A customer table contains customer name, customer ID, and address. A purchase table contains the order number, product ID, and quantity purchased. A data analyst is asked to identify which products each customer purchased. Which type of key should the data analyst create between the tables?
- Foreign key

A scientific research organization needs to store and analyze data from a variety of sources, including scientific experiments, sensor readings, and satellite imagery. This data is highly complex and needs to be accessible to researchers from many disciplines. Which of the following data architecture types is best suited for this scenario?
- Data lakehouse

A data analyst is creating a column in a data table to record shipping duration for orders. Which of the following data types should the analyst use for this information?
- DATETIME

A software engineer creates columns in BigQuery to store multiple values of the same data type in the same column. What column type is this an example of?
- Arrays

A data analyst encounters a group of columns in a data structure that each contain one important piece of information about a customer's address. The analyst wants to organize this data together so that it is easier to find and query. Which data structure should the data analyst use to organize the data?
- Struct

A data analyst is organizing customer addresses. The analyst groups the address, city, state, and postal code columns together within a single column. Which nested data structure is this an example of?
- STRUCT

You are a data engineer at a social media company. You need to develop a system that can process the constant stream of user data that is generated by the company's website and mobile app. Which data processing method would be most appropriate?
- Streaming data processing

A data analyst working with a new dataset needs to select the correct data format. Which factors should they consider when selecting the right data format?
- Integration capabilities

A data professional is working on a new report that needs to include the total activity time for each customer browsing a specific website. The report needs to be updated in near real time, so the data professional needs to use a denormalized data modeling technique. Which of the following denormalization techniques would be most appropriate for the report?
- Creating summary tables

Which of the following denormalization techniques is best for creating a report that can store count totals?
- Creating summary tables

Which of the following data modeling techniques makes it easier for data professionals to avoid duplicate data and inconsistencies, and apply updates?
- Normalized data modeling

A data analyst is working on a new project to develop a system to detect fraudulent transactions quickly. The system will need to process a large stream of transaction data, such as customer ID, product ID, purchase amount, and purchase time. Which of the following data modeling techniques would be most appropriate for this detection system?
- Denormalized data modeling

How can an organization following a data governance plan achieve data integrity and accuracy throughout the data lifecycle?
- By implementing data quality controls and validation processes

An interdepartmental team is developing their organization’s data governance plan. The team is establishing the policies, practices, and protocols to handle personally identifiable information (PII). What essential element of the data governance plan is this topic part of?
- Data privacy and security

A data team working in an organization that uses master data management (MDM) is in the process of cleaning their data. What component of the MDM framework does the cleaning process belong to?
- Data quality management

An organization is implementing data governance. What is the first step to help them start the implementation?
- Set clear goals and objectives

What is a benefit of implementing Master Data Management (MDM)?
- MDM creates a single source of truth.

What do data catalogs do to facilitate data governance?
- Data catalogs establish policies, controls, and guidelines for data use, security, and privacy.

A data analyst for a sports team is tasked with updating career profiles for each player. The career profiles already have text descriptions. As a next step, the analyst will use a data catalog to add images, news articles, and video clips to the career profiles. They have access to a data catalog with structured data, unstructured data, reports, dashboards, visualizations, and automations. Which element of the data catalog will help the data analyst add images, articles, and video clips to each profile?
- The unstructured data

A software engineer is developing a data warehouse for their company. The engineer needs to store and manage a large volume of data from different sources, including customer data, product data, and financial data. The data needs to be easily accessible and searchable, and meet the needs of different users in the company. What type of metadata would be most important for this task?
- Technical metadata

A marketing team at a retail company has a massive dataset of customer data. To help them work with this data, they decide to use a data catalog. What is the benefit of using a data catalog for the marketing team?
- It provides a comprehensive view of available data, enabling the team to discover, understand, and use data assets.

A music streaming service wants to improve its recommendations engine. The company's data analysts decide to work with song metadata, which includes information such as the song title, artist, genre, tempo, and mood. Why might the analysts work with song metadata to improve the recommendations engine?
- It is helpful for identifying users who are likely to enjoy a particular song.

What are the benefits of using a data lakehouse architecture? Select two answers.
- Scalability and flexibility
- Accessibility and organization

A data engineer at a retail company has access to large amounts of data, including structured data and unstructured data. The engineer needs to design a data architecture that will allow them to store, process, and analyze all of this data in a scalable and flexible manner. Which of the following data architectures should they use?
- Data lakehouse architecture

An e-commerce company is generating a large volume of data from its website and mobile app, including product reviews, customer transactions, and social media posts. The company needs to design a data architecture that will allow them to store, process, and analyze all of this data in their native formats. Which of the following data architectures meets the company's needs?
- Data lakehouse architecture

What are the two types of data architectures that data lakehouse architecture combines?
- Data warehouses and data lakes

A data professional is building a new data lakehouse architecture for their organization’s structured, semi-structured, and unstructured data. Which layer of the architecture is responsible for ensuring data integrity, privacy, and compliance?
- Metadata layer

You are a data analyst for a company that sells products online. You need to create a database to store customer information. Which of the following would be a good way to denormalize the data?
- Add a column to the customer table for each product purchased.

With the support of organizational leaders, a data governance manager and the data governance team initiate a data governance plan. What should be the manager's next goal?
- To automate and streamline data management processes

A data scientist is working on a new data governance initiative to improve the accuracy and reliability of their company's customer data. The data scientist has identified several data quality issues that need to be addressed. What is an effective step to address these issues?
- Implement a data quality management program

A data analyst at a construction company is tasked with improving efficiency. Their goal is to identify and implement ways to reduce the amount of time spent on data management tasks. Which of the following actions will directly increase operational efficiency?
- Automate data processes

You are a data analyst for a sports team. You need to find all of the data you have on player performance. Where would you search for the data first?
- Data catalog

You are a data engineer working on a project to migrate your company's data to a new cloud-based platform. You need to create a technical metadata catalog to help you manage the data migration process. Which of the following is an example of technical metadata?
- Data structure

You are a data scientist building a machine learning model. You need to provide a single place to store all of your data, making it easy to access for machine learning models. Which of the following data storage solutions offers sufficient access to the data?
- Data lakehouse

You are working on a data lakehouse project and need to extract data from a variety of sources. To do that, you begin the ETL process. Which of the following actions will you take with the data in the first step of the ETL process?
- Import and consolidate structured and unstructured data

A data analyst is working on a data lakehouse project. Which layer of the data lakehouse architecture would they use to ensure that the data is governed and managed effectively?
- Metadata layer

Which layer of a data lakehouse architecture is responsible for ensuring data integrity, privacy, and compliance?
- Metadata layer

A cloud data analyst is working with several data sources. They encounter problems with compatibility, integration, and understanding the data. What is the reason for the problem?
- The data sources are in different formats.

A cloud data analyst is tracking the lineage of a data source. What is the cloud data analyst’s goal?
- To have a better understanding of the context surrounding the data.

A cloud data analyst is working to understand the lifecycle movement of a data source and how the data source has transformed over time. Why is the cloud data analyst doing this?
- To verify the integrity of the data source.

A cloud data analyst is using Analytics Hub. They find a dataset that they can use in their project. They subscribe to the dataset. What is the term for the version of the dataset that the cloud data analyst received?
- Linked dataset

A cloud data analyst is tasked with solving an analytic problem. They decide to use the Analytics Hub platform as a subscriber. Why is the cloud data analyst using Analytics Hub?
- To search for datasets that they can use in their project.

An organization wants to share their environmental data. They are considering using Analytics Hub to do so. What is a shared dataset limitation of Analytics Hub they should be aware of?
- There is a limit of 1,000 linked datasets to a shared dataset.

Which of the following are types of users in Analytics Hub platform? Select two answers.
- Viewer
- Publisher

A cloud data analyst is working on a project, and they need more information about a dataset. Using cloud tools, what can the analyst do to identify the context surrounding a dataset?
- Examine the metadata

A data team is identifying the context surrounding a dataset. They want to understand the source of the dataset to ensure reliability and accuracy. What Google cloud tool can help the data team achieve this goal?
- Google Dataplex

A data team is in the process of finding and understanding data assets. What does the team need for this process to work well?
- The right tools and an understanding of the business goal

An organization considers moving their data management and analysis processes to the cloud. Their data volume changes depending on the time of year. They have more data during the winter than during the spring. What advantage of the cloud can help the organization efficiently manage their resources for data discovery, curation, and unification?
- Scalability

A data professional is using BigQuery to make the process of data exploration more efficient. How does BigQuery do this?
- Enables users to search for specific data within datasets.

A data professional is working on a project. One of their data sources is from a steady flow of live data collected and processed in near real-time. What form of data source is the data professional using?
- Streaming platforms

A cloud data analyst is working on a data project. They want to ensure the integrity of their data source. What can the data analyst do to have confidence in the data source's integrity?
- The cloud data analyst can trace the data source's origin and lifecycle movement.

What is the main purpose of BigQuery Analytics Hub?
- To connect those who create datasets with those who need datasets.

A data driven retail organization decides to make their data available to other organizations. As part of the process, they publish a collection of their data to Analytics Hub. What is this collection of data, tables, and views called in Analytics Hub?
- Shared datasets

A data professional is working with Analytics Hub. They are creating and giving access permission to data exchanges. What type of Analytics Hub user is the data professional?
- Administrator

A data team is working on a data project using a set process. They are in the step of finding and identifying relevant patterns and relationships in the datasets. What process is the data team performing?
- Data discovery

A data team wants to move their data operation to the cloud. They want to offer the members of their team the option of remote work some days of the week. What cloud advantage will help them to achieve this?
- Access

A data team wants to accelerate their data management and analysis workflows. They consider moving their data operations to the cloud. What cloud advantage will allow them to achieve their goal?
- Automation

What Google cloud tool provides a centralized hub where users can explore, catalog, and manage data assets?
- Google Dataplex

A data team is using the BigQuery auto detection option to create a table. After Big Query finishes assigning the data types, what should be the next step for the data team?
- Check the accuracy of each field data type.

An organization revamps its cloud data team, hires new staff, and changes their data analysis tools. A cloud data analyst on the team reuses a SQL script to refresh a data report. The SQL script includes a group of SQL commands, and some of these commands are not working properly. Why are the SQL commands not working properly?
- The new data analysis tools use a different SQL dialect.

A cloud data analyst is creating a SQL statement. They want to SELECT some columns from a table, but only if a condition is met. What SQL command should they use to establish the condition?
- <span style="background-color:#cccccc;"><strong>WHERE</strong></span>

A cloud data analyst is creating a SQL statement. They want to sort the data resulting from the SQL statement in descending order. What SQL command will allow the cloud data analyst to order the results in descending order?
- <span style="background-color:#cccccc;"><strong>DESC</strong></span>

A data team is tasked with a data project. The team is in the process of compiling the data. What does the data team need to organize the data in a structured way?
- A database schema

A cloud data analyst is working on a machine learning (ML) model. They request access to an external organization’s data source. The external organization grants access to the data source, and the cloud data analyst uses a code library from a building tool as an interface to access the data. What type of interface did the cloud data analyst use to access the data?
- Software development kit

A data team is working on a project. They need a solution that allows the team to access and work on the same Python notebook and write comments. They also need an environment that connects to most libraries, runs complex code, and doesn’t require a high-performance computer. What Google tool could the team use to meet these requirements?
- Google Colab

A cloud data analyst is tasked with creating a machine learning (ML) model. As a part of the process, they need to select a model they will use to analyze the data. What are two of the common types of models that the analyst can create with machine learning? Select two answers.
- Linear regression
- Classification

A cloud data analyst is working with Vertex AI. The cloud data analyst’s team develops a pipeline for the data. What is the next step that the team needs to complete before the machine learning process begins?
- Automate hyperparameter tuning

A cloud data analyst is working with a large amount of data from one source. They find that the data size is growing and becoming difficult to manage. To improve scalability, they decide to divide the data into separate segments stored across different database instances. What technique is the cloud data analyst applying?
- Database partitioning

A cloud data analyst is working with a table. In order to improve their query performance, they decide to sort the table based on the value of the DATE column. What is the cloud data analyst doing?
- Clustering the table

A cloud data analyst is working with a partitioned database. The database has an uneven distribution of traffic due to a surge of data. What should the cloud data analyst do to address this problem?
- Rebalance the partitions

A cloud data analyst is dividing a database. They divide the database into segments stored in separate databases in which each partition follows the same organizational layout. What is this process called?
- Horizontal partitioning

A cloud data analyst is partitioning a table. They do this by setting a partition for each month of the year based on a column in the table. What type of table partitioning is the cloud data analyst using?
- Time-unit column

A cloud data analyst is working with a partitioned table. They are designing and implementing their partition pruning strategies. What are two best practices for partition pruning the cloud data analyst should consider? Select two answers.
- Use a constant filter expression.
- Isolate the partition column in the filter.

A cloud data analyst is working on a partitioned table. They use a process called partition pruning. What is the cloud data analyst doing?
- Querying only in the partitions that have relevant information.

A cloud data analyst is creating a query to prune a table. The table is partitioned by a time-unit column. What column is the cloud data analyst using to filter the unnecessary partitions?
- The partitioning column

A data team is planning to integrate Dataproc into their workflows. What are the benefits of this integration? Select two answers.
- Lower cost
- Faster processing

A data team is planning to use Dataproc to manage a Spark process. What are two of the processes they can automate using this software combination? Select two answers.
- Querying data
- Streaming data

A cloud data analyst is working with a large dataset. They decided to use Dataproc. What two software platforms should they use for the best results? Select two answers.
- Hadoop
- Spark

A data team is creating a database schema for a project. They decide to use the auto-detect schema option in BigQuery. How is the field type established with the auto-detect schema?
- By scanning a representative sample of the data in each field

A cloud data analyst constructs the following SQL statement: SELECT Product_ID, name, price, stock FROM products WHERE Price > 1 and <10 ORDER BY Price Which part of the statement sorts the results in ascending order?
- ORDER BY

A cloud data team is working with machine learning. They are trying to teach the system to establish a pattern for recommending products to customers based on customer preference. What type of model is the cloud data team using in their machine learning algorithm?
- Ranking

A cloud data analyst is using database partitioning to help improve performance. How does database partitioning help the cloud data analyst achieve this?
- By allowing the system to query a smaller part of the database

A data team is partitioning a database. They divide the data using the customer_ID column. The database partitions will follow the same organizational layout and will be a unique piece of the whole dataset. What partitioning strategy is the data team using?
- Horizontal

A cloud data analyst is partitioning a table. What are two common reasons for the cloud data analyst to partition the table? Select two answers.
- The cloud data analyst needs to delete specific partitions without scanning an entire table.
- The cloud data analyst’s table operation exceeds the expected volume of data.

A cloud data analyst is working with a table that is arranged in storage blocks. What type of table is the cloud data analyst using?
- Clustered table

A cloud data analyst is pruning a table using a specific range of the transaction number. What technique did the cloud data analyst use to partition the table?
- Integer-range

A cloud data analyst is constructing a SQL statement. In the statement, they need to filter the data to display only the products whose stock is less than 10 units. What general SQL syntax will the cloud data use to include this condition in their SQL statement?
- WHERE stock is < 10

A data team is tasked with a machine learning project. What does the data team do in a machine learning project?
- The data team develops algorithms and statistical models.

A cloud data analyst is gathering all the data they need for a data project. Next, they need to bring the data together and get it ready for processing. In which step of the data collection stage is the cloud data analyst working?
- Data staging

In cloud data analysis, what is the term for the process in which the data that can be used to meet a specific business need is identified, found, and brought together?
- Data collection

A cloud data analyst is working in one of the stages of the data journey. They are presenting visualizations to stakeholders. In which stage of the data journey is the cloud data analyst working?
- Activate

A cloud data analyst is working in the fourth stage of the data journey process. What is a task they perform in this stage?
- Identify trends

A cloud data analyst is working on a data project. As part of the process, they need to transform a large dataset. The cloud data analyst needs to get the results in near real time. What should the cloud data analyst use to transform the data?
- An automated transformation tool

A cloud data analyst is transforming data with SQL. What type of data transformation are they using?
- Manual transformation

A cloud data analyst is working on a data project. As part of the process, they convert the data into a usable format. What is the goal of this data transformation?
- To provide data that can be accessed and used

A cloud data analyst begins a new project. They are following the data journey process and are in the transformation stage. What issues can the data have that the cloud data analyst will need to fix? Select two answers.
- The data is duplicated.
- The data is incomplete.

Why is it important to understand and use the data journey process when analyzing data?
- To have a structured way to collect and prepare data for analysis and data-driven decision-making.

A cloud data analyst is working on the last stage of the data journey process. What does the cloud data analyst do in this stage?
- Present the results to the stakeholders

A cloud data analyst following the data journey process is in the collect stage. They are working on finding the data and bringing it together. What step of the collect stage is the cloud data analyst working in?
- Data discovery

What is the term for the area where the data is gathered during the collect stage of the data journey?
- Staging area

A cloud data analyst is working on a data project. They begin the stage when they will identify trends and patterns. Which step did they complete before reaching this stage?
- Store

What is the process of taking raw data and converting it into a usable format called?
- Data transformation

A cloud data analyst is tasked with a data project. They are following the data journey. As a part of the process, they use data smoothing when working with the data. What is the cloud data analyst doing?
- Transforming data

A cloud data analyst is transforming data using only a coding language. Which type of data transformation is the cloud data analyst using?
- Manual transformation

Which type of transformation is best for large or high velocity datasets?
- Automated transformation

A cloud data analyst is creating an automated pipeline to transform a dataset. They use a processing tool, but they also need to do some modifications by coding. Which method of transformation are they using?
- A combination of transformation methods

A cloud data analyst is tasked with creating a pipeline to solve a data problem. Based on the characteristics of the problem, they choose an ELT pipeline. What are two reasons why the cloud data analyst chose the ELT pipeline over the ETL pipeline? Select two answers.
- They need to have flexibility to transform the data as needed.
- The data needs to be tracked as soon as it is available.

What are two key benefits of a data pipeline? Select two answers.
- Automates the processes of extract, load, and transform
- Helps organizations save time and resources

A cloud data analyst is solving a data problem. After careful consideration, they decide to create an ELT pipeline. What process illustrates the correct sequence for an ELT pipeline?
- Extract the data from the company databases and the smart sensors around the company, load the data into the destination system, and then clean and format the data.

A cloud data analyst is solving a data problem using a pipeline. As part of the process, they move the data into a temporary staging area. In what stage of the data pipeline is the cloud data analyst working?
- Extract

In which stage of a data pipeline does a cloud data analyst check the data for duplicate entries or obvious errors?
- Transform stage

A cloud data analyst is creating a data pipeline. As a part of the process, they are mapping the data. What does the cloud data analyst do when mapping data?
- Match the fields between data sources.

A cloud data analyst is in the process of mapping their data. As a part of the process, they identify the fields that need to be mapped and standardize the fields names. What is the next step that the cloud data analyst should do?
- Create the data mapping rules.

A cloud data analyst is designing a data pipeline. They are in the extract stage and are deciding which ingestion technique to use. What is a key factor in the decision?
- If the data is time sensitive

A cloud data analyst is designing the first step in a data pipeline. They decide to use batch ingestion. Why does the cloud data analyst choose batch ingestion over streaming ingestion? Select two answers.
- The data is not critical.
- They want lower costs.

How does data mapping help improve data quality?
- By ensuring that the data is standardized and consistent.

A cloud data analyst is analyzing a dataset. As part of the process, they find the names and types of the 8 dataset columns. They also identify that the data has duplicate records and some of the data in one of the columns does not follow the same format. Which data process is the cloud data analyst using?
- Data profiling

What is the term for the manipulation technique that changes the format of data to improve compatibility?
- Data conversion

A cloud data analyst is analyzing a dataset. As part of the process, they identify duplicate records, inconsistencies in the data format, and missing values. What should the cloud data analyst do next?
- Clean the data

A cloud data analyst is working with a data project. They decide they need to enrich the dataset to obtain more valuable information. What can the cloud data analyst do to enrich the dataset? Select two answers.
- Join the data with other data sources
- Add new fields to the data

A cloud data analyst is working with a dataset. They notice that the fields containing dates do not follow the same format, and they find format inconsistencies in a few other fields. What manipulation technique can the cloud data analyst use to fix these format issues?
- Data standardization

A cloud data analyst is ready to start the loading phase of their pipeline. As a next step, they need to prepare the storage to receive the data. What is an action they should perform before starting to load the data?
- Create new tables and/or directories.

A cloud data analyst validating data, checks the uniqueness of the data. What validation technique are they using?
- Duplicate validation

A cloud data analyst is using batch load to load the data into their final destination. What could be a consequence of this type of load?
- Overload of the destination storage.

A cloud data analyst is validating a dataset. They find errors in the data. What are two validation rules that the cloud data analyst can use to handle these errors? Select two answers.
- Flag the data.
- Discard the data.

A data pipeline has three main processes. When working with data, how should a cloud data analyst follow these processes?
- The analyst should tailor the processes for each data problem.

What does the “E” stand for in the ETL pipeline technique?
- Extract

A cloud data analyst is designing a pipeline. They are working on a design for the ingestion process. What do they decide in this process?
- They decide which technique they will use to move the data sources to the staging area.

A cloud data analyst is designing a data pipeline. As the first step, they plan to collect the data over a period of time and move it to the staging area in groups. What technique is the cloud data analyst using?
- Batch ingestion

A cloud data analyst is creating a data pipeline. As the next step, they identify fields, standardize names, and create rules to convert some fields. What is the cloud data analyst doing?
- Mapping the data

A cloud data analyst is working on a data project. As the next step, they need to identify if the data contains missing values, duplicate records, inconsistent data formats, or a combination of these issues. What process will help the cloud data analyst identify these issues?
- Data profiling

A cloud data analyst is working with a dataset that has many errors. What can the cloud data analyst do to speed up the data cleaning process?
- Manipulate the data

A data analyst is in the loading stage of the data pipeline. They decide to load the data as soon as it becomes available. What type of loading is the cloud data analyst using?
- Streaming

What is the term for the process of checking the quality of data to verify that it is complete, accurate, secure, and consistent?
- Data validation

A cloud data analyst is checking the dataset before loading it into their final destination for analysis. They verify that all the data in the age field is between 18 and 70 years. What is the cloud data analyst doing?
- Validating the data using range validation

Why is it important to decide how missing values, inconsistencies, or errors will be handled when designing a data transformation plan?
- It ensures data quality and accuracy for reliable analysis.

How does data segmentation using RFM analysis help a marketing team address a business need?
- Allows the marketing team to tailor ad campaigns and marketing efforts for better results

Are SQL and BigQuery effective tools for RFM analysis?
- Yes, SQL and BigQuery are effective tools to conduct RFM analysis.

What is one way you could improve the testing proposed in the data transformation plan?
- Compare results with known customer behavior patterns or historical insights to confirm validity.

Which of the following statements best addresses how business goals outlined in the RFM analysis plan align with proposed data transformation techniques?
- The techniques can be used to calculate RFM scores based on recency, frequency, and monetary value, which aligns directly with the desired customer segments.

A cloud data analyst is working on a data project. They search for errors in the dataset. Why is it so important to find the dataset errors?
- Errors affect the integrity of the data.

A data team is planning a project that involves a large dataset. As a next step, they evaluate the resources they need for the project. Which resource should they manage effectively to avoid unnecessary fees?
- Storage

A cloud data analyst is working with a dataset. As part of their process, they need to convert the data from a string format into a numeric format. When they finish, they discover errors in the dataset. What likely caused these errors?
- Errors during data transformation

A cloud data analyst is working with a dataset. They are checking the dataset for records that are identical, or partially identical, to delete or fix these records. What is the cloud data analyst doing?
- Deduplicating the dataset

A cloud data analyst is working with a large dataset. The dataset is growing at a rapid rate because it is tracking a website. What can the data analyst do to reduce the amount of raw data and have the data they need for the project?
- The cloud data analyst can aggregate the data.

A cloud data analyst is helping the sales team find trends in customers’ shopping habits. What technique will help the cloud data analyst find the trends in the data?
- Data aggregation

A cloud data analyst is working with a large dataset. They perform some aggregations, and their results are inconsistent with their expectations for this data. They check the process, conditions, and mathematical equations, and everything else is correct. What is causing the inconsistencies with the results?
- The data has duplicate records.

A cloud data analyst is joining two tables. For their project, the cloud data analyst needs only the information that matches both tables. What type of join should the cloud data analyst use?
- Inner join

A cloud data analyst is working with a dataset that is the result of a data derivation process. What data problem should the analyst consider when using derived data?
- The data is not always as accurate as the original data.

A cloud data analyst is joining two tables using an outer join. As a part of the process, the result table has some rows with NULLs values. What do the NULLs values represent?
- The unmatched values

A cloud data analyst is tasked with creating a report. The data they need for creating the report is not found directly in the raw data. As a next step, they decide to use data derivation. What does the cloud data analyst do in the data derivation process?
- The cloud data analyst creates an algorithm to transform the raw data.

A cloud data analyst is working with a large dataset. They decide to transform and analyze the dataset using cloud computing resources. How will this action help the cloud data analyst?
- They will have access to the required computational power virtually.

A cloud data analyst is working with a large dataset. They make a mistake and choose the wrong aggregation method. Which type of errors will this introduce to the data?
- Data transformation process errors

A cloud data analyst is tasked with optimizing the storage space of a large dataset from a music streaming service. The dataset generates a data point with the time and day every time a song is played. The streaming service only wants to know how many times per day a song is played. How can data aggregation help the cloud data analyst optimize the storage space to have only one data point?
- By aggregating the total plays per song by day.

A cloud data analyst is tasked with helping a streaming service determine the trends in songs per music genre. How can the cloud data analyst use data aggregation in this scenario?
- The cloud data analyst can group the songs per genre and count the times each song is played.

In a dataset, what can cause inaccurate reporting, wasted resources, and increased storage costs?
- Duplicated data

You are working as a data analyst deduplicating data. Based on the information in the following table, which is a partial duplicate record? ProductPriceStockCostToy B$2.5058000$1.50
- Product: Toy B, Price: $2.05, Stock: 58000, Cost: $1.50

A cloud data analyst is joining two tables, table A and table B. Table A has three columns: product_id, stock, and warehouse_id. Table B has four columns: product_name, cost, price, and product_id. What column should the cloud data analyst use to join the tables?
- <span style="background-color:#cccccc;"><strong>Product_id</strong></span>

Which join method does the following Venn diagram illustrate? [Alt_text: A Venn diagram. Two circles, A and B. The circles overlap in the center to show the joining values. The overlap is blue.]
- Inner join

A cloud data analyst is using data derivation in their data project. Which of the following is an example of the data derivation process after the cloud data analyst creates the algorithm?
- The algorithm transforms the raw data. The new data is used to create insights.

A cloud data analyst is working with derived data. To gain the insight they need, they will need to use data derivation aging. What is a problem they can encounter by doing this?
- The data may not be accurate

Which hierarchy is correct for Ontology?
- Source->Product->Event

It is possible to import or export a Dashboard
- True

In Command Center, when creating a new status assessment, can you add a severity above 100?
- False

Multiple incidents can be transferred into the Command Center from a single or multiple Environments
- True

Can PowerUp integration help you enhance your playbook capabilities?
- True

A case tag can be added to high priority alerts only?
- False

A manual action within a playbook can be identified by
- "M" letter

All playbook triggers except "All" can be scoped with the following parameters: (select all that apply)
- "() Contains"
- "= Equal"
- "*_Starts With"

What type of activities can be added by collaborators to the Command Center workstation?
- All of the above

Blocks can be used for
- Repeatable actions

Green text within Chronicle SOAR Mapping represents
- Field mapped and Event has data

______ alloWhen a playbook is activated, the toggle
- Blocks

A "Playbook" can only be attached to a specific Environment
- False

White text within Chronicle SOAR Mapping represents
- Field mapped and no data in event

Can a user have restrictions to view certain environments within platform?
- True

You are limited to inviting internal users to the Command Center when collaborating on incidents
- False

Where can you find an execution log of an Alert?
- Case

When creating a playbook if you select "All Environments" button, what does such scope mean?
- This function created within playbook will run on all current environments as well as on all future environments.

In case of multiple matches for an Alert, which Playbook priority determines precedence?
- First

What can you find within the Chronicle SOAR Marketplace? (select all that apply)
- Power Ups
- Integrations
- Analytics

Do you require multiple dashboards in order to configure data widgets that show results from multiple Environments?
- False

Which Flow step requires an analyst to manually answer a question?
- MultiChoiceQuestion

A "Trigger" is the very first step in each playbook
- True

Can report templates be downloaded form the Chronicle SOAR Marketplace?
- True

What is available under Configuration tab? (Select all that apply)
- Jobs
- Connectors
- Settings

You need to configure an integrations before using it with the downloaded use cases
- True

When installing an integration (select all that apply)
- Simply click the download button for your selected integration.
- Check if you require subscription for the integration to work optimally within Chronicle SOAR.

You can uninstall an integration that has a dependable playbook
- True

What module should be used within Chronicle SOAR to monitor health checks and synchronization tasks?
- Jobs

When selecting an active incident within Command Center, what filters can be applied under Workstation tab?
- All of the above

Where can you check all Active System Modules?
- License Management

What tabs are available within Homepage? (select all that apply)
- Workspace
- Pending Actions
- My Tasks
- Announcements

Playbook actions can be configured to be executed automatically or manually.
- True

When a playbook is activated, the toggle next to a playbook name appears green
- True

A playbook can be attached to all Environments within the platform
- True

In playbook designer when you toggle the "Simulator" button what is the expected behavior?
- The playbook can now be tested with simulated alerts.

Who typically has sufficient rights to turn off the "simulator" mode? (select all that apply)
- SOC Manager
- Admin

What are the mandatory checks required for installing a Use Case? (Select all that apply)
- Configuration of integrations
- Selection of integrations

By specifying a particular ______ field or general output of an action, you can create condition within a playbook.
- JSON

Conditions are built based on case data such as the following
- All of the above

______ allows you to ingest raw source data into the platform?
- Connector

Which of the following fields are displayed under "Entities Highlights" section? (select all that apply)
- File Name
- Email Subject
- User Name
- IP Address

Red text within Chronicle SOAR Mapping represents
- Field not mapped

A playbook will only run if its priority is defined within the logic
- False

Analysts can communicate with any internal Chronicle SOAR user as part of the platform
- True

Which widget includes a visual graph of the Case Entities?
- Entities Graph Widget

In addition to logs Chronicle can also collect contextual data?
- True

While writing a rule where do you put the descriptive information?
- Meta

Chronicle dashboards are powered by Looker?
- True

A new rule has been developed and historical data over the last year must be investigated, you must run a ______ to perform the investigation?
- Retrohunt

What language is used for rules?
- YARA-L

What search component is used to search for non-indexed data?
- Raw Log Scan

What types of data can be posted to the Ingestion API?
- UDM, entities & unstructured raw logs

The feeds option in settings allows you to add new data sources in the UI?
- True

What section of a detection rule describes the events that must match?
- Condition

What search component is used for extremely fast results on asset,domain,IP,User, and file/hash results?
- Investigative Search

You can use filters to further organize data ingestion when configuring the Chronicle Forwarder?
- True

Chronicle uses a standard schmea called ______?
- UDM

You are asked to assign the least privelaged role in Chronicle, which do you choose?
- ViewerWithNoDetectAccess

Each Chronicle Forwarder may have multiple connectors each corresponding to a data source?
- True

Name spaces can be used to identify distinct network segments when configuring the Chronicle Forwarder?
- True

Threat Intelligence information can be found on what dashboard?
- IOC matches

GCP Logs can be ingested into Chronicle using ________?
- Direct Ingestion

Which default dashboard reports on detection rules?
- Rule Detections

What must be enabled in order for a rule to be active?
- Live Status

What language are Chronicle parsers based on?
- Logstash

Chronicle provides the following major benefits _________?
- All other answers are correct

You are writing a rule that must only look within the last 20min, what section of the rule do you place this condition in?
- Match

Detection rules can be either alerting or non-alerting signals?
- True

What built in tool is used to write and test rules?
- Rules Editors

What view shows IOC matches and recent alerts?
- Enterprise Insights

Multiple syslog data sources can use a single port on the Chronicle Forwarder?
- False

Ingest Health is found in which Dashboard?
- Data ingestion and health

What search component is used for threat hunting and other indepth use cases?
- UDM Search

What collection method can be used to send data directly to Chronicle?
- All of the other answers are correct.

What view is used to utilize analytics from Looker?
- Dashboards
- List Manager

The collection section of the Chronicle Forwarder's configuration contains what elements?
- Expected Data Types & Ingestion Methods

What section of a detection rule contains filter conditions similar to a WHERE clause?
- Events

Which of the following ways is the correct one when investigating threats in Chronicle?
- Each of those provide a starting point, however for optimal experience it’s recommended to start the investigation in the ticketing/investigation platform of choice

On premise data requires the use of a __________ to collect data?
- Forwarder

When using the ingestion API what formats are supported?
- All other answers are correct

What type of identity provider must be used for Single Sign On?
- SAML 2.0

What information do you need to store after creating a rule with the detection API?
- Rule ID and Rule Version

How does the Chronicle Forwarder recognize what data format is being ingested?
- Data labels

Adding and modifying rules is accomplished from what screen?
- Rules

What key pieces of information should every analyst be able to obtain by looking at the main screen of the case? (select all that apply)
- When did it happen?
- Who is involved?
- What happened?

What does the letter "R" stands for in the PICERL incident Handling methodology?
- Recovery

What mechanism is used to translate raw information from different product event fields into Chronicle SOAR Objects of Interest?
- Mapping & Modeling

Where in the platform can you see why a playbook action failed?
- Review the execution log of this action under the case wall

What does the letter "E" stand for in the PICERL incident Handling methodology?
- Eradication

Where can you find and re-open a case that has already been closed?
- All closed cases / alerts are available under the Search tab.

How would you un-merge different branches of a playbook into a single branch?
- Right click on the relation circle, then click on "delete"

What is the importance of hierarchy when defining data mapping rules in the platform?
- Higher-level data mapping transfers the rules down the hierarchy without the need to re-map.

What logical operators can be used when creating a condition flow within a Chronicle SOAR playbook?
- OR & AND

How would you merge different branches of a playbook into a single branch? (select all that apply)
- Drag & drop an action from an existing branch to the end of the new branch.
- Drag & drop an action from a new branch to the end of the existing branch.

How can you leverage playbook automation to confirm whether a previous action ran successfully and/or returned an expected value?
- By utilizing the previous action conditions flow.

How would you configure a playbook so that it is automatically attached to a particular alert name?
- Custom trigger with "Alert.Name" value

What is the difference between Jobs and Connectors within Chronicle SOAR?
- Connectors are used to ingest cases into the platform. Jobs support healthcheck and synchronization tasks

What are the three levels of data mapping hierarchy within Chronicle SOAR, from broadest to most narrow?
- Source -> Product ->Event

How does Chronicle SOAR allow you to remediate failed actions within a playbook?
- Rerun and skip buttons are available in case an action fails to execute. Rerun button is available after the action fails. Skip button is available in the configuration block of the specific action.

What functionality can be used in Chronicle SOAR to minimize the lift and maintenance of a set of repeated actions across multiple playbooks?
- Chronicle SOAR blocks can be used for all repeatable actions.

When looking at a playbook, how can you distinguish a manual action from an automatic action?
- The letter "A" next to the integration action means automatic and "M" means manual.

Where can you see the comments left by all analysts working on a case?
- The Case Wall contains full detail of each case including all comments.

An integration must first be downloaded in order to access its corresponding connector.
- True

What transformation functions helps changing the date formatting during alert mapping activities?
- FROM_UNIXTIME_STRING_OR_LONG"

What Chronicle SOAR component allows you to ingest raw source data into the platform?
- Connector

How can you scope a playbook action to run on a limited selection of entities?
- By specifying the exact scope of entities that you are interested in targeting

By changing a playbook task from "Auto" to "Manual," you are instructing the playbook to stop and wait for human intervention
- True

Where in Chronicle SOAR can you see a full timeline visualization of the entities and objects within an event?
- Mapped events are graphically represented under the Explore module of Chronicle SOAR.

When are source entities defined for each alert within Chronicle SOAR?
- During mapping.

You can avoid generating too many insights by specifying this when configuring an action:
- The exact entity scope.

What functionalities exist within the playbook flow to allow for handling of errors when executing an action?
- Configure the default branch that will be used in case of an error

The Case Queue is a live list of what kind of alerts?
- All open alerts that are part of active cases.

How would you use the output of an action to create a condition within a playbook?
- By specifying a particular JSON field(s) or general outcome of an action

What kind of playbook actions allows for a pause and delay in next steps until another action has occurred?
- All async actions

The ___________ flag would be used to indicate that your script completed successfully.
- EXECUTION_STATE_COMPLETED

Events have ___________ dictionaries.
- Flat

Scripts will populate logs with or without a SCRIPT_NAME
- False

When getting a parameter value, the parameter name is case sensitive.
- True

What method is used to get configuration parameters?
- extract_configuration_param

The _______ method is used to update the data in entities.
- update_entities()

Which of these fields are mandatory when creating an alert object?
- display_id

What method is used to get action parameters?
- extract_action_param

Siemplify populates a new action with the following libraries: (select all that apply)
- SiemplifyUtils
- SiemplifyAction
- ScriptResult

Which is the correct way to write an output message to the log?
- SIEMPLIFY.LOGGER.info("Value")

You can update multiple entities at once.
- True

What happens if you don't end an asynchronous action?
- An infinite loop occurs but the action will timeout.

Virtual environments have access to the resources of other virtual environments.
- False

Which folder in the Integration export contains the metadata for actions?
- ActionDefinitions

Which method(s) would be used to add JSON information that can later be used in a playbook?
- Siemplify.result.add_result_json()

Which method is used to let the Siemplify server know that script execution has completed?
- siemplify.end()

Which flag is used for asynchronous actions to let the Chronicle SOAR API know that the code is to continue running?
- EXECUTION_STATE_INPROGRESS

Which field is used to hold the raw data in an event?
- _rawData

The start and end_time are NOT required parameters in an alert object.
- False

The ___________ flag would be used to indicate a failure in your script.
- EXECUTION_STATE_FAILED

Select the basic components available as part of a Chronicle SOAR integration (select all that apply).
- Actions
- Jobs
- Managers
- Connectors

What icon is used to denote a "Custom Integration"?
- Gear

Each Integration runs in its own virtual environment.
- True

How would you add a table to a ScriptResult?
- Siemplify.result.add_data_table()

The following are parameters when using the method that's responsible for getting action parameter values: Example: function(a, b, c) where a,b,c are parameters. (select all that apply)
- param_name
- input_type
- default_value

A connector can NOT be put in "test mode".
- False

Select which objects can be used to iterate over entities:
- Siemplify.target_entities

What method is used to end a Job?
- end_script()

In the context of the Chronicle SOAR testing platform.The scope specifies ____________.
- The entities that we're running our script against.wer

Where would you store common methods, like the authentication to a third party product, for use in an integration?
- Manager

An iteration in an asynchronous action can share information with the next iteration.
- True

Python dependencies for integrations can be installed in the following ways: (select all that apply)
- Have Siemplify download the library from the WebUI.
- Manually uploaded through the Siemplify WebUI.

You can manually run actions in cases.
- True

It's best practice to wrap your code in a try/except to handle errors.
- True

Which field(s) in an alert object would be useful for correlating an alert to an external ticketing system?
- ticket_id

Where do we download integrations for Chronicle SOAR?
- Through the Chronicle SOAR WebUI.

You can only have one action in an integration.
- False

Adding and Modifying rules is accomplished from which screen?
- Rules Editor

A new rule has been developed and historical data over the last year needs to be investigated. You must run ______ to perform the investigation.
- Retrohunt

Which of the following is the correct syntax to use nocase?
- <code>target.user.userid = "TIM.SMITH" nocase</code>

Which section stores arbitrary key-value pairs of rule details?
- Meta

In which section of a YARA-L rule can placeholder variables defined in the events section not be used?
- options

Which sections are mandatory for all YARA-L Rules? You can select the multiple values
- events
- condition
- meta

$var is equivalent to
- #var > 0

The precedence order for logical operators is
- NOT, AND, OR

What does the following statement signify? not all $e.principal.ip = "127.0.0.1"
- checks whether any IP address does not match "127.0.0.1"

Which of the following is the valid syntax when using the any operator?
- <code>any $e.target.ip = "127.0.0.1"</code>

YARA-L rule can be evaluated using what type of match technique?
- Both

Identify the use case of given rule Rule: rule UserCreationThenDeletion { meta: events: $create.target.user.userid = $user $create.metadata.event_type = "USER_CREATION" $delete.target.user.userid = $user $delete.metadata.event_type = "USER_DELETION" $create.metadata.event_timestamp.seconds <= $delete.metadata.event_timestamp.seconds match: $user over 4h condition: $create and $delete }
- users that have been created and then deleted within 4 hours.

What is the Maximum time range value specified in match section to correlate events
- 48 hours

Identify the use case of given rule Rule: rule example { meta: author = "Chronicle Security" severity = "Low" events: $fail.metadata.event_type = "USER_LOGIN" $fail.metadata.vendor_name = "Microsoft" $fail.principal.hostname = $targetHost $fail.target.user.userid = $targetUser $fail.security_result.category = "AUTH_VIOLATION" $fail.security_result.action = "BLOCK" $fail.metadata.event_timestamp.seconds <= $success.metadata.event_timestamp.seconds $success.metadata.event_type = "USER_LOGIN" $success.target.user.userid = $targetUser $success.principal.hostname = $targetHost $success.security_result.action = "ALLOW" $success.metadata.product_event_type != "4648" match: $targetUser, $targetHost over 15m condition: #fail > 4 and $success }
- Detect repeated authentication failure, followed by authentication success.

Which of the following is correct syntax for a rule which is going to detect whether the user has logged in your enterprise from two or more cities?
- <div> <code><br /> rule DifferentCityLogin {<br /> meta:<br /> &ensp;author = "Chronicle"<br /> &ensp;severity = "Low"<br /> events:<br /> &ensp;$udm.metadata.event_type = "USER_LOGIN"<br /> &ensp;$udm.principal.user.userid = $user<br /> &ensp;$udm.principal.location.city = $city<br /> <br/> match:<br /> &ensp;$user over 5m<br /> <br/> condition:<br /> &ensp;$udm and #city > 1<br /> } </code> </div>

If we want to write a rule that must only look for events within a 20 minute window, what section of the rule do you place this condition in?
- match

Which of the following is the correct rule which is going to detect whether the user has logged in your enterprise from two or more cities and he is not from the INFORMATION TECHNOLOGY department?
- <div> <code><br /> rule example {<br /> <br/> meta:<br /> &ensp;author = "Chronicle"<br /> &ensp;severity = "Medium"<br /> <br/> events:<br /> &ensp;$e1.metadata.event_type = "USER_LOGIN"<br /> &ensp;$e1.target.user.userid = $user<br /> &ensp;$e1.principal.location.city = $city<br /> <br/> &ensp;$e.graph.entity.user.userid = $user<br /> &ensp;$e.graph.metadata.entity_type = "USER"<br /> &ensp;($e.graph.entity.user.department != "INFORMATION TECHNOLOGY")<br /> <br/> match:<br /> &ensp;$user over 24h<br /> <br/> condition:<br /> &ensp;$e1 and $e and #city > 1<br /> } </code> </div>

Identify the incorrect event section from the given options. (assuming $e1, $e2, and $e3 are used in the rule)
- <div> <code><br /> events:<br /> &ensp;$e1.src.ip = $ip<br /> &ensp;$e2.target.ip = $ip<br /> &ensp;$e3.about.ip = "192.1.2.0" </code> </div>

Identify the correct rule definition
- Both A & B

Which of the following is the correct rule to detect multiple events?
- <div> <code><br /> rule EventRule {<br /> meta:<br /> &ensp;author = "Chronicle"<br /> <br/> events:<br /> &ensp;$e.metadata.event_type = "USER_LOGIN"<br /> &ensp;$e.principal.user.userid = $user<br /> <br/> match:<br /> &ensp;$user over 10m<br /> <br/> condition:<br /> &ensp;#e >= 10<br /> } </code> </div>

function use case 1) strings.concat(a, b) | a) Change text to lowercase 2) strings.to_lower(a) | b) Change text to uppercase 3) strings.to_upper(b) | c) Concatenation of two strings
- 1->c, 2->a, 3->b

The special field in the outcome section is
- $risk_score

Functions in YARA-L apply to exactly one event
- True

Identify the correct option which is going to match the event which received the email from altostrat.com(case sensitive) domain. Option 1: re.regex($e.network.email.from, `\.*altostrat\.com`) Option 2: $e.network.email.from = /\.*altostrat\.com/
- Option 1 & 2 (Both)

The multi-event rule can be simplified to a single event rule. Which option is syntactically correct when converted to a single event rule?. rule example { meta: author = "Chronicle" events: $u.udm.principal.hostname = $hostname match: $hostname over 5m outcome: $risk_score = max(if($hostname = "my-hostname", 100, 50)) condition: $u }
- <div> <code><br /> rule example {<br /> meta:<br /> &ensp;author = "Chronicle"<br /> <br/> events:<br /> &ensp;$u.udm.principal.hostname = $hostname<br /> <br/> outcome:<br /> &ensp;$risk_score = if($hostname = "my-hostname", 100, 50)<br /> <br/> condition:<br /> &ensp;$u<br /> } </code> </div>

UDM field $e.principal.hostname returns the value "name". What will the value of $variable become after this function has been processed? $variable = re.replace($e.principal.hostname, "", "1")?
- 1n1a1m1e1

Which of the following is the correct criterion for a rule which is going to detect whether the user has logged in to your enterprise outside working hours? (working hours are from 10:00 to 19:00)
- <div> <code>$ts = $e1.metadata.event_timestamp.seconds</code><br /> <code>timestamp.get_hour($ts) < 10 or timestamp.get_hour($ts) > 18</code> </div>

Identify the correct syntax for to work with the list key_servers.
- $selection1.principal.hostname in %key_servers

Identify the correct syntax in the events section to use a reference list
- All the three options

Which of the following is not an aggregate function in the Outcome section?
- abs()

Which of the following statements regarding the use of Gemini in the software development life cycle is correct?
- To generate code, you can prompt Gemini with a comment in a source code file.

Which of the following is the main KPI Cloud Retail Search optimized results for
- Revenue

Which of these is the correct purpose of the serving control “boost/bury”?
- Affects result ranking and order in the returned result list

Which is the correct order of ingestion data from scratch into Cloud Retail Search
- Attribute Config -> Product Import -> Local Inventories

Which of the following is NOT a way to personalize search results with Google Cloud Retail Search?
- Use user demographics

Which of the following is NOT a supported data type for Google Cloud Retail Search?
- Images

When designing A/B test which experiments should be sent to Cloud Retail Search
- Experiment ID with Google & Legacy both

Which of the following is NOT a way to troubleshoot problems with Google Cloud Retail Search?
- Check the documentation

Which of the following is the best way to import data into Retail Search when a lot of product changes are required along with analytical capability
- BigQuery

What are unjoined events ?
- Events that are in Cloud Retail Search but product is missing the Retail Catalog

What is the relationship between Serving Config and Serving Rule
- Many to Many

Which of the following is NOT a type of query that can be used with Google Cloud Retail Search?
- Geospatial search

Which of the following is NOT a way to keep up with changes to Google Cloud Retail Search?
- Follow the Google Cloud Twitter account

When using Cloud Code, which actions can Gemini perform on selected text in your code file? Select two.
- Explain code.
- Generate code.

Which of the following is not a resource that Gemini can help you manage in a GKE cluster?
- Network policies

How can you use Gemini to identify and remediate security misconfigurations?
- Select a finding from Security Command Center. Gemini provides an AI-generated summary of the misconfiguration, and will provide you with steps to remediate the vulnerability.

What is the quickest way to use Gemini assistance to explain a log entry in Logs Explorer?
- Expand the log entry and click "Explain this log entry."

Which Vertex AI model can be used to identify customer clusters or segments?
- K-means clustering model

How can you use Gemini in BigQuery to analyze data? Select three.
- Complete a SQL query.
- Explain how a SQL query works.
- Generate SQL queries to analyze your data from a description you write in English.

How can you use Gemini chat to help you with a network architecture task?
- Type a specific prompt into Gemini related to your network architecture concern.

A learner obtains the Google Cloud Data Analytics certificate and starts their job search. They find a job they think would be perfect, but they lack experience in a specific analytic tool listed in the job post. What is the best action they should take?
- Detail in their cover letter how their experience with a similar tool will help them quickly adapt to the requested tool.

A cloud data analyst is in the process of job searching. What are two workplace skills that the cloud data analyst should demonstrate? Select two answers.
- Critical thinking
- Problem solving

A learner obtains the Google Cloud Data Analytics certificate and starts their job search. Afterwards, they create their resume. What is another resource they can use to showcase their abilities and experience?
- Data analyst portfolio

A learner that has just obtained the Google Cloud Data Analytics Certificate starts their job search. When searching for jobs, what two key terms can they use to identify appropriate opportunities for their ability and current skill level? Select two answers.
- Junior
- Entry level

Which of the following actions can you take to help you tailor your resume to cloud data professional roles? Select all that apply.
- Refer to previous course content to review some of the different types of roles available in data analytics.
- Research roles on job-search platforms and take notes on some of the skills and qualifications required for jobs that appeal to you.
- Use an AI tool to tailor your resume to the specific job.

Which of the following components should be included in a resume? Select all that apply.
- Education
- Personal information
- Work experience

What should you include in the experience section on your resume? Select all that apply.
- Your three previous positions
- Your transferable skills
- Your job responsibilities and accomplishments

What issues should you address when proofreading your resume? Select all that apply.
- Revise your wording to be as concise as possible.
- Consolidate your resume to no more than 1–2 pages.
- Correct any spelling, grammatical, and punctuation errors.

A cloud data analyst is updating their resume. They want to include a link to their portfolio. In what section of the resume should they include this link?
- Projects

In which section of their resume should a learner include the Google Cloud Data Analytics Certificate that they earn?
- Education

A learner that has just obtained the Google Cloud Data Analytics Certificate is updating their resume. They have worked in the service sector and have also completed an internship as a data analyst assistant. What should they include in the experience section of their resume?
- Both the the service sector jobs and the internship

A company is beginning the hiring process for an entry level cloud data analyst. They need to decide how to have the analyst prove their technical abilities. What are two ways that the company can verify the cloud data analyst’s technical abilities? Select two answers.
- The cloud data analyst can complete a test either on-site or at home.
- The cloud data analyst can be interviewed by a senior data analyst.

An entry level cloud data analyst is preparing for an interview. They are practicing for the interview and updating their resume and portfolio. What other activity should the cloud data analyst do to prepare?
- Research the organization.

An entry level cloud data analyst is preparing for their first interview. They practice answering questions using the STAR method. What type of questions is the cloud data analyst preparing for?
- Behavioral

An entry level cloud data analyst is searching for their first cloud data analytics job. They would like a job conducting statistical analysis and working with algorithms. What is the name of this role?
- Quantitative analyst

An entry level cloud data analyst is searching for their first job. They want a job in the real estate industry as a junior data analyst. What strategy can they use to find this job?
- Narrow their search by using “entry level data analyst” and “real estate” as key terms

What information is included in a cloud data analyst portfolio?
- Examples of the reports and dashboards the cloud data analyst has created.

An entry level cloud data analyst is working on their portfolio. They include a section that describes how they question and consider all angles within project data and use insight to draw conclusions. What skill is the cloud data analyst demonstrating?
- Critical thinking

An entry level cloud data analyst is preparing for an interview. They are taking notes about the company so they can craft questions to ask the hiring manager. What is the purpose of these questions?
- To determine if they are a good fit for the company and if the company is a good fit for them

What does the “S” stand for in the STAR methodology?
- Situation

An entry level cloud analyst is creating their resume. They add relevant information about their internship as a data analyst assistant. What section of the resume are they writing?
- Experience

An entry level cloud data analyst is in a job interview. The interviewer gives them a technical problem and asks them to describe the steps they would take to solve it. How can the cloud data analyst demonstrate that they value collaboration?
- By asking clarifying questions

An entry level cloud data analyst is in a job interview. The interviewer asks them about a specific tool that the cloud data analyst has no experience with. How should the cloud data analyst answer the question?
- Answer the question from the perspective of another tool and explain that it will be easy to learn a new tool.

An entry level cloud data analyst is answering behavioral questions using the STAR method. They describe the positive outcome of a situation. What phase of the STAR method is this?
- Result

What should the objective section in an executive summary address? Select all that apply.
- The target goal(s) of the project
- The impact of the project

What do executive summaries accomplish? Select all that apply.
- Give decision makers a brief overview of relevant information.
- Help new team members become acquainted with the project.
- Summarize the most important points about a project.

What does the overview accomplish in an executive summary?
- It provides a high-level perspective of the project.

Which element of an executive summary uses numbers and/or visuals?
- The results

Which statement highlights the value of completing the capstone project?
- By completing the capstone project, you will have the opportunity to translate your cloud data analytics skills, tools, and experiences.

How can a capstone project in a portfolio benefit you as a cloud data analytics job seeker?
- By highlighting your thought process in addressing problems, allowing interviewers to understand your approach

What stage of the capstone project offers you the opportunity to review an example to get a clear idea of what you will be doing?
- At the beginning

What action can you take if you need guidance during the capstone project?
- Review the previous labs and activities

After completing your capstone project, you added it to your portfolio and referenced it on your résumé. What other way can your capstone project benefit your job search?
- Using the capstone project to explain your process during an interview

Why are transferable skills important to consider as a cloud data professional?
- Skills learned throughout a career can be transferable and applied to new circumstances.

How can an elevator pitch help you during the job interview process?
- It allows you to give interviewers a quick, high-level overview of your work for general understanding and discussion.

When creating your online project portfolio, what should you include in the Projects Overview section?
- A few sentences stating the problem solved, data used, and the results of the project

What is the primary benefit of adding your capstone project to your portfolio?
- It showcases your hands-on experience with cloud data analytics.

Why is it important to continuously update your online project portfolio?
- To ensure it reflects your most current technical abilities and projects

What challenges can generative AI tools like Gemini help you solve?
- Organize information into formatted tables within a spreadsheet.

Which tool is best to use with Gemini if you want to create an icon for your presentation?
- Google Slides

Which option best defines generative AI?
- A subset of AI that refers to the use of AI to create new content, like text, images, music, audio, and videos.

You are writing an email to your CFO who you do not work with frequently. You drafted an email, but you want to make sure it is not too casual. Which Gemini option can you choose to improve the tone of your email?
- Formalize

You’d like to use Gemini to write an email to your colleagues inviting them to a fun team-building event. Which of the following are details you might include in the prompt to create the most relevant email? (Select two).
- The recipient
- The tone

You want to create a visual of a cow jumping over the moon for your slides, but you want it to look like a colorful brush painting. Which style should you pick?
- Watercolor

You are leading an introductory course for dental students. You want to have a slide in your course presentation that teaches about tooth decay. This is outside your area of expertise so you want to generate an image that shows the different key indicators of tooth decay to your students. Which of the following would be the best prompt?
- This is not a good use case for Help me visualize.

You are creating a slide deck to virtually celebrate a coworker’s birthday. You want to include an image of a custom cake on your slides. Your colleague loves tigers and playing ultimate frisbee so you want the cake to have a picture of a tiger playing ultimate frisbee. Which of the following would be the best prompt?
- A cake with a tiger playing ultimate frisbee.

Choose the FOUR correct DDoS Mitigation Layers from the list below.
- Load Balancing
- Internal Traffic
- Attack Surface
- CDN Offloading

Which TWO of the following statements is TRUE about Google Cloud Armor?
- Google Cloud Armor protection is delivered at the edge of Google’s network.
- Google Cloud Armor enforces access control based on IPv4 and IPv6 addresses or CIDRs.

Choose from the list below which way Google Cloud helps mitigate the risk of DDoS for its customers.
- Internal capacity many times that of any traffic load we can anticipate.

Which TWO of the following tools does Google Cloud make available to customers for the mitigation of content-related security threats?
- Cloud Natural Language API
- Cloud Data Loss Prevention API

Which TWO of the following statements are TRUE when speaking about content-related security threats?
- Screenshots or other images that are made public without redaction can trigger a content-related cyber attack threat.
- Ransomware is a type of malicious software exploit that threatens to publish or perpetually block access to data unless money is paid.

Which TWO of the following options are ways that Google Cloud automates for customers the mitigation of many content threats?
- In Google Drive, all files will undergo a malware scan prior to any file download or file sharing attempt.
- Google has global visibility into malicious sites and content, and is able to warn incoming users of suspected malware.

Which TWO of the following statements about Cloud Monitoring and Cloud Logging are TRUE?
- The Cloud Logging Agent can be installed on both Compute Engine and AWS EC2 instances.
- You can analyze log data in BigQuery.

Which one of the following is NOT a benefit for automating security in Google Cloud environments?
- While beneficial in some situations, the time invested in automating certain tasks is not worth it due to a lack of Google Cloud services that support this framework.

Which TWO of the following statements about Cloud Audit Logs are TRUE?
- Enabling Data Access audit logs might result in your project being charged for the additional logs usage.
- Cloud Audit Logs maintains three audit logs for each project, folder, and organization.

Which one of the following statements about Security Command Center is NOT true?
- Security Command Center requires three IAM administrative permissions to set up

What is the primary purpose of Role-based access control (RBAC)?
- It ensures that users only have permissions and access to the resources necessary for their job.

What does good credential management help prevent? Select two answers.
- Potential breaches
- Unauthorized access

A security expert is working on a cloud user-access project. Their goal is to simplify administration, boost compliance, and reduce costs. Which method should they use?
- Apply centralized and consistent identity management

What are the three components of the AAA framework? Select three answers.
- Authentication
- Auditing
- Authorization

What are some examples of the sensitive information, or “secrets,” used to authenticate and authorize access to systems? Select three answers.
- Certificates
- API keys
- Passwords

What is the purpose of role hierarchies in a role-based access control (RBAC) system?
- To simplify the management of permissions

A nonprofit organization migrates the majority of its data and applications to the cloud. As part of the process, they implement the principle of least privilege. What additional best practices can limit the chance of unauthorized access, and make managing access controls a more fluid and well-structured process? Select two answers.
- Regularly auditing, reviewing, and updating access controls
- Separating duties

How can Discretionary Access Control (DAC) be implemented in a cloud environment?
- Access control lists

What does Identity and Access Management (IAM) allow you to manage across your cloud environment? Select two answers.
- Users and groups
- Roles and permissions

A company hires a security consultant. The consultant reports that phishing attacks are increasing, which may impact the company. What solution should the consultant recommend to combat phishing?
- Implement user training and email security measures.

A large real estate company has become aware of multiple attempts by cybercriminals to exploit their software vulnerabilities. What steps will protect their client data and prevent financial loss? Select two answers.
- Implement user training and email security measures.
- Deploy DDoS mitigation services and monitor network traffic.

In the context of cloud security, what does a Virtual Private Network (VPN) do?
- It creates a secure, encrypted tunnel for data to travel between the cloud environment and the user.

What methods improve cloud network security? Select two answers.
- Segmenting networks and applying context-aware access controls
- Defining trust boundaries based on risk and required access controls

In the context of zero trust, what is the purpose of the Network Access Control (NAC) mechanism? Select two answers.
- It enforces policy-based access control to network resources.
- It ensures that only authorized devices and users can access the network.

In a zero trust environment, John, an employee who typically works from the office network, decides to work from a coffee shop. Because of the principles of a zero trust security model, John's request for access to the company's servers is not automatically granted. What is the role of context-aware access controls in this scenario?
- It makes decisions about granting or denying access to resources based on the user's identity, and contextual information like location, device, and behavior patterns.

What role does micro-segmentation play in a zero trust environment?
- It divides the network into smaller segments to limit unauthorized access and reduce the potential attack surface.

What is meant by the principle "verify explicitly" in the context of zero trust?
- Every access request must be authenticated and authorized before access is granted to any resource.

What method can a cloud security specialist use to solve the issue of multiple log-ins across various company platforms?
- Implement a Single Sign-On (SSO) system.

How does centralized and consistent identity management enhance security? Select two answers.
- By consolidating access controls
- By preventing potential breaches

For a security analyst, which audit type is best for evaluating a system's effectiveness and efficiency?
- Operational audit

A user enters a username and password before they can gain access to a company’s information system. What network security concept does this scenario describe?
- Authentication

A CTO of a fast-growing tech company is researching different security protocols to improve the security of the company’s internal systems. The CTO learns about OpenID and its application in user authentication. Why is the CTO interested in using OpenID to improve company security posture?
- OpenID will reduce password fatigue and credential reuse.

A software-as-a-service (SaaS) company uses numerous non-interactive access and service accounts as part of their automated processes. They seek a strategy that minimizes potential vulnerabilities. What action should they take? Select two answers.
- Establish a regular examination and audit process for these non-interactive accounts.
- Regularly rotate keys and restrict privileges on a need-to-use basis.

In a company merger scenario, which type of security model would manage the integration of two different security systems through detailed analysis and coordination of existing security labels and policies?
- Mandatory Access Control (MAC)

Carla has been asked by her company to set up a virtual private network (VPN) for their remote employees. What is the main benefit that Carla wants to achieve for employees with the implementation of the VPN?
- Provide a secure, encrypted tunnel for seamless data transmission.

A cybersecurity officer for a startup needs to protect the startup’s digital assets against password attacks. What method should the cybersecurity officer deploy to best guard against these types of security breaches?
- Establish strong password policies and incorporate multi-factor authentication.

A company decides to implement zero trust security architecture in their network. What change in focus does this approach bring to their security strategy?
- The company's focus changes from securing the network perimeter to implementing granular access control over individual resources.

Your organization has recently experienced a cyber attack, and is in the response phase. Which of the following actions should your organization take? Select two answers.
- Establish communication protocols for handling the incident
- Implement an emergency response team

A security professional decides to implement an effective threat management strategy. First, they ensure prevention through the use of firewalls and antivirus software to block malicious intrusions. What is the second component of an effective threat management strategy?
- Detection

Which component of a threat management strategy is associated with restoring systems and data to their pre-attack state?
- Recovery

What steps can help an organization overcome challenges in implementing an effective threat management strategy? Select two answers.
- Stay informed about the latest threats and cybersecurity trends
- Invest in the right tools and technologies

A company experiences a security breach affecting its cloud environment. The IT department suspects that an unauthorized person accessed sensitive customer data. As a response to the breach, what should the company's top priority be?
- Investigate and determine the cause of the security breach

In the context of cybersecurity, what components are involved in asset management? Select two answers.
- Tracking assets throughout their lifecycle
- Implementing access controls

Maria is an IT asset manager. Maria’s company wants to prioritize their asset management to avoid possible data breaches. To streamline the asset management process and identify potential security risks, which tool should Maria invest in first?
- Vulnerability scanners

An IT asset manager at a healthcare organization is categorizing assets into risk tiers. Which of the following asset types can they classify as low-risk assets? Select two answers.
- Public-facing websites
- Marketing materials

What is vulnerability remediation in the context of cloud security?
- The process of identifying, assessing, and resolving security vulnerabilities in a cloud environment

What IT automation tool is open-source, has agentless architecture, and uses YAML for defining automation tasks?
- Ansible

A security manager needs to write a vulnerability remediation plan for a software development process. Which components should they include in the plan? Select two answers.
- Identify the vulnerability
- Develop a remediation plan

An IT administrator needs to safely deploy a security update. They start with a small group of systems to monitor the impact before deploying the update to the entire environment. In this scenario, what best practice for validating security remediations is the IT administrator using?
- Canary testing

A cloud security manager detects several security vulnerabilities in their organization's cloud environment. As a part of vulnerability remediation, the cloud security manager prioritizes the vulnerabilities based on their potential impact and ease of exploitation. Then, they implement the necessary patches and updates to address the identified vulnerabilities. What is the cloud security manager’s next step to ensure that the vulnerabilities were effectively resolved?
- Verify the remediation efforts and confirm the resolutions.

What are the primary benefits of the patching process? Select two answers.
- Timely fixing of security vulnerabilities
- Enhancing the system's performance and stability

A tech startup has developed a new update for its software, which runs on thousands of interconnected IoT devices in a cloud-native environment. This update involves multiple large-scale changes. What approach should the startup adopt for the smooth implementation of this update?
- Rehydration

A company has discovered a minor security flaw in its legacy customer management system. The company relies on this older system for everyday operations, so any significant downtime could severely disrupt the company's operations. What method should the company's IT team use to fix this situation?
- Patching

Why would a cloud security manager prefer rehydration for large-scale, cloud-native environments?
- It enables faster rollout and minimizes disruptions to services.

A multinational corporation has to rebuild its services after identifying a significant software malfunction. This malfunction affects services running in containerized applications, and the corporation requires a large-scale update with minimal interruption to its operations. What method should the corporation's IT department apply?
- Reinstantiation

What are the key features of cloud attack surface management (CASM) solutions?
- CASM solutions involve asset discovery, vulnerability assessment, threat intelligence integration, and risk prioritization.

An organization is considering a new cloud security technology. Which disadvantage of adopting a new technology should they consider?
- The need for continuous learning and adaptation, which requires a time investment from the security team.

An IT consultant suggests that their client should leverage the benefits of emerging trends and technologies in cloud security. This will help with stronger data encryption and more efficient threat detection. What two other advantages of emerging trends and technologies in cloud security should the IT consultant mention? Select two answers.
- Streamlined security management
- Improved response capabilities

An organization that specializes in artificial intelligence (AI) and machine learning (ML) wants to improve their cloud security posture. What is a potential challenge that the organization needs to consider while using AI and ML for enhancing cloud security?
- AI and ML technologies can introduce new attack vectors so they need to be managed cautiously.

What are the key features of cloud security posture management (CSPM) tools?
- CSPM tools continuously monitor and assess cloud environments, identifying misconfigurations, vulnerabilities, and compliance violations.

In a threat management strategy, what role does response play when a system encounters a cyber attack?
- Identifying and limiting the impact of ongoing cyber attacks quickly

What can vulnerability scanners help an organization to do better?
- Prioritize remediation efforts

What are the first two steps to ensure effective asset management within a cloud environment? Select two answers.
- Catalog all elements within the cloud environment.
- Rank resources based on their relative importance.

What’s the difference between vulnerability remediation and posture management in cloud security?
- Vulnerability remediation resolves security vulnerabilities, while posture management monitors and maintains secure cloud resources.

A software engineer recently developed an important application using multiple third-party libraries and frameworks. However, the company is concerned about security vulnerabilities associated with outdated versions of third-party resources. Which type of remediation is appropriate for this situation?
- Updating dependencies

A small startup is anticipating company growth. They mainly rely on Python scripts and need an IT automation tool that is easy to read and doesn't require extra software installations. What tool would be the most suitable choice?
- Ansible

During the rehydration process, what should be done once new resources with updates are created?
- Run them alongside the existing ones

What could be a potential disadvantage of rehydration?
- Compatibility issues with legacy systems

What can cloud security posture management (CSPM) tools identify?
- Misconfigurations and vulnerabilities in cloud environments

Mike, an IT security manager, is experiencing an increase in cyber threats. Mike decides to create an effective program to mitigate these threats. What should be Mike's first step in this process?
- Identify assets

In the DIE triad, how does the ephemeral nature of resources contribute to system security?
- It prevents attackers from stealing information that has been deleted.

What strategy can a tech company use to manage tasks, network security, and regulatory compliance?
- Use managed services

What is the main advantage of using immutable infrastructure?
- It can be easily replaced without modifying the overall system.

The CEO of a startup receives a report discussing the shared responsibility model for cloud security. Which of the following statements from the report accurately reflect the Shared Responsibility Model? Select two answers.
- The cloud service provider is in charge of monitoring and responding to cloud-related security threats.
- The organization is responsible for protecting the data and assets stored in the cloud environment.

In the context of Infrastructure as Code (IaC), which tool builds the necessary resources when you input code and choose your cloud platform?
- Terraform

A team lead in a tech startup chooses to manage infrastructure with Terraform. First, they get to know the core Terraform workflow. What is the next step the team lead should implement in the Terraform workflow?
- Preview the changes made in the configuration

In a DevSecOps model, which statement accurately describes the concept of "policy as code"?
- It is an approach used to reduce human error by writing policies as code.

Cloud security engineers for a large retailer decide to implement a system with policy enforcement automation. They carefully consider sharing and updating policies, preventing security vulnerabilities, and maintaining compliance with government and industry standards. What are the possible outcomes of this strategy? Choose two answers.
- The policy system will lead to quicker operations and enhanced feedback linked to compliance.
- The policy system, when coded with government and industry standards, will maintain better compliance, lowering the chances of violations and subsequent penalties.

What are the roles of a kernel in an operating system? Select two answers.
- A kernel manages processes within the operating system.
- A kernel handles memory allocation and management.

An engineer is working on a file system with a new colleague. They begin by explaining the structure of a layered file system in a container. Which of the following is an important characteristic of the layered system?
- The construction of each layer of a container on top of another layer.

What is a hypervisor?
- Software used to create and operate virtual machines

Anik is a security analyst working on a task that involves executing a single function. Anik can use either containers or virtual machines for this task. Why might Anik use a container rather than a virtual machine?
- Containers are more lightweight and efficient than virtual machines.

What is the security issue with the service account associated with the container?
- It provides unrestricted access to all of the application developers.

Why is it a best practice to use official image registries to obtain container images?
- Official container registries provide trusted and verified images.

What can be used to address the service account with unrestricted access? Select two answers.
- Role-based access control (RBAC)
- The principle of least privilege

Why is a kernel-level container image vulnerability a critical container security issue?
- It can be exploited to gain elevated privileges.

During a deployment at an e-commerce tech startup, orchestration abruptly halts the deployment process. In this scenario, which is the most likely reason for the stop?
- A policy violation due to container vulnerabilities

Which programming approach does orchestration utilize?
- Declarative programming

What is the purpose of namespaces in container clusters? Select two answers.
- To group services for applications
- To isolate applications in container clusters

A national company experiences an unexpected power outage at one of its data centers. In this context, what major function does the company’s container orchestration tool perform during the outage?
- Moves containers to other hosts

A company uses container images for its applications. To prevent container drift, they want to implement a strategy that ensures no new executables can be added after the container image has been created. Which option should the company use to prevent container drift?
- Make the container immutable.

Lola shares the advantages of automation in a meeting with her cloud team. She emphasizes that it is useful in handling problems and misconfigurations. What benefit of automation is Lola referring to?
- It brings issue management together in one central location.

What is the shared responsibility model in cloud security?
- An agreement between the customer and the cloud service provider

A tech company decides to implement an immutable infrastructure for their system resources. What advantage can the company expect from using an immutable infrastructure?
- Immutable infrastructure can make it easier for the company to reverse changes by reverting to a previous version.

Johan, a cloud engineer, is considering Kubernetes to handle his company's container deployment needs. What can Kubernetes offer Johan and his company? Select two answers.
- A platform that provides automation for the deployment of resources
- A platform that can be largely beneficial in deploying containers

When comparing the DevOps and DevSecOps models, which aspect is unique to DevSecOps?
- The use of policy as code for security measures

In the context of maintaining robust security measures in cloud environments, why is it necessary for the associated security policies to be continuously updated?
- To align with the ever-changing needs and technological advancements

Rajeev is a cloud security specialist who is using Terraform for his project. What step should Rajeev take before applying the final Terraform configuration?
- Rajeev should plan the configuration.

What is the role of a hypervisor?
- To create and run virtual machines on a host computer

A company heavily relies on containerization for their applications. Why should the company keep the host kernel up-to-date when using containers?
- To safeguard against potential exploits targeting the shared kernel

Zahra is a tech lead at a software development startup. She applies drift prevention to the container images her team is working on. What will be the impact of Zahra's action on those containers?
- The containers will become immutable.

When a chunk of data at rest is updated, what happens to its encryption key?
- It gets a new encryption key.

Juan transfers money between two company accounts via an online banking portal. Following the transfer, Juan reviews more detailed account information on the same portal. In this scenario, what state is the data returned to?
- Data in use

What is the state of data that moves between a mobile device and a banking app's host?
- Data in transit

A cybersecurity analyst decides to use confidential computing to enhance the company's security systems. What does the cybersecurity analyst want to protect by implementing confidential computing?
- Data in use

Why are tags crucial for data protection? Select two answers.
- They help security assets find the data that needs to be protected.
- They enable better organization of sensitive data.

A logistics company uses an in-house private messaging tool for internal communication between employees. One of the team managers shares a project presentation on the messaging platform. This presentation does not include sensitive information, such as financial data. What is the appropriate classification for this data?
- Medium

A hotel chain maintains comprehensive guest information in a database. This database includes sensitive payment details such as credit card numbers, billing addresses, and contact information. Considering data sensitivity, what classification should the information in this database receive?
- High

What are tags in the context of data classification?
- Tags are custom metadata fields assigned for context.

A cloud storage company wants to share a document related to its range of tiered services. The document includes details related to storage limits, pricing, and services for each tier. The document does not include any sensitive internal metrics or targets. Considering data sensitivity, what classification should the document receive?
- Public

The chief information officer (CIO) of a tech company develops a data retention policy. What should the CIO consider to ensure the policy meets the company’s needs?
- Different types of data may need distinct policies.

Anna is a data consultant for a growing start-up. What data retention policy should Anna recommend for the company’s new cloud storage service?
- Recommend a bucket-based policy allowing object deletion or replacement only after objects have exceeded the set retention period

An online store ensures the validity and uniqueness of their customer's data as part of their data governance strategy. What impact does this have on their operations?
- Enhances data quality by minimizing duplications

Which of the following is a correct analogy regarding the function of data discovery?
- Data discovery is like a bank teller finding customers' money.

If an education technology company uses cloud storage, why might it be difficult to manage data localization?
- Data is stored globally, not locally.

In the event of a ransomware attack on cloud data storage, how can an organization restore their data?
- By contacting their cloud service provider

A sudden power outage causes a company's data center to go offline, stopping all applications. To effectively manage downtime, the company’s business continuity plan includes a crucial objective that determines the maximum acceptable time period for an application to be offline. Which is the term for this objective?
- Recovery time objective (RTO)

Jinwoo, an IT manager, is developing a business continuity plan (BCP) for their company. What is Jinwoo's final step to finish the BCP?
- Conduct tests and update the BCP and the disaster recovery plan (DRP) regularly.

While creating a business continuity plan, which function should a company prioritize?
- The function most critical to business and customer needs.

A cybersecurity analyst is tasked with protecting sensitive data as it is being uploaded to a secure cloud storage platform. As the upload progresses, what is the state of the data being moved?
- Data in transit

Which security protocol is commonly used to encrypt data in transit?
- Transport Layer Security (TLS)

Rosario and Farai are collaborating on a project. They need to establish control over who can access their new tag templates. Which method should they use to accomplish this objective?
- Apply Identity Access Management roles to grant or deny access

Elena and Ken operate two customer databases. They frequently cross-check and update the databases to maintain data quality and integrity. In this context, when do Elena and Ken consider the data to be consistent?
- When Elena and Ken ensure that the data matches corresponding information in the other database.

Toshiro has to follow regulations that mandate all data generated within a country's borders must remain within those borders. What is the term for this regulatory requirement?
- Data localization

Jack, an information security manager in a healthcare organization, uses data discovery to better manage sensitive patient data and uphold data classification standards. During this process, what is Jack investigating?
- Whether there are misclassifications in the categorization of patient data

A company uses cloud storage to store and manage its data. They have a bucket with a locked retention policy. Under what circumstances can the company delete this bucket?
- They can delete this bucket once every object inside it has finished its retention period.

Nia and Cameron have co-founded a tech start-up. Unexpectedly, their office building’s water pipes burst, causing disruption in their operations. Given the situation, what is the main goal of their disaster recovery plan (DRP)?
- Retrieve crucial data and assets lost due to the burst water pipes

A software development firm initiates the development of a business continuity plan. What is the first step the firm should take?
- Find and rank the most essential software and data vital for the firm's operational activities.

Carlos encounters a ransomware attack on their organization's cloud data storage. What is Carlos' initial response? Select two answers.
- Alert colleagues about the attack
- Begin the execution of the business continuity plan

You have written a document that is too long and wordy. You want to make it more concise and easy to read. Which option should you use?
- Shorten

You are a financial analyst at a bank and you are writing a report on economic trends. You want to ensure that the report is polished, so you decide to use Gemini's Proofread feature. Which of the following is a suggestion that Proofread might make to improve your report?
- Use active voice.

You are working on a new product launch for an organic green juice named Cymbal Green. You have conducted market research and have a good understanding of consumer needs and preferences. You want to use Gemini to develop compelling product descriptions that convey the benefits of the new beverage. Which of the following is the best prompt?
- Craft a product description for a new organic green juice called Cymbal Green that highlights the juice’s ability to boost energy levels and enhance performance.

You used a prompt to create a template that handles vendor schedules. You are mostly happy with the output, but want to have an additional column for the start date of each vendor. Which of the following is your best next step?
- Insert the template.

Which of the following is a good prompt for Gemini in Google Sheets?
- Home inspection template that includes different inspection items, the status, and a notes section.

The IT manager at your organization wants to know the advantages of using 2-step verification for your organization. What should you say? (Choose 2)
- It'll greatly reduce the risk of unauthorized access if a user's password is compromised
- It'll reinforce our domain’s password security by requiring our users to enter an additional code or use a security key to sign in

What are some best practices for reinforcing and monitoring the security of your domain?
- All the options

Your organization has decided to enforce 2-step verification in 2 weeks. What actions should you keep in mind when enforcing 2-step verification? (Choose 3)
- When you create new user accounts after enforcement, you will want to allow them a grace period before they need to enroll otherwise they will be locked out of their accounts
- You'll want to provide a lead time for users to enroll before enforcement
- You'll want to confirm that all of your users are enrolled before enforcement

Where do you go to manage your users' password strength?
- Security > Password management

The IT manager at your organization hasn't had a chance to explore the admin console yet but wants to know what individual security settings he can manage for a user. What are some examples you could give him? (Choose 3)
- Determine if the user is enrolled in 2-step verification
- Temporarily disable the user's login challenge for 10 minutes
- Require a password change

What of the following are true of the Secure LDAP service? (Choose 3)
- It allows you to connect your LDAP-based applications and services to Google Workspace
- Users authenticate against the Google Workspace directory to gain access to LDAP compliant applications and services
- It reduces maintenance as directory information is consolidated into one directory

When adding a pre-integrated SAML application to your Google Workspace account, which of the following must you add/upload the Service Provider's configuration? (Choose 3)
- Entity ID URL
- SSO URL
- Google Certificate

Your IT manager has just informed you that your organization has an account now with Asana and would like you to enable Single Sign On with the application. Where in the admin console would you go to configure a third-party pre-integrated cloud application, like Asana, as your service provider?
- Apps > Web and mobile apps > Add App > Search for apps. Then search for Asana from the list of predefined applications

When using a third party IdP which of the following is disabled/hidden in Google Workspace?
- Require password change

What is the expected behavior when a user tries to install a Marketplace app that has not been allowed?
- Users can not attempt to install an application that is not on the allowlist because they only see allowed apps in the Marketplace

You have been asked to create a allowlist of Marketplace apps to restrict which apps a user can install onto their devices. What must you do first?
- Change the Marketplace settings to allow users to install only allowed applications from Google Workspace Marketplace

Your organization wants to prevent any external application from accessing Gmail and Drive data. How would you ensure such access is prevented?
- From Security > Access and Data Control > API Controls, ensure Trust domain owned apps is enabled. From Security > Access and Data Control > API Controls > MANAGE GOOGLE SERVICES, restrict access to the Gmail and Drive services.

What happens to already installed applications if you block API access from the Security > API Permissions section?
- Already installed applications will stop working and OAuth tokens will be revoked

When examining messages in the security investigation tool what actions can you apply to a message? (Choose 3)
- Delete message
- Mark message as spam
- View header

Which of the following statements is NOT TRUE about the alert center?
- The alert center consolidates all admin created email alerts into one place

You have been asked by your CEO to provide a list of users who have not yet enrolled into 2-step Verification. Where can you find that information?
- Users Account Activity Report

Which ONE of the following statements is TRUE concerning Google's built-in security measures?
- To guard against phishing attacks, all Google employee accounts require the use of U2F compatible security keys.

For Platform-as-a-Service (PaaS) offerings, which of the following is NOT a customer-managed component of the shared security responsibility model?
- Network security

Which of the following statements is TRUE regarding Shared Security Responsibility Model in Google Cloud?
- It is a shared responsibility between the customer and Google.

Which TWO of the following statements are TRUE regarding regulatory compliance on Google Cloud?
- Proper configuration of encryption and firewalls is not the only requirement for achieving regulatory compliance.
- Google's Cloud products regularly undergo independent verification of security, privacy, and compliance controls.

The main purpose of Google Cloud Directory Sync is to: (choose ONE option below)
- Help simplify provisioning and de-provisioning user accounts.

Which TWO of the following are considered authentication "best practices?"
- Avoid managing permissions on an individual user basis where possible.
- You should have no more than three Organization admins.

Which of the following statements is TRUE for the use of Cloud Identity?
- Cloud Identity can work with any domain name that is able to receive email.

Which TWO of the following statements about Cloud IAM Policies is TRUE?
- A policy is a collection of access statements attached to a resource.
- A Policy binding binds a list of members to a role.

Projects in Google Cloud provide many management-related features, including the ability to (choose TWO)
- Track and manage quota usage.
- Selectively enable specific services and APIs.

Which FOUR of the following are Cloud IAM Objects that can be used to organize resources in Google Cloud?
- Folder
- Member
- Organization
- Role

Which statement about VPC Service Controls is false?
- VPC Service Controls restrict Internet access to resources within a perimeter by checking permissions assigned to Cloud Identity and Active Directory accounts only.

Which TWO of the following statements about VPCs is TRUE?
- Every VPC network functions as a distributed firewall where firewall rules are defined at the network level.
- VPC firewall rules in Google Cloud are global in scope.

Which FOUR of the following are firewall rule parameters?
- IP Address
- Action
- Direction
- Source

Which ONE of the following statements is TRUE when discussing the SSL capabilities of Google Cloud Load Balancer?
- The Google-managed profile, COMPATIBLE, allows clients which support out-of-date SSL features.

Which of the following does not allow you to interact with Google Cloud?
- Cloud Explorer

What is the difference between the Google Cloud Console and Cloud Shell?
- Cloud Shell is a command-line tool, while the Cloud Console is a graphical user interface

In Google Cloud, what is the minimum number of IP addresses that a VM instance needs?
- One: Only an internal IP address

What is one benefit of applying firewall rules by tag rather than by address?
- When a VM is created with a matching tag, the firewall rules apply irrespective of the IP address it is assigned.

What are the three types of networks offered in Google Cloud?
- Default network, auto network, and custom network.

What are sustained use discounts?
- Automatic discounts that you get for running specific Compute Engine resources for a significant portion of the billing month

Which statement is true of Virtual Machine Instances in Compute Engine?
- In Compute Engine, a VM is a networked service that simulates the features of a computer.

Which statement is true of persistent disks?
- Persistent disks are encrypted by default.

Which of the following defines the objective of the People dimension in the three dimensions of deployment?
- Getting members within an organization to adopt the new workspace changes through training, sponsorship, and communication.

Your organization is creating a new internal training program for their sales team. Which of the following steps takes place after the training content has been delivered and members of the sales team have provided feedback on their learning experience?
- The training enablement team works to refine the program and develop advanced training sessions focused on in-depth product knowledge.

Which of the following statements is part of the global go-live phase in a successful workspace deployment?
- The organization installs any necessary workspace applications or browser extensions on the remaining end-user devices that have not migrated to the new workspace.

According to the diffusion of innovation theory, what percentage of people will adapt to change easily?
- 16%.

Your organization has successfully deployed Google Workspace and is looking to grow user adoption rates. Which of the following activities can help support ongoing training?
- Showcasing user achievements and offering self-service solutions.

Which of the following is included in a sponsorship assessment? Select two responses.
- An analysis of the needs of the sponsors.
- A comparison of sponsors’ current commitment level to the organization’s desired commitment level for sponsors.

Which of the following describes the Embed phase when creating a sponsorship assessment?
- The Embed phase focuses on establishing new workflows that support sponsor objectives.

Which of the following accurately outlines the Sponsorship and Engagement work stream?
- Engage sponsors, engage change agents, promote adoption, champion innovation.

Which of the following activities can help promote the adoption of Google features and capabilities? Select two responses.
- Provide training on using the new workspace to all employees.
- Showcase users who are successfully using the new workspace tools.

Which of the following roles actively promotes the benefits of adopting change within their teams and departments?
- Google Guides

You are part of a global organization that is looking to migrate to Google Workspace. Which of the following people would be the best fit for the role of Executive Sponsor in your organization’s change journey?
- Chief Operating Officer

After agents of change within an organization have been identified, which of the following steps must be taken to support the promotion of the changes within the Enable phase of the change journey? Select two responses.
- Recruit early adopters to promote the benefits of the change within their department.
- Form a committee to communicate with the larger organization on the changes and address their concerns.

Which of the following metrics are most important to include in an organizational analysis assessment? Select two responses.
- Overall percentage of users actively using Google Workspace by department.
- Number of support tickets opened, categorized by issue type.

What information about a user group is important to identify to prepare for the deployment of Google Workspace? Select two responses.
- The location that members of the group are based in.
- Language proficiencies within the group.

Your organization has rolled out the new workspace deployment to a select group of users. How can you promote the success of the deployment to encourage other members of your organization to adopt the changes?
- Encourage Google Guides to promote personal success stories of users who have adopted the change.

You are part of a team of sponsors who are creating an organizational analysis for the new Google Workspace deployment. After determining criteria for a successful deployment, which of the following would be the most effective step to take to identify organizational processes that need to change?
- Assess transformation readiness.

Which of the following statements about the organizational analysis is true?
- It identifies key knowledge areas for post-launch success.

Which of the following activities is executed during the Enable phase when creating an organizational analysis? Select two responses.
- Gathering user issues, questions, and ideas from Google Guides.
- Collecting benchmark statistics to assess ROI.

Which of the following activities can help assess an organization’s transformation readiness?
- Conducting a skill gap analysis.

Which of the following are examples of marketing material that is developed during the Communications workstream?
- Email campaigns to promote new features.

Your organization has just deployed Google Workspace for the first time. Which of the following ideas would be best to celebrate the success of the new workspace deployment during the Expand phase of the change management process?
- Hold a competition across the organization to see who can collect the best success story.

How is the communications plan used during the Embed phase of the change journey? Select two responses.
- To define success metrics and collect results.
- To establish a product update communication plan.

Which of the following key messages are defined in the communications plan?
- Date of deployment.

Which of the following are benefits of developing a communications workstream? Select two responses.
- It gives users an efficient way to voice their concerns.
- It generates enthusiasm for the changes.

Which of the following statements about the communications plan is true? Select two responses.
- It is mainly focused on visibility and marketing.
- It describes a multi-channel approach to communicate the vision.

You are a change champion at your organization. You are working on the development of a Communications Plan. Which of the following activities that are conducted during the Excite phase of the change journey would you want to include in the plan? Select two responses.
- Deploying a coordinated marketing campaign across multiple channels for maximum visibility.
- Requiring an elevator pitch to summarize the vision behind the change.

Which of the following describes the workstream for creating a training needs assessment?
- Plan training, conduct training, continue training, train on new releases.

In what order are the following tasks executed during the Excite phase of the Training workstream? 1. Plan and conduct an initial training needs assessment. 2. Identify useful training resources. 3. Create a training outline and plan. 4. etermine learning needs for each user group.
- 1, 4, 3, 2

Why is it important to train users?
- Mitigates disruption, drives active participation, equips users with skills, articulates purpose.

Which of the following training activities are used during the Expand phase when creating a Training Needs Assessment? Select two responses.
- Product update training
- Productivity trainings

After creating a training plan, what component is needed in a training needs assessment?
- Documentation of training activities and a record of user attendance.

Your organization has recently released a training program to onboard specific user groups for a new Google Workspace feature. How can you provide ongoing support to users who are struggling to adapt to the change?
- Plan a live training workshop to demonstrate the new feature.

Which of the following describes the best way to resolve conflicts that arise from adopting the change?
- Identify needs that aren’t met, provide a channel of feedback to those involved, analyze the information to determine next steps, get consensus from those involved.

Which of the following can help address resistance to cultural change? Select two responses.
- Promote the intended benefits of adopting the change.
- Reinforce the urgency of making the change.

Which of the following three practices are recommended when creating deliverables during the Excite phase of the change journey? 1. Identify the appropriate training for different user groups. 2. Identify the root cause of emerging conflicts. 3. Document metrics for a successful deployment. 4. Highlight and reward champions of the change. 5. Create user groups based on job responsibilities or workplace functions.
- 1,3,5

What information is important to consider when evaluating how successful the adoption of a Google Workspace is?
- Change in employee engagement

You are acting as a change manager within your organization. How can you help speed up change efforts in reluctant user groups?
- Recruit people within the user groups’ client organization to be Google Guides.

When you design a visualization, what is the main purpose of your design?
- Communicate a specific data story.

Your organization’s marketing team is setting next year’s marketing campaign budget per region. As a cloud data analyst, you are tasked with creating a report that helps with the budgeting process. Which cloud resources could help you provide greater context and valuable insights in your report? Select two answers.
- Publicly available data sources
- Social media applications data

When you are planning a visualization, it is important to keep your data safe and control access to the data. Which basic principle should you consider to help you meet this objective?
- Data governance

A cloud data analyst is designing a dashboard and makes one of the graphs bigger than the others. What is the purpose of this action?
- To communicate that the bigger graph is more important than the others.

Kim, a cloud data analyst, is designing a dashboard for an organization. As a next step, Kim is selecting the tone, color, and graphics. What should Kim keep in mind when selecting these features?
- The organization’s brand

Why is it important to consider the user interface and the user experience in a data visualization? Select two answers.
- To ensure that users understand what options are available to them and what insights can be gained from the data
- To design effective, powerful visualizations that bring data to life

A cloud data analyst is designing a data visualization. They want to make sure that they keep the user in mind during the design process. Which of the following aspects should they consider when designing the visualization?
- What the users need and want

A data analyst wants to ensure that the structure of their content and visualizations are meaningful to people who use screen readers. Which principles do they need to implement to make their dashboards available to everyone?
- Usability and accessibility

After you consider your users' needs, what other factors may influence your design decisions? Select two answers.
- Producing web vs. mobile products and applications
- Allowing users to provide feedback or development requests and report issues

The following chart represents the current score comparison from 4 different high school soccer teams, per period. Which of the following design features should be implemented to improve the chart design? Select two answers. [Alt text: Bar graph. The light blue bar represents the score on period 1, the dark blue bar the scores on period 2. X-axis has teams 1, 2, 3, and 4. Y-axis has numbers 1, 2, 3, and 4.]
- Label the x-axis with the name of the teams.
- Add a meaningful title label to the chart.

How do cloud-based tools help data analyst teams view data and trends in the context of the broader organization?
- Cloud-based tools combine information from multiple data sources.

A cloud data analyst is planning a visualization. As part of the process, they work on understanding the medium through which the cloud data team will interact with the data. What part of the visualization planning workflow are they considering?
- Digital consumption

Taylor is a cloud data analyst working on making visualizations accessible and easy to use. As part of this process, Taylor considers the users who will interact with the visualization. Which principles is Taylor applying? Select two answers.
- User experience
- User interface

A cloud data analyst, what factors influence the method you use to learn your users' needs?
- Type of industry, budget, and tools available

A cloud data analyst is designing a dashboard solution for the human resources department. Which of the following factors should the cloud data analyst consider? Select two answers.
- Visualization access
- Inclusion of user feedback

What is a consequence of overcrowded visualizations?
- Users cannot easily find what they need.

A data analyst is creating a bar chart for a stakeholder dashboard. Which of the following characteristics should the dashboard have to be clear and consistent?
- Meaningful title and labels

A cloud data analyst creates a visualization and encounters the following problems: There are discrepancies in the data that the analyst is using. The analyst cannot access any additional data to enrich the visualization and cannot connect all the datasets needed. What is the most likely cause of the analyst’s problems?
- The analyst is using data silos.

As you design your dashboard, you establish controls that allow only the user with the right privilege to access high-level information. Which policy are you applying?
- Data governance

multiple-select A cloud data analyst is designing the technical aspects sequence of a dashboard. What part of the dashboard is the cloud data analyst designing?
- Workflow

What data type is best suited for displaying categories like names, brands, or browsers?
- String

Which suggestion would be the most impactful to ensure both users with a strong data analysis background and those who have less experience can use the visualization effectively?
- Keep the visualization simple and focus on the key insight.

Which of the following visualization types would be most effective to display the top 10 browsers used by website visitors?
- A bar chart

Which of the following best describes one reason it is important for cloud data analysts to define a purpose statement for the visualization before choosing a visualization type?
- A purpose statement aligns the visualization with the stakeholder’s expectations and ensures the key insight is addressed.

Robin, a cloud data analyst, is creating a dashboard for a pharmaceutical company. The dashboard includes a line chart illustrating the average changes in weight over a period of time for patients in a medical trial. Which type of data is Robin using in the chart?
- Numerical data

You are creating a data visualization to demonstrate how the profits from a company’s five different product lines contribute to total company revenue. Which presentation type would you use for this visual?
- Composition

What types of visualizations can only display numerical data? Select two answers.
- Distribution charts
- Relationship charts

You are tasked with creating some visualizations for a dashboard. How does understanding what type of data you will use in each visualization help you in the design process?
- It helps you choose the chart type.

What is the difference between a scorecard and a dashboard?
- Scorecards track the progress of metrics, and dashboards monitor performance.

You have been asked to create a dashboard that gives company executives a clear understanding of the company's first quarter revenue. You must compare the actual revenue to the target revenue and the revenue from last year's first quarter. Which type of dashboard should you use?
- Strategic dashboard

Jody is a data analyst who is asked to create a visualization. The visualization must allow the user to identify actual results and compare them against goals. Which visualization is the best option for Jody to create?
- A scorecard

Taylor is a data analyst who has been asked to create a dashboard. What information will help Taylor to decide which type of dashboard to use?
- The user, their job role, and the business goal

Taylor is a cloud data analyst tasked with creating a visualization for a call center that displays the actual average call time vs. a goal that management has set for the average call time. What type of visualization should Taylor create?
- A scorecard

A data analyst is scoping an upcoming project. They ask their stakeholders questions that limit the range of possibilities for the project and how long they have to deliver the results. What type of questions are they asking?
- Time-bound questions

A cloud data analyst needs to ask a series of questions before starting a data analysis project. They decide to follow the SMART methodology for asking questions. What does the "S” in SMART stand for?
- Specific

What characteristics of the SMART methodology will provide you with responses that you can act upon?
- Action-oriented questions

As a cloud data analyst, you should ask measurable questions. Which of the following is an example of a measurable question?
- By how much do you want to decrease your response time?

Which option most clearly identifies the primary purpose of the report?
- To analyze historical website traffic data and identify opportunities to improve campaign effectiveness and efficiency

Which proposed color palette approach is most likely to improve the readability and accessibility of the design?
- Use high-contrast purple and yellow to make the bar chart easy to understand.

Which of the following recommendations would most improve the proposed layout?
- Create a clear visual pathway to guide users' eyes through the information in an intuitive way.

Which option is NOT a key purpose of iteration in wireframing?
- Iteration is used primarily to identify technical issues.

Which recommendation would be most effective in making the report more accessible and user-friendly?
- Ensure the visualizations are clearly labeled.

Your stakeholder wants you to create a dashboard. The dashboard, which should be based on a screenshot of a report, needs two additional visualizations to complete the story. What should you do before you build the dashboard?
- You should ask the stakeholder SMART questions to better understand their needs.

Kim is designing a dashboard and is concerned about its accessibility. What strategy can Kim use to pinpoint areas where user accessibility can be improved?
- Create a wireframe.

Why do stakeholders' requests need to be translated?
- To turn the stakeholders’ needs and goals into data to make informed business decisions.

You are in the planning stage of your dashboard. As a next step, you want to communicate the overall visual structure of your dashboard for stakeholders’ feedback. What is the best way to communicate this information to the stakeholders?
- Create a wireframe.

What type of data is used in visualizations to show subjective and explanatory measures of a quality or characteristic?
- Categorical data

Andy, a data analyst, wants to display differences in averages and medians in a data visualization. What type of visualization should Andy use?
- Distribution chart

A cloud data analyst needs to create a highly detailed dashboard to analyze the impact of an organization's social media ads. Which type of dashboard design should the analyst use?
- Tactical dashboard

You are tasked with designing a visualization that identifies actual results, compares them against goals, and helps users decide if actions need to be taken. What type of visualization should you design?
- Scorecard

What methodology should you use to ask effective questions of your stakeholders?
- SMART methodology

As a cloud data analyst, why is it important to ask specific questions?
- To identify the business requirements of the project

A cloud data analyst is designing a dashboard and wants to present their ideas to project stakeholders. What should the cloud data analyst use to present a visual representation of the design?
- A wireframe

A cloud data analyst is developing a dashboard for a stakeholder. They want to share with the stakeholder how the dashboard will look and what functionalities it will have. Why is creating a wireframe the best approach for the cloud data analyst?
- Visual examples tend to be easier to understand than verbal or written communications.

What type of presentation demonstrates correlation between two or more variables?
- Relationship

What type of dashboard is used to identify trends, make comparisons, create predictions, and establish future goals?
- Analytical dashboard

How do cloud based tools help cloud data analysts create visualizations that allow stakeholders to make informed decisions?
- Cloud based tools allow public cloud base data sources to combine with local data sources.

What is a benefit of using a cloud visualization tool?
- It allows cloud data analysts to analyze and activate data from a variety of sources.

As a cloud data analyst, you will use the cloud to access open data to enrich your visualizations. Which are the four main types of data sources in the cloud?
- Public, product-specific, platforms, and company-specific

A data analyst is designing a web-based visualization and considers the security of the data. What should they do to guarantee that the visualization is used as intended for each user while keeping the data safe?
- Give each user permission to access the visualization according to how they would use the visualization.

A cloud data analyst is designing a dashboard. As a next step, they consider the options to keep the data current. What is the data analyst considering?
- Data freshness

As a cloud data analyst, what type of questions can you answer using measures?
- Questions that require a mathematical operation of the dimensions, such as, average, count, and sum

A data analyst is tasked with creating a visualization. What process can they use to understand the dataset’s structure?
- Data exploration

How does data exploration help a data analyst avoid mistakes in a visualization?
- By identifying outliers and abnormalities

How is a dimension represented in a table data model?
- Dimensions are represented by the columns of a table data model.

A data analyst is experimenting with how their data can be visualized. What is one of the benefits of this practice?
- Helps to refine the hypotheses

You are tasked with the creation of a data visualization. You want to present a report that gives a broader and deeper insight, so you decide to use public data available in the cloud. Which process should you use to model your data?
- Data blending

Why does a cloud data analyst use data blending?
- To have a broader, deeper, more diverse, and more informed insight

When creating a report with data blending, which factor would determine how current the data is?
- The freshness of the sources

You are creating a report, and you are in the process of manipulating the data so it is easy to work with and understand. What is this process called?
- Modeling data

A data analyst is working with a company dataset. As a next step, they need to model the data so it is easy to work with and understand. Which are the three basic ways the analyst can model the data?
- Filtering, blending, and aggregating

A data analyst is tasked with the creation of a visualization for a company’s board of directors meeting. The visualization must demonstrate the progress of new product development over the last month. What type of visualization should the data analyst create?
- A report

What is the purpose of a data report?
- To inform and educate

What is a data report?
- A visualization of detailed business intelligence data

What is the difference between a dashboard and a report?
- Reports are a snapshot of a specific point in time while dashboards are updated on a periodic basis.

A data analyst is working on a visualization that needs to be updated twice a day with a currency’s monetary value. How would they benefit from using a cloud base visualization tool?
- The data analyst can integrate the visualization with a trustworthy public dataset to obtain the currency’s value in real time.

A cloud data analyst is creating a visualization that will allow their stakeholders to make basic table calculations and create some forecasts. What type of permission should the cloud data analyst set for the stakeholders?
- User

Why is it important to correctly label the columns in a dataset?
- To have a clear understanding of what information is included in each column

What type of attributes help data professionals comprehend the essential nature of their data?
- Size, quantity, distribution, and accuracy

A cloud data analyst is tasked with creating a visualization for a museum. The visualization needs to include the genres in the museum and list the painting names for each genre. The dataset for the visualization has the following data model: paint_name, genre, painter, creation_year, location, cost, and ownership. Which dimensions should the cloud data analyst use to answer the question?
- Genre and paint_name

You are modeling data to limit the focus of the results to only a specific subset of the data. Which process of modeling data are you using?
- Filtering

Which modeling data process allows you to summarize and average the data?
- Aggregation

A cloud data analyst is pulling data from different locations and combining them to create a report. What are they doing?
- Data blending

A cloud data analyst is preparing a report for the stakeholders. They decide to use datablending as part of the process. Which of the following is an example of the data blending process that the cloud data analyst can use?
- Use the organization dataset combined with a public dataset to enrich the data and use the product category to join the datasets.

What is one difference between a dashboard and a report?
- Dashboards are interactive visualizations while reports are static visualizations.

Which are some of the key features of an enterprise-grade visualization tool?
- Performance optimization, metadata management, data cataloging, and data governance

Noah is a human resource manager that wants to analyze the time and cost to hire a new employee for the organization. The organization uses enterprise-grade data visualization tools. How does this help Noah to conduct an analysis?
- By allowing Noah to directly interact with the data and create reports

A company that wants to make data-driven decisions is evaluating which analytic approach to use. If the company wants users to have more control over their data, which approach should the company adopt?
- Self-service analytic approach

A company is using a guided analytic approach for their data-driven decisions. What can be a downside of using this approach?
- Users could face delays to access the insights.

A user needs to explore and analyze a large dataset to prepare a report. The user is non-technical and does not have a lot of experience working with data. What should they use to create the report?
- Use an enterprise-grade data visualization tool

What technique allows cloud data analysts to explore data at a granular level?
- Data drilling

As a cloud data analyst, you are tasked with creating a visualization that allows the users to navigate from one visualization to other related visualizations. What technique should you implement?
- Drill through

A cloud data analyst is creating a visualization that will allow users to apply “drill up” and “drill down” techniques to explore the data. What must the cloud data analyst define to stipulate how the users will navigate when they “drill” into the data?
- The dimensional hierarchy

A cloud data analyst is working on a visualization and wants to present the results based on specific attributes of the data. They also want to perform the corresponding calculation after they narrow down the data. What process should the cloud data analyst perform to obtain the desired results?
- Filter the data using dimensions.

A cloud data analyst is designing a visualization. The analyst needs to understand the dataset and fine tune the questions that they can answer with the data. What is the first step they should take?
- Data exploration

As a cloud data analyst, you are creating a live dashboard. Next, you need to decide which is the best method to keep the dashboard data up to date. Which feature of a live dashboard are you implementing?
- Automatic refreshing

What is the purpose of a live dashboard?
- To help the organization make quick decisions when time is a top priority

As a cloud data analyst, you are tasked with the creation of a live dashboard for an organization. Which three qualities must your dashboard have?
- The dashboard must have time-sensitive data, automatic refreshing, and alerting.

The role of a data team at an organization begins to shift. Previously, the data team was responsible for controlling the organization's datasets and deciding how to analyze the data. Now, the data team needs to facilitate the safe, uniform, and efficient use of data. Why has the role of the data team changed?
- More organizations are taking a self-service analytics approach.

Why is it important to use a common data language across an organization?
- To avoid ambiguity and improve data quality

What feature of an enterprise-grade data visualization tool allows users to discover, interact with, and learn about the data they are working with?
- Metadata management

In which analytics approach are the visualizations created by an analyst or developer to meet a specific business need?
- Guided analytics

What data exploration technique allows cloud data analysts to work with large datasets and use a manageable amount of data to get familiar with the dataset structure and characteristics?
- Data sampling

A cloud data analyst is working on a visualization for a clothing store. They want to know which clothing_items have total annual sales over $10,000. The dataset that they are using has the following attributes: product_id, size, color, quantity, unit_price, total_annual_sale. How can the cloud data analyst best answer the question?
- By filtering the dataset using: <span style="background-color:#cccccc;">total_annual_sales</span> <span style="background-color:#cccccc;">>=</span> $10,000.

As a cloud data analyst, you want to provide your users with the ability to explore the data from a general view to a granular view. What technique should you use to allow users to explore the data?
- Drill down

A cloud data analyst configures a live dashboard to send an email to the company CEO if one of the key performance indicators reaches a specific value. Which live dashboard feature is the cloud data analyst using?
- Alerting

As a cloud data analyst, why might you serve as a resource for teams to help them understand the data?
- Because non-technical employees are often asked to work directly with data

What feature of enterprise-grade data visualization tools allows users to create their own reports?
- Self-service analytics

A cloud data analyst is building a report and needs to filter the data to find all the customers that have spent more than $150 total on purchases. The data table has the following dimensions: customer_id, country, age, purchase_date, and total. Which of the following filters will the cloud data analyst apply?
- Group the rows by customer, then add the total by customer, and finally filter on total > $150.

A cloud data analyst is preparing a visualization for the marketing department. In the visualization, users will start with a display summarizing all the marketing campaigns. From there, the users can navigate to visualizations with details for each campaign. What technique is the cloud data analyst using?
- Drill through

A cloud data analyst is developing a visualization using data modeling language. How does an Integrated Development Environment (IDE) application help the data analyst to develop the visualization more efficiently?
- An IDE application has all the tools needed for development in one environment.

Morgan and Whitney are cloud data analysts working collaboratively on a dashboard. They create a repository to control the versions of the dashboard code and manage changes. A few days later, Morgan noticed that Whitney’s code was impacting the main dashboard code. What is most likely the cause of this problem?
- Whitney did not create a branch and is working on the main code.

Which feature of an IDE application helps the cloud data analyst to detect possible errors in the code?
- Built-in debugger

Why do cloud data analysts use the version control process?
- To work independently, track changes, collaborate, and test new features

How does an IDE application help a cloud data analyst obtain information about the structure of the data model to write the code more efficiently?
- An IDE allows a cloud data analyst to easily find a model’s metadata.

A cloud data analyst is choosing a data modeling language to create their dashboards. What are two features the data modeling language should have? Select two answers.
- Modularity
- Efficiency

What are two advantages of using data modeling languages? Select two answers.
- You can define fields in a user-friendly way.
- You can build visualizations that meet specific business needs.

A cloud data analyst is using a data modeling language. They create a measure once, and then reuse it in a few different projects. What are two benefits of reusing a measure? Select two answers.
- Business users have a single source of truth.
- The measure works the same way each time it's used.

A cloud data analyst is using a data modeling language. They create a few components that other team members can reuse. How can they communicate this information to other cloud data analysts?
- The cloud data analyst can generate documentation for the model.

A cloud data analyst is defining dimensions and measures using a data modeling language. What is the cloud data analyst doing?
- Describing the structure of data

A cloud data analyst is asked to explain to the board of directors why the organization should adopt a dashboards as code approach. The board of directors is concerned about how time-consuming it can be to build entire dashboards using code. To address these concerns, which of the following points should the cloud data analyst highlight?
- Dashboards following the dashboards as code approach are reusable.

A data team is evaluating the adoption of a dashboards as code approach. They compare using a dashboards as code approach with using a visualization tool’s user interface. Which of the following is a disadvantage of using a visualization tool’s user interface?
- Changes are made directly over the dashboard live version.

A cloud data analyst is asked to revise a live dashboard that was built using the dashboards as code approach. How should they make the changes?
- Update the underlying code in a developer environment.

A cloud data analyst is using a derived table. As a part of this process, the data analyst writes a query to gather the information for the derived table and an outer query to find the information. What is the first thing that happens when the cloud data analyst runs the outer query?
- The derived table is created.

A cloud data analyst evaluates caching a visualization’s data. What is the data analyst trying to achieve?
- Improve the performance of visualizations.

A cloud data analyst uses a derived table to answer a complex data problem. The derived table that they use can also help them solve a different problem. Which limitation of derived tables prevents the cloud data analyst from using the same derived table?
- Derived tables cannot be reused by other queries.

What is the first step to issue a new query when using a caching policy?
- Search the memory for the results.

A cloud data analyst uses caching in their visualization. Why does caching need to be monitored?
- To verify that the cache is working properly, and the data is up-to-date.

A cloud data analyst will use an Integrated Development Environment (IDE) application to develop a visualization. Which feature of the IDE will help them to write the visualization code?
- Code editor

A cloud data analyst makes changes to a live dashboard to improve some of its features. What should they do to prevent the introduction of bugs in the dashboard?
- Use the version control process

Which feature of a data modeling language reduces the complexity of a data model?
- Abstraction

A cloud data analyst uses a tool that allows them to create a single source of truth for users to access the same data at the same time. What tool is the cloud data analyst using?
- Data modeling language

A cloud data analyst adds a feature to a dashboard. They test the feature before it goes online. What approach is the cloud data analyst using to add the feature?
- Dashboards as code

What is the term for a virtual table that is created and used for an outer query as a regular, stored table in a database?
- Derived table

Where does the caching process keep the temporary store data?
- In the memory

What rules does a caching policy establish? Select two answers.
- How long cached results are stored
- When cached results are refreshed

A cloud data analyst creates a new copy of a repository. What did they create?
- A branch

Which feature of a data modeling language creates components that are reusable?
- Modularity

Fill in the blank: A rule with only this condition: "Condition: $selection1" is an example for a ___ event rule.
- Single

Fill in the blank: ___ are a repository of pre-made rules crafted by our experts.
- Curated Detections

Which of the following is NOT a method for ingesting logs using Cloud Storage?
- IBM Cloud Object Storage

Fill in the blank: We can use the ___ action to return if our configuration is successful.
- Ping

Which of the following is NOT a type of Integration in the Marketplace?
- Mandatory Integrations

What section of SOAR settings would you go to if you wanted to customize your company logo displayed?
- Rebranding

In what section would we find the "author" of a rule?
- meta

Fill in the blank: Besides custom actions, we can also build custom ___ to display information and widgets for cases and alerts.
- Views

What section of SOAR settings would you go to if you wanted to see when your License will expire?
- License Management

How do you separate multiple syslog collectors on the same foward when ingesting data?
- By port

When using Chronicle SIEM, what classification of information are things like "Employee ID" or "Department?
- Contextual

Fill in the blank: The ___ provides a container where you can configure instances that can be used in all environments, or you can add different instances for each environment.
- Shared Instances

Fill in the Blank: The rules engine in Chronicle uses a language called ___ to build detections.
- YARA-L

Which of the following is NOT a method of ingestion using Chronicle SIEM?
- Websockets

Fill in the blank: Chronicle SIEM was designed for ___.
- Enrichment

What data model is reserved for context or state, not events?
- Entity Data Model

What section of SOAR would we navigate to if we wanted to build a custom action?
- IDE

What of the following applied threat intelligence platforms is not used with Google Chronicle?
- Google Endpoint Detection and Response

Fill in the Blank: "Is Suspicious" is an example of a boolean flag for ___.
- Entity Enrichments

What feature would you use if you wanted to amend a default parser?
- Parser Extension

What feature allows you to connect to your on premise system to provide information for actions, connectors, etc?
- Remote Agent

What of the following statements is NOT true?
- Every Integration has a Connector

Which of the following components is NOT something provided by an integration using SOAR?
- Parsers

Which of the following is NOT one of the three mandatory sections required for writing rules?
- output

Fill in the blanks: UDM has a ___-like structure and loosely follows a ___ model.
- Tree, Sentence

What can we use to constrain the amount of data that is being looked at to determine if a rule should fire or not?
- Time Window

What does CBN stand for in the context of custom parsers?
- Config Based Normalization

What section of SIEM settings would you go to to find your Customer ID?
- Profile

Fill in the blank: ___ are tools used to further build upon custom integrations.
- API and SDK

What character(s) in this REGEX snippet is used to handle variability in spaces, file extensions, or other unpredictability within the values that we are seraching for in our criteria? "$selection1.target.process.command_line = /reg.*query HKLM \/f password \/t REG_SZ \/s/"
- .*

What does the "T" indicate on a case in Chronicle?
- Test

Which one is not a default source of Applied Threat Intelligence for Chronicle Secops
- reCAPTCHA Enterprise

Which of the following is customizable through widgets?
- Alert View

Which one of the described functions is currently is not Duet AI assisted?
- Creating Playbooks

What term in the case view lets us know that we have an action to take to continue the playbook?
- Pending Action

What type of widget can get automatically installed by an integration?
- Predefined Widget

What feature allows you to build playbook actions from the marketplace?
- Integrations

What's an example of an event from the sample case we reviewed?
- Network HTTP

A user is in an empty SOAR instance, what feature will provide the fastest way for them to test the case management capability
- Simulate Alerts

What language can you use to customize a widget in Chronicle SOAR?
- HTML/Javascript

How are entities different in cases vs an alert?
- They are only the entities for the given alert

What term would you add to a query to look for things that may have different capitalizations?
- "nocase"

Which of the following is NOT a type of dashboard in Chronicle SIEM?
- Executive Dashboards

In a specific alert within Case Management, what are the tabs that an analyst will typically see under an alert if they have full permissions?
- Overview, Events, Playbooks, Graph

What does the acronym "TDIR" stand for?
- Threat detection, investigation, and response

What feature, which must be toggled on, allows you to view previous searches?
- Search History

The "UDM Search" feature in the alert view is an example of?
- An action with a predefined widget

Which of the following is an example of a default SIEM Dashboard?
- Cloud Detections and Response

A field marked with "E" in a log denotes the following
- Enrichment

Which statement is true?
- Every playbook needs to have a trigger

Which feature lets you set limits on the amount of resources that can be used by a project or user?
- Quota policies

Which offers a reactive method to help you track and understand what you’ve already spent on Google Cloud resources and provide ways to help optimize your costs?
- Cloud billing reports

Why is it a benefit that the Google Cloud resource hierarchy follows inheritance and propagation rules?
- Permissions set at higher levels of the resource hierarchy are automatically inherited by lower-level resources.

Which Google Cloud tool lets you estimate how changes to cloud usage will affect costs?
- Google Cloud Pricing Calculator

Which feature lets you set alerts for when cloud costs exceed a certain limit?
- Budget threshold rules

Which term describes a centralized hub within an organization composed of a partnership across finance, technology, and business functions?
- Center of excellence

Which represents the lowest level in the Google Cloud resource hierarchy?
- Resources

Google Cloud Observability provides a comprehensive set of monitoring, logging, and diagnostics tools. Which tool collects latency data from applications and provides insights into how they’re performing?
- Cloud Trace

Which of these measures should be automated on a regular basis and stored in geographically separate locations to allow for rapid recovery from disasters or failures?
- Backups

What does the Cloud Profiler tool do?
- It identifies how much CPU power, memory, and other resources an application uses.

How does replication help the design of resilient and fault-tolerant infrastructure and processes in a cloud environment?
- It creates multiple copies of data or services and distributes them across different servers or locations.

Whose job is to ensure the reliability, availability, and efficiency of software systems and services deployed in the cloud?
- Site reliability engineer

Why is escalating a support ticket not always the best course of action when trying to resolve an issue?
- It may disrupt the workflow of the Customer Care team and lead to delays in other cases.

Which Google Cloud Customer Care support level is designed for enterprises with critical workloads and features the fastest response time?
- Premium Support

Which metric shows how well a system or service is performing?
- Service level indicators

One of the four golden signals is latency. What does latency measure?
- How long it takes for a particular part of a system to return a result.

Google's data centers were the first to achieve ISO 14001 certification. What is this standard’s purpose?
- It’s a framework for an organization to enhance its environmental performance through improving resource efficiency and reducing waste.

Kaluza is an electric vehicle smart-charging solution. How does it use BigQuery and Looker Studio?
- It uses BigQuery and Looker Studio to create dashboards that provide granular operational insights.

What sustainability goal does Google aim to achieve by the year 2030?
- To be the first major company to operate completely carbon free.

What type of cloud computing service lets you bind your application code to libraries that give access to the infrastructure your application needs?
- Platform as a service

What is the primary benefit to a Google Cloud customer of using resources in several zones within a region?
- For improved fault tolerance

Why might a Google Cloud customer use resources in several regions around the world?
- To bring their applications closer to users around the world, and for improved fault tolerance

Order these IAM role types from broadest to finest-grained.
- Basic roles, predefined roles, custom roles

Choose the correct completion: Services and APIs are enabled on a per-__________ basis.
- Project

Which of these values is globally unique, permanent, and unchangeable, but can be modified by the customer during creation?
- The project ID

For which of these interconnect options is a Service Level Agreement available?
- Dedicated Interconnect

What is the main reason customers choose Preemptible VMs?
- To reduce cost.

In Google Cloud VPCs, what scope do subnets have?
- Regional

How does Cloud Load Balancing allow you to balance HTTP-based traffic?
- Across multiple Compute Engine regions.

Which database service can scale to higher database sizes?
- Spanner

What is the correct use case for Cloud Storage?
- Cloud Storage is well suited to providing durable and highly available object storage.

Why would a customer consider the Coldline storage class?
- To save money on storing infrequently accessed data.

Cloud Run can only pull images from (Select 2):
- Docker Hub
- Artifact Registry

How can you avoid hallucinations when using a large language model?
- Train the model on a clean, curated dataset.

Which one of the following is not a type of prompt?
- Two-shot

Which of the following is not a good practice for constructing prompts?
- Include long and detailed sentences.

Generative AI is a type of artificial intelligence that can ____.
- Generate text, images, or other data using generative models.

Which security principle advocates granting users only the access they need to perform their job responsibilities?
- Least privilege

Which cybersecurity threat occurs when errors arise during the setup of resources, inadvertently exposing sensitive data and systems to unauthorized access?
- Configuration mishaps

Which is a benefit of cloud security over traditional on-premises security?
- Increased scalability.

Which cybersecurity threat demands a ransom payment from a victim to regain access to their files and systems.
- Ransomware

Which cloud security principle ensures that security practices and measures align with established standards and guidelines?
- Compliance

Which three essential aspects of cloud security form the foundation of the CIA triad?
- Confidentiality, integrity, and availability

Which definition best describes a firewall?
- A network security device that monitors and controls incoming and outgoing network traffic based on predefined security rules

What common cybersecurity threat involves tricking users into revealing sensitive information or performing actions that compromise security?
- Phishing

Which cloud security principle relates to keeping data accurate and trustworthy?
- Integrity

Which is the responsibility of the cloud provider in a cloud security model?
- Maintaining the customer's infrastructure.

Which aspect of cloud identity management verifies the identity of users or systems?
- Authentication

Which practice involves a combination of processes and technologies that help reduce the risk of data breaches, system outages, and other security incidents in the cloud?
- Security operations (SecOps)

What Google Cloud product provides robust protection from harmful distributed denial-of-service (DDoS) attacks?
- Google Cloud Armor

What security feature adds an extra layer of protection to cloud-based systems?
- Two-step verification (2SV)

Select the correct statement about Identity and Access Management (IAM).
- IAM provides granular control over who has access to Google Cloud resources and what they can do with those resources.

Which is a powerful encryption algorithm trusted by governments and businesses worldwide?
- Advanced Encryption Standard (AES)

What metric does Google Cloud use to measure the efficiency of its data centers to achieve cost savings and a reduced carbon footprint?
- Power Usage Effectiveness (PUE)

Google Cloud encrypts data at various states. Which state refers to when data is being actively processed by a computer?
- Data in use

Which report provides a way for Google Cloud to share data about how the policies and actions of governments and corporations affect privacy, security, and access to information?
- Transparency reports

Which Google Cloud feature allows users to control their data's physical location?
- Regions

Which is one of Google Cloud’s seven trust principles?
- All customer data is encrypted by default.

Where can you find details about certifications and compliance standards met by Google Cloud?
- Compliance resource center

Which term describes the concept that data is subject to the laws and regulations of the country where it resides?
- Data sovereignty

Which of the following is a hybrid cloud setup?
- Your on-premises environments interconnected with your cloud provider.

A service mesh provides centralized observability for your services running where?
- Your Anthos GKE clusters, running on-premises or in Google Cloud Platform.

You need to enforce consistency across all of your environments, using Anthos Config Management. Where is your source of truth config state stored?
- In a single Git repository, that may be hosted either on-premises or elsewhere.

How does the GKE Connect Agent communicate with Google Cloud Platform APIs?
- The GKE Connect Agent uses an outbound TLS connection to a GKE Connect Proxy running in Google Cloud Platform.

Which of the following are benefits of Google Kubernetes Engine (GKE)? Mark all that are true (3 correct answers).
- Auto-scaling, auto-upgrade, and auto-node-repair.
- Seamless operation with high-availability and SLA.
- Runs Certified Kubernetes ensuring portability across clouds and on-premises.

Your GKE On-Prem environment includes which clusters with what purpose?
- Admin cluster(s) with control-plane(s), and User cluster(s) with containerized workloads.

What is different about viewing GKE On-Prem clusters using the GCP Console from viewing GKE clusters running on GCP.
- All clusters allow you to review the same cluster, node, and workload details, whether you're running clusters and workloads in GKE On-Prem or GKE on GCP.

How do you securely register and login to remote kubernetes clusters?
- Register the remote cluster using a GCP service account token, then login to the cluster using a Kubernetes Service Account token, or OpenID Connect.

Which of the following is the high-performance data-plane component for Istio?
- Envoy: a high-performance, open-source service-proxy.

Which of the following are installed by default with the demo configuration profile of Istio?
- Pilot, Citadel, Promethus, and Grafana.

Which of the following are benefits of separating applications from network functions using a service mesh? Mark all that are true (3 Correct answers).
- You can observe and adjust service metrics and telemetry across many clusters and services without changing your application.
- You can configure traffic routing between versions, and services without changing your application.
- You can enforce network security policies without changing your application.

Which Istio component is responsible for checking to see that quotas and ACL's allow a request?
- Mixer: enforces access control and usage policies across the service mesh.

There are a number of common challenges encountered by data engineers. Which of the following approaches best address the challenge of data accuracy and quality?
- Build ETL pipelines to clean and transform data that is then stored in a data warehouse.

Which of the following statements are true? (Choose TWO)
- BigQuery is optimized for high-read data
- Cloud SQL is optimized for high-throughput writes

Which statement best describes a data lake?
- The place where you capture every aspect of your business operations. Data is stored in its natural, raw format.

Which of the following statements on Cloud Storage are true?
- Cloud Storage implements both IAM policy and Access Control Lists
- Cloud Storage simulates a file system
- Cloud Storage allows you to set retention policies on all objects in a bucket

Which of the following statements on BigQuery is incorrect?
- The number of slots allotted to a query is independent of query complexity

True or False: ARRAYS can be a standalone field type or part of a STRUCTS field in BigQuery?
- True

Stella is a new member of a team in your company who has been put in charge of monitoring VM instances in the organization. Stella will need the required permissions to perform this role. How should you grant her those permissions?
- Add Stella to a Google Group in your organization. Bind that group to roles/compute.viewer.

How are resource hierarchies organized in Google Cloud?
- Organization, Folder, Project, Resource

You want to use the Cloud Shell to copy files to your Cloud Storage bucket. Which Cloud SDK command should you use?
- gcloud storage

Fiona is the billing administrator for the project associated with Cymbal Superstore’s eCommerce application. Jeffrey, the marketing department lead, wants to receive emails related to budget alerts. Jeffrey should have access to no additional billing information. What should you do?
- Use Cloud Monitoring notification channels to send Jeffrey an email alert.

Pick two choices, from the options below, that provide a command line interface to Google Cloud.
- Cloud Shell
- Cloud SDK

What Google Cloud project attributes can be changed?
- The Project Name.

You need to add new groups of employees in Cymbal Superstore’s production environment. You need to consider Google’s recommendation of using least privilege. What should you do?
- Grant predefined and custom roles that provide necessary permissions and grant basic roles only where needed.

Jane will manage objects in Cloud Storage for the Cymbal Superstore. She needs to have access to the proper permissions for every project across the organization. What should you do?
- Add Jane to a group that has the roles/storage.objectAdmin role assigned at the organizational level.

The Operations Department at Cymbal Superstore wants to provide managers access to information about VM usage without allowing them to make changes that would affect the state. You assign them the Compute Engine Viewer role. Which two permissions will they receive?
- compute.images.get
- compute.images.list

How are billing accounts applied to projects in Google Cloud? (Pick two).
- A project and its resources can only be tied to one billing account.
- A billing account can be linked to one or more projects.

What is the lowest level basic role that gives you permissions to change resource state?
- Editor.

Which Google Cloud interface allows for scripting actions in a set of command line executables?
- Cloud Shell.

The projected amount of cloud storage required for Cymbal Superstore to enable users to post pictures for project reviews is 10 TB of immediate access storage in the US and 30 TB of storage for historical posts in a bucket located near Cymbal Superstore’s headquarters. The contents of this bucket will need to be accessed once every 30 days. You want to estimate the cost of these storage resources to ensure this is economically feasible. What should you do?
- Use the pricing calculator to estimate the price for 10 TB of multi-region Standard storage, 30 TB for regional Nearline, and egress charges for reads from the bucket.

Cymbal Superstore has a need to populate visual dashboards with historical time-based data. This is an analytical use-case. Which two storage solutions could they use?
- Bigtable
- BigQuery

An application running on a highly-customized version of Ubuntu needs to be migrated to Google Cloud. You need to do this in the least amount of time with minimal code changes. How should you proceed?
- Create Compute Engine Virtual Machines and migrate the app to that infrastructure

Cymbal Superstore’s supply chain application frequently analyzes large amounts of data to inform business processes and operational dashboards. What storage class would make sense for this use case?
- Standard

Cymbal Superstore decides to migrate their supply chain application to Google Cloud. You need to configure specific operating system dependencies. What should you do?
- Implement an application using virtual machines on Compute Engine.

Cymbal Superstore decides to pilot a cloud application for their point of sale system in their flagship store. You want to focus on code and develop your solution quickly, and you want your code to be portable. How do you proceed?
- Package your code to a container image and post it to Cloud Run.

Cymbal Superstore is piloting an update to its ecommerce app for the flagship store in Minneapolis, Minnesota. The app is implemented as a three-tier web service with traffic originating from the local area and resources dedicated for it in us-central1. You need to configure a secure, low-cost network load-balancing architecture for it. How do you proceed?
- Configure a standard tier proxied external https load balancer connected to the web tier as a frontend and a regional internal load balancer between the web tier and the backend.

Which Google Cloud load balancing option runs at Layer 7 of the TCP stack?
- Global http(s)

You want to deploy a microservices application. You need full control of how you manage containers, reliability, and autoscaling, but don’t want or need to manage the control plane. Which compute option should you use?
- Google Kubernetes Engine

Cymbal Superstore needs to analyze whether they met quarterly sales projections. Analysts assigned to run this query are familiar with SQL. What data solution should they implement?
- BigQuery

Which storage class is designed for long term storage has a 365 day minimum storage agreement, and a lower storage price as compared to other storage types?
- Archive storage

Which serverless option is based on developing and executing small snippets of code?
- Cloud Functions

What action does the terraform apply command perform?
- Sets up resources requested in the terraform config file.

The development team for the supply chain project is ready to start building their new cloud app using a small Kubernetes cluster for the pilot. The cluster should only be available to team members and does not need to be highly available. The developers also need the ability to change the cluster architecture as they deploy new capabilities. How would you implement this?
- Implement a private standard zonal cluster in us-central1-a with a default pool and an Ubuntu image.

You require a Cloud Storage bucket serving users in New York City and San Francisco. Users in London will not use this bucket. You do not plan on using ACLs. What CLI command do you use?
- Run a gcloud storage buckets create command, but do not specify –-location.

The backend of Cymbal Superstore’s e-commerce system consists of managed instance groups. You need to update the operating system of the instances in an automated way using minimal resources. What do you do?
- Create a new instance template, then click Update VMs. Set the update type to PROACTIVE. Click Start.

You need to quickly deploy a containerized web application on Google Cloud. You know the services you want to be exposed. You do not want to manage infrastructure. You only want to pay when requests are being handled and need support for custom packages. What technology meets these needs?
- Cloud Run

You need to analyze and act on files being added to a Cloud Storage bucket. Your programming team is proficient in Python. The analysis you need to do takes at most 5 minutes. You implement a Cloud Function to accomplish your processing and specify a trigger resource pointing to your bucket. How should you configure the --trigger-event parameter using gcloud?
- --trigger-event google.storage.object.finalize

Which Virtual Private Cloud (VPC) network type allows you to fully control IP ranges and the definition of regional subnets?
- Custom mode network

Cymbal Superstore asks you to implement Cloud SQL as a database backend to their supply chain application. You want to configure automatic failover in case of a zone outage. You decide to use the gcloud sql instances create command set to accomplish this. Which gcloud command line argument is required to configure the stated failover capability as you create the required instances?
- --availability-type

Cymbal Superstore’s sales department has a medium-sized MySQL database. This database includes user-defined functions and is used internally by the marketing department at Cymbal Superstore HQ. The sales department asks you to migrate the database to Google Cloud in the most timely and economical way. What should you do?
- Configure a Compute Engine VM with an N2 machine type, install MySQL, and restore your data to the new instance.

Cymbal Superstore’s marketing department needs to load some slowly changing data into BigQuery. The data arrives hourly in a Cloud Storage bucket. You want to minimize cost and implement this in the fewest steps. What should you do?
- Use the BigQuery data transfer service to schedule a transfer between your bucket and BigQuery.

Which services are based on logic implemented in containers? (Pick two).
- Cloud Run
- Google Kubernetes Engine

Which data storage service is a unique globally available, horizontally scalable database with relational semantics?
- Spanner

Which of the following tasks are part of the process when configuring a managed instance group? (Pick two).
- Defining Health checks
- Providing Number of instances

Cymbal Superstore’s GKE cluster requires an internal http(s) load balancer. You are creating the configuration files required for this resource. What is the proper setting for this scenario?
- Annotate your service object with a “neg" reference.

You want to implement a lifecycle rule that changes your storage type from standard to nearline after a specific date. What conditions should you use? (Pick two).
- MatchesStorageClass
- CreatedBefore

You have a scheduled snapshot you are trying to delete, but the operation returns an error. What should you do to resolve this problem?
- Detach the snapshot schedule before deleting it.

Cymbal Superstore has a subnetwork called mysubnet with an IP range of 10.1.2.0/24. You need to expand this subnet to include enough IP addresses for at most 2000 users or devices. What should you do?
- gcloud compute networks subnets expand-ip-range mysubnet --region us-central1 --prefix-length 21

You have a Cloud Run service with a database backend. You want to limit the number of connections to your database. What should you do?
- Set Max instances.

What Kubernetes object provides access to logic running in your cluster via endpoints that you define?
- Services

You want to view a description of your available snapshots using the command line interface (CLI). What gcloud command should you use?
- gcloud compute snapshots list

What is the declarative way to initialize and update Kubernetes objects?
- kubectl apply

Cymbal Superstore’s supply chain management system has been deployed and is working well. You are tasked with monitoring the system’s resources so you can react quickly to any problems. You want to ensure the CPU usage of each of your Compute Engine instances in us-central1 remains below 60%. You want an incident created if it exceeds this value for 5 minutes. You need to configure the proper alerting policy for this scenario. What should you do?
- Choose resource type of VM instance and metric of CPU utilization, condition trigger if any time series violates, condition is above, threshold is .60 for 5 minutes.

What GKE object implements an http(s) load balancer?
- Ingress

Which Cloud Run autoscaling setting should you set if you want to limit cost?
- Max instances

You are trying to assign roles to the dev and prod projects of Cymbal Superstore’s e-commerce app but are receiving an error when you try to run set-iam policy. The projects are organized into an ecommerce folder in the Cymbal Superstore organizational hierarchy. You want to follow best practices for the permissions you need while respecting the practice of least privilege. What should you do?
- Ask your administrator for the roles/resourcemanager.folderIamAdmin for the ecommerce folder

You have a custom role implemented for administration of the dev/test environment for Cymbal Superstore’s transportation management application. You are developing a pilot to use Cloud Run instead of Cloud Functions. You want to ensure your administrators have the correct access to the new resources. What should you do?
- Make the change to the custom role locally and run an update on the custom role

Cymbal Superstore is implementing a mobile app for end users to track deliveries that are en route to them. The app needs to access data about truck location from Pub/Sub using Google recommended practices. What kind of credentials should you use?
- Service account key

Which of the scenarios below is an example of a situation where you should use a service account?
- For individual GKE pods

You need to configure access to Spanner from the GKE cluster that is supporting Cymbal Superstore’s ecommerce microservices application. You want to specify an account type to set the proper permissions. What should you do?
- Assign permissions through service account referenced by the application

Which Cloud Audit log is disabled by default with a few exceptions?
- Data Access audit logs

Outline where Cloud Audit logs can be accessed: in the logging tab of the operations interface Link: https://cloud.google.com/storage/docs/audit-logging You are configuring audit logging for Cloud Storage. You want to know when objects are added to a bucket. Which type of audit log entry should you monitor?
- DATA_WRITE log entries

You are authenticating an application to service APIs. Both resources are internal to the Google Cloud environment. What type of credentials should you use?
- Temporary credentials

What kind of account is meant for machine-to-machine communication in Google Cloud?
- Service account

What is the purpose of the decoder in an encoder-decoder architecture?
- To predict the next word in the output sequence
- To generate the output sequence from the vector representation

What are two ways to generate text from a trained encoder-decoder model at serving time?
- Greedy search and beam search

What is the purpose of the encoder in an encoder-decoder architecture?
- To convert the input sequence into a vector representation

What is the difference between greedy search and beam search?
- Greedy search always selects the word with the highest probability, whereas beam search considers multiple possible words and selects the one with the highest combined probability.

What is the name of the machine learning architecture that takes a sequence of words as input and outputs a sequence of words?
- Encoder-decoder

Which option would you choose if you required cross-regional load balancing for a web application?
- HTTP(S) Load Balancing

What is used to forward traffic from one instance to another within the same network, across subnetworks, or even between Google Cloud zones, and doesn’t require an external IP address?
- Routing table

Select the true statement.
- VPCs are global and subnets are regional.

Which connectivity solution provides a direct connection to Google?
- Dedicated Interconnect

What term describes where the Google network is connected to the rest of the internet?
- Point of presence (PoP)

Where can you store and version-control your Terraform templates?
- Cloud Source Repositories

Which one of the following provides access to logs created by developers who deploy code to Google Cloud?
- Service Logs

In Cloud Logging, what is the default log retention period for data access logs?
- 30 days

Which tool ingests metrics, events, and metadata to generate insights through dashboards, Metrics Explorer charts, and automated alerts?
- Cloud Monitoring

Which is a fundamental attribute of cloud computing?
- Customers get access to computing resources over the internet, from anywhere.

Which service provides raw compute, storage, and network capabilities, organized virtually into resources that are similar to physical data centers?
- IaaS

Where are Google Cloud resources deployed?
- Zone

What is the fully automated, elastic third-wave cloud that consists of a combination of automated services and scalable data?
- Container-based architecture

Which project identifier does not need to be globally unique?
- Project name

Which command line tool is part of the Cloud SDK?
- gsutil

Which billing tool is designed to prevent the over-consumption of resources due to an error or a malicious attack?
- Quotas

In the Google Cloud resource hierarchy, into which entity are resources organized?
- Projects

What is the purpose of APIs offered by various Google Cloud services?
- APIs allow code to be written to control Google Cloud services.

Which of these is a lightweight, fully managed serverless execution environment for building and connecting cloud services?
- Cloud Functions

Which App Engine environment is based on preconfigured container instances?
- Standard environment

Which of these is a managed compute platform that lets you run stateless containers through web requests or Pub/Sub events?
- Cloud Run

Which of these is a managed environment for deploying containerized apps?
- Google Kubernetes Engine

What is the Compute Engine feature that allows VMs to be added to or subtracted from an application based on load metrics?
- Autoscaling

Which compute service would be considered IaaS?
- Compute Engine

What is the name of the model that is used to generate text captions for images?
- Encoder-decoder model

What is the name of the dataset the video uses to train the encoder-decoder model?
- COCO dataset

What is the goal of the image captioning task?
- To generate text captions for images

What is the purpose of the encoder in an encoder-decoder model?
- To extract information from the image.

What is the purpose of the decoder in an encoder-decoder model?
- To generate output data from the information extracted by the encoder

What is the purpose of the attention mechanism in an encoder-decoder model?
- To allow the decoder to focus on specific parts of the image when generating text captions.

What kind of transformer model is BERT?
- Encoder-only model

What is the attention mechanism?
- A way of determining the importance of each word in a sentence for the translation of another sentence

What does fine-tuning a BERT model mean?
- Training the model and updating the pre-trained weights on a specific task by using labeled data

What are the three different embeddings that are generated from an input sentence in a Transformer model?
- Token, segment, and position embeddings

What are the two sublayers of each encoder in a Transformer model?
- Self-attention and feedforward

What are the encoder and decoder components of a transformer model?
- The encoder ingests an input sequence and produces a sequence of hidden states. The decoder takes in the hidden states from the encoder and produces an output sequence.

What is the name of the language modeling technique that is used in Bidirectional Encoder Representations from Transformers (BERT)?
- Transformer

BERT is a transformer model that was developed by Google in 2018. What is BERT used for?
- It is used to solve many natural language processing tasks, such as question answering, text classification, and natural language inference.

What is a transformer model?
- A deep learning model that uses self-attention to learn relationships between different parts of a sequence.

What is the name of the machine learning architecture that can be used to translate text from one language to another?
- Encoder-decoder

What is the advantage of using the attention mechanism over a traditional sequence-to-sequence model?
- The attention mechanism lets the model focus on specific parts of the input sequence.

What is the name of the machine learning technique that allows a neural network to focus on specific parts of an input sequence?
- Attention mechanism

How does an attention model differ from a traditional model?
- Attention models pass a lot more information to the decoder.

What is the advantage of using the attention mechanism over a traditional recurrent neural network (RNN) encoder-decoder?
- The attention mechanism lets the decoder focus on specific parts of the input sequence, which can improve the accuracy of the translation.

What is the purpose of the attention weights?
- To assign weights to different parts of the input sequence, with the most important parts receiving the highest weights.

What are the two main steps of the attention mechanism?
- Calculating the attention weights and generating the context vector

Cymbal Direct drones continuously send data during deliveries. You need to process and analyze the incoming telemetry data. After processing, the data should be retained, but it will only be accessed once every month or two. Your CIO has issued a directive to incorporate managed services wherever possible. You want a cost-effective solution to process the incoming streams of data. What should you do?
- Ingest data with ClearBlade IoT Core, and then publish to Pub/Sub. Use Dataflow to process the data, and store it in a Nearline Cloud Storage bucket.

Customers need to have a good experience when accessing your web application so they will continue to use your service. You want to define key performance indicators (KPIs) to establish a service level objective (SLO). Which KPI could you use?
- Eighty-five percent of requests succeed when aggregated over 1 minute

Cymbal Direct is working with Cymbal Retail, a separate, autonomous division of Cymbal with different staff, networking teams, and data center. Cymbal Direct and Cymbal Retail are not in the same Google Cloud organization. Cymbal Retail needs access to Cymbal Direct’s web application for making bulk orders, but the application will not be available on the public internet. You want to ensure that Cymbal Retail has access to your application with low latency. You also want to avoid egress network charges if possible. What should you do?
- Verify that the subnet range Cymbal Retail is using doesn’t overlap with Cymbal Direct’s subnet range, and then enable VPC Network Peering for the project.

You are creating a new project. You plan to set up a Dedicated interconnect between two of your data centers in the near future and want to ensure that your resources are only deployed to the same regions where your data centers are located. You need to make sure that you don’t have any overlapping IP addresses that could cause conflicts when you set up the interconnect. You want to use RFC 1918 class B address space. What should you do?
- Create a new project, delete the default VPC network, set up a custom mode VPC network, and then use IP addresses in the 172.16.x.x address range to create subnets in your desired regions.

Cymbal Direct developers have written a new application. Based on initial usage estimates, you decide to run the application on Compute Engine instances with 15 Gb of RAM and 4 CPUs. These instances store persistent data locally. After the application runs for several months, historical data indicates that the application requires 30 Gb of RAM. Cymbal Direct management wants you to make adjustments that will minimize costs. What should you do?
- Stop the instance, and then use the command gcloud compute instances set-machine-type VM_NAME --machine-type 2-custom-4-30720. Start the instance again.

Cymbal Direct has created a proof of concept for a social integration service that highlights images of its products from social media. The proof of concept is a monolithic application running on a single SuSE Linux virtual machine (VM). The current version requires increasing the VM’s CPU and RAM in order to scale. You would like to refactor the VM so that you can scale out instead of scaling up. What should you do?
- Use containers instead of VMs, and use a GKE autoscaling deployment.

You are working in a mixed environment of VMs and Kubernetes. Some of your resources are on-premises, and some are in Google Cloud. Using containers as a part of your CI/CD pipeline has sped up releases significantly. You want to start migrating some of those VMs to containers so you can get similar benefits. You want to automate the migration process where possible. What should you do?
- Manually create a GKE cluster, and then use Migrate for Anthos to set up the cluster, import VMs, and convert them to containers.

Cymbal Direct is evaluating database options to store the analytics data from its experimental drone deliveries. You're currently using a small cluster of MongoDB NoSQL database servers. You want to move to a managed NoSQL database service with consistent low latency that can scale throughput seamlessly and can handle the petabytes of data you expect after expanding to additional markets. What should you do?
- Create a Bigtable instance, extract the data from MongoDB, and insert the data into Bigtable.

Cymbal Direct's employees will use Google Workspace. Your current on-premises network cannot meet the requirements to connect to Google's public infrastructure. What should you do?
- Connect the on-premises network to Google’s public infrastructure via a partner that supports Carrier Peering.

You are working with a client who is using Google Kubernetes Engine (GKE) to migrate applications from a virtual machine–based environment to a microservices-based architecture. Your client has a complex legacy application that stores a significant amount of data on the file system of its VM. You do not want to re-write the application to use an external service to store the file system data. What should you do?
- In Cloud Shell, create a YAML file defining your StatefulSet called statefulset.yaml. Create a StatefulSet in GKE by running the command <span style="background-color:#cccccc;">kubectl</span> <span style="background-color:#cccccc;">apply</span> <span style="background-color:#cccccc;">-f</span> statefulset.yaml

If you have a business requirement to minimize costs, what are two things you could do?
- Follow Google’s rightsizing recommendations
- Do not run instances when they are not being used

What could Cymbal Direct use to estimate costs for their Google Cloud environment?
- Cloud Pricing Calculator

Cymbal Direct wants to allow partners to make orders programmatically, without having to speak on the phone with an agent. What should you consider when designing the API?
- The API backend should be loosely coupled. Clients should not be required to know too many details of the services they use. For REST APIs, HTTP(S) is the most common protocol.

You have deployed your frontend web application in Kubernetes. Based on historical use, you need three pods to handle normal demand. Occasionally your load will roughly double. A load balancer is already in place. How could you configure your environment to efficiently meet that demand?
- Use the "kubectl autoscale" command to change the deployment’s maximum number of instances to six.

Cymbal Direct wants a layered approach to security when setting up Compute Engine instances. What are some options you could use to make your Compute Engine instances more secure?
- Use network tags to allow traffic only from certain sources and ports. Turn on Secure boot and vTPM.

Your existing application runs on Ubuntu Linux VMs in an on-premises hypervisor. You want to deploy the application to Google Cloud with minimal refactoring. What should you do?
- Write Terraform scripts to deploy the application as Compute Engine instances.

You need to deploy a load balancer for a web-based application with multiple backends in different regions. You want to direct traffic to the backend closest to the end user, but also to different backends based on the URL the user is accessing. Which of the following could be used to implement this?
- The request is received by the global external HTTP(S) load balancer. A global forwarding rule sends the request to a target proxy, which checks the URL map and selects the backend service. The backend service sends the request to Compute Engine instance groups in multiple regions.

Cymbal Direct needs to use a tool to deploy its infrastructure. You want something that allows for repeatable deployment processes, uses a declarative language, and allows parallel deployment. You also want to deploy infrastructure as code on Google Cloud and other cloud providers. What should you do?
- Automate the deployment with Terraform scripts.

You are working with a client who has built a secure messaging application. The application is open source and consists of two components. The first component is a web app, written in Go, which is used to register an account and authorize the user’s IP address. The second is an encrypted chat protocol that uses TCP to talk to the backend chat servers running Debian. If the client's IP address doesn't match the registered IP address, the application is designed to terminate their session. The number of clients using the service varies greatly based on time of day, and the client wants to be able to easily scale as needed. What should you do?
- Deploy the web application using the App Engine standard environment with a global external HTTP(S) load balancer and a network endpoint group. Use a managed instance group for the backend chat servers. Use an external network load balancer to load-balance traffic across the backend chat servers.

Cymbal Direct's user account management app allows users to delete their accounts whenever they like. Cymbal Direct also has a very generous 60-day return policy for users. The customer service team wants to make sure that they can still refund or replace items for a customer even if the customer’s account has been deleted. What can you do to ensure that the customer service team has access to relevant account information?
- Temporarily disable the account for 30 days. Export account information to Cloud Storage, and enable lifecycle management to delete the data in 60 days.

Cymbal Direct must meet compliance requirements. You need to ensure that employees with valid accounts cannot access their VPC network from locations outside of its secure corporate network, including from home. You also want a high degree of visibility into network traffic for auditing and forensics purposes. What should you do?
- Enable VPC Service Controls, define a network perimeter to restrict access to authorized networks, and enable VPC Flow Logs for the networks you need to monitor.

Cymbal Direct wants to create a pipeline to automate the building of new application releases. What sequence of steps should you use?
- Set up a source code repository. Check in code. Run unit tests. Build a Docker container. Deploy.

Which Storage Class should you use for data that is going to be accessed at least once every two weeks?
- Standard

Which network configuration would ensure low latency for US drone pilots?
- Only deploy resources to Regions in the US

Your client created an Identity and Access Management (IAM) resource hierarchy with Google Cloud when the company was a startup. Your client has grown and now has multiple departments and teams. You want to recommend a resource hierarchy that follows Google-recommended practices. What should you do?
- Use multiple projects with established trust boundaries, and change the resource hierarchy to reflect company organization.

You've recently created an internal App Engine application for developers in your organization. The application lets developers clone production Cloud SQL databases into a project specifically created to test code and deployments. Your previous process was to export a database to a Cloud Storage bucket, and then import the SQL dump into a legacy on-premises testing environment database with connectivity to Google Cloud via Cloud VPN. Management wants to incentivize using the new process with Cloud SQL for rapid testing and track how frequently rapid testing occurs. How can you ensure that the developers use the new process?
- Create a custom role to restrict access to what developers are allowed to do. Create a group for the developers, and associate the group with your custom role. Ensure that the custom role does not have "cloudsql.instances.export."

Cymbal Direct is experiencing success using Google Cloud and you want to leverage tools to make your solutions more efficient. Erik, one of the original web developers, currently adds new products to your application manually. Erik has many responsibilities and requires a long lead time to add new products. You need to create an App Engine application to let Cymbal Direct employees add new products instead of waiting for Erik. However, you want to make sure that only authorized employees can use the application. What should you do?
- Create a Google group and add authorized employees to it. Configure Identity-Aware Proxy (IAP) to the App Engine application as a HTTP-resource. Add the group as a principle with the role "IAP-secured Web App User."

Cymbal Direct’s social media app must run in a separate project from its APIs and web store. You want to use Identity and Access Management (IAM) to ensure a secure environment. How should you set up IAM?
- Use separate service accounts for each component (social media app, APIs, and web store) with predefined or custom roles to grant access.

Cymbal Direct needs to make sure its new social media integration service can’t be accessed directly from the public internet. You want to allow access only through the web frontend store. How can you prevent access to the social media integration service from the outside world, but still allow access to the APIs of social media services?
- Remove external IP addresses from the VM instances running the social media service and place them in a private VPC behind Cloud NAT. Any SSH connection for management should be done with Identity-Aware Proxy (IAP) or a bastion host (jump box) after allowing SSH access from IAP or a corporate network.

Your client is legally required to comply with the Payment Card Industry Data Security Standard (PCI-DSS). The client has formal audits already, but the audits are only done periodically. The client needs to monitor for common violations to meet those requirements more easily. The client does not want to replace audits but wants to engage in continuous compliance and catch violations early. What would you recommend that this client do? Responses:
- Enable the Security Command Center (SCC) dashboard, asset discovery, and Security Health Analytics in the Premium tier. Export or view the PCI-DSS Report from the SCC dashboard's Compliance tab.

Cymbal Direct wants to use Identity and Access Management (IAM) to allow employees to have access to Google Cloud resources and services based on their job roles. Several employees are project managers and want to have some level of access to see what has been deployed. The security team wants to ensure that securing the environment and managing resources is simple so that it will scale. What approach should you use?
- Grant access by assigning predefined roles to groups. Use multiple groups for better control. Give access as low in the hierarchy as possible to prevent the inheritance of too many abilities from a higher level.

Cymbal Direct has an application running on a Compute Engine instance. You need to give the application access to several Google Cloud services. You do not want to keep any credentials on the VM instance itself. What should you do?
- Create a service account with one or more predefined or custom roles, which give access to the required services.

You have several Compute Engine instances running NGINX and Tomcat for a web application. In your web server logs, many login failures come from a single IP address, which looks like a brute force attack. How can you block this traffic?
- Ensure that an HTTP(S) load balancer is configured to send traffic to the backend Compute Engine instances running your web server. Create a Google Cloud Armor policy with a default rule action of "Allow." Add a new rule that specifies the IP address causing the login failures as the Condition, with an action of "Deny" and a deny status of "403," and accept the default priority (1000). Add the load balancer backend service's HTTP-backend as the target.

Michael is the owner/operator of “Zneeks,” a retail shoe store that caters to sneaker aficionados. He regularly works with customers who order small batches of custom shoes. Michael is interested in using Cymbal Direct to manufacture and ship custom batches of shoes to these customers. Reasonably tech-savvy but not a developer, Michael likes using Cymbal Direct's partner purchase portal but wants the process to be easy. What is an example of a user story that could describe Michael’s persona?
- As a shoe retailer, Michael wants to send Cymbal Direct custom purchase orders so that batches of custom shoes are sent to his customers.

Cymbal Direct has chosen to use multiple projects for their environment. How do you describe this choice?
- Using multiple projects adds both security and other benefits.

What type of data might be inadvertently picked up by a drone during a delivery?
- Video of private property

Cymbal Direct wants to improve its drone pilot interface. You want to collect feedback on proposed changes from the community of pilots before rolling out updates systemwide. What type of deployment pattern should you implement?
- You should implement A/B testing.

You have implemented a manual CI/CD process for the container services required for the next implementation of the Cymbal Direct’s Drone Delivery project. You want to automate the process. What should you do?
- Implement a build trigger that applies your build configuration when a new software update is committed to Cloud Source Repositories.

You are asked to implement a lift and shift operation for Cymbal Direct’s Social Media Highlighting service. You compose a Terraform configuration file to build all the necessary Google Cloud resources. What is the next step in the Terraform workflow for this effort?
- Run terraform init to download the necessary provider modules.

The pilot subsystem in your Delivery by Drone service is critical to your service. You want to ensure that connections to the pilots can survive a VM outage without affecting connectivity. What should you do?
- Implement a managed instance group and load balancer.

You are implementing a disaster recovery plan for the cloud version of your drone solution. Sending videos to the pilots is crucial from an operational perspective. What design pattern should you choose for this part of your architecture?
- Hot with a low recovery time objective (RTO)

You want to establish procedures for testing the resilience of the delivery-by-drone solution. How would you simulate a scalability issue?
- Load test your application to see how it responds.

Developers on your team frequently write new versions of the code for one of your applications. You want to automate the build process when updates are pushed to Cloud Source Repositories. What should you do?
- Implement a build trigger that references your repository and branch.

The number of requests received by your application is nearing the maximum specified in your design. You want to limit the number of incoming requests until the system can handle the workload. What design pattern does this situation describe?
- Applying a circuit breaker

You have an application implemented on Compute Engine. You want to increase the durability of your application. What should you do?
- Implement a scheduled snapshot on your Compute Engine instances.

Your development team used Cloud Source Repositories, Cloud Build, and Artifact Registry to successfully implement the build portion of an application's CI/CD process.. However, the deployment process is erroring out. Initial troubleshooting shows that the runtime environment does not have access to the build images. You need to advise the team on how to resolve the issue. What could cause this problem?
- The Artifact Registry might be in a different project.

Cymbal Direct needs a database for their next project. They want to meet their business and technical objectives. What should they do?
- Use a Managed Database Service

Cymbal Direct has decided to use Cloud Build. Which technical requirement justifies this decision?
- Ensure that developers can deploy container based workloads

Cymbal Direct releases new versions of its drone delivery software every 1.5 to 2 months. Although most releases are successful, you have experienced three problematic releases that made drone delivery unavailable while software developers rolled back the release. You want to increase the reliability of software releases and prevent similar problems in the future. What should you do?
- Adopt an “agile” development process. Reduce the time between releases as much as possible. Automate the build process from a source repository, which includes versioning and self-testing. Use Cloud Monitoring, Cloud Logging, and Cloud Alerting to ensure visibility. Use a canary deployment to detect issues that could cause rollback.

Your client has adopted a multi-cloud strategy that uses a virtual machine-based infrastructure. The client's website serves users across the globe. The client needs a single dashboard view to monitor performance in their AWS and Google Cloud environments. Your client previously experienced an extended outage and wants to establish a monthly service level objective (SLO) of no outage longer than an hour. What should you do?
- In Cloud Monitoring, create an uptime check for the URL your clients will access. Configure it to check from multiple regions. Use the Cloud Monitoring dashboard to view the uptime metrics over time and ensure that the SLO is met. Recommend an SLO of 97% uptime per day.

Cymbal Direct’s warehouse and inventory system was written in Java. The system uses a microservices architecture in GKE and is instrumented with Zipkin. Seemingly at random, a request will be 5-10 times slower than others. The development team tried to reproduce the problem in testing, but failed to determine the cause of the issue. What should you do?
- Create metrics in Cloud Monitoring for your microservices to test whether they are intermittently unavailable or slow to respond to HTTPS requests. Use Cloud Profiler to determine which functions/methods in your application’s code use the most system resources. Use Cloud Trace to identify slow requests and determine which microservices/calls take the most time to respond.

Cymbal Direct uses a proprietary service to manage on-call rotation and alerting. The on-call rotation service has an API for integration. Cymbal Direct wants to monitor its environment for service availability and ensure that the correct person is notified. What should you do?
- Ensure that VPC firewall rules allow access from the IP addresses used by Google Cloud's uptime-check servers. Create a Pub/Sub topic for alerting as a monitoring notification channel in Google Cloud Observability. Create an uptime check for the appropriate resource's external IP address, with an alerting policy set to use the Pub/Sub topic. Create a Cloud Function that subscribes to the Pub/Sub topic to send the alert to the on-call API.

Cymbal Direct has a new social media integration service that pulls images of its products from social media sites and displays them in a gallery of customer images on your online store. You receive an alert from Cloud Monitoring at 3:34 AM on Saturday. The store is still online, but the gallery does not appear. The CPU utilization is 30% higher than expected on the VMs running the service, which causes the managed instance group (MIG) to scale to the maximum number of instances. You verify that the issue is real by checking the site, and verify that it is not CPU-related by checking the incidents timeline. What should you do to resolve the issue?
- Increase the maximum number of instances in the MIG and verify that this resolves the issue.

Cymbal Direct is working on a social media integration service in Google Cloud. Mahesh is a non-technical manager who wants to ensure that the project doesn’t exceed the budget and responds quickly to unexpected cost increases. You need to set up access and billing for the project. What should you do? Responses:
- Use the predefined Billing Account Administrator role for the Billing Administrator group, and assign Mahesh to the group. Create a project budget. Configure billing alerts to be sent to the Billing Administrator. Use resource quotas to cap how many resources can be deployed.

Your organization is planning a disaster recovery (DR) strategy. Your stakeholders require a recovery time objective (RTO) of 0 and a recovery point objective (RPO) of 0 for zone outage. They require an RTO of 4 hours and an RPO of 1 hour for a regional outage. Your application consists of a web application and a backend MySQL database. You need the most efficient solution to meet your recovery KPIs. What should you do?
- Use a global HTTP(S) load balancer. Deploy the web application as Compute Engine managed instance groups (MIG) in two regions, us-west and us-east. Configure the load balancer to the us-east backend. Use Cloud SQL with high availability (HA) enabled in us-east and a cross-region replica in us-west. Manually promote the us-west Cloud SQL instance and change the load balancer backend to us-west.

You need to adopt Site Reliability Engineering principles and increase visibility into your environment. You want to minimize management overhead and reduce noise generated by the information being collected. You also want to streamline the process of reacting to analyzing and improving your environment, and to ensure that only trusted container images are deployed to production. What should you do?
- Adopt Google Cloud Observability to gain visibility into the environment. Use Cloud Trace for distributed tracing, Cloud Logging for logging, and Cloud Monitoring for monitoring, alerting, and dashboards. Only page the on-call contact about novel issues that violate an SLO or events that haven’t been seen before. Use Binary Authorization to ensure that only signed container images are deployed.

Your environment has multiple projects used for development and testing. Each project has a budget, and each developer has a budget. A personal budget overrun can cause a project budget overrun. Several developers are creating resources for testing as part of their CI/CD pipeline but are not deleting these resources after their tests are complete. If the compute resource fails during testing, the test can be run again. You want to reduce costs and notify the developer when a personal budget overrun causes a project budget overrun. What should you do?
- Configure billing export to BigQuery. Create a Google Cloud budget for each project. Create a Pub/Sub topic for developer-budget-notifications. Create a Cloud Function to notify the developer based on the labels. Modify the build scripts/pipeline to label all resources with the label “creator” set to the developer’s email address. Use spot (preemptible) instances wherever possible.

How could Cymbal Direct design their code to maximize their savings by running spot (preemptable) instances?
- Externalize state.

How could Cymbal Direct save money for testing/development resources?
- Provision resources only when needed using <span style="background-color:#ffff00;">Terraform.</span>

Which of the following options offered by Dataflow makes it easy to create resilient streaming pipelines when working with unbounded data? Select TWO correct answers.
- Controls to ensure correctness
- Ability to flexibly reason about time

When performing batch and streaming data processing, which Google product performs data aggregation and transformation?
- Dataflow

Which of the following about Pub/Sub is NOT true?
- Pub/Sub stores your messages indefinitely until you request it

Which of the following about Pub/Sub topics and subscriptions are true? (Select all 2 correct responses)
- 1 or more subscriber(s) can request from the same subscription
- 1 or more publisher(s) can write to the same topic

Which of the following delivery methods is ideal for subscribers needing close to real time performance?
- Push Delivery

True or False? Pub/Sub guarantees that messages delivered are in the order they were received
- False

What element is applied by Pub/Sub to messages that allows Dataflow to perform aggregation of different time windows?
- Timestamps

Which of the following is true for Data Studio?
- Data Studio supports data ingest through multiple connectors.

True or False? Data Studio can issue queries to BigQuery
- True

Which of the following can help improve performance of Bigtable? (Select all 3 correct responses)
- Add more nodes
- Clients and Bigtable are in same zone
- Change schema to minimize data skew

Which of the following are true about Bigtable? (Mark all 3 correct responses)
- Great for time-series data
- Ideal for >1TB data
- Offers very low-latency in the order of milliseconds

True or False? Bigtable learns access patterns and attempts to distribute reads and storage across nodes evenly
- True

Which of the following practices help optimize BigQuery queries?
- Avoid using unnecessary columns
- Filter early and often
- Put the largest table on the left

Which of the following is the best way to generate more creative or unexpected content by adjusting the model parameters in Vertex AI Studio?
- Setting the temperature to a high value.

What is a prompt?
- A prompt is the natural language request or instruction to guide a model to generate a desired output.
- A prompt is a short piece of text that is given to the large language model as input, and it can be used to control the output of the model in many ways.

What is Vertex AI Studio?
- A tool that lets you quickly test and customize generative AI models.
- A tool that lets you quickly test and customize generative AI models so you can leverage their capabilities in your applications.

Which of the following is a type of prompt that allows a generative AI model to perform a task with only a few examples?
- Few-shot prompt

What does Gemini multimodal do with Vertex AI Studio?
- Gemini multimodal processes text, image, and video data, and generates text as output.

Which best describes an SLO?
- It is a target measure you want your service to achieve.

Which most accurately describes a user story?
- It is a short description of a feature written from the user's point of view.

Using SMART criteria, which below would be the least effective KPI?
- User experience design

You’re writing a service, and you need to handle a client sending you invalid data in the request. What should you return from the service?
- A 400 error code

Which below would violate 12-factor app best practices?
- Store configuration information in your source repository for easy versioning.

You’re building a RESTful microservice. Which would be a valid data format for returning data to the client?
- All options are correct.

You’ve re-architected a monolithic web application so state is not stored in memory on the web servers, but in a database instead. This has caused slow performance when retrieving user sessions though. What might be the best way to fix this?
- Use a caching service like Memorystore for Redis.

Which Google Cloud tools can be used to build a continuous integration pipeline?
- All of these

What Google Cloud feature would be easiest to use to automate a build in response to code being checked into your source code repository?
- Build triggers

Currently, you are using Firestore to store information about products, reviews, and user sessions. You'd like to speed up data access in a simple, cost-effective way. What would you recommend?
- Cache the data using Memorystore.

You are a global financial services company with users all over the world. You need a database service that can provide low latency worldwide with strong consistency. Which service might you choose?
- Spanner

You want to analyze sales trends. To help achieve this, you want to combine data from your on-premises Oracle database with Google Analytics data and your web server logs. Where might you store the data so it is both easy to query and cost-effective?
- BigQuery

You need to store user preferences, product information, and reviews for a website you are building. There won't be a huge amount of data. What would be a simple, cost-effective, managed solution?
- Firestore

You want a secure, private connection between your network and a Google Cloud network. There is not a lot of volume, but the connection needs to be extremely reliable. Which configuration below would you choose?
- VPN with high availability and Cloud Router.

You are deploying a large-scale web application with users all over the world and a lot of static content. Which load balancer configuration would likely be the most suitable?
- HTTP load balancer with SSL configured and the CDN enabled.

You are a large bank deploying an online banking service to Google Cloud. The service needs high volume access to mainframe data on-premises. Which connectivity option would likely be most suitable?
- Cloud Interconnect

You have a contract with a service provider to manage your Google VPC networks. You want to connect a network they own to your VPC. Both networks are in Google Cloud. Which Connection option should you choose?
- VPN with high availability and Cloud Router.

You need to deploy an existing application that was written in .NET version 4. The application requires Windows servers, and you don't want to change it. Which should you use?
- Compute Engine

You've been asked to write a program that uses Vision API to check for inappropriate content in photos that are uploaded to a Cloud Storage bucket. Any photos that are inappropriate should be deleted. What might be the simplest, cheapest way to deploy in this program?
- Cloud Functions

You have containerized multiple applications using Docker and have deployed them using Compute Engine VMs. You want to save on costs and simplify container management. What might you do?
- Migrate the containers to GKE.

You need a relational database for a system that requires extremely high availability (99.999%). The system must run uninterrupted even in the event of a regional outage. Which database would you choose?
- Spanner

You're creating a service and you want to protect it from being overloaded by too many client retries in the event of a partial outage. Which design pattern would you implement?
- Circuit breaker

What do you have to do to enable encryption when using Cloud Storage?
- Nothing as encryption is enabled by default.

What Google Cloud service can you use to enforce the principle of least privilege when using Google Cloud?
- IAM members and roles

Which Google Cloud features could help reduce the risk of DDoS attacks?
- All of these

You don't want programmers to have access to production resources. What's the easiest way to do this in Google Cloud?
- Create development and production projects, and don't give developers access to production.

You've made a minor fix to one of your services. You want to deploy the new version with no downtime. Which would you choose?
- Rolling update

You're deploying test environments using Compute Engine VMs. Some downtime is acceptable, and it is very important to deploy them as inexpensively as possible. What single thing below could save you the most money?
- Preemptible machines

You made a minor update to a service and would like to test it in production by sending a small portion of requests to the new version. Which would you choose?
- Canary deployment

Your service has an availability SLO of 99%. What could you use to monitor whether you are meeting it?
- Uptime check

What was one of the first actions initiated to improve US cybersecurity?
- BeyondCorp Enterprise

Asset and device management within Google Workspace helps you during which phase of the Security and Resilience framework?
- Identify

The Work Safer approach uses which of the following security products?
- Google Workspace, reCAPTCHA, BeyondCorp, Titan Security Keys, Chrome Enterprise.

When a user logs into Workspace, Google assumes breach and focuses on detection and response. This is an example of which Google core security tenet?
- Trust Nothing.

Most of your company is working from home, which has increased the risk of cybersecurity attacks. How does Google Cloud ensure that your domains are secured?
- Google Workspace is combined with Chronicle and Crowdstrike to provide optimum protection.

Which is a Google commitment to data privacy, ownership, and compliance?
- You own your data.

How does Google ensure that BeyondCorp is scalable and reliable?
- It’s agentless, meaning no additional software is needed.

Which Work Safer solution gives you the best protection for your website?
- ReCAPTHCA Enterprise

Your extended workforce needs to access corporate resources. You need to make sure protection is provided and that there is clear separation between work and personal activity. What is the benefit of using BeyondCorp to achieve this goal?
- Your extended workforce can access the apps and resources they need without the need for a VPN.

Your organization has apps that are accessed by third parties. You need to make sure that the third parties are evaluated using the zero trust architecture. What Workspace security feature ensures secure access to apps and resources?
- BeyondCorp Enterprise

What is one benefit of using Chrome Enterprise to prevent suspicious web activity?
- Continuous and automatic updates, with no security patching required.

BeyondCorp can cover which of the following endpoints? (Choose 2)
- Mobile Phones

Which applications can you grant employees, contractors, and partners access to with BeyondCorp?
- All of the above.

You need a security solution that will scale with your data. How does Chronicle provide a solution to this challenge?
- Chronicle is Cloud-native and operates at scale and speed.

How does Cortex XDR give end-users extra protection?
- Cortex XDR is faster than other solutions, so you can verify threats quickly.

Your organization needs to be sure all Workspace data is free of cybersecurity threats. What solution should you use to detect, investigate, and respond to threats?
- Chronicle

An organization is looking to build their own Zero Trust Architecture. They use Google Workspace, and want to reduce the risks associated with log ingestion, missed threats, and lack of security expertise. What solution should the organization choose?
- Zero Trust Security + Monitoring.

What is the primary function of Crowdstrike?
- Endpoint protection.

Your organization needs to make sure Google staff with administrative rights are background checked at all times. Which Assured Controls product achieves this?
- Access Management

Where can you enable Assured Controls for your Google Workspace?
- In the Admin console.

How does Google guarantee that it meets policy requirements?
- Data access controls ensure that individuals have gone through proper background checks, and block individuals if necessary.

Assured Controls addresses which part of compliance?
- Access

What does Assured Controls give you more control over?
- Cloud service provider’s access to customer data.

What are the two questions that need to be answered to address CJIS data?
- Where is my data located, Who has access to my data.

With Assured Controls add-on feature, you can:
- Approve administrative access to your Workspace data before it happens.

What network security control allows public access to private resources?
- Cloud NAT

Which security control addresses data exfiltration concepts?
- VPC Service Controls

What are external load balancers?
- A fleet of load balancers that are positioned as close as possible to the user.

What are firewall rules used for?
- Allow traffic between resources in the same VPC.

Which is not a part of a Cloud Armor rule?
- Update

Your organization has an application that only needs to be accessed from certain geographical locations. How does Google Cloud Armor help mitigate DDos attacks in this instance?
- It allows, blocks, or rates limit traffic based on Geo parameters.

Google Cloud Armor gives you the capability to create security policies between:
- Cloud Load Balancer and the backend

Which Google Cloud product integrates with external load balancers, to build protection as close as possible to the user?
- Google Cloud Armor

SSL offloading policies are defined by:
- The user

What Google Cloud Armor feature uses machine learning to analyze and give suggestions for blocking potential attacks?
- Adaptive Protection

What is the bot management feature in Google Cloud Armor used for?
- Differentiating between humans and bots.

You need to make sure that only your provider sends traffic to the Cloud Load Balancer. What should you use?
- A named IP list.

Pre-configured WAF rules provide detection and protection based on what?
- Signatures

Adaptive Protection analyzes logs and delivers real-time data on possible attacks. What Google Cloud product generates the logs?
- Google Cloud Armor

What two types of attacks does Adaptive Protection look for?
- HTTP GET Flood and HTTP POST Flood

Redemption flow gives users another chance to prove they’re not a bot by:
- Having traffic complete a reCAPTCHA challenge if their reCAPTCHA score isn’t safe enough.

You’ve set up a threshold to throttle traffic in Google Cloud Armor for additional security, and you need to determine whether incoming traffic is human or bot. If your traffic exceeds the threshold you’ve set, you can redirect the traffic to:
- reCAPTCHA

Where are Google Cloud Armor findings and assets sent?
- Security Command Center

Which Google Cloud tool enables you to find real-time information about requests?
- Cloud Monitoring

The two primary findings being sent to the Security Command Center are:
- Allowed traffic spike and increasing deny ratio.

Cloud Logging provides you with traffic visibility so that you can:
- Fine-tune rules

In a fast-growing fintech start-up, Jake holds a critical role as part of the blue team tasked with managing vulnerabilities. What is Jake's primary focus within this role?
- Jake focuses on consistent monitoring, prompt detection, immediate incident response, and strategic recovery to safeguard the company's digital assets and networks.

The head of cybersecurity at a corporation discusses potential training exercises with the company’s CEO, including tabletop exercises. Which of the following accurately portrays the benefits of tabletop exercises?
- Tabletop exercises replicate emergency situations, allowing the organization to test its readiness in real-world scenarios.

Daniel, a cloud security team lead, conducts a workshop on security operations (SecOps) to ensure his team understands the essentials of cloud security. During the workshop, which of the following fundamental components of SecOps cloud security should Daniel share with the team? Select two answers.
- Managing and responding to detected incidents
- Logging and monitoring

What is the primary role of Google Cloud Security Command Center (SCC)?
- Monitoring for data security risks, potential threats, security findings, and asset inventory

Raj, a cybersecurity analyst, investigates suspected disguised malicious applications within their Google Cloud. To investigate, Raj uses Google Cloud's Intrusion Detection System (IDS). Which technology component of Google's IDS should Raj use to detect these applications?
- App-ID™ technology

How does the integration of security tools, like Elastic Stack or AlienVault OSSIM, assist in incident management?
- By facilitating efficient real-time threat detection and response

A cybersecurity analyst detects a malicious cryptocurrency miner installed in one of their company's systems. Using the National Institute of Standards and Technology (NIST) incident response lifecycle, they confirm the incident. What are the next two phases of the NIST lifecycle after confirming the miner's presence? Select two answers.
- Quarantine the system with the miner.
- Eliminate the miner and restore the system.

What differentiates anomaly-based detection from signature-based detection? Select two answers.
- Anomaly-based detection does not require signatures.
- Anomaly-based detection uses a baseline for network activity.

Emma explains the latest log management procedure to their team. What skill does this demonstrate?
- Solid communication

A junior engineer tries to modify a database in Google Cloud (GC), but the engineer’s current Identity and Access Management (IAM) role does not grant the required permissions. To follow up, the IT manager investigates the junior engineer’s access attempt. Which type of log in Google Cloud should the IT manager check?
- Policy denied audit logs

A chief information security officer and IT manager consider moving some logs to cold storage or even storing them offline. Why might they choose to take this step?
- To protect vital log data during undetected, prolonged security breaches

A junior engineer identifies a series of logs that seem odd. The engineer analyzes them and finds a solution. Which workplace skill does this action demonstrate? Select two answers.
- High attention to detail
- Critical thinking

Rebecca, a cybersecurity specialist, wants to be proactive about potential unauthorized access incidents within the company's cloud environment. What two alert types should Rebecca use to identify unauthorized access in the cloud environment? Choose two answers.
- Unusual network traffic
- Suspicious login activity

What are some common filter types used in querying alerts?
- Alert source, destination, severity, and time

A security analyst has evidence that an employee is attempting actions against the organization's security guidelines. The security analyst plans to use the company's alert system to monitor this situation. Which kind of alert should they use?
- Policy violations

A cybersecurity analyst starts using the Chronicle SIEM tool. What impact will this tool have on the alert search techniques they use in their cloud security work?
- The tool generates machine learning-driven insights to simplify data management in handling cloud security events.
- The tool reduces the necessity of filter reassessment or changes in the analyst’s cybersecurity practice.

A cybersecurity team needs help establishing defensive strategies. Which service can they use to gain insights about the tactics, techniques, and procedures used by global attackers?
- Mandiant Threat Intelligence

An organization needs to identify security issues to improve their security posture. To do that, they hire a team to evaluate the organization’s cyber defenses. The team simulates potential attacks and pinpoints security issues they find. What is the term for this team?
- A red team

A cybersecurity analyst needs to detect, respond, and analyze incidents from several different sources on a daily basis. What set of tools should the analyst use for this task?
- Google Chronicle Security Operations Suite

What happens during the Preparation phase of the NIST incident response lifecycle? Select two answers.
- Roles and responsibilities are assigned
- An incident response plan is developed

What does the Post-Incident Activity phase in an incident management plan involve? Select two answers.
- Identifying gaps in the incident response plan
- Determining the root cause of the incident

James is an IT manager tasked with reviewing security systems due to increasing cyber threats. James needs to decide to either use a signature-based or an anomaly-based detection system. What is the key difference James needs to consider?
- Signature-based detection uses a known set of malicious patterns; anomaly-based detection uses a baseline of normal behavior.

Barbara is a security expert working for the IT department at a company. Barbara needs to understand how changes to configurations and settings on the company's systems are tracked and monitored. What type of log should Barbara use?
- System event audit logs

Carol works as an information security analyst. She must focus on multiple activities at one time. Which activity must Carol complete with a high attention to detail, so she can identify potential cybersecurity breaches?
- Spotting patterns and trends in log files

How can an organization improve the effectiveness of their alert system to better recognize patterns and reduce false positives?
- Use machine learning

Which is a best practice for querying alerts?
- Save frequently-used searches for future use.

In what step of Lockheed Martin’s Cyber Kill Chain® is the information about the target gathered?
- Reconnaissance

What is the goal of the exploitation step in Lockheed Martin’s Cyber Kill Chain®?
- To gain access to the target

What is the final step of Lockheed Martin’s Cyber Kill Chain®?
- Actions on objectives

Zara, a cloud security professional, is receiving numerous false positive alerts. Zara discusses the challenge with her colleague, Raj, an experienced cybersecurity expert. Which does Raj think is the cause of the false positive alerts? Select two answers.
- Over engineered detection strategies
- Misconfigurations in tools and systems

In which Google Cloud tool does VirusTotal integrate, providing threat context and reputation data relating to suspicious artifacts?
- Chronicle

A cybersecurity professional is implementing Google's Event Threat Detection in their organization. They set up built-in detection rules to enhance security. Which of the following rules are they most likely using?
- A rule that blocks suspicious login attempts

Emma works as a cybersecurity analyst for a corporation that uses Google Cloud. Emma often relies on the Security Command Center to identify and address commonplace security issues. What problem is Emma likely to resolve using this tool?
- Misconfigurations

Which service in Google Cloud is used to analyze suspicious files, domains, URLs, and IP addresses for potential malicious content?
- VirusTotal

A security team responsible for protecting an organization's cyber infrastructure plans to implement threat hunting tools. Which aspect of threat hunting tools will help the team deal with critical threats quickly?
- Alert prioritization

Emeka uses regular expression (RegEx) to sort through vast amounts of log data. When Emeka identifies a piece of text that matches a specific pattern, what will the RegEx tool do?
- Find and retrieve the matched text for further analysis.

A cybersecurity expert is tasked with preparing a large volume of data for analysis. What will they do to ensure data normalization?
- Process raw data to achieve consistent formatting.

A security analyst decides to implement the five best practices to manage indicators of compromise (IoC). First, the analyst proactively monitors systems. Next, they conduct investigations whenever needed, and lead a timely response to any threats they detect. What are the two additional best practices the analyst should implement? Select two answers.
- Documentation
- Risk assessment

Why is the Cyber Kill Chain® useful in defense against advanced persistent threats (APTs)?
- It can identify APT activity and help mitigate it.

A cloud cybersecurity specialist at an e-commerce company assesses the potential vulnerabilities in the steps of the Cyber Kill Chain®. When analyzing the command and control step, what is the primary objective for an attacker?
- Get remote access to the target's system

Sam is a cloud security professional. Recently, Sam identified a significant increase in false positive alerts. What is a consequence of these false positive alerts for Sam and the cloud security team?
- Greater vulnerability to actual threats

A nonprofit organization needs a Google Cloud tool that can provide a centralized location for all the cloud assets in their environment and help them identify potential security risks. Which tool should they use?
- Security Command Center

What is one of the most common cloud security challenges?
- Issues from misconfigurations

During a routine security check, a cloud security professional discovers an indicator of compromise (IoC) in their system. What should be their next step?
- Perform a thorough investigation of the detected IoC.

A chief security officer at a manufacturing company recently implemented Chronicle SIEM and studied the MITRE ATT&CK® framework. Why would the security officer use MITRE ATT&CK® with tools like Chronicle SIEM? Select two answers.
- To map security controls
- To uncover defensive gaps

What are tactics in threat hunting?
- The reasons for an attacker performing an action

A healthcare organization aggregates data from their infrastructure regularly. What are the main reasons for aggregating the data? Select two answers.
- To recognize patterns for better decisions
- To gain a comprehensive view of the organization's operations

Emma is programming a new feature and needs to use regular expressions (RegEx) to analyze text. In her use of RegEx, Emma uses the following symbol: . What functionality does this period symbol have?
- It matches any single character in Emma’s text.

As a cloud data analyst, which unique challenge impacts evidence preservation in the cloud?
- The lifespan and scalability of cloud resources

In response to a recent cybersecurity incident, an IT team lead initiates an urgent cybersecurity investigation. Why does the IT team lead encourage teamwork and engage the entire team in the process of preserving digital evidence?
- To ensure every team member is responsible for the care and integrity of the evidence

What does the chain of custody refer to in an incident investigation?
- The process of preserving the integrity of the evidence

A data breach occurs at an online retail company. Kylie, the company's lead cybersecurity analyst, is asked to investigate the breach. Kylie has different types of data available to review. What type of information should Kylie prioritize as digital evidence for the investigation?
- Unusual IP addresses that were caught interacting abnormally with the company's servers during the breach

Chen is an IT security analyst who receives multiple alerts daily, many of which might be false positives. What strategies should Chen adopt to correctly distinguish between true incidents and false alarms? Select two answers.
- Inspect affected systems for signs of breach.
- Investigate the evidence and context of each alert.

Which member of the security operations team conducts a detailed examination to uncover the truth and meaning in an incident?
- Lead investigator

A big bank is under a major cybersecurity attack. The bank's security team quickly moves into the incident control phase of their response plan. They decide to use their advanced security orchestration, automation, and response (SOAR) tool. What unique function do SOAR tools perform during this phase? Select two answers.
- They help assign tasks and track progress.
- They facilitate coordination between team members.

A security analyst receives several security alerts. They are responsible for classifying these alerts based on their importance and possible effect on the company's infrastructure. What factors should the security analyst consider when prioritizing these security alerts?
- Severity, potential impact, and urgency

How did the user’s credentials become compromised?
- The user entered their credentials into the phishing form.

Which of the following are examples of documentation elements? Select all that apply.
- Timelines
- Technical findings
- Incident summaries

Fill in the blank: Documentation such as an executive summary _____.
- provides a quick overview of an incident

What is 2023-10-12T11:46:00Z an example of?
- A timestamp

A cybersecurity manager in a large healthcare system transitions to a hybrid cloud infrastructure. The manager is developing a strategy to manage potential security incidents. As part of this strategy, they consider implementing playbooks. In the context of cloud security incident response and management, what is a playbook?
- A set of pre-set responses or automated procedures the healthcare system can enact in response to a security incident

As a cloud security professional, what feature of Google Cloud can help you keep evidence in incident investigations?
- Secure storage solutions

A security operations professional just identified unauthorized access to one of their Google Cloud storage buckets. What is their first response?
- Create an initial incident report

Sarah, the CISO of an e-commerce company, initiates an investigation into a recent security incident. Sarah asks her team to create comprehensive documentation of the entire event. Understanding the potential sensitivity of the information, why does Sarah store these documents in a secure location? Select two answers.
- To safeguard sensitive information pertaining to the security incident
- To comply with relevant data handling regulations

In the event of a phishing incident, a cloud security professional should manage the situation using a playbook. What does a playbook do in this situation? Select two answers.
- The playbook blocks the malicious IP addresses associated with the attack and resets the passwords of accounts compromised during the incident.
- The playbook initiates a series of predetermined actions which are triggered upon receiving an alert from the security system.

A security team engages the incident response process. What starts this process?
- An actionable alert

What are the three steps in a playbook?
- Trigger, action, and flow

A cloud security analyst is working with a Chronicle SOAR playbook when an alert pops up from a security solution. What role does this alert play in orchestrating the SOAR playbook?
- The alert initiates or triggers the playbook's actions.

How does the use of playbooks help cloud security teams?
- Playbooks streamline incident investigations.

What is the role of chain of custody in cybersecurity incident investigation? Select two answers.
- Document and preserve evidence.
- Establish a clear timeline for evidence handling.

Priya is a cybersecurity analyst whose role includes preserving evidence when working with cloud resources. During investigations, which types of evidence should Priya focus on collecting from the company's cloud infrastructure? Select two answers.
- Operating system logs from the containers
- Logs from the virtual machines

Chen, a crisis incident manager, conducts a review meeting after handling a major incident at their organization. What is Chen's main focus during the incident control phase?
- Minimize the impact of the incident.

Carlos, a cybersecurity analyst, assesses the severity of a potential security incident. To properly prioritize the response, what question should Carlos ask?
- How serious is the potential damage this threat could cause?

Alvand leads an incident response team during a cybersecurity incident. How can Alvand define efficient resource management during this crucial time?
- Make certain that all essential cloud systems and team members are communicating effectively.

What is the final step you should take in responding to an unauthorized access to a Google Cloud Storage bucket?
- Plan and execute a mitigation action to minimize the incident's impact.

In incident response documentation, what information is typically included after the incident summary?
- Details about the evidence that prompted the incident response process

What is the main purpose of Chronicle SIEM?
- To identify the highest priority threats.

How does the flow help in a playbook in Chronicle SOAR?
- It helps in decision making.

Santiago is tasked with iterating his organization's SOAR playbooks. What should be Santiago’s main objective to complete this task?
- Insist on a strategy of continuous refinement and adaptation of playbooks grounded in experiences from past incidents.

A company experiences a system crash and needs to recover quickly. They rely on Google Cloud services during the recovery process. Which aspect of Google Cloud Storage and Persistent Disk is essential when successfully restoring the company’s systems?
- The safe and secure data storage, ensuring data integrity during system crashes

A cloud security expert is asked to describe a recovery plan during a company-wide orientation session. How should they explain it?
- It is a continuously evolving protocol that changes based on experiences and new threats.

In the case of an active cyberattack, what is the role of the recovery plan?
- It serves as a defense playbook.

What is the term for an organization’s ability to maintain their everyday productivity by establishing a risk disaster recovery plan?
- Business continuity

An organization has recently put together a disaster recovery plan. The supervisor has emphasized the importance of performing regular tests on the plan, but some team members are uncertain about the value of testing. What is the primary purpose of testing a disaster recovery plan?
- To evaluate whether the failover operates as designed

A company is selecting tools for their Security Operations team. They need tools that will allow their business to continue operating and keep their data protected during a crisis. Which two functionalities should they prioritize in their selection of business continuity and disaster recovery (BCDR) tools? Select two answers.
- Ability to safeguard data
- Ability to maintain business operations

A Security Operations team is considering the benefits of using cloud-based business continuity and disaster recovery (BCDR) tools. What is the main advantage of BCDR tools for this team?
- BCDR tools assure the use of a completely different infrastructure.

A company implements a new disaster recovery plan, and they want to measure the success of the plan. How would they determine if the plan is successful? Select two answers.
- By measuring how quickly the business operations can return to normal
- By calculating how frequently the data is backed up

In a disaster recovery plan (DRP), what question can recovery point objectives (RPOs) answer?
- How much data can be lost before it impacts the company?

Which of the following scenarios has the highest recovery time objective (RTO) tolerance?
- An online forum for casual discussions

A cybersecurity professional faces a major incident that temporarily disables a crucial application, causing some data to be lost. This leads the cybersecurity professional to consider establishing a recovery point objective (RPO) for the application. Based on this scenario, what does the cybersecurity professional need to understand about RPOs?
- RPOs represent the maximum acceptable time during which data can be lost from an application due to an unexpected incident.

In a disaster recovery plan (DRP), what question can recovery time objectives (RTOs) help answer?
- How long can business operations that depend on a specific system be down?

The operations lead at a nonprofit organization is drafting a business continuity plan following a natural disaster that disrupted their operations. What is the primary goal of the business continuity plan?
- Maintain daily productivity even during a disaster.

Daniel works in the e-commerce sector as a technical stakeholder. During a security disaster, Daniel is responsible for coordinating responses. What other key tasks should Daniel perform during a security disaster? Select two answers.
- Implement emergency procedures.
- Document and mitigate risks.

Leela is the IT manager at a software company. During a recent power outage, the company lost its servers and a significant amount of data. To prevent this from happening again, Leela wants to create a disaster recovery plan. What should be Leela’s main objective while developing this plan?
- Ensure the recovery of essential infrastructure and systems during a disaster.

What is out-of-band communication?
- Alternative methods of communicating during an event or disaster.

What is the main goal of executing a recovery plan in the event of a disaster?
- Restore smooth operations and minimize damage

An IT lead at a company must handle a recovery process in Google Cloud after unexpected system crashes. What is the IT lead’s main focus?
- Restore system operations

The chief technology officer (CTO) of a data security company considers implementing cloud-based business continuity and disaster recovery (BCDR) tools to enhance disaster recovery. What's the major advantage of this choice?
- Using a fresh infrastructure instead of the compromised one

Juanita, an IT specialist, suddenly faces a ransomware attack on their network. What is Juanita's best recovery option?
- Use the latest pre-attack backup.

Sunil is the head of IT for an e-commerce company that is transitioning their IT infrastructure to the cloud. As a next step, Sunil sets up their disaster recovery plan, with a focus on data replication. Which replication option should Sunil use to ensure optimal disaster recovery?
- Spread out storage across different global regions to enhance data availability.

An IT specialist faces an issue where System A fails. What mechanism would allow the backup system to take over and ensure continuous operations?
- Redundancy

Ethan, a risk manager, is asked to conduct a risk assessment for a company’s disaster recovery plan (DRP). What areas should Ethan focus on? Select two answers.
- Create strategies for potential threats
- Establish ways to restore business operations.

A system security analyst at an online retailer regularly sets and follows recovery point objectives (RPOs) and recovery time objectives (RTOs). What can the company expect when they successfully meet the established RPOs and RTOs?
- The company can manage service disruptions within acceptable limits.

A security team lead is developing a business continuity and disaster recovery (BCDR) plan. When should they focus on prioritizing operations in the event of a disaster?
- During the business impact analysis step

A major system crash occurs at an automotive company that causes a disruption of their primary services. Who would assist the recovery process to restore operations with minimum downtime?
- Technical stakeholders

What Identity and Access Management (IAM) hierarchy structure is best for building an application in Google Cloud?
- Create a new folder inside your organization node, then create projects inside that folder for the resources.

You are considering deploying a solution by using containers on Google Cloud. What Google Cloud solution provides a managed compute platform with native support for containers?
- Google Kubernetes Engine clusters

You are developing a new product for a customer and need to be mindful of cost and resources. What Google Cloud tools can be used to ensure costs stay manageable before consumption gets too high?
- Set up budgets and alerts at the project level.

One of the main characteristics of cloud computing is that resources are elastic. What does that mean?
- When customers need more resources, they can get more. When they need less, they can scale back.

What is the name for the computers in a Google Kubernetes Engine cluster that run workloads?
- Nodes

When using Kubernetes, you must describe the desired state you want, and Kubernetes's job is to make the deployed system conform to that desired state and keep it there despite failures. What is the name of this management approach?
- Declarative configuration

What is significant about the topmost layer in a container? Choose two options.
- The topmost layer's contents are ephemeral. When the container is deleted, the contents are lost.
- An application running in a container can only modify the topmost layer.

Google Kubernetes Engine offers two modes of operation: Autopilot and Standard mode. Which one of the options below is a use case for using Standard mode.
- You require SSH access to nodes.

You want to deploy multiple copies of an application in an effort to load balance traffic. How should you deploy Pods to production to achieve this?
- Create a deployment manifest that specifies the number of replicas that you want to run.

When designing an application, you want the containers to be located as close to each other as possible in order to minimize latency. Which design decision helps meet this requirement?
- Place the containers in the same Pod.

You want to use kubectl to configure your cluster, but first you must configure it. Where does the kubectl command store its configuration file?
- The configuration information is stored in the $HOME/.kube/config file.

You attempt to update a container image to a new version by using the “kubectl describe pod command,” but are not successful. The output of the command shows that the Pod status has changed to “Pending,”the state is shown as “Waiting,” and the reason shown is “ImagePullBackOff.” What is the most probable cause of this error?
- The container image failed to download.

Which command can be used to display error messages from containers in a Pod that are failing to run successfully?
- kubectl logs

What command can be used to identify which containers in a Pod are successfully running, and which are failing or having issues?
- kubectl describe pod

Which storage solution is a petabyte scale, NoSQL database?
- Bigtable

Which storage service is best suited to unstructured data?
- Cloud Storage

You are looking for an unstructured storage solution for archiving files that might never be accessed again. Which Cloud Storage class is the best option?
- Archive storage

Google Cloud offers two managed relational database services. What are they?
- Cloud Spanner
- Cloud SQL

Which API management system supports applications running in App Engine, Google Kubernetes Engine, and Compute Engine?
- Cloud Endpoints

Which platform for developing and managing API proxies has a specific focus on business problems, like rate limiting, quotas, and analytics?
- Apigee API Management

Which statement about Pub/Sub is true?
- Pub/Sub’s APIs are open.

What does API stand for?
- Application Programming Interface

At which level of Google Cloud’s infrastructure security will you find intrusion detection?
- The operational security level

When a customer moves an application to Google Cloud, which one of the following does the customer remain responsible for?
- Data security

With which encryption option does a customer encrypt data before sending it to Google Cloud?
- Client-side encryption

Which IAM role is the most broad in scope?
- Basic

Why do we need to have different considerations around latency from voice channels to chat channels?
- In voice channels is not possible use UI elements to illustrate a delay in the answer, making it like the call might have a problem.

When do you use the partial responses feature?
- To provide immediate feedback during webhook calls.

This image represents which type of optimization pathway?
- Long running webhook call

What types of webhook errors can you consider retrying?
- Webhook Timeout

What are two of the main considerations to have when retrying a webhook?
- Latency and loops.

What considerations should you have when taking an alternative path?
- Guide the customer step by step and provide handover if needed.

What is the minimum configuration required for a webhook?
- Display name and URL

What is the best way to secure your webhook?
- Utilizing the authentication methods available

Why enable Data Loss Prevention in Dialogflow CX?
- To redact Personal Identifiable Information.

What network strategies can you use to restrict connections further?
- Using a private endpoint within VPC-SC perimeters.

What service do you need to enable to allow fully private serverless webhooks?
- L7 internal load balancer

What are minimum requirements for a publicly accessible Webhook?
- Listens on port 443, accepts connection from a Google IP, DNS record can be publicly resolved.

What’s important to remember about just reading transcripts?
- Transcripts cannot help differentiate between what’s expected and what’s not.

You want to understand how users interact with the conversational agent. Which of the following tools or techniques would be most helpful?
- Event Tracking

In a scenario where a payment is successfully made, which metric is directly influenced to measure this behavior?
- Self-Service Success Rate

Where do you enable Cloud Logging?
- Agent Settings > General

A/An _______ is any interaction between a user and an agent at a point in time.
- Conversation

A/An _______ categorizes an end-user's objective.
- Intent

What is the main purpose of the BigQuery export feature?
- To automatically export conversation data and metadata to BigQuery every time a conversation occurs.

What structure does the BQ Data format table look like most?
- JSON

What is the first step to exporting data from Dialogflow to BigQuery?
- Create an empty BigQuery table in the same GCP project following the export table schema.

When looking to make NLU improvements, which analysis would be best to start with?
- Top N pages with highest no-match rates

What are the two components of agent escalation rate?
- Conversations Leading to Live Agent Handoff and All Conversations

What are the two components of no match rate?
- No Match Turns and All Turns

Which dashboard within a conversational agent would more likely focus on viewing groups of user and agent responses?
- Agent Transition

Which dashboard allows for head intent comparisons for overall metrics?
- Intent Launch

You are tasked with understanding specific API failures for payments. Which dashboard would you start at?
- Webhook Performance

What allows a bug to be associated with a specific build of the agent?
- Version Number

What concept allows analytics teams and developer teams to explain why something did not work in the agent?
- Event Tracking

Which category of failures is tracked using event tracking?
- All of the options

What is Colaboratory (Colab) used for?
- To write and execute Python code through the browser

What is the main benefit of using the Python Dialogflow CX Scripting API (DFCX SCRAPI)?
- It makes using DFCX easier, more friendly, and more pythonic for virtual agent builders, developers, and maintainers.

Which dashboard product most easily integrates to query the Dialogflow CX Log Data?
- Looker Studio

Teams that focus on specific use cases or areas of the bot development in CCAI programs are referred to as:
- Pods

The four stages in the bot development lifecycle are
- Build, Launch, Measure, Iterate

Which of these are considered ‘Northstar’ principles for effective CCAI delivery?
- Focus on the user, launch and iterate, psychological safety

Which phase of the virtual agent development journey supports the identification of business goals and objectives, gathering existing requirements and prioritizing requirements?
- Discovery

What are the key outcomes of the Optimization phase include (choose all that apply)
- An optimization plan
- A monitoring plan
- A Feedback loop strategy document

Which phase of the virtual agent development journey includes building intents in Dialogflow?
- Development

Which of the following are characteristics of the Scrum methodology? (Choose all that apply)
- Scrum organizes work into sprints which typically occur over 1-2 weeks duration
- Scrum is an iterative-based approach to program delivery
- Scrum is a collaborative effort involving developers and customers working together to deliver program requirements

What is the objective of a sprint retrospective?
- To give the teams a chance to provide feedback in a safe and receptive environment over the performance of the Sprint

What is a sprint backlog?
- a list of unassigned work items

How do Conversational AI programs differ from other software implementation programs? (Choose all that apply)
- They require an open minded attitude against failures
- They are heavily reliant on data

What guidelines should you follow for meeting best practices?
- Define Purpose, share in advance the agenda, communicate the outcome of the meeting

Which of the following steps should be taken during a program set up to create a culture based on trust?
- All of these steps should be taken.

What combination of Scalable tools can be employed for tracking tickets and effective program management in CCAI delivery?
- Buganizer & Smartsheet
- Buganizer & Taskflow

If you need to raise a request for the Google engineering team, which tool would you use?
- Buganizer

What is the Purpose of a Hotlists in Buganizer?
- Organize groups of tickets to share some element of similarity

In defect management, what role does root cause analysis play?
- Identifying why a defect occurred

What severity level would you assign to a defect which leads to negative sentiments from customers and obstructs a significant number of test cases?
- Critical

Which statement may not be inherently accurate?
- A high Severity defect is a defect that needs to be fixed at highest priority

What is the benefit of tracking the number of Tickets and Story Points delivered in a Sprint at a Pod level?
- To show a snapshot of a Pod’s throughput and value

Which of the following are examples of reports you would preferably have on a Pod Delivery Dashboard (Choose all that apply)
- Defect trends
- Open defects by severity and priority
- Average resolution time

Please complete this sentence: “A Pod workflow that is considered healthy is one that has..”
- A declining number of reopened bugs, a higher number of defects closed versus opened and defects with lower and lower “age” overtime

Which of the following activities is included as a part of release management?
- Ensuring consistency across different development environments

Which of the following is a responsibility of Release manager?
- Collaborating with testing teams to plan and execute testing activities, including regression testing

Which release management metric focuses on the number of releases deployed in a given time period?
- Release Frequency

Which support tier is a paid support service designed for enterprises that run priority workloads and require fast response times?
- Premium Support

To aid fast resolution of a case, the ticket submission must cover three points (select the three that apply):
- Gives enough context (i.e. project ID, timestamp, timezone, adds examples and known debug information)
- Explains the need (e.g. Outage, degraded service, break-fix, root cause, and general advice) and where it occurred (i.e. Dev, Test, Production)
- Clearly describes the impact (i.e. what was already tried, timelines involved, impact to the business)

When a customer directly enters into contact with Google to point to a possible problem or ask for some specific help they open a:
- Support Case

Which of the following is a good use case for a Data Store Agent?
- Questions that can be answered by your organization's documents or website

What are some benefits of Vertex AI Conversation?
- Reliability and Resiliency, Scalability, Security

What is a Data Store Agent?
- An agent built on Vertex AI Search and Conversation

What is a component of scoping and designing for a data store implementation?
- Determining success criteria

During scoping, you should pay attention to:
- User journeys, what channels you will use, and what data sources are available

What are user journeys?
- End-to-end experience for highest volume use cases

What sorts of data stores can you create (select three)
- Datastores based on private documents
- Datastores based on public websites
- Datastores based on structured documents

Domain verification _________________________.
- requires confirmation of ownership

Unstructured data stores ____ be created using metadata.
- may

Where can you create a data store agent? (choose 2)
- In the Dialogflow CX UI
- In the Vertex Conversation UI

Where can you view conversations with Data Store Agents?
- Big Query Logs, Dialogflow Messanger, The Dialogflow CX Test Agent Box

What are types of testing you should do?
- Integration Testing, Performance Testing, Unit Testing

What is something you should include in an eval set?
- Question
- Ideal answer
- The data store agent’s answer

When evaluating the quality of a data store response, what should you look at (choose 2)
- Answer bot gave
- URL linked

What should you do if you are concerned about quality or potential end user backlash?
- Consider a dark launch or an internal launch and collect some data first before a full launch

What is an observability feature you should consider adding? Select all that apply
- BigQuery export
- Interaction logging
- Cloud logging

What is a factor pattern you should consider monitoring in production traffic (choose 3)
- Billing and operational costs
- End user queries and topics
- Traffic patterns

If you ask the bot a question and don’t get an answer, you should (choose 2)
- Ensure that data stores are configured correctly in your DFCX agent
- Confirm that indexing has completed

If you ask a query and it gets an answer from a data store even when it shouldn’t, one option is to
- Remove content from data store

If you run into a permission error, you should
- Add “Discovery Engine Editor” and “Service Usage Viewer” permissions.

Which of the below is a required input for model training?
- Conversation Transcript

What is the required file format for training data?
- JSON

How many conversations are recommended as training data for custom summarization?
- 2k

Which of the below is a best practice when writing summaries?
- Use gender neutral pronouns

What is the maximum number of sections a custom summary can support?
- 5

What measures can you take to enable continuous improvement in the labeling process?
- Organize weekly feedback session with customer

Which of the following statements is True about Custom Summarization model training?
- The model can be trained through Agent Assist Console.

To be able to use the summarization model, you need to configure which of the below?
- Conversation Profile

To create a new custom summarization model, the conversation data needs to be uploaded to
- Cloud Storage

Once the model is deployed in a customer environment, which of the following is a must before the model can be used?
- Link the model to a conversation profile

Which of the following is a legitimate way to deploy a summarization model
- Using model management colab to copy model to client environment

Which of the following is true for summarization model deployment
- You need integration ID once model is deployed

Which of the below is a criteria while evaluating the Compliance metric?
- Summaries should not expose customer’s sensitive information

Which of the below is an important metric used to evaluate summaries?
- Completeness

As part of agent feedback through API, which of the below can be captured?
- Rewritten summaries

Which of the below metrics can be used to identify summaries with most edits?
- ROUGE-L

Which of the below is true regarding summarization model improvement?
- Models can be improved by improving the labeled summaries

Which of the following is needed for Custom LLM Summarization?
- Natural language instructions for summary sections

Which of the following is not a predefined section which can be used out of the box for LLM Summarization?
- Reason for replacement

Which of the following is true for Custom LLM Summarisation?
- You do not need thousands of labeled summaries

What can you do with SSML? (choose 3)
- Control speed
- Control date pronunciation
- Add pauses

What is DTMF?
- It lets end-users provide parameter values using a keypad.

What are some key settings related to user speech processing? (choose 3)
- Barge-in
- Speech models
- End of speech sensitivity

What can manual speech adaption be set?
- Flow level and page level

What are the two types of speech adaption?
- Auto and manual

When should you use ASR corrections?
- If you need to do speech biasing

What is the goal of speech biasing?
- Help ensure that we transcribe them accurately.

What setting tab do you use to enable conversation history
- General

How do you input text in the test agent simulator?
- By typing it in.

What is the difference between a version and an environment?
- Versions let you save multiple copies of your flows while environments let you deploy different versions of your flow and agent.

What happens if you add multiple agent responses to a fulfillment?
- The system outputs all of them in the order you place them.

Where can you apply system functions? (choose 3)
- Static response messages
- Parameter presets
- Conditions

What is a way you can customize a prebuilt component? (choose 3)
- Change its behavior
- Update agent responses
- Edit custom entities or intents

What is a benefit of prebuilt components? (choose 3)
- Provide imported and customized prebuilt templates that reduce design and implementation.
- Prebuilt components are standardized to allow for consistency.
- Rigorously tested and implemented according to Google best practices.

What are prebuilt components?
- DFCX templates that allow you to quickly import, customize, and deploy common conversational tasks.

What is part of the primary design phase for multilingual agents?
- Establish the agent’s framework in the main or default language.

What is a root language?
- A language like English (en) that does not specify a locale.

Which of the following is an example of a language-specific element?
- End user text

If you have the same path in multiple flows, you should:
- Figure out how to build it once and route all users to it.

What are some cases you need to handle while building unhappy paths? (choose 2)
- The user no-inputs and no-matches.
- A webhook error.

What is the difference between a steering flow and a use case flow?
- Steering flows identify a user’s goal while use case flows provide the user what they need.

What is an appropriate way to add generative features to steering?
- Use playbooks to identify what the user’s main task

For which of the following use cases should you use generative AI?
- Desire for rapid iteration

Which features are available in the Vertex UI? (select two)
- Playbooks
- Data Stores

Which of the following are built-in generator prompt placeholders? (Select two)
- $conversation
- $last-user-utterance

For which of the following use cases should you avoid using generators?
- Ranking Options

You can add a generator to a ________.
- Fulfillment

To generate a personalized conversation summary for a human agent, you should use:
- both user data and conversation history

The generator prompt for providing a personalized conversation summary should include
- Goal statement, structure of input, structure of output

What is a good use of generative fallbacks (Pick 3)
- Repeat what the user said
- Greet and say goodbye to the user
- Summarize the conversation

Which of the following is a generative fallback placeholder (Pick 3)
- $last-user-utterance
- $conversation

Pick the true statement
- You can use at most one generative fallback template per agent.
- When creating an evaluation set, you should include questions you expect to see in production

What is something you can control in agent settings regarding generative fallbacks?
- Which phrases are banned

When you add a data store as a webhook?
- The webhook timeout should be increased to 30 seconds

What are the two ways to implement a data store within a stateful flow (pick two)
- Via a webhook
- As a fallback if we don’t match any intents or parameters

What are some advantages of using a data store as a webhook?
- More fine-grained control over when you call the data store

What is true about routing between stateful flows and playbooks?
- You can route from a playbook to a stateful flow by adding instructions that call out the stateful flow explicitly.

What should you do to pass a parameter from a playbook to a stateful flow?
- Define an output parameter in the playbook, an input parameter in the stateful flow, and give an example in the playbook

When routing between stateful flows and playbooks, you can pass
- Parameters

Your testing gen AI features should be
- A mixture of automatic and manual testing

What is true about regression tests
- You can add your unit tests as regression tests

Logging and categorizing test case results is part of which phase of tracking test results?
- Granular record keeping

What is the first step when following a “CUJ first” approach to testing?
- Create a catalog

What testing method ensures that a single module of the agent is working correctly?
- Unit testing

You will be able to automatically run tests when changes are made to the agent after completing which stage of the unit test driven development lifecycle?
- Continuous integration

Which form of end to end testing includes all components of the agent and its system integrations
- Full stack

What feature of Dialogflow CX is used to conduct A/B testing?
- Experiments

Dialogflow Messenger is useful when?
- testing for consistent agent responses across platforms

Which of the following is an example of a message you may see from the Validation tool?
- The same synonym is used for different values in an entity type

Which Dialogflow CX feature is used to create test cases?
- Simulator

What is the first step in creating an end to end test plan?
- Define the test scope

What is the name of the environment where the development of the virtual agent occurs by the delivery team?
- Dev project

Which Dialogflow CX feature enables the ability to compare flow versions?
- Environments

The main function of the versions tool is to allow the QA team to?
- test updates to existing flows without editing them in production

A plan for how to respond when a major issue is uncovered with your agent is known as ?
- Incident management strategy

The first step to creating a CUJ first approach to testing is?
- Establish a finite catalog

What is the main purpose of automating your builds, tests and deployments?
- Standardizes repeated processes by eliminating human error.

What is true for voice conversations?
- There’s no easy access to previous turns.

An adjacency pair ______
- is the basic unit of conversation sequences.

In which context the utterance “I left it on the table” can be interpreted as a request for action?
- The speaker needs an object that they left on a table but can’t retrieve it themself now.

When crafting the interrogative series in a conversation, it’s a best practice to ______
- make a list with all information you need to collect from the user before designing any turn.

Which of the following pre-closing sequences signals the end of the conversation more strongly?
- A- Thank you so much for calling us today and have a great day. C- Thanks! You too.

What’s a human-like closing technique not commonly found in traditional virtual agents?
- Allow the user to react to each pre-closing to ensure they’re ready to end the conversation.

What’s the first action humans take if the other speaker unexpectedly remains silent?
- Check whether the other speaker is available to continue speaking.

Which of the following repair techniques highlights the issue needing repair more strongly?
- “Oh, you mean like for trade in?”

Which of the following are pronounced with rising intonation? Select all that apply:
- Yes/no questions
- Clarifying question

Which of the following could sound smoother and more connected in a virtual agent.
- Hi Thanks for calling customer service How can I help you?

You're working on a machine learning project and need to evaluate your model's performance. Which of the following scenarios would benefit from using Vertex AI's model evaluation service? Select all that apply.
- You need to monitor your deployed model's performance over time and detect potential issues like concept drift.
- You have a large dataset and need to compare multiple model versions to find the best one.
- You are concerned that your model may be overfitting to your training data and want to assess its performance on unseen data.

A data science team is struggling to manage the lifecycle of their machine learning models from development to deployment. They face challenges with inconsistent model performance, difficulty tracking model versions, and a lack of collaboration between team members. Which of the following best describes how adopting an MLOps approach with Vertex AI could address these issues?
- MLOps with Vertex AI would provide a structured framework for managing the entire ML lifecycle, promoting collaboration, enabling version control, and improving model performance consistency.

An ML engineer is working on a large-scale project that involves training multiple machine learning models. They are evaluating a new model and want to ensure it can adapt to changes in real-world data over time. Which of the following evaluation strategies should the engineer prioritize?
- Continuous evaluation to monitor model performance on new data after deployment and retrain as needed.

An ML engineer is developing a customer churn prediction model. During model evaluation, they notice the model performs exceptionally well on the training data but poorly on new, unseen data. Which of the following concepts best describes this issue?
- Overfitting

You're tasked with evaluating multiple versions of a language model for summarizing news articles. You want to know which model produces the most informative and coherent summaries. Which evaluation type would be most appropriate?
- Ranking evaluation: have human evaluators rank the summaries from different models based on their overall quality.

You're evaluating a language model designed to generate creative stories. Which of the following evaluation approaches would be most relevant? Select all that apply.
- Assessing the diversity and originality of the generated stories.
- Calculating the perplexity of the model's output.

A company is using a generative AI model to write marketing copy. Which evaluation approach would help them ensure that the generated content is both creative and relevant to their target audience?
- Combining automated metrics for diversity and relevance with human evaluation for creativity and brand alignment.

During the evaluation of an LLM, you find that the model often produces responses that sound fluent and grammatical but are factually incorrect. Which of the following evaluation challenges does this example illustrate?
- Model complexity and decision-making

Which component of an LLM block is responsible for storing and retrieving past interactions with the model to provide context for future requests?
- Memory

When using evaluation methods like BLEU or ROUGE for LLM assessment, which of the following challenges is most likely to arise if the reference dataset is limited or biased?
- The evaluation may underestimate the model's true capabilities because the reference data doesn't cover the full range of acceptable responses.

An ML engineer is tasked with selecting the best-performing image classification model from three candidates, all trained on the same dataset. Their primary goal is to understand how each model performs in real-world scenarios and identify areas for potential improvement. Which evaluation approach would be most effective for this initial assessment?
- Pointwise evaluation, focusing on the absolute performance of each model and identifying its strengths and weaknesses.

What are the names of the two available webhook types?
- Standard/Flexible

Which type of webhook offers greater control over the request and response payloads?
- Flexible webhooks

What does the "Enabled" label indicate in the context of the webhook request from Dialogflow?
- The webhook is currently active and will be used by Dialogflow.

Which of the following is directly related to securing a webhook?
- Using a custom CA certificate for HTTPS communication.

What is the maximum value you can set for the "Webhook timeout" field?
- 30s

What is the primary benefit of establishing shared expectations with the customer or API provider regarding API quality standards?
- All of the options.

Chatbot Hangover is [ ]
- When business initially built chatbots and had underwhelming results, following overhyped promises on performance.

Google Cloud can help to transform customer service across engagement models to deliver four key benefits:
- Boosting agent & employee productivity; Improve self-service & deflection rates; Modernize their chat & voice infrastructure; Enhance insights & customer predictions

What are the 4 main challenges customers face?
- Lacks a unified experience; Rigid decision trees; Increased expectations; Dropped, repeat, & unresolved calls

A self-service where a user is paying their bill would be considered:
- Transactional

Vertex AI Search and Conversation is …
- The interface that developers can then lean on to access the AI platform resources to quickly and easily infuse chat, Gen AI, and search into their Enterprise applications.

Self-service functionalities can be:
- All of the options

A good Retail use case would be:
- Customer wants to create a chatbot to answer Product FAQs.

The conversational core enables three AI powered products.
- Agent Assist, Virtual Assistant, Insights

You should use Generators when….
- You need the conversational flow to fulfill a specific action (e.g. summarization, parameter extraction, and data transformations).

You would use [ ] to create an out of the box conversational experience based on information provided by a knowledge domain (e.g. website, document).
- Generative AI Agents

The common strength across the 4 capabilities is: .
- They leverage LLMs to provide a more fluid and natural experience to the user to prevent escalation.

The Top 3 Business Metrics are…
- Call Volume, Average Handle Time, Containment

The four business priorities for customer service are…
- Scale, Cost, Experience, Growth

Which metric is the most critical for a business leveraging CCAI?
- Containment

User personas are helpful to…
- All of the these are uses of a User Persona

A use case is…
- All of the these are components of a use case

What question should NOT be asked when building a basic Virtual Agent persona?
- Why are customers failing at the current task?

What is the primary purpose of analyzing performance data?
- To understand overall customer behavior and identify areas for improvement.

Which option below is likely to have high-impact opportunities in which you can refine and enhance your conversational agent?
- High traffic flows and pages.

Select the phase that focuses on initial metric driven exploration of data.
- Analyze

What is the main advantage of conversation history tools over manual reading of conversations?
- Conversation history tools offer an efficient way to analyze large amounts of conversation, enabling rapid trend detection.

What is the significance of conversation history as a rich source of data?
- All of the above.

What are the benefits of using flow analysis to monitor conversations?
- By using flow analysis, you can see conversations that are going off the critical success path early.

Which of the following enhancements can be used to address intent escalations in a conversational AI system?
- All of the above.

What is the first step in the process of enacting effective optimization?
- Evaluate the impact.

Which metric measures the percentage of customers who leave their self-service attempt?
- Abandonment rate.

What two dimensions can be used to rank optimizations for the virtual agent?
- Difficulty and Impact

Optimizations that have large impacts typically have which of the following attributes?
- High traffic flows and pages

Which of the following is not an explicit step in a root causing problem solving framework?
- Conduct brainstorming with no data.

What is one way to enhance the user experience?
- Reproduce failed scenarios.

What are the elements of good agent performance?
- NLU quality, Experience, and Integration

What is one way to enhance NLU quality?
- Implementing proper routing.

Which of the following is not a common method for detecting performance issues?
- Predictive Modeling

When deploying new features in the agent, which step is most important?
- Establish what will be measured post implementation.

When dealing with failures, what is the motto to remember?
- Hope is not a strategy.

What is a use case feature that suggests that you should use stateful flows as opposed to generative playbooks?
- Requires mathematical computations

Select two statements that describe the key benefits and value proposition of Generative Playbooks.
- Generative Playbooks allow to create more natural and conversational interaction.
- Easy handling for previously challenging situations like multi-intent.

Select a statement that DOES NOT describe the out-of-the-box capability we get with Generative Playbooks.
- Direct integration with BQ ML

What is the correct syntax to reference another Playbook in Steps?
- ${PLAYBOOKS: (playbook name)}

Select some the key components of Generative Playbooks
- Goal, Steps, Examples, Tools

Select the correct formats which can be used to define the OpenAPI Schema used in Tools. (Choose 2)
- YAML
- JSON

Select the true statement
- There are two types of Tools: the ones defined by OpenAPI, and the Data Stores.
- You can view your test cases in the “test cases” tab

Select two statements that identify the best practices when building Generative Playbooks.
- Clarity: Providing clear and specific instructions and examples to ensure the LLM understands the desired behavior.
- Granularity: Breaking down complex tasks into smaller, more manageable playbooks to enhance clarity and reusability.

Select the correct statement which accurately describes prompt design.
- It involves an element of creativity and experimentation to optimize LLM performance.

What is NOT a type of testing?
- Debug testing

Where can you save a test case?
- In the DFCX simulator

What is a factor pattern you should consider monitoring in production traffic (choose three)
- End user queries and topics
- Traffic patterns
- Billing and operational costs

What is NOT a thing you should do when it comes to operations planning?
- Test and refine your playbooks

What is not a benefit of generative steering?
- Faster than traditional NLU

What is the goal of generative steering?
- Leverage LLMs to accurately interpret user’s intent

What is true about generative steering?
- It uses one or more playbooks

Who are the target users who will get the most value from the product?
- Contact Center Analysts, Compliance

Select a best use case that is solved by CCAI Insights
- Provide answers to customer questions from a centralized knowledge base.

What is the first step in setting up the CCAI insights platform?
- Creating the pipeline

Which field contains the actual messages of conversations in JSON chat transcript?
- text

How to specify conversation metadata, such as customer ID or contact center department like ‘sales’?
- Manually specify conversation labels

Which one of these options is correct about bulk importing conversations?
- STT and DLP configs specified at project level within Insights settings are automatically inherited

What is the purpose of model granularity while training a topic model?
- To specify the maximum number of topics according to the data.

Which of the following is true about the use of customer taxonomy while training a topic model.
- You do not necessarily need to have customer taxonomy to train your topic model.

What is the recommendation for minimum number of conversations for training a topic model?
- Minimum of 1k conversations (recommended 10k conversations) with five back-and-forth turns between an agent and a customer.

What are the prerequisites for LLM Summarization model training?
- LLM Summarization does not need model training.

LLM Summarization is a feature of which of these CCAI products?
- Agent Assist

What is populated in the “Reason for cancellation” section if a conversation is not about canceling a service?
- N/A

What is the purpose of Generative FAQ?
- To show you the top questions that customers are asking and how these questions are being answered.

A customer is looking to use Insights to detect mentions of specific products. What feature would you tell them to use?
- Custom Highlighters

Which section is populated in the conversation UI when conversations are analyzed?
- Identified Topics

What is the prerequisite to get topics for conversations analyzed?
- A trained and deployed topic model

Which option should be set to True while analyzing a conversation through API to infer topics?
- run_issue_model_annotator

Which field will contain information about the confidence score of predicted Topics of the conversation?
- issues.score.

Which metric can be found at conversation, entities and sentences level using the BigQuery Insights export table?
- Agent Performance Dashboard
- Call Center Overview Dashboard

What is a prerequisite before exporting data to BQ?
- BQ Dataset and Table without schema should be present.

When exporting data to BQ, which following configuration is recommended?
- Append new data to an existing BigQuery table

Which of the following dashboards are pre-configured in the Looker Block?
- Agent Performance Dashboard
- Call Center Overview Dashboard

Where should we focus when identifying areas of improvement?
- Easy and quick to implement and a potential large impact

What are the phases of the optimization process?
- Monitor, Analyze, Identify, Enhance

Which of the following is a true statement regarding monitoring?
- CCAI Insights offers OOTB static report whereas Looker with BQ allows for more customization options

What are some characteristics of an idle container? Select four.
- An idle container does not service requests.
- An idle container can be shut down at any time.
- An idle container has its CPU throttled.
- An idle container does not incur charges by default.

How can you make a Cloud Run service publicly accessible and invokable without authentication?
- Use the –-allow-unauthenticated option when you deploy the service to Cloud Run.

Which of these statements about autoscaling in Cloud Run are correct? Select three.
- Cloud Run automatically increases the number of container instances of a service revision when necessary.
- When the number of requests to a service decreases, Cloud Run reduces the number of container instances.
- If there are no incoming requests to your service, by default even the last remaining container instance will be shut down.

Which of these statements about Cloud Run are correct? Select three.
- On Cloud Run, your code can either run continuously as a service, or as a job.
- Cloud Run is serverless.
- Cloud Run integrates with other Google Cloud services.

What are some characteristics of Cloud Run services? Select three.
- Cloud Run automatically scales a service revision.
- Cloud Run services are regional Google Cloud resources.
- Each deployment of your application container image to Cloud Run creates a service revision.

Every Cloud Run service is linked to a service account by default. What role is given to this service account?
- Editor

What are two methods of making a secret available to a Cloud Run service?
- Provide the secret as an environment variable when deploying the service.
- Mount the secret as a volume so that the service can access the secret from a file.

What are some characteristics of an IAM policy? Select three.
- An IAM policy is attached to a Google Cloud resource.
- You can attach only one IAM policy to a resource.
- An IAM policy consists of a list of policy bindings that binds members to roles.

How can you implement the principle of least privilege for a Cloud Run service?
- Create a new service account and configure it as the Cloud Run service’s identity. Grant minimal permissions to the account on the resources that the service needs to access.

Which statements about using environment variables with Cloud Run are correct? Select two.
- Environment variables are key-value pairs that can be set when deploying a Cloud Run service or job.
- Environment variables are injected into your application container and accessed by your code at runtime.

What are some characteristics of applications that are a good fit for Cloud Run? Select three.
- When run as a service, the application listens for HTTP requests on a specified port.
- The application is containerized.
- When run as a service, the application responds to a request within a specified time.

To integrate a Cloud Run service with other Google Cloud APIs and resources, what are some steps you should take? Select three.
- Connect to Google Cloud services from your Cloud Run service using client libraries.
- To connect to internal cloud resources from your Cloud Run service, use Serverless VPC Access.
- Use Secret Manager to store credentials required by downstream database services.

What are some products or services that you can use to build containers? Select three.
- Cloud Build
- Cloud Run
- Docker

Which of these statements regarding service revisions in Cloud Run are correct? Select two.
- A revision is created when you update the configuration of a service in Cloud Run.
- A revision is created when you deploy a container image to a service in Cloud Run.

What is the process of encoding text data into vectors called?
- Generating text embeddings.

What are the two main technical challenges that need to be addressed in order to implement vector search effectively?
- Encoding and indexing

Which of the following is correct to compare between vector search and traditional keyword search?
- Vector search addresses semantic similarity and is good at solving ambiguous queries, whereas traditional keyword search is good at solving precise queries.

What is the main benefit of using vector search in RAG (retrieval-augmented generation) to address LLM (Large Language Models) hallucination?
- It allows the LLM to access real-time information for fact-checking.

What is the general process to build a search application by using Vertex AI Vector Search?
- Encode data to embeddings, build an index, and search results.

What are the two main techniques used by ScaNN (Scalable Approximate Nearest Neighbor) to improve search performance in vector search?
- Space pruning and data quantization

What is the main purpose of using distance metrics like dot product distance in vector search?
- Measure the distance between vectors in terms of semantic similarity.

What happens when a PTransform receives a PCollection?
- It creates a new PCollection as output, and it does not change the incoming PCollection.

What is CoGroupByKey used for?
- To join data in different PCollections that share a common key.

How many times will the process/process Element method of a DoFn be called?
- As many times as there are elements in the PCollection.

How many triggers can a window have?
- As many as we set.

What are the types of windows that you can use with Beam?
- Fixed, sliding, and session windows.

How does Apache Beam decide that a message is late?
- A message is late if its timestamp is after the watermark.

What can you do if two messages arrive at your pipeline out of order?
- You can recover the order of the messages with a window using event time.

What kinds of data are a bounded and an unbounded source respectively associated with?
- Batch data and streaming data.

What is the simplest form of a sink?
- PTransform

Is it possible to mix elements in sSchema PCollections inside a single Beam pipeline? (Select the two correct answers.)
- Not possible within the same PCollection
- Yes, but only across different PCollections

Which of the following element types can be encoded as a schema from a PCollection? (select ALL that apply.)
- Byte string objects
- A single list of JSON objects
- Avro objects
- Protobuf objects

What is the use case for timers in Beam’s State & Timers API?
- Timers are used in combination with state variables to ensure that the state is cleared at regular time intervals.

Can you do aggregations with ParDo?
- You can do aggregations using state variables in a DoFn.

What is the recommended way to convert JSON objects to POJOs?
- Use JsonToRow

Choose all the applicable options:If your pipelines interact with external systems,
- It is important to provision those external systems appropriately (i.e., to handle peak volumes).
- Not provisioning external systems appropriately may impact the performance of your pipeline due to back pressure..

Which functions of the DoFn lifecycle are recommended to be used for micro-batching?
- startBundle and finishBundle

What operations can you do in standard Pandas DataFrames that are not possible in Beam DataFrames?
- Shift the DataFrame

Which two of the following interfaces support Calcite SQL?
- Beam SQL client
- Dataflow template

Which one of these statements is true?
- You can use the option include_window_info from ib.show to get extra metadata about each element in a Pcollection.

Which two of the following statements are true about using the interactive runner?
- You can limit the amount of data the interactive runner records from an unbounded source by setting recording_size_limit.
- You can limit the amount of time the interactive runner records data from an unbounded source by using the recording_duration option.

What is the Beam portability framework?
- A set of protocols for executing pipelines
- A language-agnostic way to represent pipelines

Which of the following are benefits of Beam portability? (Select ALL that apply.)
- Running pipelines authored in any SDK on any runner
- Cross-language transforms
- Implement new Beam transforms using a language of choice and utilize these transforms from other languages

The Dataflow Shuffle service is available only for batch jobs.
- True

What are the benefits of Dataflow Streaming Engine? (Select ALL that apply.)
- More responsive autoscaling for incoming data variations
- Lower resource and quota consumption
- Reduced consumption of worker CPU, memory, and storage

Which of the following are TRUE about Flexible Resource Scheduling? (Select ALL that apply.)
- FlexRS leverages a mix of preemptible and normal VMs.
- FlexRS helps to reduce batch processing costs by using advanced scheduling techniques.
- When you submit a FlexRS job, the Dataflow service places the job into a queue and submits it for execution within 6 hours from job creation.

You want to run the following command: gcloud dataflow jobs cancel 2021-01-31_14_30_00-9098096469011826084--region=$REGION Which of these roles can be assigned to you for the command to work?
- Dataflow Admin
- Dataflow Developer

Your project’s current SSD usage is 100 TB. You want to launch a streaming pipeline with shuffle done on the VM. You set the initial number of workers to 5 and the maximum number of workers to 100. What will be your project’s SSD usage when the job launches?
- 140 TB

You are a Beam developer for a university in Googleville. Googleville law mandates that all student data is kept within Googleville. Compute Engine resources can be launched in Googleville; the region name is google-world1. Dataflow, however, does not currently have a regional endpoint set up in google-world1. Which flags are needed in the following command to allow you to launch a Dataflow job and to conform with Googleville’s law? python3 -m apache_beam.examples.wordcount \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs://$BUCKET/results/outputs --runner DataflowRunner \ --project $PROJECT --temp_location gs://$BUCKET/tmp/ \
- --region northamerica-northeast1 --worker_region google-world1

Your project’s current In-use IP address usage is 500/575. You run the following command: python3 -m apache_beam.examples.wordcount \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs://$BUCKET/results/outputs --runner DataflowRunner \ --project $PROJECT --temp_location gs://$BUCKET/tmp/ --region $REGION \ --subnetwork regions/$REGION/subnetworks/$SUBNETWORK \ --num_workers 20 --machine_type n1-standard-4 --no_use_public_ips What will be the in-use IP address usage after the job starts?
- 500/575

The data scientist team in your company is working to implement an AI model to assist processing credit card applications. During testing, you notice that the model has inconsistent performance among different sub-group of applicants. What responsible AI best practice should the team apply to the model?
- Ensure the recommendation data the product is pulling from is fairly representative of the entire dataset.

As you think through the development of your AI product, your organization is looking to you to lead and guide the development team around responsible AI best practices. What is a key best practice the team should think through as they develop the AI product?
- When possible, the team should hold the capability to access raw data to investigate issues or unintended behaviors.

You have been asked to do a presentation to a stakeholder in your organization on the importance of responsible AI. As you are thinking through your key opening statement, what is the most appropriate statement you can make that describes the importance of having responsible AI?
- Responsible AI is important for our organization because it reduces overall harm that our products may inflict on underrepresented groups.

Which statement accurately describes a Google AI principle?
- Be accountable to people.

A researcher did an anonymous survey with students in a mixed-gender middle school to learn the health and diet patterns of middle school students in the entire country. What type of bias could it introduce?
- Selection bias.

As a data scientist, you are tasked with identifying bias in training data in an effective way. Which of the tools below can be used to identify bias in data?
- TensorFlow Data Validation, What-if Tool.

You have been asked to do a presentation in your organization on the importance of AI fairness and bias. As you are thinking through your key opening statement, what is the most appropriate statement you can make that explains why AI fairness is difficult?
- Fairness is difficult because there are pre-existing biases, a variety of scenarios, no standard definition of fairness, and incompatibility of fairness metrics.

As an AI engineering team manager, you're giving a presentation to explain why interpretability and transparency in AI development is important for engineers. Which of the following statements would be best to include in your slides?
- Understand model behaviors

Your manager is a strong advocate for responsible AI development. During a project review, they emphasize the importance of transparency and documentation around the dataset you're using and the resulting AI model. They want to know what steps you're taking to ensure this. Which of the following tools or techniques are you using to provide a clear understanding of your dataset and model?
- Data card, Model card.

You're working on an image classification model for identifying different types of clouds. During testing, you notice some strange results. The model seems to be focusing on irrelevant areas of the images (like background objects) instead of the actual cloud features. To understand why your model is behaving this way, which of the following tools or techniques would be the most helpful?
- XRAI (eXplainable Region-based Artificial Intelligence)

You have a Pub/Sub subscription with data that hasn’t been processed for 3 days. You set up a streaming pipeline that reads data from the subscription, does a few Beam transformations, and then sinks to Cloud Storage. When the pipeline is launched, it is able to read from Pub/Sub, but cannot sink data to Cloud Storage due to the service account missing permissions to write to the bucket. When viewing the Job Metrics tab, what do you expect to see in the data freshness graph?
- Initial start point at 3 days, with an upward sloping line.

You would like to set up an alerting policy to catch whether the processed data is still fresh in a streaming pipeline. Which metrics can be used to monitor whether the processed data is still fresh?
- job/per_stage_data_watermark_age
- job/data_watermark_age

Your batch job has failed, and when viewing the Diagnostic tab, you see the following insights: Out of memory: Kill process Shutting down JVM after consecutive periods of measured GC thrashing Which of the options below is the best one to undertake to resolve the issue?
- Use a larger machine size

Select all that apply - the BigQuery Jobs tab shows jobs from:
- Query jobs
- Load jobs

Which two of the following statements are true for failures while building the pipeline?
- The failure can be caused by incorrect input/output specifications.
- The failure is reproducible with the Direct Runner.

Your Dataflow batch job fails after running for close to 5 hours. Which two of the following troubleshooting steps would you take to understand the root cause of the failure?
- Log the failing elements and check the output using Cloud Logging.
- Check the Dataflow worker logs for warnings or errors related to work item failures.

Which one of the following is not a consideration for designing performant pipelines in Dataflow?
- SDK used for developing the pipeline.

Select options we can use to mitigate data skew in Dataflow pipelines?
- Use api like “withFanout” or “withHotKeyFanout”.

When we should avoid fusion in a Dataflow pipeline?
- Only in specific scenarios, like if your pipeline involves massive fanouts.

Using anonymous subclasses in your ParDos is an anti-pattern because:
- Anonymous subclasses are harder to test than concrete subclasses.

When draining a streaming pipeline, what should you expect to happen?
- Ingestion stops immediately, windows are closed, and processing of in flight elements will be allowed to complete.

You want to launch a streaming Dataflow job in europe-west4 and want to protect your pipeline from zonal stockouts. Which launch command will achieve these requirements?
- $ python3 -m apache_beam.examples.wordcount \ --input gs://dataflow-samples/shakespeare/kinglear.txt \ --output gs://$BUCKET/results/outputs --runner DataflowRunner \ --project $PROJECT --temp_location gs://$BUCKET/tmp/ \ --region europe-west4

How long is the retention for Dataflow Snapshots?
- Seven days

Into which of the following categories are the Google-provided templates classified?
- Batch, streaming, and utility

Which of the following is a challenge associated with classic templates?
- Lack of support for Dynamic DAG (Directed Acyclic Graph).

How are Flex Templates packaged?
- Docker image

Which of these is not a feature of BigQuery?
- BigQuery runs on your on-premises server.

Which of Google Cloud’s big data managed services is optimized for large-scale batch processing or long-running stream processing of structured and unstructured data?
- Dataflow

Which of these is a managed Spark and Hadoop service that lets you benefit from open source data tools for batch processing, querying, streaming, and machine learning?
- Dataproc

You can use three basic patterns to load data into BigQuery. Which one involves using SQL statements to insert rows into an existing table or to write the results of a query to a table?
- Generated data

What Google machine learning API can be used to convert audio to text for data processing?
- Speech-to-Text API

Which of these is a no-code solution that lets you build your own machine learning models on Vertex AI through a point-and-click interface?
- AutoML

What is the name of Google’s unified AI platform that brings all the components of the machine learning ecosystem and workflow together?
- Vertex AI

I just created a Dialogflow Virtual Agent. This agent is…
- Associated with a Google Cloud project.

DialogFlow Virtual Agents as resources are
- Either global or regional.

Google Cloud DLP is used to
- Identify PII and redact where necessary.

When choosing the DialogFlow edition,
- DialogFlow CX should be used in almost all cases, especially cases where complex virtual agents are being created.

What are best practices for a multi-region setup?
- Use a load balancer

What are 3 core areas to consider when deploying Google Cloud foundation for Virtual Agents?
- Network, Security and Billing

What is not a benefit of using Omni Channel?
- Agent high availability.

Is SIPRec protocol used to minimize Agent Assist latency?
- True

Is Sentiment Analysis a feature of Agent Assist?
- True

What two protocols are used for Voice integrations?
- gRPC and SIPREC

Which Insights feature can be used to identify call drivers?
- Topic Modeling

Which route is best suited for live data Ingestion within Insights?
- Runtime Integration

Insights is best suited to address which of the following use cases?
- Contact center workforce forecasting.

In addition to CCAI Insights, customers have the option of extracting data from Dialogflow CX directly into…
- BigQuery

Which Disaster Recovery (DR) measure focuses on obtaining alerts when the system or its parts are failing?
- Detective

SCRAPI is a high level ______ API.
- Python

A DLP API request is?
- Stateless, not persisted,Encrypted in transit, and supports data residency.

Data that flows through the CCAI platform is encrypted…
- In transit and at rest.

Dialogflow CX is compliant for which SOC certifications?
- SOC 1, SOC2, & SOC3

You're a tech support agent assisting a customer with a software issue. Your company has many knowledge base articles stored as Google Docs files. You’d also like to reference online documentation. Which of the following best demonstrates how you would synthesize relevant information across Google Workspace and Google web searches using Gemini?
- Use Gemini to gather information from the customer's support ticket in Gmail, relevant troubleshooting guides from Google Drive, and additional context from web searches.

You’re a construction project manager and your company recently began using Gemini for Google Workspace. Which of the following features can you use Gemini in Google Drive for?
- Asking questions about specific files to quickly find information.

You're a financial analyst working on a collaborative project with your team. The project files are stored in Google Drive and you need to find a specific file titled "Q2 Financial Report" and quickly get information about who last modified it and when. Which of the following is the most efficient way to achieve this using Gemini in Drive?
- Ask Gemini in Drive about when the "Q2 Financial Report" was last modified and by whom?

You're a marketing assistant preparing a presentation on recent marketing campaigns. You have several Google Sheets, Slides, and Docs files related to sales data, customer feedback, and marketing campaign results in your Drive. You want Gemini to help you identify key takeaways and trends. Which of the following prompts would be most effective in eliciting a broader, topic-based response from Gemini, drawing upon the relevant files in your Drive?
- Summarize the key takeaways from the Q2 sales data, customer feedback, and marketing campaign results in my Drive.

You've applied various de-identification techniques to a customer dataset containing sensitive information before using it to train an AI model. Which of the following concepts should you use to evaluate the suitability of your de-identification techniques?
- Reversibility and referential integrity.

In machine learning, privacy measures often introduce trade-offs with other important factors. Which of the following does NOT represent a typical trade-off?
- Privacy and Transparency

A customer is working with a large dataset of healthcare records to develop a diagnostic AI model. They want to ensure privacy of sensitive data, by restricting the contribution of specific data on the model during training. Which privacy-focused technique would be best for the customer?
- DP-SGD (Differentially Private - Stochastic Gradient Descent)

You're pitching an AI-powered customer support solution to a potential client. Their company handles highly sensitive user information, and they have reservations about potential risks associated with AI systems. To address their concerns and win their trust, which key message about AI safety would be most effective to emphasize?
- "Adherence to AI safety principles helps us build reliable systems that minimize unexpected errors, safeguarding your customer data."

You want to embed the concept of safety into a pre-trained LLM by fine-tuning it. You have a dataset of prompts and pairs of possible answers, along with labels created by human safety evaluators indicating their preference for one answer over the other. Which technique is the most suitable for fine-tuning the LLM in this scenario?
- Reinforcement Learning from Human Feedback (RLHF)

Your manager asked you to lead a project to research the key considerations in AI safety and develop a failure mode catalog to assist evaluate safety in Generative AI products. Which of the following should not be included as a failure mode?
- Citation

Which Google Cloud service provides defense against infrastructure and application Distributed Denial of Service (DDoS) attacks?
- Google Cloud Armor

Which two of the following statements are true about Google Cloud Armor?
- Google Cloud Armor protection is delivered at the edge of Google’s network.
- Google Cloud Armor enforces access control based on IPv4 and IPv6 addresses or CIDRs.

Which IAM role contains permissions to create, modify, and delete networking resources, except for firewall rules and SSL certificates?
- Network administrator

Which type of IAM member belongs to an application or virtual machine instead of an individual end user?
- Service account

Which of the following is a key benefit of using Packet Mirroring for network security analysis?
- It enables the capture and inspection of traffic without impacting network performance.

What is the primary purpose of Packet Mirroring in network security?
- To create a duplicate copy of network traffic for analysis.

You want to improve network performance. You are not comfortable using the public internet to route traffic. Which service tier is the best fit?
- Premium tier

You want to lower cloud networking cost and have no problem leveraging the public internet for cross-region traffic. Which network service tier is best for you?
- Standard tier

You are designing a virtual machine in the cloud to act as a network gateway between an external public network and a private internal network. To ensure strong security and traffic separation, what technology can you implement?
- Multiple Network Interface Cards (NICs)

Which of the following statements about VPC Network Peering is correct?
- Transitive peering is not supported.

How does VPC Peering exchange routing information between two peered VPCs?
- It automatically discovers and propagates routes through the Google Cloud Router.

Which of the following approaches to multi-project networking uses a centralized network administration model?
- Shared VPC

In regards to VPC Flow Logs, which of the following statements is correct?
- Logs can be used for network monitoring, forensics, real-time security analysis, and expense optimization.

Sort the following steps for provisioning Shared VPC in Google Cloud:
- Uptime checks
- Alerting policies

To set up hybrid deployments for DNS resolution, which type of DNS policy should you use?
- Server policy

You must create a VM that has an IPv6 address. How do you do it?
- Create a dual-stack subnet, and create the VM with an IPv6 address.

Private services access automatically configures which Google Cloud product to implement communication between the producer and consumer VPC networks?
- VPC Network Peering

To enable Private Google Access for a VPC network:
- Enable it on all desired subnets in the VPC network.

You want to provide access to services that you created in a VPC network. The services should be available to other specified VPC networks through endpoints that have internal IP addresses. Some of these VPC networks have subnets with overlapping internal IP addresses. Which product can you use?
- Private Service Connect

When you use the internal IP address of the forwarding rule to specify an internal Network Load Balancer next hop, the load balancer can only be:
- In the same VPC network as the next hop route or in a peered VPC network.

Where would you configure traffic management for a load balancer?
- In the URL map

You can use hybrid load balancing to connect these environments:
- Google Cloud, other public clouds, and on-premises

Which of the following best practices help optimize load balancing cost?
- Implementing a caching layer with a content delivery network (CDN).

CDN Interconnect provides:
- A direct peering connection between third-party content delivery networks (CDNs) and Google's edge network.

Your company is located in a city where Google Cloud does not have a Dedicated Interconnect location, but you need a private connection to your Google Cloud Virtual Private Cloud (VPC). Which Cloud Interconnect option is most suitable for this scenario?
- Partner Interconnect

Which Google Cloud Interconnect option requires the customer to provide their own routing equipment and establish a Border Gateway Protocol (BGP) session with Google's edge network?
- Dedicated Interconnect

What is the purpose of a Cloud Router, and why is that important?
- To dynamically exchange routing information using BGP between Google Cloud VPCs and other networks.

In Network Connectivity Center, what are the two main types of spokes that can be connected to a hub?
- VPC spokes and Hybrid spokes

What are foundation models in Generative AI?
- A foundation model is a large AI model pretrained on a vast quantity of data that was "designed to be adapted” (or fine-tuned) to a wide range of downstream tasks, such as sentiment analysis, image captioning, and object recognition.

What is an example of both a generative AI model and a discriminative AI model?
- A generative AI model could be trained on a dataset of images of cats and then used to generate new images of cats. A discriminative AI model could be trained on a dataset of images of cats and dogs and then used to classify new images as either cats or dogs.

What is Generative AI?:
- Generative AI is a type of artificial intelligence (AI) that can create new content, such as text, images, audio, and video.

Hallucinations are words or phrases that are generated by the model that are often nonsensical or grammatically incorrect. What are some factors that can cause hallucinations? Select three options.
- The model is not trained on enough data
- The model is trained on noisy or dirty data.
- The model is not given enough context.

Yousef is reviewing his store inventory. He wants his Google Sheet to visually identify cells where the store’s flour inventory fell below 100 bags. What does he need to do in order for Google Sheets to do this automatically? Select the correct response.
- He can highlight the range with the flour inventory, open the Format menu, then select Conditional formatting

Seroja wants to ensure consistency when preparing sales and inventory reports. How can she automatically apply the same formatting every time she creates a new monthly reporting spreadsheet? Select the correct response.
- She can open the Format menu, select Theme, then choose an option from the panel. Each month, she can use the same Theme

Seroja determines that she does not want the formula in cell H30 to change from =H1+H8 when she copies it to cell I30. What does she need to do to keep the formula constant when copy pasting? Select the correct response.
- She can turn it into an absolute reference by changing the formula to =$H1+$H8

Seroja selects the cell H30. It contains the following formula: =H1+H8. She copies the contents from H30 to cell I30. What happens to the formula? Select the correct response.
- The formula automatically updates to =I1+I8

Thomas sends “South America forecast report” to On the Rise partner owner Seroja Malone. Seroja wants to create a data validation rule to ensure that Column C only includes sales from the month of June. What does she need to do? Select TWO.
- She can open the Data menu, select Data validation, choose Column C, and add the criteria Text | equals | June. Then, select Save
- She can right click on Column C, select Data validation, and add the criteria Text | equals | June. Then, select Save

On the Rise store owner Yousef Amadi is analyzing monthly sales data from his Fort Lauderdale store. He’d like to see the data visually by converting it into a bar chart. What does he need to do? Select the correct response.
- He needs to select the range of cells to include, open the Insert menu, select Chart, then choose Bar Chart

Yousef and Kaina are working together to update a Google Sheet that is used by the On the Rise marketing team. They want to automate repetitive tasks like bolding header texts. Which of the following should they do? Select the correct response.
- Open the Extensions menu, hover over Macros, and click Record macro

Yousef creates a bar chart. Next, he wants to move the chart to the top left of the screen. What does he need to do? Select the correct response.
- He should click and drag the chart

Yousef realizes there is an error in the data and wishes to edit the chart. How does he do this? Select the correct response.
- He should correct the data and the chart will update automatically

Kaina Gao is reviewing a Google Sheet with thousands of cells of data from the On the Rise marketing team. It's suggested she use a pivot table to summarize the data. Why would this be beneficial? Select the correct response.
- The pivot table will make it easy to display different data summaries

Yousef wants to share the chart on a website that is accessible to the On the Rise team. What are some of his options? Select two.
- He can publish the chart to web
- He can embed the chart on a website via embed code

Sherrie wants to distribute the form so applicants can easily respond. What are some of her options? Select two correct responses.
- She can share the form by email
- She can embed the form on Ontherise.store

Sherrie is working on a Google Sheet named “On the Rise Hiring Questionnaire”. She wants to turn the Sheet into a Google Form. How does she do this? Select the correct response.
- She can open the Google Sheet “On the Rise Hiring Questionnaire”, then open the Tools menu, then click Create a Form

Many applicants have completed and submitted the Form. Sherrie wants to review their responses and choose top candidates to interview. How can she view the responses of each applicant, one at a time? Select the correct response.
- She can select the Responses tab, then the Individual tab

Sherrie has converted her content into a Google Form. She would like to add a new question. What does she need to do? Select the correct response.
- Choose Add question from the floating toolbar to the right of the question card

A cloud security analyst is creating a portfolio. One of their projects was created for an employer and is confidential, so they cannot include project resources in their portfolio. How can the cloud security analyst include the relevant skills in their portfolio?
- Include a basic description of the project and their role.

A cloud security analyst has just completed their final interview for a new position. What step should they take next?
- Send a thank you message to the interviewer.

A cloud security analyst is creating a portfolio to demonstrate their skills to employers. Which two characteristics should they make sure their portfolio includes? Select two answers.
- A visually appealing design
- A biography

A cloud security analyst has a collection of projects and other materials they can share with interviewers to demonstrate their skills. What is the term for this collection?
- A portfolio

Which of the following actions can you take to help you tailor your resume to cloud security professional roles? Select all that apply.
- Use an AI tool to tailor your resume to the specific job.
- Research roles on job-search platforms and take notes on some of the skills and qualifications required for jobs that appeal to you.
- Refer to previous course content to review some of the different types of roles available in cloud security.

A cybersecurity analyst is interested in a job. The job posting lists a programming language that the analyst has not worked with. What step should the analyst take?
- Apply and emphasize similar skills that they do have.

You are creating your résumé before applying for your first cloud security analyst job. You have worked in the restaurant industry for several years, and had a data entry job before that. What transferable skills from your past work experience can you list on your résumé? Select two answers.
- Attention to detail
- Teamwork

You are creating your résumé to apply to your first cloud security analyst job. Which step should you take after researching the job description?
- Customize your skills to the job description

In an interview for a cloud security analyst position, the hiring manager asks you a technical question about how you would solve an issue in a cloud environment. You are unsure on a few specifics of the scenario. Which is the first step you should take in answering this question?
- Ask clarifying questions.

A cloud security analyst is preparing for a job interview at a new company. They are familiar with the company’s culture, but want to do more research to learn if the position is a good fit. What other aspects of the company should they research? Select two answers.
- Mission
- Core values

A cloud security analyst is interviewing for a new position, and the hiring manager asks a behavioral question. What is the first step the analyst should take in answering the question?
- Describe any context the interviewer needs to know.

A job posting requests three years of experience. You have only one year of on-the-job experience, but otherwise your skills and interests match the job description. What step should you take next?
- Apply for the job.

You schedule a screening call with a recruiter for a cloud security analyst position. Which step should you be sure to take during the screening call?
- Ask questions about the role

You are applying for a cloud security analyst position. You have completed your screening call with a recruiter, and have an interview scheduled with a hiring manager from the company. What should you do while you wait for your interview? Select two answers.
- Research the company and role
- Map your skills to the job description

A cloud security analyst is collecting project documentation and other work samples to share with employers. What is the term for this collection?
- A portfolio

A cloud security analyst wants to include a project in their portfolio, but it was created for an employer and contains sensitive information. How can they incorporate the project into their portfolio without breaking privacy agreements or regulations?
- Include a project description instead

A cloud security analyst wants to make their portfolio visually appealing and easy to navigate. What source can they use for ideas?
- People in their network

A cloud security analyst is refining their resume to apply for a job. How can they demonstrate to the hiring manager that they are a good fit for the position?
- Update their skills to match the job description

A cloud security analyst is updating their resume. Where should they list a professional certificate they completed?
- The education section

A hiring team is considering a candidate for a cloud security analyst position. Which part of the interview process assesses how well the candidate will fit in with the team’s culture?
- Panel interview

You are in a one-on-one interview with a hiring manager for a cloud security analyst position. An interviewer asks you a behavioral question about how you handled a challenge at work in the past. How should you start your response to this question?
- Describe any context the interviewer needs to know to understand your story.

Where did the malicious actor access the sensitive customer data?
- BigQuery

How did the malicious actor gain initial access to Cymbal Retail's cloud environment?
- Open SSH and RDP ports

Which section of the report contains a list of suggested actions for future mitigation?
- Recommendations

Which of the following options is an example of a recovery measure?
- Restore a virtual machine (VM) from a trusted snapshot.

A virtual machine in an organization’s cloud environment is compromised by malware. The organization’s security team restores the VM using a copy of it created before the malware infection. What is the term for this copy?
- A VM snapshot

A cloud security team has been assigned to monitor their cloud environment for unusual activity. What tool can they use to achieve this goal?
- Security Command Center

A cloud security analyst runs a scan and finds that secure boot is disabled for several VMs in their environment. Why does this introduce a security risk?
- It allows the virtual machine to boot with unauthorized code.

A cloud security analyst identifies several publicly accessible storage buckets in their organization’s cloud environment. What security risks can publicly accessible storage buckets create?
- They can accidentally expose sensitive data to anyone on the public internet.

A cloud security analyst wants a list of the vulnerabilities in their organization’s virtual machines. How can they access this information?
- Selecting the Findings by Resource Type tab on the Active vulnerabilities section of the SCC overview

A cloud security analyst is looking for a mentor. What career benefits can a mentor provide them?
- Opportunities to learn more about cloud security

A cloud security team realizes that one of their organization’s virtual machines has been infected with malware. How should they deal with this issue?
- Stop the affected VM.

A cloud security team has identified, contained, and eradicated a threat. How can the team make sure there are no other misconfigurations before closing the incident?
- Conduct a scan with Security Command Center.

A cloud security team has just recovered from a data breach. They choose to implement more frequent security audits for their organization’s cloud environment. How will this improve their security posture?
- By alerting the team to vulnerabilities before attackers can exploit them

An organization’s firewall is configured to allow SSH traffic to all instances in the network. What security risks might this introduce to the organization’s cloud environment? Select two answers.
- Unauthorized remote access
- Increased attack surface

What components should you identify in a job posting to help determine if the job is a good fit?
- Skills
- Education
- Experience

Which of the following terms are helpful for beginning cloud security analysts to use when searching for jobs? Select all that apply.
- Junior
- Associate
- Entry level

How can your portfolio help prepare you for the job search process? Select all that apply.
- Portfolios are a way to consider how you can relate specific projects to descriptions in a job posting.
- Portfolios demonstrate your technical skills to potential employers.
- Portfolios include projects you have completed or contributed to.

How can your resume help prepare you for the job search process? Select all that apply.
- A resume lists skills, previous work experience, and education.
- A resume includes achievements from prior jobs.

You have an upcoming client meeting with multiple stakeholders. You expect there will be many decisions made during the meeting and action items assigned, so you’d like detailed notes to easily reference later. Which of the following features can you use to track discussion points and highlight action items?
- Take notes for me

You're presenting an important proposal to your team remotely by using Google Meet, but your webcam and lighting aren’t the best. How can you improve your video quality in a meeting using Gemini in Google Meet?
- Turn on Studio Look.

You've joined a Meet video call with a team based in Frankfurt, Germany. The main speaker, Ida, is presenting in German. You’re conversational in German, but not fluent enough to follow everything in a business meeting. You worry that you might be missing important context during the call. How can you best improve your understanding in real-time without interrupting the flow of the conversation?
- Turn on translated captions.

You're the head of sales at an amusement park with global locations. You're preparing for the annual sales meeting, a virtual event crucial to setting the tone and targets for the year. You want to create a background that showcases your company's industry and global presence. Which prompt will best meet your needs using Gemini in Google Meet?
- Rollercoaster with a globe in the background

You are using Dataproc to process a large number of CSV files. The storage option you choose needs to be flexible to serve many worker nodes in multiple clusters. These worker nodes will read the data and also write to it for intermediate storage between processing jobs. What is the recommended storage option on Google Cloud?
- Cloud Storage

You are migrating on-premises data to a data warehouse on Google Cloud. This data will be made available to business analysts. Local regulations require that customer information including credit card numbers, phone numbers, and email IDs be captured, but not used in analysis. You need to use a reliable, recommended solution to redact the sensitive data. What should you do?
- Use the Cloud Data Loss Prevention API (DLP API) to identify and redact data that matches infoTypes like credit card numbers, phone numbers, and email IDs.

Your data and applications reside in multiple geographies on Google Cloud. Some regional laws require you to hold your own keys outside of the cloud provider environment, whereas other laws are less restrictive and allow storing keys with the same provider who stores the data. The management of these keys has increased in complexity, and you need a solution that can centrally manage all your keys. What should you do?
- Store your keys on a supported external key management partner, and use Cloud External Key Manager (Cloud EKM) to get keys when required.

Business analysts in your team need to run analysis on data that was loaded into BigQuery. You need to follow recommended practices and grant permissions. What role should you grant the business analysts?
- bigquery.user and bigquery.dataViewer

Laws in the region where you operate require that files related to all orders made each day are stored immutably for 365 days. The solution that you recommend has to be cost-effective. What should you do?
- Store the data in a Cloud Storage bucket, and specify a retention period.

You are running a user-supplied DoFn method signature pipeline in Dataflow. The function has been defined by you. The code is running slow and you want to further examine the pipeline code to get better visibility of why. What should you do?
- Use Cloud Profiler

Cymbal Retail is migrating its private data centers to Google Cloud. Over many years, hundreds of terabytes of data were accumulated. You currently have a 100 Mbps line and you need to transfer this data reliably before commencing operations on Google Cloud in 45 days. What should you do?
- Order a transfer appliance, export the data to it, and ship it to Google.

You are managing the data for Cymbal Retail, which consists of multiple teams including retail, sales, marketing, and legal. These teams are consuming data from multiple producers including point of sales systems, industry data, orders, and more. Currently, teams that consume data have to repeatedly ask the teams that produce it to verify the most up-to-date data and to clarify other questions about the data, such as source and ownership. This process is unreliable and time-consuming and often leads to repeated escalations. You need to implement a centralized solution that gains a unified view of the organization's data and improves searchability. What should you do?
- Implement a data mesh with Dataplex and have producers tag data when created.

Cymbal Retail has acquired another company in Europe. Data access permissions and policies in this new region differ from those in Cymbal Retail’s headquarters, which is in North America. You need to define a consistent set of policies for projects in each region that follow recommended practices. What should you do?
- Create top level folders for each region, and assign policies at the folder level.

Cymbal Retail has a team of business analysts who need to fix and enhance a set of large input data files. For example, duplicates need to be removed, erroneous rows should be deleted, and missing data should be added. These steps need to be performed on all the present set of files and any files received in the future in a repeatable, automated process. The business analysts are not adept at programming. What should they do?
- Load the data into Dataprep, explore the data, and edit the transformations as needed.

A company collects lots of consumer data from online marketing campaigns. Company plans to use Google Cloud to store this collected data. The top management is worried about exposing personally identifiable information (PII) that may be present in this data. What should you do to reduce the risk of exposing PII data?
- Use the Cloud Data Loss Prevention API (DLP API) to inspect and redact PII data.

Your company is very serious about data protection and hence decides to implement the Principle of Least Privilege. What should you do to comply with this policy?
- Give just enough permissions to get the task done.

You are creating a data pipeline for streaming data on Dataflow for Cymbal Retail's point of sales data. You want to calculate the total sales per hour on a continuous basis. Which of these windowing options should you use?
- Tumbling windows (fixed windows in Apache Beam)

Your data engineering team receives data in JSON format from external sources at the end of each day. You need to design the data pipeline. What should you do?
- Store the data in Cloud Storage and create an extract, transform, and load (ETL) pipeline.

You want to build a streaming data analytics pipeline in Google Cloud. You need to choose the right products that support streaming data. Which of these would you choose?
- Pub/Sub, Dataflow, BigQuery

You have a data pipeline that requires you to monitor a Cloud Storage bucket for a file, start a Dataflow job to process data in the file, run a shell script to validate the processed data in BigQuery, and then delete the original file. You need to orchestrate this pipeline by using recommended tools. Which product should you choose?
- Cloud Composer

You are processing large amounts of input data in BigQuery. You need to combine this data with a small amount of frequently changing data that is available in Cloud SQL. What should you do?
- Use a federated query to get data from Cloud SQL.

The first stage of your data pipeline processes tens of terabytes of financial data and creates a sparse, time-series dataset as a key-value pair. Which of these is a suitable sink for the pipeline's first stage?
- Bigtable

You are running Dataflow jobs for data processing. When developers update the code in Cloud Source Repositories, you need to test and deploy the updated code with minimal effort. Which of these would you use to build your continuous integration and delivery (CI/CD) pipeline for data processing?
- Cloud Build

Your company has multiple data analysts but a limited data engineering team. You need to choose a tool where the analysts can build data pipelines themselves with a graphical user interface. Which of these products is the most appropriate?
- Cloud Data Fusion

You need to run batch jobs, which could take many days to complete. You do not want to manage the infrastructure provisioning. What should you do?
- Run the jobs on Batch.

You manage a PySpark batch data pipeline by using Dataproc: You want to take a hands-off approach to running the workload, and you do not want to provision and manage your own cluster. What should you do?
- Configure the job to run on Dataproc Serverless.

A company wants to improve productivity and decides to programmatically schedule and monitor workflows. What tool can you use to automate your workflows?
- Cloud Composer

A company collects large amounts of data that is useful for improving business operations. The collected data is already clean and is in a format that is suitable for further analysis. The company uses BigQuery as a data warehouse. What approach will you recommend to move this data to BigQuery?
- Directly load the data using Extract and Load approach ( EL).

Your analysts repeatedly run the same complex queries that combine and filter through a lot of data on BigQuery. The data changes frequently. You need to reduce the effort for the analysts. What should you do?
- Create a view of the frequently queried data.

A manager at Cymbal Retail expresses concern about unauthorized access to objects in your Cloud Storage bucket. You need to evaluate all access on all objects in the bucket. What should you do?
- Enable and then review the Data Access audit logs.

You have large amounts of data stored on Cloud Storage and BigQuery. Some of it is processed, but some is yet unprocessed. You have a data mesh created in Dataplex. You need to make it convenient for internal users of the data to discover and use the data. What should you do?
- Create a raw zone for the unprocessed data and a curated zone for the processed data.

Cymbal Retail has accumulated a large amount of data. Analysts and leadership are finding it difficult to understand the meaning of the data, such as BigQuery columns. Users of the data don't know who owns what. You need to improve the searchability of the data. What should you do?
- Create tags for data entries in Cloud Catalog.

You have data stored in a Cloud Storage bucket. You are using both Identity and Access Management (IAM) and Access Control Lists (ACLs) to configure access control. Which statement describes a user's access to objects in the bucket?
- The user has access if either IAM or ACLs grant a permission.

You have data that is ingested daily and frequently analyzed in the first month. Thereafter, the data is retained only for audits, which happen occasionally every few years. You need to configure cost-effective storage. What should you do?
- Configure a lifecycle policy on Cloud Storage.

You need to store data long term and use it to create quarterly reports. What storage class should you choose?
- Coldline

You need to choose a data storage solution to support a transactional system. Your customers are primarily based in one region. You want to reduce your administration tasks and focus engineering effort on building your business application. What should you do?
- Use Cloud SQL.

You are ingesting data that is spread out over a wide range of dates into BigQuery at a fast rate. You need to partition the table to make queries performant. What should you do?
- Create an ingestion-time partitioned table with daily partitioning type.

You have several large tables in your transaction databases. You need to move all the data to BigQuery for the business analysts to explore and analyze the data. How should you design the schema in BigQuery?
- Redesign the schema to denormalize the data with nested and repeated data.

Cymbal Retail also collects large amounts of structured, semistructured, and unstructured data. The company wants a centralized repository to store this data in a cost-effective manner using Google Cloud. What tool can you use to meet these requirements?
- Cloud Storage

Cymbal Retail collects large amounts of data that is useful for improving business operations. The company wants to store and analyze this data in a serverless and cost-effective manner using Google Cloud. The analysts need to use SQL to write the queries. What tool can you use to meet these requirements?
- BigQuery

Your data in BigQuery has some columns that are extremely sensitive. You need to enable only some users to see certain columns. What should you do?
- Use policy tags.

You used Dataplex to create lakes and zones for your business data. However, some files are not being discovered. What could be the issue?
- You have an exclude pattern that matches the files.

Your company uses Google Workspace and your leadership team is familiar with its business apps and collaboration tools. They want a cost-effective solution that uses their existing knowledge to evaluate, analyze, filter, and visualize data that is stored in BigQuery. What should you do to create a solution for the leadership team?
- Configure Connected Sheets.

You need to optimize the performance of queries in BigQuery. Your tables are not partitioned or clustered. What optimization technique can you use?
- Batch your updates and inserts.

You have analytics data stored in BigQuery. You need an efficient way to compute values across a group of rows and return a single result for each row. What should you do?
- Use a window function with an OVER clause.

You have data in PostgreSQL that was designed to reduce redundancy. You are transferring this data to BigQuery for analytics. The source data is hierarchical and frequently queried together. You need to design a BigQuery schema that is performant. What should you do?
- Use nested and repeated fields.

You have a complex set of data that comes from multiple sources. The analysts in your team need to analyze the data, visualize it, and publish reports to internal and external stakeholders. You need to make it easier for the analysts to work with the data by abstracting the multiple data sources. What tool do you recommend?
- Looker

Your business has collected industry-relevant data over many years. The processed data is useful for your partners and they are willing to pay for its usage. You need to ensure proper access control over the data. What should you do?
- Host the data on Analytics Hub.

You repeatedly run the same queries by joining multiple tables. The original tables change about ten times per day. You want an optimized querying approach. Which feature should you use?
- Materialized views

You built machine learning (ML) models based on your own data. In production, the ML models are not giving satisfactory results. When you examine the data, it appears that the existing data is not sufficiently representing the business goals. You need to create a more accurate machine learning model. What should you do?
- Perform feature engineering, and use domain knowledge to enhance the column data.

You need to share inventory data from Cymbal Retail with a partner company that uses BigQuery to store and analyze its data. What tool can you use to securely and efficiently share the data?
- Analytics Hub

Cymbal Retail has a team of ML engineers that builds and maintains machine learning models. As a Professional Data Engineer, how will you support this team?
- Process and prepare existing data to enable feature engineering.

Cymbal Retail processes streaming data on Dataflow with Pub/Sub as a source. You need to plan for disaster recovery and protect against zonal failures. What should you do?
- Take Dataflow snapshots periodically.

You have a team of data analysts that run queries interactively on BigQuery during work hours. You also have thousands of report generation queries that run simultaneously. You often see an error: Exceeded rate limits: too many concurrent queries for this project_and_region. How would you resolve this issue?
- Run the report generation queries in batch mode.

You run a Cloud SQL instance for a business that requires that the database is accessible for transactions. You need to ensure minimal downtime for database transactions. What should you do?
- Configure high availability.

When running Dataflow jobs, you see this error in the logs: "A hot key HOT_KEY_NAME was detected in…". You need to resolve this issue and make the workload performant. What should you do?
- Ensure that your data is evenly distributed.

A colleague at Cymbal Retail asks you about the configuration of Dataproc autoscaling for a project. What would be the Google-recommended situation when you should enable autoscaling?
- When you want to scale out single-job clusters.

You need to create repeatable data processing tasks by using Cloud Composer. You need to follow best practices and recommended approaches. What should you do?
- Write each task to be responsible for one operation.

Multiple analysts need to prepare reports on Monday mornings due to which there is heavy utilization of BigQuery. You want to take a cost-effective approach to managing this demand. What should you do?
- Use Flex Slots.

You have a Dataflow pipeline in production. For certain data, the system seems to be stuck longer than usual. This is causing delays in the pipeline execution. You want to reliably and proactively track and resolve such issues. What should you do?
- Set up alerts on Cloud Monitoring based on system lag.

You are running a Dataflow pipeline in production. The input data for this pipeline is occasionally inconsistent. Separately from processing the valid data, you want to efficiently capture the erroneous input data for analysis. What should you do?
- Create a side output for the erroneous data.

You need to design a Dataproc cluster to run multiple small jobs. Many jobs (but not all) are of high priority. What should you do?
- Use ephemeral clusters.

Your company recently migrated to Google Cloud and started using BigQuery. The team members don’t know how much querying they are going to do, and they need to be efficient with their spend. As a Professional Data Engineer, what pricing model would you recommend?
- Use BigQuery’s on-demand pricing model.

Cymbal Retail uses Google Cloud and has automated repeatable data processing workloads to achieve reliability and cost efficiency. You want out-of-the-box metric collection dashboards and the ability to generate alerts when specific conditions are met. What tool can you use?
- Cloud Monitoring

Who can create their own Looks and dashboards in Looker? Please choose the best answer.
- Data explorer end users only.

The Looker platform empowers you with options to share with others your data analyses or visualizations.
- True

Which of the following services is provided by the Looker platform? Please choose the best answer.
- Data analysis and data visualization.

Boards are the primary content type available in the Looker platform.
- False

You can access all Looker content contained within the “All folders” folder.
- False

What folder type does NOT exist in the Looker platform end user interface? Please choose the best answer.
- The “Recently Viewed” folder.

From our previous fruit basket example, the component “Is Round?” is classified as a measure, not a dimension.
- False

A measure corresponds to what part of a data source? Please choose the best answer.
- SQL aggregation functions.

In what order are filters applied to your data in Looker during data analysis? Please choose the best answer.
- Dimensions filter first, then measures filter.

End users can only apply one dimension filter at a time during data analysis.
- False

After the measure filter is applied, Looker discards all of the irrelevant data and only presents data that meets all current filter criteria.
- True

A dimension corresponds to what part of a data source? Please choose the best answer.
- A data column.

When using Looker for data analysis, only one dimension and measure combination can be selected at a time.
- False

Any content added to a board moves to the location of that content in the board directory structure.
- False

What is one change a data explorer end user CANNOT make to a dashboard? Please choose the best answer.
- Export individual tiles.

What field types can data explorer end users select as filter criteria in a Looker dashboard? Please choose the best answer.
- Both dimensions and measures.

What content CANNOT be added to a board? Please choose the best answer.
- Explores.

What field types can data explorer end users select as filter criteria in a Look? Please choose the best answer.
- Both dimensions and measures.

A data explorer end user must enter a dashboard-specific edit mode to add, remove or modify filters for a dashboard.
- True

A data explorer end user must enter a Look-specific edit mode to add or edit a filter in a Look.
- True

In the Edit table calculations dialog box, in which field will you actually write the coding for your new table calculation? Please choose the best answer.
- Expression.

You can pivot your data using either dimensions or measures in Looker.
- False

The four primary types of table calculations are: string, mathematical, logical, and date and time.
- True

Which is a key characteristic of table calculations? Please choose the best answer.
- They run only on your query results.

What are the recommended Looker best practices on when to click the “Run” button, with respect to adding an offset calculation? Please choose the best answer.
- Click the “Run” button before.

To write an offset calculation in Looker, you select the “Offset calculation” menu option from the “Add” menu popup in the Custom Fields section of the field picker in your Explore.
- False

An offset calculation is a totally independent function type compared to a table calculation.
- False

What are the general use cases for choosing to write a table calculation? Please choose the best answer.
- To prototype a new dimension or measure, and/or to support a results set.

What type of table calculation would contain the substring() function in its coding? Please choose the best answer.
- String.

To write a table calculation, you find the “Custom Fields” section of the field picker in an Explore, click on the “Add” menu popup, and then choose the “Table calculation” menu option.
- True

If you pivoted your data by a dimension in Looker, what data in turn would be displayed? Please choose the best answer.
- Data by active measure.

If you want to write an offset calculation to reference the values in a column to the left or right of a particular column for a rolling average when using a pivot table, which offset calculation type should you choose? Please choose the best answer.
- pivot_offset()

A data explorer end user can create a dashboard in two ways from an Explore: the Save fanout menu option from the top right-hand gear menu in Explores and Looks, and the “Add to dashboard” link at the extreme right of a Look in the Details panel.
- True

Who can create new dashboards in Looker? Please choose the best answer.
- Data explorers.

A Look is essentially a visual data report designed to answer one specific question of your data.
- True

Data explorer end users create Looks from what part of the Looker platform? Please choose the best answer.
- Explores.

End users can download a dashboard to their local computer as .csv, .zip, .pdf or .png file formats.
- True

Which of these options is NOT a sharing and scheduling method for dashboards? Please choose the best answer.
- Send.

End users can download a Look to their local computer as .csv, .zip, .pdf or .png file formats.
- True

All end users can see and follow all tile-level dashboard alerts if they so choose.
- False

Which of these options is NOT a sharing and scheduling method for Looks? Please choose the best answer.
- Pin to a board.

What is the minimum number of numeric measures or table calculations in a tile’s visualization needed to support a tile-level dashboard alert? Please choose the best answer.
- One (1).

What’s a pitfall to consider when using LLMs in conversation design?
- Heavy regulation for data-privacy and fairness.

Which of the following summarizes the overall purpose of conversation design?
- To get the right information to the right people in the right way.

What’s an important factor to consider when identifying key use cases for development?
- Number of users that will benefit from it.

Which of these explains how interactions are currently handled in person?
- Future state definition document.

What’s a best practice when doing high-level conversation design?
- Write sample dialogs and high-level flows.

What’s a positive aspect of using a deterministic intent-based design?
- It provides a more efficient approach for finding solutions.

Which order should we follow during the writing process when crafting conversation scripts?
- Conversation structure, structure’s enhancement, action’s enhancement, persona alignment.

Which of the following most accurately describes the concept of pre-expansion?
- Pre-expansions help set the context of what will come next in the interaction.

Which action is used by customers to confirm that they’re satisfied with the solution/outcome of the conversation?
- Acceptance

If escalation to a live agent occurs early in the virtual agent/end-user interaction, it’s important to:
- Acknowledge the end-user’s request.

Which of the following is a true statement as one of the guiding principles for virtual agent persona design?
- The persona doesn’t take center stage and instead focuses on the customer.

Designing a good virtual agent persona is important because it (Choose two)
- Helps to extend your brand message
- Fulfills an intended business objective.

What are the things that a chatbot developer should take into consideration when designing a virtual agent persona? (Choose two)
- Brand characteristics
- Key character traits

In the featurestore, the timestamps are an attribute of the feature values, not a separate resource type.
- True

What is the responsibility of model evaluation and validation components?
- To ensure that the models are good before moving them into a production/staging environment.

Which type of training do you use if your data set doesn’t change over time?
- Static training

Match the three types of data ingest with an appropriate source of training data.
- Streaming (Pub/Sub), structured batch (BigQuery), unstructured batch (Cloud Storage)

What percent of system code does the ML model account for?
- 5%

Which type of logging should be enabled in the online prediction that logs the stderr and stdout streams from your prediction nodes to Cloud Logging and can be useful for debugging?
- Container logging

When you use the data to train a model, Vertex AI examines the source data type and feature values and infers how it will use that feature in model training. This is called the ________________for that feature.
- Transformation

Vertex AI has a unified data preparation tool that supports image, tabular, text, and video content. Where are uploaded datasets stored in Vertex AI?
- A Google Cloud Storage bucket that acts as an input for both AutoML and custom training jobs.

Gradual drift is used for which of the following?
- An old concept that incrementally changes to a new concept over a period of time

Which component identifies anomalies in training and serving data and can automatically create a schema by examining the data?
- Data validation

Which of the following models are susceptible to a feedback loop? Check all that apply.
- A university-ranking model that rates schools in part by their selectivity (the percentage of students who applied that were admitted).
- A book-recommendation model that suggests novels its users may like based on their popularity (i.e., the number of times the books have been purchased).
- A traffic-forecasting model that predicts congestion at highway exits near the beach, using beach crowd size as one of its features.

What is the shift in the actual relationship between the model inputs and the output called?
- Concept drift

What is training skew caused by?
- Your development and production environments are different, or different code is used in the training environment than in the development environment.

Which of the following tools help software users manage dependency issues?
- Maven, Gradle, and Pip

Suppose you are building an ML-based system to predict the likelihood that a customer will leave a positive review. The user interface that customers leave reviews on changed a few months ago, but you don't know about this. Which of these is a potential consequence of mismanaging this data dependency?
- Losses in prediction quality

What does high-performance machine learning determine?
- Time taken to train a model

For the fastest I/O performance in TensorFlow… (check all that apply)
- Prefetch the data
- Read in parallel threads.
- Optimize TensorFlow performance using the Profiler.
- Read TF records into your model.

If each of your examples is large in terms of size and requires parsing, and your model is relatively simple and shallow, your model is likely to be:
- I/O bound, so you should look for ways to store data more efficiently and ways to parallelize the reads.

Which of the following indicates that ML training is CPU bound?
- If I/O is simple, but the model involves lots of complex/expensive computations.

To copy the input data into TensorFlow, which of the following syntaxes is correct?
- inferenceInterface.feed(inputName, floatValues, 1, inputSize, inputSize, 3);

Which of the following determines the correct property of Tensorflow Lite? Select TWO correct answers.
- Lower precision arithmetic
- Quantization

A key principle behind Kubeflow is portability so that you can:
- Move your model from on-premises to Google Cloud.

Which of these are reasons that you may not be able to perform machine learning solely on Google Cloud? Check all that apply.
- You are tied to on-premises or multi-cloud infrastructure due to business reasons.
- You need to run inference on the edge.

Which of the following components is essential for the virtual agent to determine the meaning behind a user's message?
- Natural Language Understanding (NLU) model

What is the main goal of steering?
- Identify a user’s task and route them appropriately.

What is an entity?
- A piece of information that we want to extract from user utterances.

At the core of a Dialogflow CX conversation, what does each "turn" represent?
- A single interaction between the user and the virtual agent.

What is a best practice when using intents? Choose TWO.
- Use training phrases you expect users to say.
- Use actual production utterances.

To handle diverse user requests effectively, what should you consider when designing intents?
- Grammatical differences.

Which of the following is true about predefined entities?
- Examples include color, date, number.

Which activities are part of the process to identify head intents? Choose TWO.
- Consult subject matter experts.
- Review of transcripts (manually or through machine learning).

Which of the following is true about intents?
- If you add “I want to travel to Mexico” tagging “Mexico” as a country, you don’t also need to add “I want to travel to Canada”

What is an overall definition of a Dialogflow CX agent?
- A virtual agent that handles concurrent conversations with end-users.

What are the steps in creating a taxonomy?
- First identify drivers, then identify head intents, then identify contextual intents.

What are drivers?
- Topic-based categories for head intents.

Which of the following are examples of events?
- No Match, No Input, Webhook Error

What are the two kinds of routes?
- Each flow has a start page.

How do you make sure a condition route is always met?
- Set its condition to true.

Which of the following is a type of state handler? Choose THREE.
- Routes
- Event handlers

What is the purpose of parameters?
- Used to capture and reference values that have been supplied by the end-user during a session.

Where do transitions let you move to?
- A new page or flow.

What is a best practice for disambiguations?
- Echo the user.

What is true about the validation tool?
- It lets you catch issues before they reach production.

What is a best practice for test sets? Choose TWO.
- Where possible, use (common) production utterances.
- Identify a way of automating test set running.

What is an advantage of building your head intent collection in a page that is not your start page?
- You can control exactly what head intent routes are in scope at each page in your flow.

What are the two methods for handling intents with overlapping training phrases?
- Merge intents, split intents

Seroja Malone wants to set up a Google Meet event with Anthony Dylan for next Friday. Which of the following buttons should she select in her Google Calendar?
- Create

Thomas Omar has two lists of calendars – his primary calendar and a secondary calendar known as his “other calendar”. Which of the following would appear in his primary calendar? Select all that apply.
- Calendar events he has created personally
- Calendar events that he has been invited to attend

Anthony Dylan uses a Public visibility Google Calendar. His sharing permission is set to “See Only Free/Busy”. Thomas Omar wants to schedule a meeting with Anthony. What will he see when he checks Anthony’s Google calendar?
- Anthony’s events will show as “busy”

Seroja Malone wants to set up an event with Anthony Dylan and Sherrie West. The group will meet every 6 weeks for an undetermined period of time. Which of the following should Seroja do? Select all that apply.
- Select Custom recurrence
- Invite Anthony and Sherrie as participants
- Select Create
- Choose the meeting start and end time

On the Rise store owner Yousef Amadi recently planned a team meeting on Google Meet, but then decided to delete the event. He has now changed his mind and wants to hold the meeting. How can he restore the event?
- Select the Settings menu, then Trash, then select the event, and choose Restore all selected

Seroja Malone sends Sherrie West a Google Calendar event invitation for next Thursday at 2pm. Sherrie accepts, but later realizes she has a conflict and that next Friday at 9am would be more convenient. What is the easiest way she can reschedule?
- Sherrie can change her response to “No”, select Propose a new time and select next Friday at 9am

Kaina Gao will be out of office next week but has new marketing assets that she needs to distribute during the head office meeting the following Monday. What is the most effective way to ensure that she completes this task?
- She can create a Task for Monday

As head of Product Distribution and Operations, Anthony Dylan frequently spends time meeting with On the Rise suppliers and distributors. How can Anthony set up his Google Calendar so suppliers can easily reserve blocks of time in which to meet with him?
- Anthony can create an Appointment schedule

In order to share his work with everyone at On the Rise, Thomas realizes he needs to modify his Google Calendar sharing permissions. What are some ways he can do this? Select all that apply.
- He can go to the Settings menu, select Settings, ensure his work calendar is selected and scroll to Access Permissions
- He can select his work calendar, select Options next to the calendar list, then select Settings and sharing from the menu

Thomas Omar frequently holds meetings with the On the Rise team. To simplify the scheduling process, he’d like to share his work calendar with everyone at the company. Which permission option should he select?
- Access permissions

Seroja Malone wants to share her work calendar exclusively with Anthony Dylan. What does she need to do?
- Select + Add people and type anthony.dylan@ontherise.com

Kaina Gao sends Sherrie West a Gmail message inviting her to an On the Rise Google Meet next Thursday. What does Sherrie need to do in order to add this event to her Google Calendar?
- Nothing. The event will automatically populate in her Google Calendar

Seroja Malone wants to schedule a Google Meet with a cinnamon supplier in Italy. How can she set up her Google Calendar in order to easily work across time zones?
- She can go to her Google Calendar Settings, select Display Secondary Time Zone, and select Italy. She can then compare it with her primary time zone

Management wants to see an analysis of resources divided by development team, department, cost center, and application status. What could you do to make this easier?
- Add appropriate labels to your Google Cloud resources.

What is used to collect metrics inside the VM instead of at the hypervisor level?
- Ops Agent

What are the three ways to install the Ops Agent?
- On a fleet of VMs
- Using Terraform
- On a Single VM

What lets you perform a live debugging of connections that are inadvertently dropped?
- Firewall Insights

What is one of the disadvantages of using packet mirroring?
- Bandwidth consumption

What logs help you monitor a network by recording a portion of network flows sent and received by VM instances (including GKE nodes)?
- VPC Flow logs

Which profile signifies the amount of memory allocated in the heap of the program?
- Heap

You have an SLO that states that 90% of your http requests need to respond in less than 100 ms. You want a report that compares latency for your last two versions. What tool would you use to most easily create this report?
- Trace

You deployed a new version of a service and all of a sudden significantly more instances are being created in your Kubernetes cluster. Your service scales when average CPU utilization is greater than 70%. What tool can help you investigate the problem?
- Logging

What is Cloud Logging pricing based on?
- Volume of chargeable logs

What is one of the best practices to reduce monitoring costs?
- Reduce Ops Agents usage

What are some of the challenges of using LLMs? Select three options.
- They can be expensive to train.
- They can be biased.
- They can be used to generate harmful content.

What are large language models (LLMs)?
- An LLM is a type of artificial intelligence (AI) that can generate human-quality text. LLMs are trained on massive datasets of text and code, and they can be used for many tasks, such as writing, translating, and coding.

What is a benefit of using large language models (LLMs)?
- They can generate human-quality text for tasks such as content creation, writing assistance, and automatic summarization.

What are some of the applications of LLMs?
- LLMs can be used for many tasks, including writing, translating, and coding.

Which product is a serverless data warehouse for storage and analytics?
- BigQuery

Data sources are connectors that let you do what with your data?
- Query the data.

Which Google Cloud product is a relational database used to establish relationships between information in multiple datatables?
- Cloud Spanner

Select the correct steps in the data analytics lifecycle.
- Ingest, process, store, analyze, and activate.

What type of data is used for machine learning?
- Structured and unstructured data

BigQuery is a fully managed data warehouse. What is a benefit of a data warehouse being fully managed?
- BigQuery takes care of the underlying infrastructure.

BigQuery is most efficient when working with data contained where?
- Its own storage service

BigQuery is optimized for reading terabytes and petabytes of data. How can BigQuery read and handle large amounts of data?
- BigQuery is a “columnar store,” so it only reads the relevant columns to execute a query.

BigQuery is two services in one. What are the two services?
- Storage and query services

What construct is used to reference a data table in a SQL query?
- project.dataset.table

You are exploring data in Looker, and you need to narrow the results of the query. Which should you use?
- A filter

You ran a query and have results showing year-over-year sales growth. What type of Looker Studio visualization would be best to display the data?
- Line chart

You want to save your query results as a report. What is a report referred to in Looker?
- A Look

You want to send a report that shows task completion to your manager every Friday morning to give them visibility into your team’s productivity. What is the best approach for sending data on a regular cadence?
- From Looker, create a schedule for the data.

Which is a benefit of using Looker Studio to share data as opposed to Looker?
- Looker Studio features better access control and permissions.

A chatbot is designed to answer customer questions using information from previous interactions. Which type of generative AI application is this an example of? Select two.
- Retrieval augmented generation
- Domain-based conversations

Which of the following are challenges associated with using generative AI in applications? Select two.
- The expense of building and training custom models.
- The potential for AI models to generate offensive or harmful content.

Which of the following best describes the primary function of a generative AI model?
- To create new content based on learned patterns.

Which of the following Google foundation models is used to convert between speech and text?
- Chirp

What is the term for incorrect or misleading results generated by an AI model?
- Hallucination

What type of model is Gemini?
- A multimodal model

What is the primary advantage of using a foundation model over building a custom AI model?
- Foundation models can be easily adapted to various tasks without extensive retraining.

Which of the following is an example of using generative AI for content creation?
- An AI system generating product descriptions based on product images and manuals.

Which of the following are required components of a prompt? Select two.
- Objective
- Instructions

In prompt design, what is the purpose of the "System Instructions" component?
- To offer technical or environmental directives that influence the model's behavior.

What is the primary benefit of using a prompt template in a generative AI application?
- It allows for easy customization and reuse of prompts with dynamic content.

What is the purpose of prompt design in generative AI?
- To guide the AI model's output and improve the quality of responses.

Which of the following is a technique for improving the quality of responses from a generative AI model?
- Instructing the model to explain its reasoning.

Which parameter in a generative AI model controls the degree of randomness in the output?
- Temperature

In prompt design, what is the purpose of the "Recap" component?
- To provide a concise summary of the key instructions and constraints in the prompt.

What is the recommended practice for structuring context in a prompt?
- Use delimiters to separate distinct documents.

What is the purpose of using semantic search in the RAG serving subsystem?
- To retrieve documents based on the meaning and intent of the query.

What is the primary goal of Retrieval Augmented Generation (RAG)?
- To improve the accuracy and relevance of responses from foundation models.

What is the role of vector embeddings in a RAG system?
- To represent text and other data types in a way that captures semantic meaning.

Which of the following types of data should be stored in a location other than the Vertex AI Search data store?
- Training data

What is the purpose of the pgvector extension in AlloyDB for PostgreSQL?
- To enable the storage and querying of vector embeddings.

Which component of the RAG architecture is responsible for adding external data to the RAG process?
- Data ingestion subsystem

In the context of RAG, what does "grounding" refer to?
- Connecting the model's output to verifiable sources of information.

Which of the following is a technique used to improve the performance of a foundation model for specific tasks?
- Supervised tuning

You need to create a chatbot that is designed to answer customer questions about your company's products in a friendly and informative way. Which Gemini 1.0 Pro model is the best choice for this task?
- Gemini 1.0 Pro

Which of the following describes the Gemini 1.0 Pro and Gemini 1.0 Pro Vision models?
- One model handles text-based prompts, the other handles multimodal prompts with text, images, and/or video.

What is the difference between AI and ML?
- AI is a discipline while ML is a toolset

What is the primary impact of ML?
- Provides insights that were not previously possible

True or False? Most business data is unstructured data, and mainly text.
- True

Google Cloud's pretrained model APIs use:
- Google's models and your data

True or False? Notebooks contain a magic function to execute BigQuery
- True

Select the statement that does not apply to Notebooks.
- It's up to you to install the latest ML libraries on the notebooks

AI Hub has templates for which of the following?
- All other answers are correct

Which technology was developed as a solution to run Kubernetes clusters and pods behind the scenes to support deploying pipelines?
- Vertex Pipelines

BigQuery ML has support for which of the following modeling tasks:
- Clustering
- Classification
- Regression

True or False? You can train and evaluate machine learning models directly in BigQuery.
- True

Which of the following are valid techniques for improving AutoML Vision and AutoML Natural Language models?
- Increase the diversity and complexity of data
- Increase the amount of training data
- Ensure consistent labeling

AutoML makes use of which of the following:
- Google's models and your data

What are the benefits of selling your software through Google Cloud Marketplace?
- All of the above

What option is used by Google Cloud Deploy and Cloud Build to run CI/CD pipelines in customer VPCs?
- Private pools

Why would you use Binary Authorization?
- All of the above

What technology does Google Cloud Deploy use to render Kubernetes-native applications?
- Skaffold

What message format does Eventarc use to deliver events?
- CloudEvents

Why would you send traffic to multiple versions of your Cloud Run application?
- Canary deployments

If you would like to leverage a Gemini model in BigQuery to perform generative AI tasks such as keywords extraction, what type of model would you use?
- Remote models

What is the primary purpose of an object table in BigQuery?
- To provide a structured interface for accessing and analyzing unstructured data stored in Cloud Storage.

When creating a remote model in BigQuery that utilizes a pre-trained Gen AI foundation model, which specification is required in the CREATE MODEL statement?
- Set up a connection to Vertex AI and refer to the endpoint of the deployed model.

You are a data scientist working with a vast dataset of customer reviews in BigQuery. You want to use the power of generative AI models to analyze the sentiment of these reviews and generate summaries. Which BigQuery ML function allows you to directly utilize remote Gen AI models for language tasks such as sentiment analysis and summarization?
- ML.CREATE_TEXT

You're a data scientist working on a project that requires you to leverage AI/ML capabilities within BigQuery. You're evaluating different deployment options for your models. In terms of deployment, what are the major AI/ML model types in BigQuery?
- Local models, remote models, imported models

In BigQuery, the workflow to develop an AI/ML project can be divided into two main phases. Which option accurately represents these two phases?
- Create and use

Which type of prompt allows a generative AI model to perform a task by providing a few examples or demonstrations of the desired output?
- Few-shot prompt. For example, showing an AI a few examples of poems with a specific style and asking it to generate a new poem in that style.

Which SQL command would you use to create an ML model in BigQuery ML?
- CREATE MODEL

You want to use machine learning to discover the underlying pattern and group a collection of unlabeled photos into different sets. Which should you use?
- Unsupervised learning, cluster analysis

Which of the following is one of Google’s seven principles for responsible AI?
- AI should avoid creating or reinforcing unfair bias.

Vertex AI, AutoML, and Generative AI Studio align to which stage of the data-to-AI workflow?
- Machine learning

On Cloud Storage, which data storage class is best for storing data that needs to be accessed less than once a year?
- Archive storage

If you have unstructured data, like images, text, and/or audio, which storage option on Google Cloud would you choose?
- Cloud Storage

Which Google hardware innovation tailors architecture to meet the computation needs on a domain, such as the matrix multiplication in machine learning?
- TPUs (tensor processing units)
- TPUs (Tensor Processing Units)

What are the three layers of the AI/ML framework on Google Cloud?
- AI foundations, AI development, and AI solutions

Which code-based solution offered with Vertex AI gives data scientists full control over the development environment and process?
- Custom training

tf.keras is a high-level TensorFlow library that has been commonly used to build ML models. Which of the following lets you create a neural network with multiple layers?
- tf.keras.Sequential

A video production company wants to use machine learning to categorize event footage but does not want to train its own ML model. Which option can help you get started?
- Pre-trained APIs
- Pre-built APIs

Which of the following can you do with the Natural Language API?
- Analyze sentiment and identify subjects of text.

You work for a global hotel chain that has recently loaded some guest data into BigQuery. You have experience writing SQL and want to leverage machine learning to help predict guest trends for the next few months. Which option is best?
- BigQuery ML

Your company has a massive amount of data, and you want to train your own machine learning model to see what insights ML can provide. Due to resource constraints, you require a codeless solution. Which option is best?
- AutoML

Which stage of the machine learning workflow includes model training and evaluation?
- Model development

A hospital uses the machine learning technology of Google to help pre-diagnose cancer by feeding historical patient medical data to the model. The goal is to identify as many potential cases as possible. Which metric should the model focus on?
- Recall

A farm uses the machine learning technology of Google to detect defective apples in their crop, like those with irregular sizes or scratches. The goal is to identify only the apples that are actually bad so that no good apples are wasted. Which metric should the model focus on?
- Precision

Select the correct machine learning workflow.
- Data preparation, model development, model serving
- Data preparation, model training, model serving

Which stage of the machine learning workflow includes data upload and feature engineering?
- Data preparation

When you build an ML pipeline on Vertex AI to automate the ML workflow, what are the components you can use?
- You can include both prebuilt components (by Google) and custom components into the pipeline.

Which of the following provides a toolkit to automate, monitor, and govern machine learning systems by orchestrating the workflow in a serverless manner?
- Vertex AI Pipelines

How does generative AI generate new content?
- It learns from a massive amount of existing content and can then be used to solve general problems or be further tuned to solve specific problems.

Which of the following is the best way to generate more creative or unexpected content by adjusting the model parameters in Generative AI Studio?
- Set the temperature to a high value.

Which of the following is a type of prompt that allows a large language model to perform a task with only a small number of examples?
- Few-shot prompt

What are the two categories of AI solutions provided by Google Cloud?
- Vertical solutions, which focus on specific industries, and horizontal solutions, which solve problems across industries

You run a call center that handles customer questions from multiple channels, such as email, phone calls, and chat. You want to improve customer satisfaction and agent efficiency by using AI to automate routine requests, help agents with complex tasks and discover insights. Which AI solution on Google Cloud should you choose?
- Contact Center AI

Which stage in a data pipeline involves modifying and preparing data for specific downstream requirements?
- Transform

What is the key difference between a data lake and a data warehouse?
- Data lakes store raw, unprocessed data, while data warehouses store processed and organized data.

What is the purpose of Analytics Hub in Google Cloud?
- To enable secure and controlled data sharing within and outside an organization.

What is the primary function of a data engineer?
- Building and maintaining data pipelines.

Which Google Cloud product is best suited for storing unstructured data like images and videos?
- Cloud Storage

Which of the following services efficiently moves large datasets from on-premises, multicloud file systems, object stores, and HDFS into Cloud Storage and supports scheduled transfers?
- Storage Transfer Service

Which tool or service uses the “cp” command to facilitate ad-hoc transfers directly to Cloud Storage from various on-premise sources?
- gcloud storage command

The ease of migrating data is heavily influenced by which two factors?
- Data size and network bandwidth

In Datastream event messages, which section contains the actual data changes in a key-value format?
- Payload

Which of the following tools is best suited for migrating very large datasets offline?
- Transfer Appliance

Which of the following statements accurately describes the staleness configuration for BigLake's metadata cache?
- The staleness can be configured between 30 minutes to 7 days and can be refreshed automatically or manually.

What is the main advantage of using BigLake tables over external tables in BigQuery?
- BigLake tables offer enhanced performance, security, and flexibility.

Which of the following best describes the BigQuery Data Transfer Service?
- It is a fully-managed service for scheduling and automating data transfers into BigQuery from various sources.

Which of the following BigQuery features or services allows you to query data directly in Cloud Storage without loading it into BigQuery?
- External tables

The LOAD DATA statement in BigQuery is best suited for which scenario?
- Automating data loading into BigQuery tables within a script or application.

Which of the following is a key benefit of using stored procedures in BigQuery?
- The improvement of code reusability and maintainability.

Which of the following best describes the core concept of extract, load, and transform (ELT)?
- Loading data into a data warehouse and then transforming it within the warehouse.

What is the primary purpose of assertions in Dataform?
- To define data quality tests, ensuring data consistency and accuracy.

What is the primary advantage of using BigQuery's procedural language support?
- It enables the execution of multiple SQL statements in sequence with shared state.

How does Dataform enhance the management of SQL workflows in BigQuery?
- It unifies transformation, assertion, and automation within BigQuery, streamlining data operations.

What is the primary advantage of using Dataflow templates?
- It allows for reusability and parameterization of pipelines.

Which of the following features makes Dataproc Serverless for Spark ideal for interactive development and exploration?
- JupyterLab integration

Which Google Cloud service is best suited for building complex data pipelines with a visual, drag-and-drop interface?
- Data Fusion

Which Google Cloud service is specifically designed for serverless, no-code data transformation using recipes?
- Dataprep

Which Google Cloud service is recommended for handling streaming data pipelines that require millisecond-level latency analytics?
- Bigtable

Which of the following services enables the creation of a unified event-driven architecture for loosely coupled services?
- Eventarc

Which Google Cloud service acts as a central orchestrator, seamlessly integrating your pipelines across diverse systems?
- Cloud Composer

Which of the following Google Cloud services allows you to execute code in response to various Google Cloud events?
- Cloud Run functions

In the context of Cloud Composer, what is a DAG?
- Directed acyclic graph

Which of the following Google Cloud services allows you to automate tasks by invoking your workloads at specified, recurring intervals?
- Cloud Scheduler

One of your managers comes to you and states that they need to have more wrap up time for one of their queues. They are currently dealing with a difficult issue with callers in that queue. How would you give agents working in that queue more time on the wrap up?
- Access the queue the manager is assigned to and modify the queue-level automatic wrap up settings to be longer than the current time.

One of your newest agents is dealing with an escalated call right now. You make the decision that you would like to hear the call for yourself. To do this you would need to:
- Barge in on the call

One of your queues is for a small sales team that is eager to answer calls. Right now Deltacast is the go-to routing configuration for all of your queues, but how might you leverage a different CCAIP routing option so that all sales team agents in this queue get the call offered at the same time and the quickest or most efficient agent will be able to respond?
- Switch the routing option for this sales queue to multicast.
- Enable auto answer.

What is going to cause a mobile call to go into PSTN fallback?
- When your end user does not have a strong enough data connection.

Which of the following is not an option for after-hours deflection in the mobile channel for chats? (Choose TWO)
- External deflection link
- Email

Where do you enable an FAQ page as the landing page for your mobile app?
- Settings > Operation management

You are starting a new campaign in which you will have agents manually dial consumers off a pre-generated list. What type of campaign are you planning to start?
- Preview

Let’s imagine you are running a political research company. You no longer want an ongoing progressive campaign that is assigned to your “Political Survey” IVR queue calling consumers during EST business hours (9am to 5pm). How could you fix this?
- You create a time zone management list and apply it to the current campaign

You are currently running a campaign where agents are reserved to take calls after the system places the call. What type of campaign is this?
- Progressive

If an agent is using Smart Compose in the chat adapter, what will the feature do?
- Automatically complete responses for the agent using conversation context.

If you are using Virtual Task Assistant and the agent moves the caller to a Task Assistant to complete some confidential information, what should the agent do?
- Stay on the line and when the caller is done, the agent will continue the call with them.

When an agent is in a chat and they view the sentiment score at the top of the adapter, what does that indicate?
- The emotional intent within the current chat.

Agent Assist is an AI powered tool that empowers:
- human agents to be more productive and provide better service, by providing in-the-moment assistance.

Which of these is an agent assist feature?
- Smart Reply

Who among the following is part of conversation participants?
- Customer

Which of the following is part of Virtual Agent architecture?
- Session Manager

Which performance metrics are generated through training?
- Message Coverage
- Recall

PII Information should not be more than ___%.
- 2

Which state is assigned when the allowlist is generated?
- Unreviewed

Which data format is supported to train the model?
- Flat Files
- JSON

Generally, how many hours of model training does it take?
- ~16 - 24 hours

What is difference between Smart Reply and Smart Compose
- Smart Compose suggests phrases to complete a statement while Smart Reply suggests the whole message.

LLM Baseline Summarization's objective is to automatically summarize ___________.
- customer-agent conversations.

What are the prerequisites for LLM Baseline Summarization model training?
- LLM Baseline Summarization does not need model training.

What are the possible data sources for a data store?
- BigQuery and Cloud Storage

What does Generative Knowledge Assist do?
- Answer questions from your human agents based on the documents you provided.

How do you create a new data store in Google Cloud?
- Go to the Search and Conversation page, select the Data Store menu, and click New Data Store.

When can sentiment analysis be enabled?
- During conversation profile creation or editing.

What is the range of sentiment scores?
- Between -1 to +1.

What are the phases of the delivery lifecycle?
- Discovery Phase, Design Phase, Implementation & Testing, and Deploy & Post Launch

What is the primary objective of the Implementation & Testing phase?
- Validate that all features are working properly and as expected.

What are the key considerations during the deployment phase?
- Model deployment, Conversation profile setup, and UI Integration

What is infrastructure as code (IaC)?
- IaC is a process to define, provision, and manage cloud infrastructure by writing code in files.

Select the three Terraform editions available in production.
- Terraform Community Edition
- Terraform Enterprise
- Terraform Cloud

Select the two use cases for Terraform.
- Standardize configurations
- Automate changes

Which one of the following statements is true regarding Terraform?
- Terraform can be used for multi-cloud deployments.

In which phase of the Terraform workflow do you write configuration files based on the scope defined by your organization?
- Author

In which phase of the Terraform workflow can you run pre-deployment checks against the policy library?
- Validate

Which command creates infrastructure resources?
- terraform apply

How many resource types can be represented in a single resource block?
- One

What is the most common use case for output values in Terraform?
- Print resource attributes of a root module CLI after its deployment.

Can a variable be assigned values in multiple ways?
- Yes

Which dependency can be automatically detected by Terraform?
- Implicit dependency

Which code construct of Terraform helps you parameterize a configuration?
- Variables

State true or false. The source of a module can only be remote.
- False

What happens when a version argument is specified in a module block?
- Terraform automatically upgrades the module to the latest version matching the specified version constraint.

What is the purpose of output values within modules?
- Pass resource attributes outside a module.

State true or false. A state file is stored by default in a local file named terraform.tfstate.
- True

Select the three benefits of storing a Terraform state file remotely.
- Sharing and delegation
- Locking
- Secure access

The default, standard manager role does NOT have access to which of the following items in the settings menu?
- Queue configuration

Which of the following is a best practice for browser settings for CCAIP?
- Disable ad blockers

Within live monitoring, an admin manager has the ability to view which of the following: Choose two.
- All connected, completed, and queued calls
- All dashboard data

Which dashboard provides a view of all logged-in agents and allows you to filter them?
- Agent monitoring

What are some metrics you can include in an Agent Performance Metrics Report? Choose two.
- Occupancy
- Hold time

CCAIP users must have which permission in order to take calls and chats?
- Agent permission

How can you see connected calls?
- Visit the call dashboard and live call monitoring pages

What is the function of Multicast in calls and chats?
- Routes calls and chats to all available agents in an assigned queue.

Consider the types of calls listed below. Which type of call will not be included in a historical report for calls?
- Connected calls

Which of the following details are present when viewing the chat details in connected chats?
- Agent’s name

Which feature allows you to view ongoing chat sessions incognito?
- Monitor

Which report do you need to access to review chats that have the lowest CSAT score?
- Performance metrics report

Which of the following are filter options in the chat dashboard?
- Team

Which report gives a summary of all interactions, including transfers to the same or a different queue?
- Queue summary- all interactions

On the queues monitoring page, what action can you take?
- Add an agent

Which of the following can you see in the queue reports dashboard?
- Service level for the current day

Which of the following is included in the Virtual Agent live monitoring dashboard?
- The resolution rate per Virtual Agent.

Which of the following metrics are included in the downloaded Virtual Agent Detail Report?
- Queue name

When it comes to Virtual Agents, what is a planned transfer?
- When a voice Virtual Agent transfers a call or chat to a human agent through design.

An agent on your team has been having issues using the CCAI Platform. You reach out to them and ask what browser they are using. The agent is utilizing Firefox and has cleared the cache. What are the right troubleshooting steps for this issue?
- The agent should be using Chrome for CCAI Platform. They should switch to this browser and try again.

If the CRM softwares becomes unavailable during an agent’s shift, what can they do for the rest of their workday?
- The agent can continue to work as normal while the CRM is down. They can continue to take chats and calls in CCAI Platform instead.

One of the agents on your team has been having connection issues when working in the office or at home. You have checked the browser, cleared the cache, and made sure all software is up to date. The agent is using a wireless connection everywhere they work. What could be wrong with their connection?
- The agent should be using a hardwired connection to get optimal connection results.

Which of the following is the ideal use case for Extract and Load (EL)
- Scheduled periodic loads of log files (e.g. once a day)

Dataproc provides the ability for Spark programs to separate compute and storage by:
- Reading and writing data directly from/to Cloud Storage

Which of the following statements are true about Dataproc? (Select all 2 correct answers)
- Lets you run Spark and Hadoop clusters with minimal administration
- Helps you create job-specific clusters without HDFS

Match each of the terms with what they do when setting up clusters in Dataproc: TermDefinition__ 1. ZoneA. Costs less but may not be available always__ 2. Standard Cluster modeB. Determines the Google data center where compute nodes will be__ 3. PreemptibleC. Provides 1 primary and N workers
- B<br>C<br>A

Which of the following statements are true? (Select all 2 correct responses)
- Dataflow transforms support both batch and streaming pipelines
- Dataflow executes Apache Beam pipelines

Match each of the Dataflow terms with what they do in the life of a dataflow job: TermDefinition__ 1. TransformA. Output endpoint for your pipeline__ 2. PCollectionB. A data processing operation or step in your pipeline__ 3. SinkC. A set of data in your pipeline
- B<br>C<br>A

Cloud Data Fusion is the ideal solution when you need
- to build visual pipelines

Cloud Storage, Bigtable, Cloud SQL, Spanner, and Firestore represent which type of services?
- Database and storage

Pub/Sub, Dataflow, Dataproc, and Cloud Data Fusion align to which stage of the data-to-AI workflow?
- Ingestion and process

AutoML, Vertex AI Workbench, and TensorFlow align to which stage of the data-to-AI workflow?
- Machine learning

Compute Engine, Google Kubernetes Engine, App Engine, and Cloud Functions represent which type of services?
- Compute

Which data storage class is best for storing data that needs to be accessed less than once a year, such as online backups and disaster recovery?
- Archive storage

Select the correct streaming data workflow.
- Ingest the streaming data, process the data, and visualize the results.

Due to several data types and sources, big data often has many data dimensions. This can introduce data inconsistencies and uncertainties. Which type of challenge might this present to data engineers?
- Veracity

Which Google Cloud product is a distributed messaging service that is designed to ingest messages from multiple device streams such as gaming events, IoT devices, and application streams?
- Pub/Sub

When you build scalable and reliable pipelines, data often needs to be processed in near-real time, as soon as it reaches the system. Which type of challenge might this present to data engineers?
- Velocity

Which Google Cloud product acts as an execution engine to process and implement data processing pipelines?
- Dataflow

Data has been loaded into BigQuery, and the features have been selected and preprocessed. What should happen next when you use BigQuery ML to develop a machine learning model?
- Create the ML model inside BigQuery.

You want to use machine learning to group random photos into similar groups. Which should you use?
- Unsupervised learning, cluster analysis

You want to use machine learning to identify whether an email is spam. Which should you use?
- Supervised learning, logistic regression

Which two services does BigQuery provide?
- Storage and analytics

Which BigQuery feature leverages geography data types and standard SQL geography functions to analyze a data set?
- Geospatial analysis

Which pattern describes source data that is moved into a BigQuery table in a single operation?
- Batch load

BigQuery is a fully managed data warehouse. What does “fully managed” refer to?
- BigQuery manages the underlying structure for you.

In a supervised machine learning model, what provides historical data that can be used to predict future data?
- Labels

Your company has a lot of data, and you want to train your own machine model to see what insights ML can provide. Due to resource constraints, you require a codeless solution. Which option is best?
- AutoML

Which Google Cloud product lets users create, deploy, and manage machine learning models in one unified platform?
- Vertex AI

Which stage of the machine learning workflow includes model evaluation?
- Model training

A farm uses Google’s machine learning technology to detect defective apples in their crop, such as those that are irregular in size or have scratches. The goal is to identify only the apples that are actually bad so that no good apples are wasted. Which metric should the model focus on?
- Precision

Which Vertex AI tool automates, monitors, and governs machine learning systems by orchestrating the workflow in a serverless manner?
- Vertex AI Pipelines

A hospital uses Google’s machine learning technology to help pre-diagnose cancer by feeding historical patient medical data to the model. The goal is to identify as many potential cases as possible. Which metric should the model focus on?
- Recall

Which stage of the machine learning workflow includes feature engineering?
- Data preparation

How do we enable Live Transcription for Voice on Agent Assist?
- It’s enabled by default for voice.

Live transcription automatically redact PII
- True

It is required to have prior knowledge of Data stores to configure GKA.
- True

Which of the following are true? Please select all that apply
- Use conversation context as user metadata.
- Support private knowledge base.
- Provide generative answers and citations.
- Answers and links agent's questions to conversation context.

What’s the word length when you should consider breaking down the document?
- 1000 words

We can not generate a summary while conversation is going on.
- False

What is the primary use case LLM summarization?
- LLM Baseline Summarization is an AI-powered Agent Assist feature that automatically summarizes customer conversations for voice and chat both.

What is the average reduction of summarization time with LLM summarization?
- From 90 seconds to 9 seconds

LLM Summarization for voice doesn’t support more than 2 audio channels.
- True

Map the correct model configurations as per use case between Cell A and Cell B.
- A:4, B:3, C:1, D:2

Which of the following API ensures protection and access of resources?
- Cloud Storage API

Which of the following components initiates the call recording process in a SIPREC integration?
- Customer's SBC (SRC)

When a customer calls a support line integrated with Agent Assist, what is the initial step GTP takes upon receiving the SIP INVITE message?
- Manages the call signaling process

After real-time transcription is performed in an Agent Assist integration, what is an optional step that can be taken to protect sensitive information?
- Redaction using Data Loss Prevention tools

When do you need to Implement UI modules using individual components?
- If you use a custom application where the modules might need to be rendered in different sections of the page, or if you require significant customization.

What Agent Assist events are published to PubSub?
- AA suggestions, new messages, and conversation lifecycle-related

Which of the following are core functionalities of the UI connector module?
- All of the these are ore functionalities of the UI connector module

Which are the places where the integration of Agent Assist in CCAIP requires configuration?
- Agent Assist Console or Project & CCAIP Platform

Virtual agents are useful in the context of Agent Assist, because they attempt to resolve customer queries on their own before escalating to a human agent.
- True

What is the purpose of Dialogflow runtime integrations?
- Allows data integration from another Dialogflow-powered Contact Center AI services (like Agent Assist and virtual agents) into Contact Center AI Insights.

Which of the following APIs do not necessarily need to be enabled to Dialogflow runtime integrations?
- Cloud Data Loss Prevention (DLP)

What activities are performed in the discovery phase of the Delivery Life cycle?
- All of these activities are performed in the discovery phase of the Delivery Life cycle.

What are all the GenAI powered features in the Agent Assist ?
- These are all GenAI powered features in the Agent Assist

True or False: A conversation profile in Agent Assist configures a set of parameters that control the suggestions made to an agent. These parameters control the suggestions that are surfaced during runtime
- True

The “In-Call Details” tab provides you with which data points? (Choose TWO)
- Phone number
- Entry point

You would like to select a different language for your adapter. Where can you change your language in the adapter?
- The options menu (three dots)

When you click the “Transfer/Add” button on the adapter, it will provide you with three options. What are those three options?
- Agent, queue, outside line

Which agent status color indicates that you are in unavailable status?
- Red

When a chat notification comes in, what happens if you click the notification?
- The chat is answered.

What should you do in the Wrap-up screen after ending a chat?
- Click submit if that’s the only option, or select a disposition code, enter notes, and then click submit and end wrap-up if those fields are available.

How can you view your individual and team-average chat statistics in the chat adapter?
- Click the Chat icon, then select show chat overview, followed by options and select Stats.

What is one way you can initiate the use of chat shortcuts?
- Click in the chat window and type a forward slash.

What is a warm transfer when you are on a chat?
- When you transfer a customer to another queue or agent while remaining on the line to chat with the customer until the transfer is complete.

What status should you set yourself to, in order to receive incoming chats?
- Available

How should you set the time and date on your computer?
- Synced automatically with the internet

What should you do when your CRM is unavailable?
- Log into the CCAIP portal and continue to work as normal, including taking calls and chats.

If you are using a Chrome browser and are experiencing issues, what steps should you try? (Choose two)
- Check that third-party cookies are not blocked.
- Clear your cache.

Sarah is a network architect. They are responsible for the network design between Cymbal’s on-premises network and Google Cloud resources, and also between Cymbal’s Google Cloud resources and a partner company’s Google Cloud resources. These connections must provide private IP connectivity and support up to 100 Gbps of data exchange with minimum possible latency. Which options satisfy these requirements? (select 2 of the options)
- VPC peering between VPC networks for Cymbal and the partner company.
- A Dedicated Interconnect connection between Cymbal’s on-premises network and their Google Cloud VPC network.

To reduce latency, you will be replacing an existing Cloud VPN Classic VPN connection. You will connect your organization’s on premises data center to Google Cloud resources in a VPC network with all resources in a single subnet and region using private/internal IP connectivity. The connection will need to support 1.5 Gbps of traffic. Due to cost considerations, you would like to order the option that provides just enough bandwidth and not more but must have significantly lower latency than the existing Cloud VPN connection. What should you use?
- A Partner Interconnect connection with 1 or 2 VLAN attachments

Cymbal needs to create one or more VPC networks to host their cloud services in 3 regions: Northeastern US, Western Europe, and Southeast Asia. The services require bi-directional inter-regional communication on port 8443. The services receive external internet traffic on port 443. What is the minimal network topology in Google Cloud that would satisfy these requirements?
- 1 custom VPC network, with a subnet in each region). The VPC network has the default routes, and the appropriate firewall rules added to support the traffic requirements

Cymbal has a network support engineering team which will need access to create or change subnet names, locations, and IP address ranges for some but not all subnetworks of a VPC network in a Google Cloud project. Cymbal uses the principle of least privilege and would like to restrict role-usage to Google predefined roles. Which role should be assigned to this group?
- The Compute Network Admin role bound at the resource level for the subnetworks of the VPC network that will be created or changed by the team.

You are a network engineer designing a network IP plan and need to select an IP address range to use for a subnet. The subnet will need to host up to 2000 virtual machines, each to be assigned one IP address from the subnet range. It will also need to fit in the network IP range 10.1.0.0/16 and be as small as possible. What subnet range should you use?
- 10.1.240.0/21

You need to create a GKE cluster, be able to connect to pod IP addresses from your on-premises environment, and control access to pods directly using firewall rules. You will need to support 300 nodes, 30000 pods, and 2000 services. Which configuration satisfies these requirements?
- A GKE VPC-native cluster in a subnet with primary IP range 10.0.240.0/20, pod IP range of 10.252.0.0/15, and service IP range of 10.0.224.0/20

Cymbal wants to ensure communication from their on-premises data centers to the GKE control plane stays private using internal IP communication and their Dedicated Interconnect links. However, they will need to allow administrators to periodically connect to the cluster control plane from remote internet-accessible locations that don’t have access to the on-premises private network. You want to select a configuration and connection approach that will enable these requirements while providing the highest security. What should you do?
- Deploy a private GKE cluster with public endpoint access disabled. Create a VM in the same subnet with only an internal IP address and provide IAP tunnel based SSH access to remote administrators for this VM. Have remote administrators connect via IAP tunnel SSH to this VM when requiring access to the GKE cluster control plane.

You are designing a VPN solution to connect Cymbal’s on-premises data center to Google Cloud. You have a BGP-capable VPN gateway installed in the data center and require 99.99% availability for the VPN link. What Cloud VPN configuration meets these requirements while requiring the least setup and maintenance?
- HA VPN with Cloud Router and dynamic routing

You are selecting Google Cloud locations to deploy Google Cloud VMs. You have general requirements to maximize availability and reduce average user latency with a lower priority goal of reducing networking costs. The users served by these VMs will be in Toronto and Montreal. You must deploy workloads requiring instances at 99.5% availability in Toronto and 99.99% availability in Montreal. These instances all exchange a large amount of traffic among themselves. Which deployment option satisfies these requirements?
- Deploy instances in multiple zones in the northamerica-northeast1(Montreal) region and a single zone in the northamerica-northeast2 (Toronto).

You are a network engineer designing a solution for hosting a Cymbal web application in Google Cloud. The application will serve a collection of static and dynamic web resources served over HTTPS to users worldwide. You need to design a solution that maximizes availability while minimizing average user latency. Which of the following features of Google Cloud networking can you utilize? (select 2)
- An Application Load Balancer with a backend service connected to a set of regional MIGs, distributed over the regions closest to the users, to improve availability and minimize latency.
- Cloud CDN could be used to cache static content resources at edge locations close to end-users, increasing their availability and minimizing their latency.

Which benefits does Cymbal Bank achieve by deploying replica resources to multiple zones in a region? Select two answers.
- Improved Availability
- Increased Capacity

Which Google Cloud features will Cymbal Bank use to connect their on-premise networks to Google Cloud? Select two answers.
- Dedicated Interconnect
- Cloud VPN

Cymbal has a custom VPC network with two subnets (in us-central1 and us-east1) hosting 500 VMs each. The primary ranges for each are 10.128.128.0/23 and 10.128.192.0/23. The VPC has default routes and 3 firewall rules (all at priority 1000), one (A) allowing ingress on TCP port 443 from any IP address, another (B) allowing ingress on TCP port 8443 from the primary ranges of each subnet, and a third (C) denying egress to the primary ranges for each subnet for all ports and protocols except for TCP port 8443. They would like to consolidate the 1000 VMs into a single subnet (to reduce networking costs) in us-central1 (and use a primary IP range for that subnet to support that) and delete the us-east1 subnet. They would like to ensure the simplest possible firewall rules in the new configuration providing the same traffic control. Select the sequence of configuration steps that can accomplish this with minimal interruption to the workloads.
- Expand the subnet in us-central1 to a primary IP range 10.128.128.0/22, delete the VMs in the us-east1 subnet one at a time and re-create them in the us-central1 subnet, delete the us-east1 subnet, update the B and C firewall rules use the single us-central1 subnet primary range.

You are designing a networking scheme for Cymbal, with the requirement to use internal IP addresses for communication, with the lowest possible latency. Cymbal has several teams, each with their own projects: P1, P2, and P3. Cymbal would like consolidated network billing, administration, and access control for their cloud environment. VMs in these projects need to connect to VMs in a partner organization, in projects P4 and P5. Select the networking option that best satisfies these requirements.
- Connect the VMs across the Cymbal projects (P1-P3) using a Shared VPC network (Shared VPC host project P6 with VPC V6, and P1-P3 are the service projects) and then peer that Shared VPC network to the partner organization VPCs (V6 peered to V4 and V6 to V5).

Cymbal Bank is experiencing network performance issues, security concerns, and difficulties in scaling their network to support new branches. Their current network infrastructure includes a mix of on-premises and cloud-based resources, with multiple vendors and complex interconnections. Given Cymbal Bank's complex network environment and specific challenges, which of the following strategic approaches would most effectively address their requirements for network performance, security, and scalability while minimizing operational overhead and disruption to business operations? Select the configuration that can address all of the above requirements.
- Deploy Network Connectivity Center with Cloud VPN to create a centralized network management platform and establish secure, high-performance connections between branches and the cloud.

You are designing a VPC network with the requirement that all external traffic destined for the Internet be passed through a proxy VM. The proxy will have software installed to scan, detect, and drop invalid egress traffic, to help prevent data exfiltration, outbound attacks, or access to blocked websites. Select the configuration below that can most easily accomplish this.
- Delete the system-generated default route, then create a custom route to destination 0.0.0.0/0. Specify the next hop as the proxy VM, and configure the proxy VM to enable IP forwarding.

Cymbal needs to connect two on-premises networks to a single VPC network in Google Cloud. One on-premises network supports BGP routing and is located near the us-central1 region. The other on-premises network does not support BGP routing and is located near us-east1. The VPC network has subnets in each of these regions. You will use Cloud VPN to enable private communication between the on-premises networks and the VPC network. Select the configuration that provides the highest availability and the lowest average latency.
- Configure the VPC for global dynamic routing mode, create Cloud Routers in each of the 2 regions, connect the office close to us-central1 to the VPC using an HA VPN gateway with dynamic routing in us-central1, and connect the other office via a Classic VPN gateway using static routing in us-east1.

You are configuring firewall rules for securing a set of microservices (MS1, MS2, MS3) running in separate managed instance groups (MIGs) of VMs in a single subnet of a VPC network. The primary range of the VPC network is 10.128.128.0/20. MS1 will send requests to MS2 on TCP port 8443, MS2 will send requests to MS3 on TCP port 8663, and MS3 will need to send requests to MS1 on TCP port 8883. There will be no other communication to or between these microservices. Select a simple and secure firewall configuration to support this traffic requirement.
- Create service accounts (S1, S2, S3) for the microservices and assign those service accounts to the instance template for the MIG used by each microservice, create 3 ingress allow firewall rules, the first for TCP 8443 from source S1 to target S2, the second for TCP 8663 from source S2 to target S3, the third for TCP 8883 from source S3 to target S1.

Cymbal has an existing subnet that they’d like to use for a new VPC-native GKE cluster. The subnet primary IP address range is 10.128.128.0/20. Currently there are 1000 other VMs using that subnet and have taken 1000 of the available IP addresses. The new GKE cluster should support 200,000 pods and 30,000 services. Select the minimal set of configuration steps and the smallest possible IP ranges to enable this.
- Create a GKE VPC-native cluster in the subnet, specifying the pod range to be of size /13 and services range to be of size /17.

You are trying to determine which firewall rule(s) is/are incorrectly blocking requests between two VMs running within a VPC network: VM1 and VM2. Firewall logging is enabled for all firewall rules, including metadata. The Firewall Insights and Recommendations API also have been enabled. All insights have been enabled, and observation period set over a period capturing the blocked requests. Select a valid troubleshooting approach to find the incorrectly configured firewall rule.
- Go to Logs Explorer or Legacy Logs Viewer page, view the firewall logs and filter for logs matching the source and destination VMs VM1 and VM2 using the jsonPayload.instance.project_id, jsonPayload.instance.vm_name, jsonPayload.instance.region, and jsonPayload.instance.zone, jsonPayload.remote_instance.vm_name, jsonPayload.remote_instance.region, and jsonPayload.remote_instance.zone

You will be deploying a VPC-native GKE cluster into an existing service project of a Shared VPC. You will create an Ingress to trigger the automatic creation, connection, and firewall configuration of an Application Load Balancer to a service deployed in the cluster for container-native load balancing. Select the option corresponding to the IAM policy binding of least privilege necessary.
- Assign the service-service-project-num@container-engine-robot.iam.gserviceaccount.com service account (where service-project-num is the project number of the service project) the Host Service Agent User (in the host project) and the Compute Network User (for the subnet of the GKE cluster in the shared VPC in the host project).

Given the requirements and constraints covered in the case study, which GKE cluster configuration would best align with Cymbal Bank's security and portability goals?
- Public access enabled, authorized networks enabled, intra-node visibility disabled, built-in network policies.

How is Cymbal Bank improving efficiency of applying firewall rules uniformly across their four shared VPCs?
- Hierarchical firewall rules

Select the list of the resources that must be created or configured to enable packet mirroring.
- A packet mirroring policy, an internal passthrough Network Load Balancer configured for packet mirroring, an instance group of collector instances, and firewall rules

You are designing a load balanced autoscaling front-end for Cymbal Bank. It is intended to be deployed into Google Kubernetes Engine (GKE). You want to use container-native load balancing and autoscale based on the amount of traffic to the service. Select the type of backend and autoscaling that would accomplish this.
- A zonal network endpoint group of Kubernetes pods which autoscale using a Horizontal Pod Autoscaler.

You are designing a system in Google Cloud to ensure all traffic being sent between two subnets is passed through a security gateway VM. The VM runs 3rd party software that scans traffic for known attack signatures, then forwards or drops traffic based on the scan results. You want to accomplish this without using public IP addresses. Select a configuration that satisfies these requirements.
- Create the 2 subnets in 2 separate VPCs. Create a VM with 2 network interfaces (NICs), with each NIC connected to the subnet in each VPC. Create custom routes in each VPC to send traffic destined for each subnet originating in the opposite subnet through the VM.

Cymbal Bank wants a web application to have global anycast load balancing across multiple regions. The web application will serve static asset files and will also use REST APIs that serve dynamic responses. The load balancer should support HTTP and HTTPS requests and redirect HTTP to HTTPS. The load balancer should also serve all the requests from the same domain name, with different paths indicating static versus dynamic resources. Select the load balancer configuration that would most effectively enable this scenario.
- A global external Application Load Balancer with two global forwarding rules, forwarding to two target proxies, one with URL map and no backend service and the other with URL map, one backend service, and one backend bucket.

Cymbal is using Cloud NAT to provide internet connectivity to a group of VMs in a subnet. There are 500 VMs in the subnet and each VM may have up to 1000 internet bound connections simultaneously. What Cloud NAT configuration will support this requirement?
- Set the minimum ports per VM to 1000 and the number of IP addresses used by the Cloud NAT Gateway to 8.

You are configuring hybrid DNS for Google Cloud using Cloud DNS and your on premises DNS. You have three VPC networks in Google Cloud in three different projects that will need to forward DNS requests for a particular private domain to the on premises DNS. All 3 projects have Cloud VPN connections to the on premises network. Select the Google recommended approach for enabling this requirement.
- For the VPC in one of the projects, create a Cloud DNS forwarding zone for its VPC. For the VPC in each of the other projects, create a Cloud DNS peering zone that targets the VPC with the forwarding zone.

Cymbal Bank would like to protect their services which are deployed behind an Application Load Balancer from L7 distributed denial of service (DDoS), SQL injection (SQLi) and cross-site scripting (XSS) attacks. Select the simplest approach to accomplish this.
- Configure Google Cloud Armor with the appropriate rules.

Cymbal Bank will use a hybrid DNS approach. Cymbal has a VPC in Google Cloud that connects to their on premises networks via Interconnect. You will use Google Cloud DNS for Cymbal’s public DNS zone at cymbalbank.com, and also for private DNS for resources at gcp.cymbalbank.com. You will use Cymbal’s on premises DNS, which is configured as authoritative for on premises private resources at corp.cymbalbank.com. Select the Cloud DNS managed zone configuration that will satisfy the requirements.
- Create a Cloud DNS private managed zone for gcp.cymbalbank.com, a public managed zone for cymbalbank.com, and a third forwarding zone for corp.cymbalbank.com that forwards DNS requests to the on-premise DNS.

Cymbal Bank uses Cloud CDN to cache a web-application served from a backend bucket connected to a Cloud Storage bucket. You need to cache all the web-app files with appropriate time to live (TTL) except for the index.html file. The index.html file contains links to versioned files and should always be fetched or re-validated from the origin. Select the configuration option to satisfy these requirements with minimal effort.
- Set the Cloud CDN cache mode for the backend bucket to CACHE_ALL_STATIC, and ensure the Cache-Control metadata for index.html is not set or set to no-store, no-cache, or private.

Cymbal Bank is serving files from a backend bucket and wants to ensure time-limited read access without authentication. The backend bucket uses signed URLs to access those files. The files are also being cached in Cloud CDN. There is a problem with one of the files. You want to delete the file. You also want to immediately ensure no read access via the signed URL to the cached file copy in Cloud CDN, although the expiry time is currently set to sometime in the future. Select the option that accomplishes this with lowest cost and effort.
- Delete the key used to create the signed URL.

Which managed service will Cymbal Bank use to allow their private VMs to make secure requests to the internet?
- Cloud NAT

Which managed service will Cymbal Bank use to protect their Google Cloud resources from application layer DDoS attack?
- Google Cloud Armor

You are setting up a Dedicated Interconnect connection and need to provide the highest capacity possible. Select the circuit configuration that achieves this.
- 2 100 Gbps circuits

You have an HA VPN gateway with 2 interfaces in active/active mode. You would like to reconfigure them to active/passive mode. Select the simplest configuration change that will satisfy this requirement.
- Update the base advertised route priority for one of the HA VPN tunnel’s BGP sessions.

Cymbal Bank has implemented a hub-and-spoke topology using Network Connectivity Center to interconnect its on-premises data centers and cloud-based workloads. The bank is experiencing performance degradation in application response times between its New York data center and a critical cloud-based application hosted in the us-central1 region. Your task is to identify potential bottlenecks or configuration issues within the environment that could be causing the performance degradation. Which specific step can you take to help identify the issues?
- Evaluate the Network Connectivity Center hub's network performance metrics, such as latency and packet loss.

Cymbal Bank is connecting one of their Shared VPC networks to their on-premise network via Dedicated Interconnect. Select the recommended approach for configuring their VLAN attachments and Cloud Routers.
- Create the VLAN attachments and Cloud Routers in the Shared VPC host project.

Cymbal Bank is connecting a branch office with an old VPN gateway that doesn’t support BGP. The old VPN gateway only supports IKEv1 and does not support local and remote traffic selectors to be configured as 0.0.0.0/0. Select the configuration option that can satisfy these requirements.
- Configure a Classic VPN gateway to connect to the on-premises gateway using static routing with a policy-based tunnel with local and remote traffic selectors matching the office VPN but reversed.

Cymbal Bank wants to achieve 99.9% availability with Dedicated Interconnect. You want to support 100 Gbps of throughput, even if a single interconnect connection were to fail. Select the simplest and least expensive configuration that can meet these requirements.
- 2 100 Gbps connections in separate edge availability zones of the co-location facility, 4 50 Gbps VLAN attachments

Cymbal Bank is configuring a Layer 3 Partner Interconnect connection to Google Cloud. Select the sequence of high-level activities they will need to perform in order to accomplish this.
- Establish connection to selected partner service provider. Create VLAN attachments and receive Google-generated pairing keys. Request connections for VLAN attachments from partner specifying region and capacity and providing attachment pairing key. Activate VLAN attachments.

You are using the gcloud tool to create a Classic VPN with static routing and a route-based tunnel. The on-premises resources are all in the 192.168.1.0/24 range. You have issued commands to create the VPN gateway, IP addresses, forwarding rules, and the VPN tunnel. Select the correct final resource that must be created.
- A route with destination 192.168.1.0/24 and next hop set to the VPN gateway

Cymbal Bank is connecting a branch office with a modern VPN gateway that supports BGP to Google Cloud in a region. The office VPN gateway has two interfaces and only requires a single tunnel to each to provide 99.99% availability. Select the simplest Google Cloud VPN configuration that will provide 99.99% availability.
- An external VPN gateway resource with 2 interfaces, a Cloud Router in the same region, a cloud HA VPN gateway with one tunnel from each interface to each external VPN gateway interface, and BGP sessions for both tunnels

Cymbal Bank would like to achieve 99.99% availability for their Dedicated Interconnect link from an on-premises network to their VPC. Select the configuration that will achieve this.
- 2 Cloud Routers in 2 distinct regions, with the VPC in global dynamic routing mode

Cymbal Bank has a Cloud Router in a region; the VPC advertises some of its subnets. The VPC advertises none of the subnets in other regions. You require an update to advertise all subnets in all regions for that VPC. You also want to automatically advertise newly added subnets, as well as stop advertising removed subnets in the future. Select the simplest configuration that will accomplish this goal.
- Check the dynamic routing mode of the VPC and update it to global if it is currently regional. Configure the Cloud Router to default advertisement mode.

Which type of connectivity can be used with static routing?
- Cloud VPN Classic

What is the minimum number of VPN tunnels required for a Cloud VPN HA configuration to an on-premise peer VPN gateway that provides 99.99% availability?
- 2

You are designing a monitoring alert to notify you when a Cloud VPN tunnel approaches the limits for bandwidth. Select the metrics that would be important to include in the alerting policies.
- vpn.googleapis.com/network/sent_bytes_count, vpn.googleapis.com/network/received_bytes_count, vpn.googleapis.com/network/sent_packets_count, vpn.googleapis.com/network/received_packets_count

Cymbal Bank has configured a Classic VPN with a policy-based tunnel to connect to a branch office with an older VPN device that does not support BGP. You have completed the configuration of the office VPN and the logs and monitoring suggest that the tunnel is up and functioning correctly. You find when testing with ping and traceroute that you can reach some VMs but not others in the VPC across the tunnel from the office. You can reach some servers but not others in the office from VMs in the VPC. You have verified the firewall configurations in both environments and determined that is not the cause of the problem. Select the next troubleshooting step you should attempt.
- Investigate the configuration of the local and remote traffic selectors in the Classic VPN tunnel and office VPN configuration.

You are a network administrator responsible for monitoring and troubleshooting networking issues in Cymbal Bank’s Google Cloud environment. You want to use Network Intelligence Center to identify and resolve common networking problems. Which of the following capabilities does Network Intelligence Center provide to help you monitor and troubleshoot common networking issues? (Select TWO correct options.)
- Real-time network topology visualization
- Flow logs analysis for traffic visibility

Cymbal Bank's network team wants to track and analyze detailed logs of all API calls made to their Google Cloud resources, including timestamps, user identities, and specific actions taken. Which Google Cloud service is the most appropriate choice for Cymbal Bank's network team to achieve this goal?
- Cloud Logging

Cymbal Bank needs to log all cache hits and misses for their static assets served from Cloud CDN via an Application Load Balancer backend bucket. What should you do?
- Use the default behavior, no configuration required.

You are trying to debug a connectivity issue between VMs in the same VPC using internal IP addresses. The issue began immediately after configuring routes and firewall rules. What should you do to troubleshoot the problem?
- Use Connectivity Tests to determine the connectivity problem.

You are using VPC Flow Logs to analyze traffic arriving at a subnet. You need to capture approximately 10% of the traffic and determine how much traffic originates from outside the subnet. VPC Flow Logs has already been enabled for the subnet. You want to use the least expensive process. How should you configure the VPC Flow Logs?
- Configure them with a sampling rate of 1.0 and a filter expression for the connection destination IP within the IP range of the subnet.

You are debugging a Layer 2 Partner Interconnect connection that is indicating a failure to create a BGP session in the Cloud Router for the associated VLAN attachments. Select the most likely cause to investigate when troubleshooting this issue.
- Check the ASN configuration of the on-premises router and the Cloud Router.

How will Cymbal Bank detect transient connectivity issues with VPN and Interconnect connections between their data centers and Google Cloud?
- Cloud Monitoring alerts

Which tool will Cymbal Bank use to verify and troubleshoot connectivity between resources in their on-premises environment and those in Google Cloud VPCs?
- Connectivity Tests

Which of the following practices is LEAST likely to improve network security in Google Cloud?
- Assigning public IP addresses to all virtual machines in a VPC.

You are designing a new network infrastructure in Google Cloud to support a global e-commerce application. Which two of the following are key considerations you should prioritize in your network design?
- To inform and guide design choices, ensuring the network aligns with organizational goals and constraints.
- To ensure high availability and disaster recovery capabilities for the network.

You are designing a Google Cloud network for a large financial services company with strict security requirements. The network needs to isolate sensitive customer data from other resources and limit communication between specific network segments. Which of the following network topologies would be most suitable for this scenario?
- Gated ingress and egress

You are migrating a large ecommerce company's existing on-premises data center to Google Cloud. The on-premises network consists of geographically dispersed regional offices, each with its own network segment requiring secure isolation. However, central management and communication between all regional offices are critical for business operations. Which network topology would most effectively address these requirements in Google Cloud?
- Hub-and-spoke

How can you use Pod securityContexts to control security? Choose all responses that are correct (2 correct responses).
- Limit access to some Linux capabilities, like granting certain privileges to a process, but not to all root user privileges.
- Enable AppArmor, which uses security profiles to restrict individual program actions.

Workload Identity is a feature that bridges the gap between what two Google Cloud services?
- Kubernetes service accounts and IAM service accounts.

In a Kubernetes pod, what type of account do containerized processes use to communicate with the kube-apiserver running on the Kubernetes cluster control plane?
- A Kubernetes Service account.

You need to implement account controls to grant junior admin users the ability to view details about production clusters and applications, and to fully manage and test lab resources inside your GKE cluster environments. Which account control mechanism is best suited for this granular control?
- Kubernetes RBAC.

You need to monitor specific applications running on your production GKE Clusters. How can you create a logical structure for your application that allows you to selectively monitor the application's components using Cloud Monitoring? Choose all responses that are correct (2 correct responses).
- Add Labels to the Pods in Kubernetes that identify the applications.
- Filter the Cloud Monitoring logs using Kubernetes labels.

Which of the following is not a logging agent used by GKE?
- FluentBit

You are troubleshooting an issue which happened in the last hour. You enter the command 'kubectl logs --since=3h demo-pod'. However, the events you are looking for do not appear in the output. What is the likely cause?
- The log file was greater than 100MB in size, and it has been rotated.

You are a systems administrator tasked with monitoring and maintaining a cluster of Google Kubernetes Engine (GKE) instances. Which of the following tools would you use to collect and store logs from your GKE cluster?
- Cloud Logging.

How do you enable a GKE Pod to securely access a Google Cloud storage service?
- Grant the cluster's Kubernetes Service Account the necessary permissions to access the Google Cloud service using Workload Identity.

What is the purpose of SQL Auth Proxy?
- It allows applications running in Kubernetes to connect to Cloud SQL databases.

You’re building an online multiplayer game that needs to propagate a consistent global game state across a massive amount of concurrent sessions. Which Google-managed storage solution should you use?
- Bigtable.

You are considering options for your business continuity and data protection plans and have identified a number of systems that need to be archived periodically for regulatory compliance. These archives must be kept for up to 5 years and will need to be audited quarterly. Apart from the quarterly audit, there is no expectation that they will need to be accessed routinely. What Cloud Storage solution best matches these requirements?
- Cloud Storage - Coldline.

Which of the following is not a responsibility of Cloud Deploy?
- Configuring CI/CD pipelines.

Which of the following is not a benefit of CI/CD?
- More efficient use of resources.

CI/CD pipelines exist along a spectrum of implementations. Google Cloud tools such as Cloud Build create pipelines at which level of the spectrum?
- Dev-centric CI/CD.

Which of the following is not a recommended practice for a GKE CI/CD pipeline?
- Manually testing the application after each build.

What is the benefit of implementing a transformation cloud that is based on open infrastructure?
- Open source software reduces the chance of vendor lock-in.

Select the definition of digital transformation.
- When an organization uses new digital technologies to create or modify business processes, culture, and customer experiences.

What is the cloud?
- A metaphor for a network of data centers.

As the world and business changes, organizations have to decide between embracing new technology and transforming, or keeping their technology and approaches the same. What risks might an organization face by not transforming as their market evolves?
- Focusing on ‘how’ they operate can prevent organizations from seeing transformation opportunities.

An organization has made significant investments in their own infrastructure and has regulatory requirements for their data to be hosted on-premises. Which cloud implementation would best suit their needs?
- Private Cloud

Which item describes a goal of an organization seeking digital transformation?
- Break down data silos and generate real time insights.

What is seen as a limitation of on-premises infrastructure, when compared to cloud infrastructure?
- The on-premises hardware procurement process can take a long time.

An organization has a new application, and user subscriptions are growing faster than on-premises infrastructure can handle. What benefit of the cloud might help them in this situation?
- It's scalable, so the organization could shorten their infrastructure deployment time.

Select the two capabilities that form the basis of a transformation cloud? Select two correct answers.
- Open infrastructure gives the freedom to innovate by running applications in the place that makes the most sense.
- Data cloud provides a unified solution to manage data across the entire data lifecycle.

An organization wants to ensure they have redundancy of their resources so their application remains available in the event of a disaster. How can they ensure this happens?
- By putting resources in different zones.

An organization wants to innovate using the latest technologies, but also has compliance needs that specify data must be stored in specific locations. Which cloud approach would best suit their needs?
- Hybrid Cloud

An organization has shifted from a CapEx to OpEx based spending model. Which of these statements is true?
- They will only pay for what they use.

Which network performance metric describes the amount of data a network can transfer in a given amount of time?
- Bandwidth

A financial services organization has bank branches in a number of countries, and has built an application that needs to run in different configurations based on the local regulations of each country. How can cloud infrastructure help achieve this goal?
- Flexibility of infrastructure configuration.

Which cloud computing service model offers a develop-and-deploy environment to build cloud applications?
- Platform as a Service (PaaS)

In the cloud computing shared responsibility model, what types of content are customers always responsible for, regardless of the computing model chosen?
- The customer is responsible for securing anything that they create within the cloud, such as the configurations, access policies, and user data.

An organization wants to move to cloud-based collaboration software, but due to limited IT staff one of their main drivers is having low maintenance needs. Which cloud computing model would best suit their requirements?
- Software as a Service (SaaS)

Which option best describes a benefit of Infrastructure as a Service (IaaS)?
- It’s efficient, as IaaS resources are available when needed and resources aren’t wasted by overbuilding capacity.

What is Google Cloud’s modern and serverless data warehousing solution?
- BigQuery

What is data governance?
- The process of setting internal data policies and ensuring compliance with external standards

Which data type is highly organized and well-defined?
- Structured data

A solar energy company wants to analyze weather data to better understand the seasonal impact on their business. On which platform could they find free-to-use weather datasets?
- Google Cloud Marketplace

Which step in the data value chain is where collected raw data is transformed into a form that’s ready to derive insights from?
- Data processing

Which is a repository designed to ingest, store, explore, process, and analyze any type or volume of raw data, regardless of the source?
- Data lake

A car insurance company has a large database that stores customer details, including the vehicles they own and past claims. The structure of the database means that information is stored in tables, rows, and columns. What type of database is this?
- A relational database

New cloud tools make it possible to harness the potential of unstructured data. Which of these use cases best demonstrates this?
- Analyzing social media posts to identify sentiment toward a brand

Which represents the proprietary customer datasets that a business collects from customer or audience transactions and interactions?
- First-party data

An online retailer uses a smart analytics tool to ingest real-time customer behavior data to surface the best suggestions for particular users. How can machine learning guide this activity?
- Through machine learning, with every click that the user makes, their website experience becomes increasingly personalized.

Which characteristic is true for all Cloud Storage classes?
- Geo-redundancy if data is stored in a multi-region or dual-region

Which Google Cloud product can be used to synchronize data across databases, storage systems, and applications?
- Datastream

Data in the form of video, pictures, and audio recordings is well suited to object storage. Which product is best for storing this kind of data?
- Cloud Storage

Which is the best SQL-based storage option for a transactional workload that requires local or regional scalability?
- Cloud SQL

BigQuery works in a multicloud environment. How do organizations benefit from this feature?
- Data teams can eradicate data silos by analyzing data across multiple cloud providers.

What are the two services that BigQuery provides?
- Storage and analytics

Which strategy describes when databases are migrated from on-premises and private cloud environments to the same type of database hosted by a public cloud provider?
- Lift and shift

A data analyst for an online retailer must produce a sales report at the end of each quarter. Which Cloud Storage class should the retailer use for data accessed every 90 days?
- Coldline

Which would be the best SQL-based storage option for a transactional workload that requires global scalability?
- Spanner

What is Google's big data database service that powers many core Google services, including Google Search, Google Analytics, Google Maps Platform, and Gmail?
- Bigtable

What does ETL stand for in the context of data processing?
- Extract, transform, and load

Which statement is true about Dataflow?
- It handles infrastructure setup and maintenance for processing pipelines.

What feature of Looker makes it easy to integrate into existing workflows and share with multiple teams at an organization?
- It’s 100% web based.

What Google Cloud business intelligence platform is designed to help individuals and teams analyze, visualize, and share data?
- Looker

What is Google Cloud’s distributed messaging service that can receive messages from various device streams such as gaming events, Internet of Things (IoT) devices, and application streams?
- Pub/Sub

Streaming analytics is the processing and analyzing of data records continuously instead of in batches. Which option is a source of streaming data?
- Temperature sensors

A travel company is in the early stages of developing a new application and wants to test it on a variety of configurations: different operating systems, processors, and storage options. What cloud computing option should they use?
- Virtual machine instances

What computing option automatically provisions resources, like compute power, in the background as needed?
- Serverless computing

What phrase refers to when a workload is rehosted without changing anything in the workload's code or architecture.
- Lift and shift

What portion of a machine does a container virtualize?
- Software layers above the operating system level

A manufacturing company is considering shifting their on-premises infrastructure to the cloud, but are concerned that access to their data and applications won’t be available when they need them. They want to ensure that if one data center goes down, another will be available to prevent any disruption of service. What does this refer to?
- Reliability

What open source platform, originally developed by Google, manages containerized workloads and services?
- Kubernetes

What is one way that organizations can create new revenue streams through APIs?
- By charging developers to access their APIs

What term describes a set of instructions that lets different software programs communicate with each other?
- Application programming interface

What is the name of Google Cloud's API management service that can operate APIs with enhanced scale, security, and automation?
- Apigee

In modern application development, which is responsible for the day-to-day management of cloud-based infrastructure, such as patching, upgrades, and monitoring?
- Managed services

Which is a fully managed cloud infrastructure solution that lets organizations run their Oracle workloads on dedicated servers in the cloud?
- Bare metal solution

In modern cloud application development, what name is given to independently deployable, scalable, and maintainable components that can be used to build a wide range of applications?
- Microservices

What name is given to an environment where an organization uses more than one public cloud provider as part of its architecture?
- Multicloud

What’s the name of Google Cloud’s production-ready platform for running Kuberenetes applications across multiple cloud environments?
- GKE Enterprise

What term is commonly used to describe a rehost migration strategy for an organization that runs specialized legacy applications that aren’t compatible with cloud-native applications?
- Lift and shift

What name is given to an environment that comprises some combination of on-premises or private cloud infrastructure and public cloud services?
- Hybrid cloud

After a Deployment has been created and its component Pods are running, which component is responsible for ensuring that a replacement Pod is launched whenever a Pod fails or is evicted?
- ReplicaSet

Inter-pod affinity rules are specified at the zone level, not at the individual Node level. To apply this override, which additional parameter must be configured in the Pod manifest YAML?
- topologyKey: failure-domain.beta.kubernetes.io/zone

You are resolving a range of issues with a Deployment and need to make a large number of changes. Which command can you execute to group these changes into a single rollout, thus avoiding pushing out a large number of rollouts?
- kubectl rollout pause deployment

Which of the following commands will display the desired, current, up-to-date, and available status of all the ReplicaSets within a Deployment?
- kubectl get

How do you configure a Kubernetes Job so that Pods are retained after completion?
- Configure the cascade flag for the Job with a value of false.

You are configuring a Job to convert a sample of a large number of video files to a different format. Which parameter should you configure to stop the process once a sufficient quantity is reached?
- completions=4

You have autoscaling enabled on your cluster. What conditions are required for the autoscaler to decide to delete a node?
- If a node is underutilized and running Pods can be run on other Nodes.

You need to apply a network policy to five Pods to block ingress traffic from other Pods. Each Pod has a label of app:demo-app. In your network policy manifest, you have specified the label app:demo-app in spec.podSelector. The policy is configured and listed when you view Network Policies on your cluster. However, it’s not having the intended effect. Pods can still be pinged from other Pods within the cluster. What is the cause of this and what action can you take to correct it?
- You have not enabled network policies on the cluster. Enable network policies and recreate all of the nodes.

You have updated your application and deployed a new Pod. How can you ensure consistent network access to the Pod throughout its lifecycle?
- Deploy a Kubernetes Service with a selector that locates the application's Pods.

You are designing a GKE solution. One of your requirements is that network traffic load balancing should be directed to Pods instead of balanced across nodes. How can you enable this for your environment?
- Configure or migrate your cluster to VPC-Native Mode and deploy a container-native load balancer.

During testing, you cannot find the Google Cloud load balancer that should have been configured for your application. You check the manifest and notice that the application's frontend service type is ClusterIP. How can you correct this?
- Define spec.type as LoadBalancer in the YAML manifest for the service and redeploy the application.

Your Pod has been rescheduled, and the original IP address that was assigned to the Pod is no longer accessible. What is the reason for this?
- The new Pod has received a different IP address.

A StatefulSet consists of four Pods that are named Demo-0, Demo-1, Demo-2 and Demo-3. The StatefulSet originally had only two replica Pods but this number was recently increased to four. An update is being rolled out to The StatefulSet is currently being updated with a rolling strategy. Which Pod in the StatefulSet will be updated last?
- Demo-0

You need to store image registry credentials to allow Pods to pull images from a private repository. What type of Kubernetes Secret should you create?
- A Docker-Registry Secret.

A GKE application might need persistent storage. The app owner creates a PersistentVolumeClaim (PVC) with a StorageClassName labeled "standard." What type of storage will likely be used for the volume?
- Google Persistent Disk.

You have created a ConfigMap and want to make the data available to your application. Where should you configure the directory path parameters in the Pod manifest to allow your application to access the data as files?
- spec.containers.volumeMounts

Which of the following are benefits of incorporating the ExampleValidator component into your ML project lifecycle? Select all that apply.
- ExampleValidator can identify data anomalies such as missing values, values outside expected ranges.
- ExampleValidator can be configured to monitor for data drift that can negatively impact model performance.
- ExampleValidator can assist in monitoring train/serving skew.

Which of the following are benefits of running TFX on Google Cloud? Select all that apply.
- Increase your pipeline development and experimentation velocity.
- Simplify scaling of TFX pipeline data processing as your data grows
- Automate your ML operational processes for individual and multiple ML pipelines.

How is TFX pipeline data organized after ingestion by the ExampleGen component? Select one.
- Spans, Versions, Splits

Which of the 5 parts of a TFX component is responsible for declaring a component’s input artifacts, output artifacts, and parameters for execution? Select one.
- ComponentSpec

Select all the following that are outputs of a TFX pipeline run on Google Cloud:
- Pipeline run artifacts stored in Cloud Storage
- A TensorFlow SavedModel pushed to Cloud Storage or AI Platform Prediction
- Pipeline logs written to Cloud Logging

What Google Cloud development tool can be used to store and share TFX pipeline code for portability, reproducibility and reuse?
- Container Registry

Which managed Google Cloud service auto-scales and distributes TFX component data processing? Select one.
- Dataflow

Which orchestrator would you select for single machine development and debugging of your TFX pipeline? Select one.
- Apache Beam DirectRunner

How do TFX pipeline development steps relate to the levels of ML process automation? Select all that apply.
- Level 0: Manual TFX interactive component runs in Jupyter notebooks for rapid experimentation and development.
- Level 1: Continuous training TFX pipelines
- Level 2: CICD pipelines for building, testing, and deploying continuous training TFX pipelines.

Which Google Cloud developer tool powers CI/CD workflows for building, testing, and deploying TFX pipeline code? Select one.
- Cloud Build

Your ML Engineering team has existing ML pipeline code written in Java. Which TFX custom component option can you re-use this code in your TFX pipeline to speed up development? Select one.
- Pre-built container

When designing a custom TFX component from a Python function, which of the following steps are needed? Select all that apply.
- Initialize your custom component object to pass with other components in a list to the pipeline orchestrator for execution.
- Decorate your Python function with the @component decorator.
- Annotate input and output artifact types and runtime parameter types

Which of the following elements of the ML Metadata data model are stored in an ML Metadata (MLMD) store? Select all that apply:
- Events
- Executions
- Contexts

What standard TFX objects can be used for performing advanced TFX metadata operations? Select one.
- Pipeline nodes

Which of the following are use cases for ML Metadata? Select all that apply:
- Visualize a pipeline DAG of components connected by artifact dependencies.
- Record and query context of workflow runs.
- Load two Artifacts of the same type for comparison.

Which of the following are examples of TFX pipeline metadata-powered functionality? Select all that apply:
- Pipeline experimentation reproducibility through tracing models back to hyperparameter configurations and datasets used during training.
- Model training warmstarting.
- Reusing cached pipeline artifacts when inputs are unchanged for significant savings on computation time and resources instead of recomputing artifacts on every pipeline run.

Which of the following are benefits of containerized training applications?
- All of the answers are correct

What contributes the most to model performance deterioration over time?
- Data Drift

When we train a model in our continuous training pipeline, we want to compare the new model’s performance with the previous model’s performance. If the new model is worse than the previous model, then we do not want to deploy it. Which operator will best help us to create a task to include this logic in our pipeline?
- BigQueryValueCheckOperator

One of the stages of a continuous training pipeline is ensuring that data you plan to use for training satisfies your business rules. What was the name of this stage?
- Data validation

Which APIs are available in the MLflow Project?
- All of answers are correct.

Which of this backends can be used by theMLflow tracking service as a backend artifact store? (Select All That Apply)
- Local file system
- Google Cloud Storage
- Azure Blob Storage
- AWS S3

Which API you can use toto plug in continuous integration and deployment (CI/CD) tools such as Jenkins to automatically test and transition your models ?
- Model registry API

Which of the following MLflow components is used for managing and deploying models from a variety of ML libraries to a variety of model serving and inference platforms ?
- MLflow Projects

Which kind of file format is used to defined an MLflow Project ?
- YAML

What task does Insights perform in BigQuery?
- Automatically generates queries to explore data.

What does data canvas do in BigQuery?
- Discover and visualize the query workflow.

Which of the following is considered a best practice for prompting in BigQuery?
- Ask one question at a time to avoid overloading Gemini.

Which statement is correct about using Gemini as code assistance in BigQuery?
- To use Gemini, you can either click the "help me code" button or type natural language prompts directly into the code, beginning with a "#" sign.

Which of the following is a benefit of a microservices architecture?
- Microservices are separately deployable.

In which situation does it make sense to start developing your application as a monolithic application instead of using microservices?
- Your team does not have expertise in the problem domain.

Which of the following features of event-driven applications causes them to be more resilient than non-event-driven applications?
- Events are created without waiting for a response.

When using an event-driven architecture, which of the following is true about an event?
- An event consumer does not need to know which service generated the event.

Which of the following are features of Cloud Tasks? Select two.
- Tasks can be scheduled for delivery at a future time.
- At-least-once delivery is guaranteed.

Which of the following are features of Workflows? Select two.
- Workflows supports long-running processes.
- The state of each workflow execution is observable.

Which of the following are features of Eventarc? Select two.
- Eventarc can generate events for entries written to Cloud Audit Logs.
- Pub/Sub is the transport layer.

Which of the following are benefits of the service choreography pattern? Select two.
- Service choreography allows for decentralized control.
- Services are loosely coupled.

Cymbal Bank publishes its APIs through Apigee. Cymbal Bank has recently acquired ABC Corp, which uses a third-party identity provider. You have been tasked with connecting ABC Corp’s identity provider to Apigee for single sign-on (SSO). You need to set up SSO so that Google is the service provider. You also want to monitor and log high-risk activities. Which two choices would you select to enable SSO?
- Review Network mapping results, and assign SSO profiles to required users.
- Use openssl to generate public and private keys. Store the public key in an X.509 certificate, and encrypt using RSA or DSA for SAML. Sign in to the Google Admin console, and under Security, upload the certificate.

Cymbal Bank leverages Google Cloud storage services, an on-premises Apache Spark Cluster, and a web application hosted on a third-party cloud. The Spark cluster and web application require limited access to Cloud Storage buckets and a Cloud SQL instance for only a few hours per day. You have been tasked with sharing credentials while minimizing the risk that the credentials will be compromised. What should you do?
- Create a service account with appropriate permissions. Have the Spark Cluster and the web application authenticate as delegated requests, and share the short-lived service account credential as a JWT.

Cymbal Bank has a team of developers and administrators working on different sets of Google Cloud resources. The Bank’s administrators should be able to access the serial ports on Compute Engine Instances and create service accounts. Developers should only be able to access serial ports. How would you design the organization hierarchy to provide the required access?
- Deny Serial Port Access and Service Account Creation at the organization level. Create a ‘dev’ folder and set enforced: false for constraints/compute.disableSerialPortAccess. Create a new ‘admin’ folder inside the ‘dev’ folder, and set enforced: false for constraints/iam.disableServiceAccountCreation. Give developers access to the ‘dev’ folder, and administrators access to the ‘admin’ folder.

You are an administrator for Cymbal Bank’s Mobile Development Team. You want to control how long different users can access the Google Cloud console, the Cloud SDK, and any applications that require user authorization for Google Cloud scopes without having to reauthenticate. More specifically, you want users with elevated privileges (project owners and billing administrators) to reauthenticate more frequently than regular users at the organization level. What should you do?
- In the Admin console, select Google Cloud session control and set a reauthentication policy that requires reauthentication. Choose the reauthentication frequency from the drop-down list.

Cymbal Bank has acquired a non-banking financial company (NBFC). This NBFC uses Active Directory as their central directory on an on-premises Windows Server. You have been tasked with migrating all the NBFC users and employee information to Cloud Identity. What should you do?
- Use Cloud VPN to connect the on-premises network to your Google Cloud environment. Select an on-premises domain-joined Windows Server. On the domain-joined Windows Server, run Configuration Manager and Google Cloud Directory Sync. Use Cloud VPN’s encrypted channel to transfer users from the on-premises Active Directory to Cloud Identity.

Cymbal Bank recently discovered service account key misuse in one of the teams during a security audit. As a precaution, going forward you do not want any team in your organization to generate new external service account keys. You also want to restrict every new service account’s usage to its associated Project. What should you do?
- Navigate to Organizational policies in the Google Cloud Console. Select your organization. Select iam.disableServiceAccountKeyCreation. Customize the applied to property, and set Enforcement to ‘On’. Click Save. Repeat the process for iam.disableCrossProjectServiceAccountUsage.

Cymbal Bank is divided into separate departments. Each department is divided into teams. Each team works on a distinct product that requires Google Cloud resources for development. How would you design a Google Cloud organization hierarchy to best match Cymbal Bank’s organization structure and needs?
- Create an Organization node. Under the Organization node, create Department folders. Under each Department, create a Teams folder. Under each Team, create Product folders. Add Projects to the Product folders.

Cymbal Bank’s organizational hierarchy divides the Organization into departments. The Engineering Department has a ‘product team’ folder. This folder contains folders for each of the bank’s products. Each product folder contains one Google Cloud Project, but more may be added. Each project contains an App Engine deployment. Cymbal Bank has hired a new technical product manager and a new web developer. The technical product manager must be able to interact with and manage all services in projects that roll up to the Engineering Department folder. The web developer needs read-only access to App Engine configurations and settings for a specific product. How should you provision the new employees’ roles into your hierarchy following principles of least privilege?
- Assign the Project Editor role at the Engineering Department folder level to the technical product manager. Assign the App Engine Deployer role at the specific product’s folder level to the web developer.

Cymbal Bank has certain default permissions and access for their analyst, finance, and teller teams. These teams are organized into groups that have a set of role-based IAM permissions assigned to them. After a recent acquisition of a small bank, you find that the small bank directly assigns permissions to their employees in IAM. You have been tasked with applying Cymbal Bank’s organizational structure to the small bank. Employees will need access to Google Cloud services. What should you do?
- Reset all user permissions in the small bank’s IAM. Use Cloud Identity to create dynamic groups for each of the bank’s teams. Use the dynamic groups’ metadata field for team type to allocate users to their appropriate group with a Python script.

Cymbal Bank’s organizational hierarchy divides the Organization into departments. The Engineering Department has a ‘product team’ folder. This folder contains folders for each of the bank’s products. One folder titled “analytics” contains a Google Cloud Project that contains an App Engine deployment and a Cloud SQL instance.
- Assign the basic ‘App Engine Admin’ and ‘Cloud SQL Admin” roles to the team lead. Assign the ‘App Engine Admin’ role to the developer. Assign the ‘App Engine Code Viewer’ role to the code reviewer. Assign all these permissions at the analytics project level.

Which feature of Google Cloud will Cymbal Bank use to control the source locations and times that authorized identities will be able to access resources?
- IAM Conditions

Which tool will Cymbal Bank use to synchronize their identities from their on-premise identity management system to Google Cloud?
- Google Cloud Directory Sync

The data from Cymbal Bank’s loan applicants resides in a shared VPC. A credit analysis team uses a CRM tool hosted in the App Engine standard environment. You need to provide credit analysts with access to this data. You want the charges to be incurred by the credit analysis team. What should you do?
- Add ingress firewall rules to allow NAT and Health Check ranges for the App Engine standard environment in the Shared VPC network. Create a client-side connector in the Service Project using the Shared VPC Project ID. Verify that the connector is in a READY state. Create an ingress rule on the Shared VPC network to allow the connector using Network Tags or IP ranges.

You have recently joined Cymbal Bank as a cloud engineer. You created a custom VPC network, selecting to use the automatic subnet creation mode and nothing else. The default network still exists in your project. You create a new Linux VM instance and select the custom VPC as the network interface. You try to SSH into your instance, but you are getting a “connection failed” error. What answer best explains why you cannot SSH into the instance?
- You did not set up any firewall rules on your custom VPC network. While the default VPC comes with a predefined firewall rule that allows SSH traffic, these need to be added to any custom VPCs.

Cymbal Bank has designed an application to detect credit card fraud that will analyze sensitive information. The application that’s running on a Compute Engine instance is hosted in a new subnet on an existing VPC. Multiple teams who have access to other VMs in the same VPC must access the VM. You want to configure the access so that unauthorized VMs or users from the internet can’t access the fraud detection VM. What should you do?
- Use subnet isolation. Create a service account for the fraud detection engine. Create service accounts for each of the teams’ Compute Engine instances that will access the engine. Add a firewall rule using: gcloud compute firewall-rules create ACCESS_FRAUD_ENGINE --network <network name> --allow TCP:80 --source-service-accounts <list of service accounts> --target-service-accounts <fraud detection engine’s service account>

Cymbal Bank needs to connect its employee MongoDB database to a new human resources web application on the same network. Both the database and the application are autoscaled with the help of Instance templates. As the Security Administrator and Project Editor, you have been tasked with allowing the application to read port 27017 on the database. What should you do?
- Create service accounts for the application and database. Create a firewall rule using:gcloud compute firewall-rules create ALLOW_MONGO_DB --network network-name --allow TCP:27017 --source-service-accounts web-application-service-account --target-service-accounts database-service-account

Cymbal Bank has published an API that internal teams will use through the Application Load Balancer. You need to limit the API usage to 200 calls every hour. Any exceeding usage should inform the users that servers are busy. Which gcloud command would you run to throttle the load balancing for the given specification?
- gcloud compute security-policies rules create priority --security-policy sec-policy --src-ip-ranges=source-range --action=throttle --rate-limit-threshold-count=200 --rate-limit-threshold-interval-sec=3600 --conform-action=allow --exceed-action=deny-429 --enforce-on-key=HTTP-HEADER

Cymbal Bank is releasing a new loan management application using a Compute Engine managed instance group. External users will connect to the application using a domain name or IP address protected with TLS 1.2. A load balancer already hosts this application and preserves the source IP address. You are tasked with setting up the SSL certificate for this load balancer. What should you do?
- Create a Google-managed SSL certificate. Attach a global static external IP address to the global external Application Load Balancer. Validate that an existing URL map will route the incoming service to your managed instance group backend. Load your certificate and create an HTTPS proxy routing to your URL map. Create a global forwarding rule that routes incoming requests to the proxy.

An external audit agency needs to perform a one-time review of Cymbal Bank’s Google Cloud usage. The auditors should be able to access a Default VPC containing BigQuery, Cloud Storage, and Compute Engine instances where all the usage information is stored. You have been tasked with enabling the access from their on-premises environment, which already has a configured VPN. What should you do?
- Use a Cloud VPN tunnel. Use Cloud DNS to create DNS zones and records for *.googleapis.com. Set up on-premises routing with Cloud Router. Use Cloud Router custom route advertisements to announce routes for Google Cloud destinations.

An ecommerce portal uses Google Kubernetes Engine to deploy its recommendation engine in Docker containers. This cluster instance does not have an external IP address. You need to provide internet access to the pods in the Kubernetes cluster. What configuration would you add?
- Cloud NAT gateway, subnet primary IP address range for nodes, and subnet secondary IP address range for pods and services in the cluster

Cymbal Bank’s Customer Details API runs on a Compute Engine instance with only an internal IP address. Cymbal Bank’s new branch is co-located outside the Google Cloud points-of-presence (PoPs) and requires a low-latency way for its on-premises apps to consume the API without exposing the requests to the public internet. Which solution would you recommend?
- Use Partner Interconnect. Use a service provider to access their enterprise grade infrastructure to connect to the Google Cloud environment.

Your organization has a website running on Compute Engine. This instance only has a private IP address. You need to provide SSH access to an on-premises developer who will debug the website from the authorized on-premises location only. How do you enable this?
- Use Identity-Aware Proxy (IAP). Set up IAP TCP forwarding by creating ingress firewall rules on port 22 for TCP using the gcloud command.

Which tool will Cymbal Bank use to enforce authentication and authorization for services deployed to Google Cloud?
- Identity-Aware proxy

How will Cymbal Bank enable resources with only internal IP addresses to make requests to the Internet?
- Cloud NAT

Cymbal Bank needs to statistically predict the days customers delay the payments for loan repayments and credit card repayments. Cymbal Bank does not want to share the exact dates a customer has defaulted or made a payment with data analysts. Additionally, you need to hide the customer name and the customer type, which could be corporate or retail. How do you provide the appropriate information to the data analysts?
- Generalize all dates to year and month with date shifting. Use a predefined infoType for customer name. Use a custom infoType for customer type with a custom dictionary.

Cymbal Bank uses Google Kubernetes Engine (GKE) to deploy its Docker containers. You want to encrypt the boot disk for a cluster running a custom image so that the key rotation is controlled by the Bank. GKE clusters will also generate up to 1024 randomized characters that will be used with the keys with Docker containers. What steps would you take to apply the encryption settings with a dedicated hardware security layer?
- Create a new GKE cluster with customer-managed encryption and HSM enabled. Deploy the containers to this cluster. Delete the old GKE cluster. Use Cloud HSM to generate random bytes and provide an additional layer of security.

You are building an AI model on Google Cloud to analyze customer data and predict purchase behavior. This model will have access to sensitive information like purchase history and demographics. To protect this data and prevent misuse of the model, what THREE security controls are most important to implement?
- Monitor the model's performance for anomalies and biases, then manually intervene if needed.
- Enable Google Cloud Armor on your deployed model to block malicious requests.
- Deploy the model in a region with the highest data security standards.

You're building a machine learning model on Google Cloud. You're choosing between two options: managing the infrastructure yourself (IaaS) or using Google's managed services (PaaS). To ensure the best security posture for both the model and its data, which TWO factors should you prioritize when defining security requirements for each hosting option?
- Data location and residency restrictions
- Granular access controls and permissions

Cymbal Bank has hired a data analyst team to analyze scanned copies of loan applications. Because this is an external team, Cymbal Bank does not want to share the name, gender, phone number, or credit card numbers listed in the scanned copies. You have been tasked with hiding this PII information while minimizing latency. What should you do?
- Use the Cloud Data Loss Prevention (DLP) API to make redact image requests. Provide your project ID, built-in infoTypes, and the scanned copies when you make the requests.

Cymbal Bank calculates employee incentives on a monthly basis for the sales department and on a quarterly basis for the marketing department. The incentives are released with the next month’s salary. Employee’s performance documents are stored as spreadsheets, which are retained for at least one year for audit. You want to configure the most cost-effective storage for this scenario. What should you do?
- Upload the spreadsheets to Cloud Storage. Select the Nearline storage class for the sales department and Coldline storage for the marketing department. Use object lifecycle management rules to set the storage class to Archival after 365 days. Process the data on BigQuery using jobs that run monthly for Sales and quarterly for Marketing.

Cymbal Bank stores customer information in a BigQuery table called ‘Information,’ which belongs to the dataset ‘Customers.’ Various departments of Cymbal Bank, including loan, credit card, and trading, access the information table. Although the data source remains the same, each department needs to read and analyze separate customers and customer-attributes. You want a cost-effective way to configure departmental access to BigQuery to provide optimal performance. What should you do?
- Create separate datasets for each department. Create views for each dataset separately. Authorize these views to access the source dataset. Share the datasets with departments. Provide the bigquery.dataViewer role to each department’s required users.

Cymbal Bank has a Cloud SQL instance that must be shared with an external agency. The agency’s developers will be assigned roles and permissions through a Google Group in Identity and Access Management (IAM). The external agency is on an annual contract and will require a connection string, username, and password to connect to the database. How would you configure the group’s access?
- Use Secret Manager. Use the duration attribute to set the expiry period to one year. Add the secretmanager.secretAccessor role for the group that contains external developers.

Cymbal Bank needs to migrate existing loan processing applications to Google Cloud. These applications transform confidential financial information. All the data should be encrypted at all stages, including sharing between sockets and RAM. An integrity test should also be performed every time these instances boot. You need to use Cymbal Bank’s encryption keys to configure the Compute Engine instances. What should you do?
- Create a Confidential VM instance with Customer-Supplied Encryption Keys. In Cloud Logging, collect all logs for sevLaunchAttestationReportEvent.

You are tasked with developing an AI system on Google Cloud for a telecommunications business. This AI system will conduct sentiment analysis on conversations agents have with customers, and provide conversational recommendations to improve customer satisfaction in the future. What AI/ML-specific security controls do you need to plan for when developing this system?
- AI systems are more interconnected than non-AI systems. Prepare for new attack vectors, as attackers can exploit vulnerabilities in one system to attack another.

Which tool will Cymbal Bank use to scan for, detect, and optionally transform sensitive data to prevent exposure?
- Sensitive Data Protection

What feature will allow Cymbal Bank to delete or change the storage class of objects in Cloud Storage buckets?
- Lifecycle management rules

Cymbal Bank runs a Node.js application on a Compute Engine instance. Cymbal Bank needs to share this base image with a ‘development’ Google Group. This base image should support secure boot for the Compute Engine instances deployed from this image. How would you automate the image creation?
- Prepare a shell script. Add the command gcloud compute instances stop with the Node.js instance name. Set up certificates for secure boot. Add gcloud compute images create, and specify the Compute Engine instance’s persistent disk and zone and the certificate files. Add gcloud compute images add-iam-policy-binding and specify the ‘development’ group.

Cymbal Bank’s management is concerned about virtual machines being compromised by bad actors. More specifically, they want to receive immediate alerts if there have been changes to the boot sequence of any of their Compute Engine instances. What should you do?
- Set an organization-level policy that requires all Compute Engine VMs to be configured as Shielded VMs. Use Measured Boot enabled with Virtual Trusted Platform Module (vTPM). Validate integrity events in Cloud Monitoring and place alerts on late boot validation events.

The loan application from Cymbal Bank’s lending department collects credit reports that contain credit payment information from customers. According to bank policy, the PDF reports are stored for six months in Cloud Storage, and access logs for the reports are stored for three years. You need to configure a cost-effective storage solution for the access logs. What should you do?
- Set up a logging export bucket in Cloud Storage to collect data from Cloud Audit Logs. Configure object lifecycle management rules to delete logs after three years.

Cymbal Bank wants to use Cloud Storage and BigQuery to store safe deposit usage data. Cymbal Bank needs a cost-effective approach to auditing only Cloud Storage and BigQuery data access activities. How would you use Cloud Audit Logs to enable this analysis?
- Enable Data Access Logs for ADMIN_READ, DATA_READ, and DATA_WRITE for Cloud Storage. All Data Access Logs are enabled for BigQuery by default.

Cymbal Bank has Docker applications deployed in Google Kubernetes Engine. The bank has no offline containers. This GKE cluster is exposed to the public internet and has recently recovered from an attack. Cymbal Bank suspects that someone in the organization changed the firewall rules and has tasked you to analyze and find all details related to the firewall for the cluster. You want the most cost-effective solution for this task. What should you do?
- View the GKE logs in Cloud Logging. Use the log scoping tool to filter the Firewall Rules log. Create a dataset in BigQuery to accept the logs. Export the logs to BigQuery using the command gcloud logging sinks create. Query this dataset.

Cymbal Bank uses Docker containers to interact with APIs for its personal banking application. These APIs are under PCI-DSS compliance. The Kubernetes environment running the containers will not have internet access to download required packages. How would you automate the pipeline that is building these containers?
- Create a Dockerfile with a container definition and a Cloud Build configuration file. Use the Cloud Build configuration file to build and deploy the image from Dockerfile to a Google Container registry. In the configuration file, include the Google Container Registry path and the Google Kubernetes Engine cluster. Upload the configuration file to a Git repository. Create a trigger in Cloud Build to automate the deployment using the Git repository.

Cymbal Bank uses Compute Engine instances for its APIs, and recently discovered bitcoin mining activities on some instances. The bank wants to detect all future mining attempts and notify the security team. The security team can view the Security Command Center and Cloud Audit Logs. How should you configure the detection and notification?
- Enable Anomaly Detection in the Security Command Center. Create and configure a Pub/Sub topic and an email service. Create a Cloud Run function to send email notifications for suspect activities. Export findings to a Pub/Sub topic, and use them to invoke the Cloud Run function.

Cymbal Bank has suffered a remote botnet attack on Compute Engine instances in an isolated project. The affected project now requires investigation by an external agency. An external agency requests that you provide all admin and system events to analyze in their local forensics tool. You want to use the most cost-effective solution to enable the external analysis. What should you do?
- Use Cloud Audit Logs. Filter Admin Activity audit logs for only the affected project. Use a Pub/Sub topic to stream the logs from Cloud Audit Logs to the external agency’s forensics tool.

Cymbal Bank has received Docker source files from its third-party developers in an Artifact Registry repository. These Docker files will be part of a CI/CD pipeline to update Cymbal Bank’s personal loan offering. The bank wants to prevent the possibility of remote users arbitrarily using the Docker files to run any code. You have been tasked with using Container Analysis’ On-Demand scanning to scan the images for a one-time update. What should you do?
- Prepare a cloudbuild.yaml file. In this file, add four steps in order—build, scan, severity check, and push—specifying the location of Artifact Registry repository. Specify severity level as CRITICAL. Start the build with the command gcloud builds submit.

Cymbal Bank experienced a recent security issue. A rogue employee with admin permissions for Compute Engine assigned existing Compute Engine users some arbitrary permissions. You are tasked with finding all these arbitrary permissions. What should you do to find these permissions most efficiently?
- Use Event Threat Detection and trigger the IAM Anomalous grants detector. Publish results to the Security Command Center. In the Security Command Center, select Event Threat Detection as the source, filter by category: iam, and sort to find the attack time window. Click on Persistence: IAM Anomalous Grant to display Finding Details. View the Source property of the Finding Details section.

How will Cymbal Bank be able to determine who performed a particular administrative action and when?
- Audit logs

Which feature of Google Cloud will Cymbal Bank use to prevent unauthorized container images from being deployed into production environments?
- Binary Authorization

Cymbal Bank plans to launch a new public website where customers can pay their equated monthly installments (EMI) using credit cards. You need to build a secure payment processing solution using Google Cloud which should follow the PCI-DSS isolation requirements. How would you architect a secure payment processing environment with Google Cloud services to follow PCI-DSS? (Select the two correct choices)
- Create a new Google Cloud project with restricted access (separate from production environment) for the payment processing solution. Configure firewall rules, a VPN tunnel, and an Application Load Balancer for a new Compute Engine instance.
- Deploy a Linux base image from preconfigured operating system images. Install only the libraries you need. Deploy using Terraform.

You are a cloud engineer at Cymbal Bank. You need to share the auditing and compliance standards with your CTO that cover controls over financial reporting and both public and private controls over security, availability, and confidentiality. Which compliance standard covers this?
- SOX

You are designing a web application for Cymbal Bank so that customers who have credit card issues can contact dedicated support agents. Customers may enter their complete credit card number when chatting with or emailing support agents. You want to ensure compliance with PCI-DSS and prevent support agents from viewing this information in the most cost-effective way. What should you do?
- Implement Cloud Data Loss Prevention using its REST API.

Cymbal Bank’s lending department stores sensitive information, such as your customers’ credit history, address and phone number, in parquet files. You need to upload this personally identifiable information (PII) to Cloud Storage so that it’s secure and compliant with ISO 27018. How should you protect this sensitive information using Cymbal Bank’s encryption keys and using the least amount of computational resources?
- Generate an AES-256 key as a 32-byte bytestring. Decode it as a base-64 string. Upload the blob to the bucket using this key.

Cymbal Bank’s Insurance Analyst needs to collect and store anonymous protected health information of patients from various hospitals. The information is currently stored in Cloud Storage, where each hospital has a folder that contains its own bucket. You have been tasked with collecting and storing the healthcare data from these buckets into Cymbal Bank’s Cloud Storage bucket while maintaining HIPAA compliance. What should you do?
- Use the Cloud Healthcare API to read the data from the hospital buckets and use de-identification to redact the sensitive information. Use Dataflow to ingest the Cloud Healthcare API feed and write data in a new Project that contains the Cloud Storage bucket. Give the Insurance Analyst the ‘Editor’ role on this Project.

Cymbal Bank has a compliance requirement to have control over key lifecycle and rotation periods. Which Google Cloud feature can they leverage to satisfy that requirement?
- CMEK with Cloud KMS

Cymbal Bank has compliance requirements to ensure certain data is stored, processed, and never transferred or used outside of Europe. Which Google Cloud feature can help them achieve this?
- VPC service controls

Which of the following is an anti-pattern when designing a cloud application?
- Embed configuration settings in your source code

For transient network issues, what error-handling approach should you implement?
- Retry with exponential backoff

Which of the following statements about Google Cloud Client Libraries are true? Select two.
- Cloud Client Libraries handle retry logic and authentication.
- Cloud Client Libraries support a language's natural conventions and styles.

Which of the following statements about Cloud Code are true? Select two.
- Cloud Code works with both Cloud Run and Kubernetes applications.
- Cloud Code integrates with Secret Manager to securely store sensitive data.

Which command-line tools does the Google Cloud SDK include? Select two.
- gcloud
- bq

You're building a banking application that is expected to have a very large number of users around the world. When users make a deposit, they want to see the result of this deposit reflected immediately when they view their balance. What data storage option is ideal for storing account balance information for users?
- Spanner is ideal because it supports strongly consistent reads in addition to horizontal scalability, low latency, and high throughput.

A restaurant in your neighborhood wants to put up a website that displays static information including a menu, restaurant hours, and location on a map. What is the best solution for serving the website’s content on Google Cloud?
- Serve the website's content from a Cloud Storage bucket.

You have a very large database that you're using for complex queries in a suite of business intelligence applications. You want to move the data to a fully-managed solution. Which option is ideal for such use cases?
- BigQuery

How should you authenticate to Google Cloud APIs from your production application that is deployed to Cloud Run?
- Attach a service account to your application.

Your photo-sharing application requires user login. You don't want to build a custom user authentication system that stores usernames and passwords. What is the best way to authenticate your users?
- You can leverage federated identity management by using Firebase Authentication.

Your enterprise has an online expense reporting application. Employees must be able to access the application without having to log into the corporate VPN. How can you enable this type of access?
- You can use Identity-Aware Proxy to provide application-level access.

How can you invoke pre-trained machine learning APIs (such as the Vision API or Natural Language API) from your application?
- Use the REST API.

You're developing an application that labels entities in video before storing the files. Which API should you use?
- Video Intelligence API

Which of the following statements about continuous integration and delivery are accurate? Select two.
- Continuous integration is a developer workflow in which developers pull from the main branch and commit their changes into a feature branch in a source code repository.
- Continuous delivery is a workflow that is triggered when changes are pushed to the main branch in the repository.

How can Cloud Build and Artifact Registry help you build a continuous integration and delivery pipeline? Select two.
- With Cloud Build, the artifacts produced by each build step are persisted in the /workspace folder and can be used by the following build step.
- By using Artifact Registry and Cloud Build, you can create build pipelines that are automatically triggered when you commit code to a repository.

Your code needs to create a thumbnail of an image in response to a Pub/Sub event. Which of the following execution environments should you consider?
- Cloud Run functions

You have an application running on virtual machines in another cloud provider. You want to move this application into Google Cloud with as few changes as possible. Which execution environment should you consider?
- Compute Engine

Your application is containerized, requires automatic scaling, and accepts requests over gRPC. You do not want to manage infrastructure. Which would be the ideal execution environment for your application?
- Google Kubernetes Engine

Users are encountering errors in your application. You want to view the stack trace to determine where the error occurred. Which service would help you view the stack trace?
- Error Reporting

You want to stream logs into Cloud Logging from third-party applications running on Compute Engine instances. What service should you consider?
- Ops Agent

You want to set up monitoring for your mission-critical application. What signals should you monitor in your dashboards?
- Saturation, Latency, Traffic, Errors

