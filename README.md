## Jenkins Maven Workflow

* Build base Jenkins image w/plugins installed
    * `docker build -t jmw/jenkins containers/jenkins`
* Run Jenkins
    * `docker run -it --rm -p 8080:8080 -p 50000:50000 -e JAVA_OPTS="-Djenkins.install.runSetupWizard=false" jmw/jenkins`