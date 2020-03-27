$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/feature/saucedemo.feature");
formatter.feature({
  "name": "SauceDemoPage",
  "description": "\tIn order to order a product in Saucedemo page\n    As a e-commerce vendor\n    I want to get access to the portal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with ValidCredentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter userName as \u0027\u003cuserName\u003e\u0027 and I enter password as  \u0027\u003cpassword\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "name": "I should access to the portal",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have a browser with sauceDemoPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_have_a_browser_with_sauceDemoPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with ValidCredentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter userName as \u0027standard_user\u0027 and I enter password as  \u0027secret_sauce\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_enter_userName_as_and_I_enter_password_as11(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should access to the portal",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_should_access_to_the_portal()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have a browser with sauceDemoPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_have_a_browser_with_sauceDemoPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with ValidCredentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter userName as \u0027problem_user\u0027 and I enter password as  \u0027secret_sauce\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_enter_userName_as_and_I_enter_password_as11(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should access to the portal",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_should_access_to_the_portal()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have a browser with sauceDemoPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_have_a_browser_with_sauceDemoPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with ValidCredentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter userName as \u0027performance_glitch_user\u0027 and I enter password as  \u0027secret_sauce\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_enter_userName_as_and_I_enter_password_as11(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should access to the portal",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_should_access_to_the_portal()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have a browser with sauceDemoPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_have_a_browser_with_sauceDemoPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding products to cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on add to cart button by entering login details from Excel \"src/test/resources/Excel/sauceddemoexcel.xlsx\" with SheetName \"Login Valid Credentials\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_click_on_add_to_cart_button_by_entering_login_details_from_Excel_with_SheetName(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "products should be added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.products_should_be_added_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have a browser with sauceDemoPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_have_a_browser_with_sauceDemoPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Displaying ordered products",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on cart symbol by entering userName as \u0027standard_user\u0027 and password as  \u0027secret_sauce\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_click_on_cart_symbol_by_entering_userName_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ordered products should be displayed with product details",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.ordered_products_should_be_displayed_with_product_details()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have a browser with sauceDemoPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_have_a_browser_with_sauceDemoPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "clicking on continue shopping",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on continue shopping  button by entering userName as \u0027standard_user\u0027 and password as  \u0027secret_sauce\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_click_on_continue_shopping_button_by_entering_userName_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "products page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.products_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have a browser with sauceDemoPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_have_a_browser_with_sauceDemoPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "clicking on CheckOut",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on CheckOut button by entering userName as \u0027standard_user\u0027 and password as  \u0027secret_sauce\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_click_on_CheckOut_button_by_entering_userName_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "information  page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.information_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have a browser with sauceDemoPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_have_a_browser_with_sauceDemoPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Entering your Information",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter userName as \u0027standard_user\u0027 and password as  \u0027secret_sauce\u0027  and firstName as \u0027vasantha\u0027 and lastname as \u0027vanukuri\u0027 and zipCode as \u0027522612\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_enter_userName_as_and_password_as_and_firstName_as_and_lastname_as_and_zipCode_as(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "overView  page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.overview_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have a browser with sauceDemoPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_have_a_browser_with_sauceDemoPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Placing an order",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter userName as \u0027standard_user\u0027 and password as  \u0027secret_sauce\u0027 and firstName as \u0027vasantha\u0027 and lastname as \u0027vanukuri\u0027 and zipCode as \u0027522612\u0027  and click on continue and then finish",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_enter_userName_as_and_password_as_and_firstName_as_and_lastname_as_and_zipCode_as_and_click_on_continue_and_then_finish(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "finish page should be opened",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.finish_page_should_be_opened()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "these are the steps common for every scenario to be followed",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have a browser with sauceDemoPage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_have_a_browser_with_sauceDemoPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfully placed order message",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter userName as \u0027standard_user\u0027 and password as  \u0027secret_sauce\u0027 and firstName as \u0027vasantha\u0027 and lastname as \u0027vanukuri\u0027 and zipCode as \u0027522612\u0027  and click on continue and then finish",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.i_enter_userName_as_and_password_as_and_firstName_as_and_lastname_as_and_zipCode_as_and_click_on_continue_and_then_finish(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "thank you for order message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinitions.StepDefinitions.thank_you_for_order_message_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});