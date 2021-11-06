export const lookups = () => ({
  data: [
    {
      unique_id: "lookup-1",
      name: { en: "Lookup 1" },
      values: [
        { id: "a", display_text: [{ en: "Lookup 1 a" }] },
        { id: "b", display_text: [{ en: "Lookup 1 b" }] }
      ]
    },
    {
      unique_id: "lookup-2",
      name: { en: "Lookup 2" },
      values: [
        { id: "a", display_text: [{ en: "Lookup 2 a" }] },
        { id: "b", display_text: [{ en: "Lookup 2 b" }] }
      ]
    }
  ],
  metadata: {
    total: 2,
    per: 1,
    page: 1
  }
});
