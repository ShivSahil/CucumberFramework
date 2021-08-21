$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactUs.feature");
formatter.feature({
  "line": 2,
  "name": "Submit data to webapp using contact us form",
  "description": "In order to send data to contact us\r\nAs a user",
  "id": "submit-data-to-webapp-using-contact-us-form",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@shivsahil"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 9,
      "value": "#instead of scenario, i have used Scenario Outline"
    }
  ],
  "line": 10,
  "name": "Submit valid data via contact form",
  "description": "",
  "id": "submit-data-to-webapp-using-contact-us-form;submit-valid-data-via-contact-form",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I enter a valid \"\u003cfirstName\u003e\" firstname",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter a valid lastname as \"Guleri\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter a valid email address",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter comment",
  "rows": [
    {
      "cells": [
        "a.1",
        "a.2"
      ],
      "line": 15
    },
    {
      "cells": [
        "b.1",
        "b.2"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "The information should successfully be submitted via contact us form",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "submit-data-to-webapp-using-contact-us-form;submit-valid-data-via-contact-form;",
  "rows": [
    {
      "cells": [
        "firstName"
      ],
      "line": 20,
      "id": "submit-data-to-webapp-using-contact-us-form;submit-valid-data-via-contact-form;;1"
    },
    {
      "cells": [
        "shiv1"
      ],
      "line": 21,
      "id": "submit-data-to-webapp-using-contact-us-form;submit-valid-data-via-contact-form;;2"
    },
    {
      "cells": [
        "shiv2"
      ],
      "line": 22,
      "id": "submit-data-to-webapp-using-contact-us-form;submit-valid-data-via-contact-form;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4252185600,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I access webdriverUniversity contact us",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactSteps.i_access_webdriverUniversity_contact_us()"
});
formatter.result({
  "duration": 1027587800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Submit valid data via contact form",
  "description": "",
  "id": "submit-data-to-webapp-using-contact-us-form;submit-valid-data-via-contact-form;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@shivsahil"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter a valid \"shiv1\" firstname",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter a valid lastname as \"Guleri\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter a valid email address",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter comment",
  "rows": [
    {
      "cells": [
        "a.1",
        "a.2"
      ],
      "line": 15
    },
    {
      "cells": [
        "b.1",
        "b.2"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "The information should successfully be submitted via contact us form",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "shiv1",
      "offset": 17
    }
  ],
  "location": "ContactSteps.i_enter_a_valid_firstname(String)"
});
formatter.result({
  "duration": 2079132400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guleri",
      "offset": 29
    }
  ],
  "location": "ContactSteps.i_enter_a_valid_lastname_as(String)"
});
formatter.result({
  "duration": 63475200,
  "status": "passed"
});
formatter.match({
  "location": "ContactSteps.i_enter_a_valid_email_address()"
});
formatter.result({
  "duration": 49750100,
  "status": "passed"
});
formatter.match({
  "location": "ContactSteps.i_enter_comment(DataTable)"
});
formatter.result({
  "duration": 3095243500,
  "status": "passed"
});
formatter.match({
  "location": "ContactSteps.i_click_on_submit_button()"
});
formatter.result({
  "duration": 2410754400,
  "status": "passed"
});
formatter.match({
  "location": "ContactSteps.the_information_should_successfully_be_submitted_via_contact_us_form()"
});
formatter.result({
  "duration": 46523400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...ou for your Message![123456789]\u003e but was:\u003c...ou for your Message![]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat CucumberFramework.PageObject.ContactUs_Page.confirmContactUsFormSubmissionWasSuccessful(ContactUs_Page.java:58)\r\n\tat CucumberFramework.steps.ContactSteps.the_information_should_successfully_be_submitted_via_contact_us_form(ContactSteps.java:69)\r\n\tat ✽.Then The information should successfully be submitted via contact us form(ContactUs.feature:18)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1230820300,
  "status": "passed"
});
formatter.before({
  "duration": 3740698900,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I access webdriverUniversity contact us",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactSteps.i_access_webdriverUniversity_contact_us()"
});
formatter.result({
  "duration": 952048600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Submit valid data via contact form",
  "description": "",
  "id": "submit-data-to-webapp-using-contact-us-form;submit-valid-data-via-contact-form;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@shivsahil"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I enter a valid \"shiv2\" firstname",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter a valid lastname as \"Guleri\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter a valid email address",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter comment",
  "rows": [
    {
      "cells": [
        "a.1",
        "a.2"
      ],
      "line": 15
    },
    {
      "cells": [
        "b.1",
        "b.2"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on submit button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "The information should successfully be submitted via contact us form",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "shiv2",
      "offset": 17
    }
  ],
  "location": "ContactSteps.i_enter_a_valid_firstname(String)"
});
formatter.result({
  "duration": 2080526900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guleri",
      "offset": 29
    }
  ],
  "location": "ContactSteps.i_enter_a_valid_lastname_as(String)"
});
formatter.result({
  "duration": 79418800,
  "status": "passed"
});
formatter.match({
  "location": "ContactSteps.i_enter_a_valid_email_address()"
});
formatter.result({
  "duration": 45183700,
  "status": "passed"
});
formatter.match({
  "location": "ContactSteps.i_enter_comment(DataTable)"
});
formatter.result({
  "duration": 3096269900,
  "status": "passed"
});
formatter.match({
  "location": "ContactSteps.i_click_on_submit_button()"
});
formatter.result({
  "duration": 2060014000,
  "status": "passed"
});
formatter.match({
  "location": "ContactSteps.the_information_should_successfully_be_submitted_via_contact_us_form()"
});
formatter.result({
  "duration": 43941200,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...ou for your Message![123456789]\u003e but was:\u003c...ou for your Message![]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat CucumberFramework.PageObject.ContactUs_Page.confirmContactUsFormSubmissionWasSuccessful(ContactUs_Page.java:58)\r\n\tat CucumberFramework.steps.ContactSteps.the_information_should_successfully_be_submitted_via_contact_us_form(ContactSteps.java:69)\r\n\tat ✽.Then The information should successfully be submitted via contact us form(ContactUs.feature:18)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 926193200,
  "status": "passed"
});
});