node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
   
    
    stage('Deploy'){
      
        sh 'docker build -t react-app --no-cache .'
        sh 'docker tag react-app vipul1801/react-jenkins-app'
        sh 'docker push vipul1801/react-jenkins-app'
        sh 'docker rmi -f react-app vipul1801/react-jenkins-app'
      
    }
    stage('Deploy') {
        sh 'docker build -t react-app --no-cache .'
        // sh 'docker tag react-app vipul1801/react-jenkins-app'
        sh "\$(aws ecr get-login)"

        sh "docker tag react-app 938243399648.dkr.ecr.us-east-1.amazonaws.com/react-jenkins-app"
        sh "docker push 938243399648.dkr.ecr.us-east-1.amazonaws.com/react-jenkins-app"
    }
                        

        }
  }
  catch (err) {
    throw err
  }
}