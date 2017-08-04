node {
    stage('checkout') {
        git url: 'https://github.com/ICFI/raptor-devops.git', branch: 'jenkins'
    }
    stage('build') {
        sh './mvnw verify'
    }
}