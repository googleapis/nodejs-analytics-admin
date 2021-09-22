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

function main(androidAppDataStream, updateMask) {
  // [START admin_update_android_app_data_stream_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The android app stream to update.
   *  The `name` field is used to identify the android app stream to be updated.
   */
  // const androidAppDataStream = ''
  /**
   *  Required. The list of fields to be updated. Field names must be in snake case
   *  (e.g., "field_to_update"). Omitted fields will not be updated. To replace
   *  the entire entity, use one path with the string "*" to match all fields.
   */
  // const updateMask = ''

  // Imports the Admin library
  const {AnalyticsAdminServiceClient} =
    require('@google-analytics/admin').v1alpha;

  // Instantiates a client
  const adminClient = new AnalyticsAdminServiceClient();

  async function updateAndroidAppDataStream() {
    // Construct request
    const request = {
      androidAppDataStream,
      updateMask,
    };

    // Run request
    const response = await adminClient.updateAndroidAppDataStream(request);
    console.log(response);
  }

  updateAndroidAppDataStream();
  // [END admin_update_android_app_data_stream_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
