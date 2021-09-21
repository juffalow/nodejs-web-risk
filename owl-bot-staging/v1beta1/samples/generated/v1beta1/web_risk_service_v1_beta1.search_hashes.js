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

function main(threatTypes) {
  // [START webrisk_search_hashes_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  A hash prefix, consisting of the most significant 4-32 bytes of a SHA256
   *  hash. For JSON requests, this field is base64-encoded.
   */
  // const hashPrefix = 'Buffer.from('string')'
  /**
   *  Required. The ThreatLists to search in.
   */
  // const threatTypes = 1234

  // Imports the Webrisk library
  const {WebRiskServiceV1Beta1Client} = require('@google-cloud/web-risk').v1beta1;

  // Instantiates a client
  const webriskClient = new WebRiskServiceV1Beta1Client();

  async function searchHashes() {
    // Construct request
    const request = {
      threatTypes,
    };

    // Run request
    const response = await webriskClient.searchHashes(request);
    console.log(response);
  }

  searchHashes();
  // [END webrisk_search_hashes_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
