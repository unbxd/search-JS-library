const { exec } = require('child_process');
const packageJson = require('./package.json');

const uploadJs = `aws s3 cp public/dist/js/vanillaSearch.min.js s3://unbxd/search-sdk/v${packageJson.version}/vanillaSearch.min.js --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --cache-control 'public,max-age=2592000' --content-encoding 'gzip'`;
const uploadCss = `aws s3 cp public/dist/css/vanillaSearch.min.css s3://unbxd/search-sdk/v${packageJson.version}/vanillaSearch.min.css --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --cache-control 'public,max-age=2592000' --content-encoding 'gzip'`;

exec(uploadCss, (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err)
    } else {
     // the *entire* stdout and stderr (buffered)
     console.log(`stdout: ${stdout}`);
     console.log(`stderr: ${stderr}`);
    }
});

exec(uploadJs, (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err)
    } else {
     // the *entire* stdout and stderr (buffered)
     console.log(`stdout: ${stdout}`);
     console.log(`stderr: ${stderr}`);
    }
});