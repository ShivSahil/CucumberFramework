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
  "duration": 3682468100,
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
  "duration": 1026000500,
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
  "duration": 2072295400,
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
  "duration": 60463800,
  "status": "passed"
});
formatter.match({
  "location": "ContactSteps.i_enter_a_valid_email_address()"
});
formatter.result({
  "duration": 47082700,
  "status": "passed"
});
formatter.match({
  "location": "ContactSteps.i_enter_comment(DataTable)"
});
formatter.result({
  "duration": 3106699500,
  "status": "passed"
});
formatter.match({
  "location": "ContactSteps.i_click_on_submit_button()"
});
formatter.result({
  "duration": 1992721300,
  "status": "passed"
});
formatter.match({
  "location": "ContactSteps.the_information_should_successfully_be_submitted_via_contact_us_form()"
});
formatter.result({
  "duration": 52818900,
  "status": "passed"
});
formatter.after({
  "duration": 1007639000,
  "status": "passed"
});
formatter.before({
  "duration": 3249863800,
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
  "duration": 906993900,
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
  "duration": 2073475700,
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
  "duration": 66965600,
  "status": "passed"
});
formatter.match({
  "location": "ContactSteps.i_enter_a_valid_email_address()"
});
formatter.result({
  "duration": 41550300,
  "status": "passed"
});
formatter.match({
  "location": "ContactSteps.i_enter_comment(DataTable)"
});
formatter.result({
  "duration": 3100352700,
  "status": "passed"
});
formatter.match({
  "location": "ContactSteps.i_click_on_submit_button()"
});
formatter.result({
  "duration": 1940873800,
  "status": "passed"
});
formatter.match({
  "location": "ContactSteps.the_information_should_successfully_be_submitted_via_contact_us_form()"
});
formatter.result({
  "duration": 36867300,
  "status": "passed"
});
formatter.after({
  "duration": 862343200,
  "status": "passed"
});
});