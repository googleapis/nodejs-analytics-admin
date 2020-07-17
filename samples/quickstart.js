// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

'use strict';

async function main(
  name = 'my-name' // Get an account for a name.
) {
  // [START analytics_admin_quickstart]
  // Imports the Google Cloud client library
  const {AnalyticsAdminServiceClient} = require('@google-cloud/os-config');

  // Creates a client
  const client = new AnalyticsAdminServiceClient();

  // name = 'my-name' // Get an account for a name.
  async function getAccount() {
    const [account] = await client.getAccount({
      name,
    });
    console.info(account);
  }
  getAccount();
  // [END analytics_admin_quickstart]
}

const args = process.argv.slice(2);
main(...process.argv.slice(2)).catch(err => {
  console.error(err.message);
  process.exitCode = 1;
});
process.on('unhandledRejection', (err) => {
  console.error(err.message);
  process.exitCode = 1;
});