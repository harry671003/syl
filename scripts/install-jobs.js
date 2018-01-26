const path = require('path');
const appRootPath = require('app-root-path');
const fse = require('fs-extra');

const jobDefinitions = [
  {
    type: 'continous',
    path: path.join(appRootPath.toString(), 'jobs', 'sensory-input-processor'),
    name: 'sensory-input-processor',
  },
];

const jobInstallBaseLocation = path.join(appRootPath.toString(), 'app_data', 'jobs')

function installJobs() {  
  for(let jobIndex = 0; jobIndex < jobDefinitions.length; jobIndex += 1)
  {
    installJob(jobDefinitions[jobIndex]);
  }
}

function installJob(job) {
  const installLocation = path.join(jobInstallBaseLocation, job.type, job.name);

  if (fse.existsSync(path.join(installLocation)))
  {
    fse.removeSync(installLocation);
  }

  console.log('[+] installing job at: ', installLocation);

  fse.copySync(job.path, installLocation);
}

installJobs();