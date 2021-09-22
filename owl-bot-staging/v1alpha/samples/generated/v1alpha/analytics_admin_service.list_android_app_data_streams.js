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

function main(parent) {
  // [START admin_list_android_app_data_streams_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the parent property.
   *  For example, to limit results to app streams under the property with Id
   *  123: "properties/123"
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of resources to return.
   *  If unspecified, at most 50 resources will be returned.
   *  The maximum value is 200; (higher values will be coerced to the maximum)
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous call. Provide this to
   *  retrieve the subsequent page.
   *  When paginating, all other parameters provided to
   *  `ListAndroidAppDataStreams` must match the call that provided the page
   *  token.
   */
  // const pageToken = 'abc123'

  // Imports the Admin library
  const {AnalyticsAdminServiceClient} = require('@google-analytics/admin').v1alpha;

  // Instantiates a client
  const adminClient = new AnalyticsAdminServiceClient();

  async function listAndroidAppDataStreams() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await adminClient.listAndroidAppDataStreamsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  listAndroidAppDataStreams();
  // [END admin_list_android_app_data_streams_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
