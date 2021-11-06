import { ListHeaderRecord } from "~components/user/records";
import { RECORD_PATH } from "~config";

export function listHeaders(recordType: string) {
  const commonHeaders = [
    ListHeaderRecord({
      name: "description",
      field_name: "description",
      id_search: false
    })
  ];

  switch (recordType) {
    case RECORD_PATH.user_groups:
      return [
        ListHeaderRecord({
          name: "user_group.name",
          field_name: "name",
          id_search: false
        }),
        ...commonHeaders
      ];

    case RECORD_PATH.agencies:
      return [
        ListHeaderRecord({
          name: "agency.name",
          field_name: "name",
          id_search: false
        }),
        ...commonHeaders
      ];

    default:
      return [];
  }
}
