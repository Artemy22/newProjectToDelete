pipeline {
  agent any

tools {nodejs "NodeJS"}

  stages {
    stage('install dependincies') {
      steps {
        sh 'npm ci'
      }
    }
    stage('cypress run') {
      steps {
        sh 'npm run allure:clear'
        sh 'npm run cy:run:allure'
      }
    }
    stage('allure report') {
      steps {
        sh 'npm run allure:generate'
        allure(
          results: [[path: 'allure-results']]
        )
      }
    }
  }
}