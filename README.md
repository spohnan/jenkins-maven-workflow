## Jenkins Maven Workflow

*Demonstration of Jenkins pipeline builds and frontend Maven plugin*

* Build base Jenkins image w/plugins installed
    * `docker build -t jmw/jenkins containers/jenkins`
* Run Jenkins
    * `docker run -it --rm -p 8080:8080 -p 50000:50000 -e JAVA_OPTS="-Djenkins.install.runSetupWizard=false" jmw/jenkins`
* Open in web browser
    * `http://localhost:8080`
* Create a Pipeline job
    * New Item -> Enter a job name -> Pipeline
* Configure Job
    * Pipeline Section -> Pipeline script from SCM -> Add Checkout URL -> Save and Build Now

### Links

* https://jenkins.io/solutions/pipeline/
* https://github.com/eirslett/frontend-maven-plugin