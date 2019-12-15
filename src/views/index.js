import React from "react";

const postData = {
  program_type: {
    program_type: "1"
  },
  basic_program_information: {
    program_name: "",
    program_country: "",
    program_site: "",
    organizing_entity: "",
    city: "",
    program_describe: "",
    fields_interest: [],
    program_start_day: "",
    deadline: "",
    program_end_day: "",
    type_participants: [],
    minimum_students: "",
    registration_students: "",
    minimum_teaching_staff: "",
    registration_teaching_staff: "",
    minimum_observers: "",
    registration_observers: ""
  },
  schedule: {
    schedule_list: [
      {
        morning_1: "",
        morning_2: "",
        morning_3: "",
        morning_4: "",
        afternoon_1: "",
        afternoon_2: "",
        afternoon_3: "",
        afternoon_4: "",
        evening_1: "",
        evening_2: "",
        evening_3: "",
        evening_4: ""
      }
    ]
  },
  program_highlight: {
    program_highlight: ["", "", ""],
    local_attractions_type: "",
    program_organiser: "",
    editions_photo_list: "",
    organising_team_photo_list: ""
  },
  eligibility: {
    stage_of_education: [],
    age_restrictions: "",
    restrictions_mini_age: "",
    restrictions_max_age: "",
    need_other_registration: "",
    other_registration_info: []
  },
  accommodation: {
    need_accommodation: "",
    english_language_details: "",
    local_language_details: "",
    english_address: "",
    local_address: "",
    accommodation_type: "",
    airport_transfer: [],
    room_type: "",
    photos: []
  },
  asd: {
    cost_type: "",
    need_additional_fee: "",
    additional_fee: "",
    early_bird_period: ["DD/MM/YYYY", "DD/MM/YY"],
    amount_of_discount: "",
    after_paying_deposit: "",
    after_full_payment: "",
    package_list: [
      {
        add_type: "",
        add_room_type: "",
        add_tuition_fee: "",
        hotel_fee: ""
      }
    ]
  }
};
