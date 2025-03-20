## Frontend

Project MyBank uses React for the frontend.

## Backend

Project MyBank uses Symfony for the backend.

## How to setup Jenkins

Jenkins is used for CI (Continious Integration) to automate the server.
Using docker, first install jenkins :
```
docker run -p 8080:8080 -p 50000:50000 --restart=on-failure jenkins/jenkins:lts-jdk17
```

Then log in to Jenkins and set up a pipeline job for the project.
Configure its pipeline script to look for the git repo.
```
pipeline {
    agent any

    stages {
        stage('CI') {
            steps {
                git 'https://github.com/RJPinoy/MyBank_project.git'
            }
        }
    }
}
```

## Create jenkins agent for symfony

Documentation of the base image : https://hub.docker.com/r/jenkins/inbound-agent

docker build . -t jenkins_agent_symfony

docker run --name jenkins_agent_symfony_container --init jenkins_agent_symfony -url http://<IPAdresse_of_jenkins_master>:8080 <password> <node_name>

To get the <IPAdresse_of_jenkins_master>, make this command :
docker inspect jenkins_master_container

<password> and <node_name> are given by the jenkins_master when you create a node

### Setup Jenkins Agent

First get the IP Address of the Jenkins container. Run this command :

```
docker inspect <name_of_the_jenkins_container>
```

From that IP, run this command so the agent run automated tasks :

```
docker run --init jenkins/inbound-agent -url http://<jenkins_container_ipaddress>:8080 -workDir=/home/jenkins/agent <agent_secret_key> <agent_name>
```

Modify the pipeline script :

```
pipeline {
    agent {
        node {
            label '<agent_name>'
        }
    }

    stages {
        stage('CI') {
            steps {
                git 'https://github.com/RJPinoy/MyBank_project.git'
            }
        }
    }
}
```

## How to Setup NGROK
First install chocolatey for Windows if not installed yet :
Run this command :
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Once installed, run NGROK :
You should first create an account to get your key.
Then run this command :
```
choco install ngrok
```

Run the following command to add your authtoken to the default ngrok.yml configuration file.
```
ngrok config add-authtoken 2uWpCX9FZVOFiEx97tSOjTsSSUZ_32sT2t4uxCSp6ro3QLt9t
```

Put your app online at an ephemeral domain forwarding to your upstream service. For example, if it is listening on port http://localhost:8080, run:
```
ngrok http http://localhost:8080
```

## How to Setup Github so it can communicate with Jenkins

Once Jenkins and NGROK are setup, go to the project repo > Settings > Webhooks.
Create a new Webhook and put the link you get from NGROK into your Payload URL as follow :
```
<website_url_from_ngrok>/github-webhook/
```

# Ressources
## Adresse github :
https://github.com/RJPinoy/MyBank_project.git

## Recherches internet :
### Redux :
https://react-redux.js.org/introduction/getting-started

### Symfony :
https://symfony.com/doc/current/setup.html
https://symfony.com/doc/current/security.html
https://symfony.com/doc/current/doctrine.html

### Jenkins :
https://github.com/jenkinsci/docker/blob/master/README.md

### Chocolatey :
https://chocolatey.org/install

### NGROK :
https://dashboard.ngrok.com/get-started/setup/windows