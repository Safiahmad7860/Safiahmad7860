window.BENCHMARK_DATA = {
  "lastUpdate": 1680984060477,
  "repoUrl": "https://github.com/MystenLabs/sui",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e08ead06f51f859251a8a835f70b1496bede4567",
          "message": "cleanup protocol config getters using proc macro (#10430)\n\n## Description \r\n\r\nReplaces repetitive getters\r\n\r\n```\r\n    pub fn field(&self) -> inner_field_type {\r\n        self.field.expect(CONSTANT_ERR_MSG)\r\n    }\r\n```\r\nwith proc macro derive\r\n\r\n## Test Plan \r\nExisting tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-08T19:50:22Z",
          "tree_id": "749fe2ba768850ee364053a7bc2f39a037c4a836",
          "url": "https://github.com/MystenLabs/sui/commit/e08ead06f51f859251a8a835f70b1496bede4567"
        },
        "date": 1680984058516,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 181037994,
            "range": "± 12903199",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 428344,
            "range": "± 16974",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}