basic_identity_fields = [
  Field.new({"name" => "case_id",
             "type" => "text_field",
             "editable" => false,
             "disabled" => true,
             "display_name_en" => "Long ID",
             "create_property" => false,
             "mobile_visible" => false,
             "visible" => false
            }),
  Field.new({"name" => "short_id",
             "type" => "text_field",
             "editable" => false,
             "disabled" => true,
             "display_name_en" => "Short ID",
             "create_property" => false,
             "mobile_visible" => false,
             "visible" => false
            }),
  Field.new({"name" => "case_id_display",
             "type" => "text_field",
             "editable" => false,
             "disabled" => true,
             "display_name_en" => "Case ID",
             "create_property" => true
            }),
  Field.new({"name" => "cpims_id",
             "type" => "text_field",
             "display_name_en" => "CPIMS ID",
             "help_text_en" => "Legacy CPIMS (or other system) ID"
            }),
  Field.new({"name" => "marked_for_mobile",
             "type" => "tick_box",
             "tick_box_label_en" => "Yes",
             "display_name_en" => "Marked for mobile?",
             "editable" => false,
             "disabled" => true,
             "create_property" => false
            }),
  Field.new({"name" => "child_status",
             "type" =>"select_box" ,
             "selected_value" => Record::STATUS_OPEN,
             "display_name_en" => "Case Status",
             "option_strings_source" => "lookup lookup-case-status"
            }),
  Field.new({"name" => "case_status_reopened",
             "type" => "tick_box",
             "tick_box_label_en" => "Yes",
             "display_name_en" => "Case Reopened?",
             "editable" => false,
             "disabled" => true
            }),
  Field.new({"name" => "name",
             "type" => "text_field",
             "display_name_en" => "Full Name",
             "required" => false,
             "show_on_minify_form" => true,
             "hidden_text_field" => true,
             "matchable" => true,
             "disabled" => true
            }),
  Field.new({"name" => "name_first",
             "type" => "text_field",
             "display_name_en" => "First Name",
             "show_on_minify_form" => true,
             "required" => true,
             "hide_on_view_page" => true
            }),
  Field.new({"name" => "name_middle",
             "type" => "text_field",
             "display_name_en" => "Middle Name",
             "show_on_minify_form" => true,
             "hide_on_view_page" => true
            }),
  Field.new({"name" => "name_last",
             "type" => "text_field",
             "display_name_en" => "Surname",
             "show_on_minify_form" => true,
             "required" => true,
             "hide_on_view_page" => true
            }),
  Field.new({"name" => "name_nickname",
             "type" => "text_field",
             "display_name_en" => "Nickname",
             "show_on_minify_form" => true,
             "matchable" => true
            }),
  Field.new({"name" => "name_other",
             "type" => "text_field",
             "display_name_en" => "Other Name",
             "matchable" => true
            }),
  Field.new({"name" => "name_given_post_separation",
             "type" => "radio_button",
             "display_name_en" => "Name(s) given to child after separation?",
             "option_strings_source" => "lookup lookup-yes-no"
            }),
  Field.new({"name" => "registration_date",
             "type" => "date_field",
             "selected_value" => "today",
             "required" => false,
             "display_name_en" => "Date of Registration",
             "date_validation" => "not_future_date"
            }),
  Field.new({"name" => "identification_date",
             "type" => "date_field",
             "selected_value" => "today",
             "display_name_en" => "Date Case Identified / Reported",
             "date_validation" => "not_future_date"
            }),
  Field.new({"name" => "assessment_due_date",
             "type" => "date_field",
             "required" => false,
             "editable" => false,
             "display_name_en" => "Date Assessment Due"
            }),
  Field.new({"name" => "sex",
             "type" => "select_box",
             "show_on_minify_form" => true,
             "required" => true,
             "display_name_en" => "Sex",
             "option_strings_source" => "lookup lookup-gender",
             "matchable" => true
            }),
  Field.new({"name" => "age",
             "type" => "numeric_field",
             "display_name_en" => "Age",
             "show_on_minify_form" => true,
             "required" => true,
             "matchable" => true
            }),
  Field.new({"name" => "date_of_birth",
            "type" => "date_field",
            "display_name_en" => "Date of Birth",
            "show_on_minify_form" => true,
            "matchable" => true
            }),
  Field.new({"name" => "estimated",
             "type" => "tick_box",
             "tick_box_label_en" => "Yes",
             "show_on_minify_form" => true,
             "display_name_en" => "Is the age estimated?",
            }),
  Field.new({"name" => "physical_characteristics",
             "type" => "textarea",
             "display_name_en" => "Distinguishing Physical Characteristics"
            }),
  Field.new({"name" => "ration_card_no",
             "type" => "text_field",
             "display_name_en" => "Ration Card Number"
            }),
  Field.new({"name" => "icrc_ref_no",
             "type" => "text_field",
             "display_name_en" => "ICRC Ref No."
            }),
  Field.new({"name" => "rc_id_no",
             "type" => "text_field",
             "display_name_en" => "RC ID No."
            }),
  Field.new({"name" => "biometrics_id",
             "type" => "text_field",
             "display_name_en" => "Biometrics",
             "show_on_minify_form" => true,
             "help_text_en" => "For the Biometric ID number, if used."
            }),
  Field.new({"name" => "unhcr_id_no",
             "type" => "text_field",
             "display_name_en" => "proGres Case ID",
             "help_text_en" => "UNHCR Asylum Seeker Certificate Number"
            }),
  Field.new({"name" => "unhcr_individual_no",
             "type" => "text_field",
             "display_name_en" => "proGres Individual ID",
             "help_text_en" => "This ID is shown on the tracking sheet."
            }),
  Field.new({"name" => "un_no",
            "type" => "text_field",
            "display_name_en" => "UN Number"
            }),
  Field.new({"name" => "national_id_no",
            "type" => "text_field",
            "display_name_en" => "National ID Number"
            }),
  Field.new({"name" => "other_id_type",
            "type" => "text_field",
            "display_name_en" => "Type of Other ID Document"
            }),
  Field.new({"name" => "other_id_no",
            "type" => "text_field",
            "display_name_en" => "Number of Other ID Document"
            }),
  Field.new({"name" => "other_agency_id",
            "type" => "text_field",
            "display_name_en" => "Other Agency ID"
            }),
  Field.new({"name" => "other_agency_name",
            "type" => "text_field",
            "display_name_en" => "Other Agency Name"
            }),
  Field.new({"name" => "documents_carried",
             "type" => "textarea",
             "display_name_en" => "List of documents carried by the child"
            }),
  Field.new({"name" => "nationality",
             "type" =>"select_box",
             "multi_select" => true,
             "display_name_en" => "Nationality",
             "option_strings_source" => "lookup lookup-country",
             "matchable" => true
            }),
  Field.new({"name" => "maritial_status",
             "type" =>"select_box" ,
             "display_name_en" => "Current Civil/Marital Status",
             "show_on_minify_form" => true,
             "option_strings_source" => "lookup lookup-marital-status"
            }),
  Field.new({"name" => "occupation",
             "type" => "text_field",
             "display_name_en" => "Occupation"
            }),
  Field.new({"name" => "address_current",
             "type" => "textarea",
             "required" => false,
             "display_name_en" => "Current Address"
            }),
  Field.new({"name" => "landmark_current",
             "type" => "text_field",
             "display_name_en" => "Landmark"
            }),
  Field.new({"name" => "location_current",
             "type" =>"select_box",
             "display_name_en" => "Current Location",
             "searchable_select" => true,
             "option_strings_source" => "Location"
            }),
  Field.new({"name" => "address_is_permanent",
             "type" => "tick_box",
             "display_name_en" => "Is this address permanent?"
            }),
  Field.new({"name" => "telephone_current",
             "type" => "text_field",
             "display_name_en" => "Current Telephone"
            }),
  Field.new({"name" => "family_number",
             "type" => "text_field",
             "display_name_en" => "Family ID",
             "visible" => false
            })
]

FormSection.create_or_update_form_section({
  :unique_id=>"basic_identity",
  :parent_form=>"case",
  "visible" => true,
  :order_form_group => 30,
  :order => 10,
  :order_subform => 0,
  :form_group_id => "identification_registration",
  "editable" => true,
  :fields => basic_identity_fields,
  :is_first_tab => true,
  "name_en" => "Basic Identity",
  "description_en" => "Basic identity information about a separated or unaccompanied child.",
  :mobile_form => true,
  :header_message_link => "workflow_status"
})
