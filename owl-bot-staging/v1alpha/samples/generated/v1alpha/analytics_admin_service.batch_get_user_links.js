// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent, names) {
  // [START admin_batch_get_user_links_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The account or property that all user links in the request are
   *  for. The parent of all provided values for the 'names' field must match
   *  this field.
   *  Example format: accounts/1234
   */
  // const parent = 'abc123'
  /**
   *  Required. The names of the user links to retrieve.
   *  A maximum of 1000 user links can be retrieved in a batch.
   *  Format: accounts/{accountId}/userLinks/{userLinkId}
   */
  // const names = 'abc123'

  // Imports the Admin library
  const {AnalyticsAdminServiceClient} = require('@google-analytics/admin').v1alpha;

  // Instantiates a client
  const adminClient = new AnalyticsAdminServiceClient();

  async function batchGetUserLinks() {
    // Construct request
    const request = {
      parent,
      names,
    };

    // Run request
    const response = await adminClient.batchGetUserLinks(request);
    console.log(response);
  }

  batchGetUserLinks();
  // [END admin_batch_get_user_links_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
