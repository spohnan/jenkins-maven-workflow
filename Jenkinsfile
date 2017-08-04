node {
    stage('checkout') {
        git url: 'https://github.com/spohnan/jenkins-maven-workflow'
    }
    stage('build') {
        sh './mvnw verify'
    }
}