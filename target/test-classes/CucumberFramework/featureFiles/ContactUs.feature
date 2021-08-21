@shivsahil
Feature: Submit data to webapp using contact us form
	In order to send data to contact us
	As a user

Background:
	Given I access webdriverUniversity contact us 

#instead of scenario, i have used Scenario Outline
Scenario Outline: Submit valid data via contact form
	When I enter a valid "<firstName>" firstname
	And I enter a valid lastname as "Guleri"
	And I enter a valid email address
	And I enter comment
	| a.1 | a.2|
	| b.1 | b.2|
	When I click on submit button
	Then The information should successfully be submitted via contact us form
	Examples:
	| firstName |
	| shiv1     |
	| shiv2     |

	