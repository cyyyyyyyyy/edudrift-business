export const education_stage = t => [
  {
    label: t("Primary_School"),
    value: "primary_school"
  },
  {
    label: t("Middle_School "),
    value: "middle_school"
  },
  {
    label: t("High_School"),
    value: "high_school"
  },
  {
    label: t("Undergraduate"),
    value: "undergraduate"
  },
  {
    label: t("Adult"),
    value: "adult"
  }
];

export const gender = t => [
  {
    label: t("Male"),
    value: "male"
  },
  {
    label: t("Female"),
    value: "female"
  },
  {
    label: t("Others"),
    value: "others"
  }
];

export const userStatusSelects = t => [
  { label: t("Active"), value: "active" },
  { label: t("Disabled"), value: "disabled" },
  { label: t("Pending"), value: "pending" },
  { label: t("Uninitialized"), value: "uninitialized" }
];

export const contact_method = t => [
  { label: t("Phone"), value: "phone" },
  { label: t("Whatsapp"), value: "whatsapp" },
  { label: t("Facebook"), value: "facebook" },
  { label: t("Wechat"), value: "wechat" },
  { label: t("Undisclosed"), value: "undisclosed" }
];

export const Currency = t => [{ label: t("SGD"), value: "SGD" }];

export const infoMenu = t => [
  { label: t("My Events"), value: "my-events" },
  { label: t("Notifications"), value: "notifications" },
  { label: t("My Profile"), value: "my-profile" },
  { label: t("My Curriculum Vitae"), value: "my-curriculum" },
  { label: t("Frequent Travellers"), value: "frequent-travellers" }
];
