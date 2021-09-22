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

function main(name) {
  // [START admin_delete_display_video360_advertiser_link_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the DisplayVideo360AdvertiserLink to delete.
   *  Example format: properties/1234/displayVideo360AdvertiserLinks/5678
   */
  // const name = 'abc123'

  // Imports the Admin library
  const {AnalyticsAdminServiceClient} = require('@google-analytics/admin').v1alpha;

  // Instantiates a client
  const adminClient = new AnalyticsAdminServiceClient();

  async function deleteDisplayVideo360AdvertiserLink() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await adminClient.deleteDisplayVideo360AdvertiserLink(request);
    console.log(response);
  }

  deleteDisplayVideo360AdvertiserLink();
  // [END admin_delete_display_video360_advertiser_link_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
