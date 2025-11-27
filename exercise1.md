I chose Java to be the language to answer the questions about. 

For building our group would go for Gradle or Maven. Maven provides nice features for simple projects but ours is quite complicated so we decided to go Gradle because it support more flexible build configurations. 

To provide solid testing for our Java project we would use both JUnit and TestNG. JUnit will be used for simple unit tests while TestNG provides testing frameworks to test more complex parts of the code. 

Linting is important for out project so it can be maintained more easily and readable possible by new developers in the future. We will use Checkstyle for code style, formating etc. and PMD for static analysis that catches unused variables, unreachable code etc.

Possible CI/CD tools to choose from are CircleCI, Azure Pipelines, TeamCity, Travis CI, Bamboo. They should all be usable with Java, while Bamboo got called "most developer hostile pipeline language" on Reddit.

We chose to go with cloud-based environment because it's easier to maintain, scales automatically and provides easier setup with our build, test and lint tools. To make a decision between cloud-based and self-hosted six steps need answers which are. Security requirements, repository hosting, build resource needs, budget, team size and development workflow, maintenance capability. For example if Gradle build are massive we might need to use self-hosted and if this happens to be the case we would need larger budget and people to maintain the jenkins self-hosted pipeline. 

